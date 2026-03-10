"use client";

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { QRCodeSVG } from "qrcode.react";
import { X, MapPin } from "lucide-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { submitToGoogleSheets } from "@/utils/googleSheets";
import { Loader2 } from "lucide-react";

type FormData = {
    name: string;
    email: string;
    phone: string;
    countryData?: {
        name: string;
        dialCode: string;
        format: string;
    };
    isCompany: boolean;
    company: string;
    message: string;
};

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        control,
        watch,
        setValue,
        formState: { errors },
    } = useForm<FormData>({
        defaultValues: {
            isCompany: false
        }
    });
    const [qrOpen, setQrOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const isCompany = watch("isCompany");

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);

        // Extract country code and actual phone number
        const dialCode = data.countryData?.dialCode || "";
        const fullPhone = data.phone;
        const actualPhone = fullPhone.startsWith(dialCode)
            ? fullPhone.slice(dialCode.length)
            : fullPhone;

        const submissionData = {
            ...data,
            country: data.countryData?.name || "India",
            countryCode: `+${dialCode}`,
            phone: actualPhone,
            isCompany: data.isCompany ? "Yes" : "No",
            company: data.isCompany ? data.company : "N/A"
        };
        await submitToGoogleSheets(submissionData);
        setIsSubmitting(false);
        setQrOpen(true);
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 w-full max-w-full lg:max-w-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-sm font-bold text-[#1A2E35]">Your Name <span className="text-red-500">*</span></label>
                        <input
                            {...register("name", {
                                required: "Name is required",
                                pattern: {
                                    value: /^[A-Za-z\s]+$/,
                                    message: "Name can only contain letters and spaces"
                                }
                            })}
                            type="text"
                            id="name"
                            placeholder="Connor Mitchell"
                            suppressHydrationWarning
                            className={`w-full h-14 px-5 rounded-2xl bg-gray-50 border ${errors.name ? 'border-red-500 focus:ring-red-500/20' : 'border-gray-100 focus:border-[#00735C] focus:ring-[#00735C]/20'} focus:ring-2 outline-none transition-all text-[#1A2E35] placeholder:text-gray-400`}
                        />
                        {errors.name && <span className="text-red-500 text-xs font-semibold">{errors.name.message}</span>}
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-sm font-bold text-[#1A2E35]">Email <span className="text-red-500">*</span></label>
                        <input
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Please enter a valid email address"
                                }
                            })}
                            type="email"
                            id="email"
                            placeholder="aspgf@gmail.com"
                            suppressHydrationWarning
                            className={`w-full h-14 px-5 rounded-2xl bg-gray-50 border ${errors.email ? 'border-red-500 focus:ring-red-500/20' : 'border-gray-100 focus:border-[#00735C] focus:ring-[#00735C]/20'} focus:ring-2 outline-none transition-all text-[#1A2E35] placeholder:text-gray-400`}
                        />
                        {errors.email && <span className="text-red-500 text-xs font-semibold">{errors.email.message}</span>}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Phone */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-[#1A2E35]">Phone Number <span className="text-red-500">*</span></label>
                        <div className={`relative rounded-2xl bg-gray-50 border ${errors.phone ? 'border-red-500' : 'border-gray-100 focus-within:border-[#00735C] focus-within:ring-2 focus-within:ring-[#00735C]/20'} transition-all`}>
                            <Controller
                                name="phone"
                                control={control}
                                rules={{
                                    required: "Phone number is required",
                                    validate: (val) => {
                                        const countryData = watch("countryData");
                                        if (!countryData || !countryData.format) return true;
                                        // Count dots in format (represents total digits including dial code)
                                        const totalExpectedDots = (countryData.format.match(/\./g) || []).length;
                                        // PhoneInput value 'val' also includes dial code digits
                                        return val.length === totalExpectedDots || `Invalid length for ${countryData.name}`;
                                    }
                                }}
                                render={({ field: { onChange, value } }) => (
                                    <PhoneInput
                                        country={'in'}
                                        enableSearch={true}
                                        searchPlaceholder="Search country..."
                                        disableSearchIcon={true}
                                        value={value}
                                        onChange={(phone, country: any) => {
                                            onChange(phone);
                                            setValue("countryData", {
                                                name: country.name,
                                                dialCode: country.dialCode,
                                                format: country.format
                                            });
                                        }}
                                        inputStyle={{
                                            width: '100%',
                                            height: '56px',
                                            border: 'none',
                                            background: 'transparent',
                                            paddingLeft: '54px',
                                            fontSize: '15px',
                                            color: '#1A2E35',
                                            fontFamily: 'inherit',
                                            borderRadius: '1rem'
                                        }}
                                        buttonStyle={{
                                            border: 'none',
                                            background: 'transparent',
                                            paddingLeft: '14px',
                                            borderRadius: '1rem 0 0 1rem'
                                        }}
                                        dropdownStyle={{
                                            borderRadius: '16px',
                                            border: '1px solid #e5e7eb',
                                            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                                            color: '#1A2E35', // Explicit text color
                                            textAlign: 'left',
                                            width: '300px'
                                        }}
                                        searchStyle={{
                                            width: '90%',
                                            margin: '10px auto',
                                            padding: '8px 12px',
                                            borderRadius: '8px',
                                            border: '1px solid #e5e7eb',
                                            fontSize: '14px',
                                            color: '#1A2E35'
                                        }}
                                    />
                                )}
                            />
                        </div>
                        {errors.phone && <span className="text-red-500 text-xs font-semibold">{errors.phone.message}</span>}
                    </div>

                    {/* Company Toggle Section */}
                    <div className="flex flex-col gap-3 justify-center">
                        <label className="text-sm font-bold text-[#1A2E35]">Are you a Company / Group?</label>
                        <div className="flex items-center gap-3">
                            <span className={`text-xs font-bold transition-colors ${!isCompany ? 'text-[#00735C]' : 'text-gray-400'}`}>No</span>
                            <button
                                type="button"
                                onClick={() => setValue("isCompany", !isCompany)}
                                className={`relative w-12 h-6 rounded-full transition-all duration-300 focus:outline-none ${isCompany ? 'bg-[#00735C]' : 'bg-gray-200'}`}
                            >
                                <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-all duration-300 shadow-sm ${isCompany ? 'translate-x-6' : 'translate-x-0'}`} />
                            </button>
                            <span className={`text-xs font-bold transition-colors ${isCompany ? 'text-[#00735C]' : 'text-gray-400'}`}>Yes</span>
                        </div>
                    </div>
                </div>

                {/* Company Name (Conditional - Full Width) */}
                <div className={`flex flex-col gap-2 transition-all duration-500 ease-in-out ${isCompany ? 'opacity-100 max-h-40 pointer-events-auto' : 'opacity-0 max-h-0 pointer-events-none overflow-hidden'}`}>
                    <label htmlFor="company" className="text-sm font-bold text-[#1A2E35]">Company Name <span className="text-red-500">*</span></label>
                    <input
                        {...register("company", { required: isCompany ? "Company Name is required" : false })}
                        type="text"
                        id="company"
                        placeholder="Your Company Name"
                        suppressHydrationWarning
                        className={`w-full h-14 px-5 rounded-2xl bg-gray-50 border ${errors.company ? 'border-red-500 focus:ring-red-500/20' : 'border-gray-100 focus:border-[#00735C] focus:ring-[#00735C]/20'} focus:ring-2 outline-none transition-all text-[#1A2E35] placeholder:text-gray-400`}
                    />
                    {errors.company && <span className="text-red-500 text-xs font-semibold">{errors.company.message}</span>}
                </div>

                {/* Additional Info */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm font-bold text-[#1A2E35]">Additional Information</label>
                    <textarea
                        {...register("message")}
                        id="message"
                        rows={4}
                        placeholder="How can we help you?"
                        suppressHydrationWarning
                        className="w-full p-5 rounded-2xl bg-gray-50 border border-gray-100 focus:border-[#00735C] focus:ring-2 focus:ring-[#00735C]/20 outline-none transition-all text-[#1A2E35] placeholder:text-gray-400 resize-none"
                    ></textarea>
                </div>

                <div className="flex justify-center mt-4">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full sm:w-60 h-14 bg-[#00735C] text-white font-extrabold rounded-2xl hover:bg-[#005c4a] transition-colors shadow-lg shadow-[#00735C]/20 uppercase tracking-widest text-sm flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed`}
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="animate-spin" size={20} />
                                Sending...
                            </>
                        ) : (
                            "Send Message"
                        )}
                    </button>
                </div>
            </form>

        </>
    );
}