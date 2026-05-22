import { Metadata } from "next";
import { ArrowRight, Loader2, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Anuja Sushant Patil Global Foundation",
  description:
    "Get in touch with the Anuja Sushant Patil Global Foundation (ASPGF) office in Pune. Reach out to our helpline or email us for volunteering, partnerships, and support queries.",
  alternates: {
    canonical: "https://aspgf.org/contact-us",
  },
  openGraph: {
    title: "Contact Us | Anuja Sushant Patil Global Foundation",
    description: "Get in touch with our team in Pune. Reach out for volunteering, partnership requests, or general inquiries.",
    url: "https://aspgf.org/contact-us",
    siteName: "Anuja Sushant Patil Global Foundation",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Anuja Sushant Patil Global Foundation",
    description: "Get in touch with our team in Pune. Reach out for volunteering, partnership requests, or general inquiries.",
  },
};

export default function ContactPage() {
  const isSunday = new Date().getDay() === 0;

  // Structured Data Schema for Local Business/NGO Location
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NGO",
    "name": "Anuja Sushant Patil Global Foundation",
    "url": "https://aspgf.org",
    "logo": "https://aspgf.org/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9011553365",
      "contactType": "helpline",
      "availableLanguage": ["en", "Hindi", "Marathi"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Dr. Sushant Patil Corporate, Office No. 615, 6th Floor, Solitaire Business Hub, Balewadi High Street, Baner",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "postalCode": "411045",
      "addressCountry": "IN"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:30",
      "closes": "17:30"
    }
  };

  return (
    <>
      {/* Injecting Local Business Schema Markup for Map and Contact indexing */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
          {/* LEFT SIDE */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <p className="font-caveat text-[#6f7775] text-3xl mb-4 font-normal">
              Get In Touch
            </p>

            <h1 className="font-nunito text-[#0A2520] text-4xl md:text-5xl font-extrabold mb-6">
              Feel free to reach out with any questions or feedback.
            </h1>

            <p className="font-cabin text-gray-600 mb-8">
              Feel free to reach out with any questions, feedback, or partnership
              inquiries. Whether you are interested in volunteering, supporting
              our initiatives, or learning more about the work of Anuja Sushant
              Patil Global Foundation, our team is always ready to connect and
              collaborate.{" "}
            </p>
            <div>
              <a
                href="/donate-us#inquiry-form"
                className="font-cabin group relative inline-flex items-center gap-4 px-8 py-4 font-black text-white rounded-full text-lg bg-gradient-to-r from-[#006e57] to-[#00b874] shadow-xl shadow-[#006e57]/20 hover:shadow-[#00b874]/30 transition-all duration-500 transform hover:-translate-y-1 tracking-widest uppercase overflow-hidden"
              >
                <span className="relative z-10">Inquiry Form</span>
                <div className="relative z-10 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-all duration-300 group-hover:rotate-45">
                  <ArrowRight size={18} strokeWidth={3} />
                </div>

                {/* Glossy shine effect */}
                <div className="absolute top-0 -left-[100%] w-[50%] h-full bg-white/20 skew-x-[-25deg] group-hover:left-[150%] transition-all duration-1000 ease-in-out"></div>
              </a>
            </div>

            {/* CONTACT INFO GRID */}
            <div className="mt-8 lg:mt-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Address */}
                <div className="sm:row-span-2 bg-[#f8faf9] p-6 rounded-2xl border border-[#e8f1ec] transition-all hover:shadow-md flex flex-col h-full gap-4">
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-[#00735C]" size={20} />
                  </div>

                  <div>
                    <p className="font-nunito text-[10px] font-black text-[#00735C] uppercase tracking-[0.15em] mb-1.5">
                      Address
                    </p>

                    <address className="font-nunito text-[#1A2E35] font-medium text-[14px] leading-relaxed not-italic">
                      Dr. Sushant Patil Corporate, Office No. 615, 6th Floor, <br />
                      Solitaire Business Hub, Balewadi High Street, <br /> Baner, Pune
                      411045
                    </address>
                  </div>
                </div>

                {/* Phone */}
                <div className="bg-[#f8faf9] p-5 rounded-2xl border border-[#e8f1ec] transition-all hover:shadow-md flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                    <Phone className="text-[#00735C]" size={20} />
                  </div>

                  <div>
                    <p className="font-nunito text-[10px] font-black text-[#00735C] uppercase tracking-[0.15em] mb-1">
                      Helpline
                    </p>

                    <a
                      href="tel:+919011553365"
                      className="hover:underline transition-all"
                    >
                      <p className="font-nunito text-[#1A2E35] font-medium text-[14px] leading-tight">
                        +91 9011553365
                      </p>
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-[#f8faf9] p-5 rounded-2xl border border-[#e8f1ec] transition-all hover:shadow-md flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                    <span className="text-[#00735C] font-semibold text-lg">
                      @
                    </span>
                  </div>

                  <div>
                    <p className="font-nunito text-[10px] font-black text-[#00735C] uppercase tracking-[0.15em] mb-1">
                      Email
                    </p>

                    <a
                      href="mailto:project.director@aspgf.org"
                      className="hover:underline transition-all"
                    >
                      <p className="font-nunito text-[#1A2E35] font-medium text-[14px] break-all leading-tight">
                        project.director@aspgf.org
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            {/* MAP with Loader */}
            <div className="w-full h-80 sm:h-80 lg:h-[380px] bg-gray-100 rounded-[32px] overflow-hidden relative shadow-sm">

              {/* Native CSS Loading Background */}
              <div className="absolute inset-0 z-0 flex flex-col items-center justify-center bg-gray-50">
                <div className="relative">
                  <Loader2 className="w-10 h-10 text-[#00735C] animate-spin" />
                  <div className="absolute inset-0 w-10 h-10 border-4 border-[#00735C]/10 rounded-full"></div>
                </div>
                <p className="font-cabin mt-4 text-[#00735C] font-bold text-xs uppercase tracking-[0.2em] animate-pulse">
                  Loading Map...
                </p>
              </div>

              {/* Map Iframe */}
              <iframe
                src="https://maps.google.com/maps?q=Seamedu%20%2F%20Toolbox%20Studio%2C%206th%20Floor%2C%20Solitaire%20Business%20Hub%2C%20Office%20No.%20612%2C%20Balewadi%20High%20St%2C%20Balewadi%2C%20Pune%2C%20Maharashtra%20411045&t=&z=17&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="relative z-10 grayscale-[0.1] contrast-[0.9] bg-transparent"
                title="Office location map for Anuja Sushant Patil Global Foundation"
              ></iframe>

              {/* Map Overlay */}
              <div className="absolute bottom-1 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-auto sm:right-5 w-[80%] sm:w-[280px] bg-white/95 backdrop-blur-md p-4 rounded-2xl flex items-center justify-between shadow-lg z-20">
                <div>
                  <p className="font-cabin text-[13px] font-extrabold text-[#1A2E35]">
                    Solitaire Business Hub
                  </p>
                  <div className="mt-0.5 flex items-center gap-1.5">
                    <span className={`w-[5px] h-[5px] rounded-full ${!isSunday ? "bg-[#00735C] animate-pulse" : "bg-red-500"}`}></span>
                    <p className={`font-cabin text-[10px] ${!isSunday ? "text-[#00735C]" : "text-red-500"} font-extrabold uppercase tracking-widest`}>
                      {!isSunday ? "Open Now" : "Closed Now"}
                    </p>
                  </div>
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Seamedu+%2F+Toolbox+Studio%2C+6th+Floor%2C+Solitaire+Business+Hub%2C+Office+No.+612%2C+Balewadi+High+St%2C+Balewadi%2C+Pune%2C+Maharashtra+411045"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-cabin bg-[#00735C] text-white text-[9px] tracking-wider font-extrabold px-4 py-2.5 rounded-lg hover:bg-[#005c49] transition-colors"
                >
                  GET DIRECTIONS
                </a>
              </div>
            </div>

            {/* OFFICE HOURS CARD */}
            <div className="bg-white rounded-[32px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/60">
              <div className="flex items-center justify-between mb-2">
                <div className="flex flex-col">
                  <h3 className="font-nunito text-[22px] font-extrabold text-[#1A2E35]">
                    Operating Hours
                  </h3>
                </div>

                {!isSunday ? (
                  <div className="font-cabin bg-[#D5EBE1] text-[#00735C] text-[10px] font-normal px-3 py-1.5 rounded-full flex items-center gap-1.5 uppercase tracking-widest">
                    <span className="w-[5px] h-[5px] bg-[#00735C] rounded-full animate-pulse"></span>
                    Open Now
                  </div>
                ) : (
                  <div className="font-cabin bg-red-50 text-red-500 text-[10px] font-normal px-3 py-1.5 rounded-full flex items-center gap-1.5 uppercase tracking-widest">
                    <span className="w-[5px] h-[5px] bg-red-500 rounded-full"></span>
                    Closed Now
                  </div>
                )}
              </div>
              <p className="font-cabin text-gray-500 text-sm mb-6 pb-6 border-b border-gray-100">
                &quot;Visit us and be part of the change.&quot;
              </p>

              <div className="flex flex-col gap-4 text-[13px] text-gray-500">
                <div className="flex justify-between items-center">
                  <span className="font-cabin">Monday — Saturday</span>
                  <span className="font-cabin text-[#1A2E35] font-normal">
                    9:30 AM — 5:30 PM
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="font-cabin">Sunday</span>
                  <span className="font-cabin text-red-500 font-normal">
                    Closed
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}