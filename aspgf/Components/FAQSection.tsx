"use client";

import Image from "next/image";
import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { Caveat, Nunito, Cabin } from "next/font/google";

const caveat = Caveat({ subsets: ["latin"], weight: ["400", "700"] });
const nunito = Nunito({ subsets: ["latin"], weight: ["400", "700", "800"] });
const manrope = Cabin({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is the mission of Anuja Sushant Patil Global Foundation?",
      answer:
        "Anuja Sushant Patil Global Foundation is committed to creating positive social impact through initiatives focused on education, community development, social welfare, and empowerment. Our mission is to support individuals and communities by providing opportunities, resources, and awareness programs that encourage sustainable growth and equal opportunities for all.",
    },
    {
      question:
        "Who can participate in the foundation’s programs and initiatives?",
      answer:
        "Our programs are designed to benefit individuals and communities who seek support in areas such as education, social awareness, and community development. Students, youth, women, and underserved communities can benefit from various initiatives organized by the foundation.",
    },
    {
      question:
        "How can I volunteer or contribute to the foundation’s activities?",
      answer:
        "Individuals who are passionate about social service can participate by volunteering in our programs, supporting community initiatives, or contributing their skills and knowledge. Volunteers play an important role in helping us expand our reach and create meaningful social impact.",
    },
    {
      question: "Does the foundation accept donations or external support?",
      answer:
        "Yes, the foundation welcomes support from individuals and organizations who wish to contribute to our mission. Donations and partnerships help us expand our initiatives in education, social welfare, and community development while reaching more people in need.",
    },
    {
      question: "How does the foundation ensure transparency in its work?",
      answer:
        "Anuja Sushant Patil Global Foundation believes in transparency and accountability. We maintain clear communication about our initiatives, activities, and programs to ensure that supporters and communities can trust the work we do.",
    },
  ];
  return (
    <section className="relative w-full py-12 md:py-20 bg-[#f6f1e7] overflow-hidden">
      {/* Background Image Subtly Visible */}
      <div className="absolute inset-0 opacity-10 bg-[url('/Images/FAQs.png')] bg-cover bg-center filter blur-sm pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* LEFT SIDE CONTENT */}
          <div>
            {/* LABEL WITH ICON */}
            <div className="flex items-center gap-2 mb-4">
              <span
                className={`${caveat.className} text-[#6f7775] text-[24px] font-bold tracking-wide mt-1`}
              >
                Frequently asked Questions
              </span>
            </div>

            <h2
              className={`${nunito.className} text-[#00715D] text-3xl md:text-5xl font-extrabold leading-[1.15] mb-8 pr-4`}
            >
              People are frequently asking some questions from us
            </h2>

            <p
              className={`${manrope.className} text-gray-600 leading-relaxed max-w-lg`}
            >
              We believe in transparency and open communication with our
              community. Here are some of the most common questions people ask
              about Anuja Sushant Patil Global Foundation, our initiatives, and
              how individuals can participate in our mission to support
              education, community development, and social welfare.
            </p>
          </div>

          {/* RIGHT SIDE FAQ ACCORDION */}
          <div className="flex flex-col gap-5">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`transition-all duration-500 ease-in-out bg-white shadow-sm rounded-[32px] border border-gray-100 overflow-hidden ${
                    isOpen
                      ? "ring-2 ring-[#00715D]/5 ring-offset-0 scale-[1.02]"
                      : "hover:border-[#00715D]/30"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className={`w-full flex items-center justify-between text-left gap-4 py-5 px-6 md:py-6 md:px-8 transition-colors duration-300 ${
                      isOpen ? "bg-[#0b6a52]/5" : ""
                    }`}
                  >
                    <h3
                      className={`${nunito.className} text-[16px] md:text-lg font-bold transition-colors duration-300 ${
                        isOpen ? "text-[#00715D]" : "text-[#1A2E35]"
                      }`}
                    >
                      {item.question}
                    </h3>

                    <span
                      className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-500 flex-shrink-0 ${
                        isOpen
                          ? "bg-[#00715D] text-white rotate-180"
                          : "bg-gray-100 text-[#00715D]"
                      }`}
                    >
                      {isOpen ? (
                        <FiMinus className="w-5 h-5" />
                      ) : (
                        <FiPlus className="w-5 h-5" />
                      )}
                    </span>
                  </button>

                  {/* ANSWER WRAPPER WITH SMOOTH HEIGHT TRANSITION */}
                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-6 md:px-8 md:pb-8">
                        <p
                          className={`${manrope.className} text-gray-600 leading-relaxed text-[15px] md:text-[16px]`}
                        >
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
