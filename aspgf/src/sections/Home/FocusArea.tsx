import React from "react";

const focusItems = [
  "Education",
  "Health Care",
  "Charity",
  "Old Age Care",
  "Orphanage",
  "Education",
  "Health Care",
  "Charity",
  "Old Age Care",
  "Orphanage",
];

const Separator = () => (
  <span className="font-nunito mx-12 md:mx-20 text-[60px] md:text-[80px] font-black text-[#006e57]">
    |
  </span>
);

export default function FocusArea() {
  return (
    <section className="relative w-full bg-white py-12 overflow-hidden">
      <div className="flex whitespace-nowrap overflow-hidden">

        {/* First Container */}
        <div className="flex animate-marquee items-center">
          {focusItems.map((item, index) => (
            <React.Fragment key={`f1-${index}`}>
              <span
                className="
                font-nunito
                text-[60px]
                md:text-[100px]
                font-black
                tracking-tighter
                focus-outline-text
                hover:scale-[1.02]
                transition-all
                duration-300
                "
              >
                {item}
              </span>

              <Separator />
            </React.Fragment>
          ))}
        </div>

        {/* Duplicate Container For Infinite Loop */}
        <div
          className="flex animate-marquee items-center"
          aria-hidden="true"
        >
          {focusItems.map((item, index) => (
            <React.Fragment key={`f2-${index}`}>
              <span
                className="
                font-nunito
                text-[60px]
                md:text-[100px]
                font-black
                tracking-tighter
                focus-outline-text
                hover:scale-[1.02]
                transition-all
                duration-300
                "
              >
                {item}
              </span>

              <Separator />
            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  );
}