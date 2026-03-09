import { Nunito, Cabin } from "next/font/google";
import { Metadata } from "next";

const nunito = Nunito({ subsets: ["latin"], weight: ["400", "700", "800"] });
const cabin = Cabin({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
    title: "Terms of Service | ASPGF",
    description: "Terms and conditions for using the Anuja Sushant Patil Global Foundation website.",
};

export default function TermsOfService() {
    return (
        <main className={`${cabin.className} min-h-screen bg-gray-50 pt-32 pb-20 px-6`}>
            <div className="max-w-4xl mx-auto bg-white rounded-[32px] p-8 md:p-12 shadow-sm border border-gray-100">
                <h1 className={`${nunito.className} text-3xl md:text-4xl font-extrabold text-[#00735C] mb-8`}>
                    Terms of Service
                </h1>

                <section className="space-y-6 text-gray-700 leading-relaxed text-[15px]">
                    <p>
                        Welcome to the Anuja Sushant Patil Global Foundation (ASPGF) website. By accessing and using this website, you agree to comply with and be bound by the following terms and conditions.
                    </p>

                    <h2 className={`${nunito.className} text-xl font-bold text-[#1A2E35] mt-8`}>1. Agreement to Terms</h2>
                    <p>
                        By using the aspgf.org website, you certify that you have read and reviewed this Agreement and that you agree to comply with its terms. If you do not want to be bound by the terms of this Agreement, you are advised to stop using the website accordingly.
                    </p>

                    <h2 className={`${nunito.className} text-xl font-bold text-[#1A2E35] mt-8`}>2. Intellectual Property</h2>
                    <p>
                        All content on this website, including texts, graphics, logos, and images, is the property of ASPGF and is protected by copyright and intellectual property laws. You agree not to reproduce, duplicate, copy, sell, resell, or exploit any portion of the service or website content without express written permission from us.
                    </p>

                    <h2 className={`${nunito.className} text-xl font-bold text-[#1A2E35] mt-8`}>3. User Conduct</h2>
                    <p>
                        You agree to use this website only for lawful purposes. You are prohibited from using the site to engage in any activity that could damage, disable, or impair the website or interfere with any other party&apos;s use of the website.
                    </p>

                    <h2 className={`${nunito.className} text-xl font-bold text-[#1A2E35] mt-8`}>4. Donation Policy</h2>
                    <p>
                        All donations made to ASPGF are voluntary. Donations are non-refundable unless specified otherwise under local taxation laws. We use secure methods to process contributions and ensure that your financial data remains safe.
                    </p>

                    <div className="mt-12 pt-8 border-t border-gray-100 bg-[#f8faf9] p-6 rounded-2xl">
                        <h2 className={`${nunito.className} text-2xl font-extrabold text-[#00735C] mb-4`}>Disclaimer</h2>
                        <p className="text-[14px] text-gray-600 italic">
                            The information provided by Anuja Sushant Patil Global Foundation (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) on aspgf.org is for general informational purposes only. ASPGF does not provide professional medical, legal, or financial advice. Your use of our site is at your own risk. ASPGF cannot be held responsible for any direct, indirect, incidental, consequential, or punitive damages arising from your access to or use of the site. We reserve the right to change these terms at any time without notice.
                        </p>
                    </div>
                </section>
            </div>
        </main>
    );
}
