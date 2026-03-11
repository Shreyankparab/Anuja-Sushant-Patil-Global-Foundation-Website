import { Nunito, Cabin } from "next/font/google";
import { Metadata } from "next";

const nunito = Nunito({ subsets: ["latin"], weight: ["400", "700", "800"] });
const cabin = Cabin({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "Privacy Policy of Anuja Sushant Patil Global Foundation (ASPGF). Learn how we protect your data and maintain your privacy.",
};

export default function PrivacyPolicy() {
    return (
        <main className={`${cabin.className} min-h-screen bg-gray-50 pt-32 pb-20 px-6`}>
            <div className="max-w-4xl mx-auto bg-white rounded-[32px] p-8 md:p-12 shadow-sm border border-gray-100">
                <h1 className={`${nunito.className} text-3xl md:text-4xl font-extrabold text-[#00735C] mb-8`}>
                    Privacy Policy
                </h1>

                <section className="space-y-6 text-gray-700 leading-relaxed text-[15px]">
                    <p>
                        Last Updated: March 2026
                    </p>
                    <p>
                        At Anuja Sushant Patil Global Foundation (ASPGF), accessible from aspgf.org, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by ASPGF and how we use it.
                    </p>

                    <h2 className={`${nunito.className} text-xl font-bold text-[#1A2E35] mt-8`}>1. Information We Collect</h2>
                    <p>
                        The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information. If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
                    </p>

                    <h2 className={`${nunito.className} text-xl font-bold text-[#1A2E35] mt-8`}>2. How We Use Your Information</h2>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Provide, operate, and maintain our website and initiatives.</li>
                        <li>Improve, personalize, and expand our outreach.</li>
                        <li>Understand and analyze how you use our website.</li>
                        <li>Communicate with you, either directly or through one of our partners.</li>
                        <li>Send you updates regarding our foundation&apos;s work.</li>
                        <li>Find and prevent fraud.</li>
                    </ul>

                    <h2 className={`${nunito.className} text-xl font-bold text-[#1A2E35] mt-8`}>3. Cookies and Web Beacons</h2>
                    <p>
                        Like any other website, ASPGF uses &apos;cookies&apos;. These cookies are used to store information including visitors&apos; preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users&apos; experience by customizing our web page content based on visitors&apos; browser type and/or other information.
                    </p>

                    <h2 className={`${nunito.className} text-xl font-bold text-[#1A2E35] mt-8`}>4. Data Protection Rights</h2>
                    <p>
                        We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following: The right to access, the right to rectification, the right to erasure, the right to restrict processing, the right to object to processing, and the right to data portability.
                    </p>

                    <div className="mt-12 pt-8 border-t border-gray-100 bg-[#f8faf9] p-6 rounded-2xl">
                        <h2 className={`${nunito.className} text-2xl font-extrabold text-[#00735C] mb-4`}>Disclaimer</h2>
                        <p className="text-[14px] text-gray-600 italic">
                            The information provided by Anuja Sushant Patil Global Foundation (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) on aspgf.org is for general informational purposes only. All information on the site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site. Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site.
                        </p>
                    </div>
                </section>
            </div>
        </main>
    );
}
