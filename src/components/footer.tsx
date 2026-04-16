import { useEffect, useState } from "react";
import { ArrowRight, Instagram, Mail, PhoneCall } from "lucide-react";

export default function Footer() {
  const [quoteIndex, setQuoteIndex] = useState(0);

  const quotes = [
    "Baked for your sweetest moments.",
    "Giftable treats for every celebration.",
    "Small chops, cakes, pastries, and more.",
  ];

  useEffect(() => {
    const quoteTimer = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 4200);
    return () => clearInterval(quoteTimer);
  }, [quotes.length]);

  return (
    <footer className="w-full overflow-hidden bg-[#0a0c10] py-14 text-gray-300 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-12 flex min-h-16 items-center justify-center md:h-10">
          <p
            key={quoteIndex}
            className="font-head text-center text-2xl font-semibold uppercase italic tracking-wide text-[#c68c53] transition-all duration-700 ease-in-out md:text-5xl"
            style={{
              animation: "fadeInOut 4.2s ease-in-out infinite",
            }}
          >
            {quotes[quoteIndex]}
          </p>
        </div>

        <div className="relative z-10 mt-5 flex justify-center gap-4 md:mt-16">
          <a
            href="#"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/6 text-white transition hover:-translate-y-1 hover:bg-white/10"
          >
            <Instagram size={18} />
          </a>
          <a
            href="#"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/6 text-white transition hover:-translate-y-1 hover:bg-white/10"
          >
            <PhoneCall size={18} />
          </a>
          <a
            href="#"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/6 text-white transition hover:-translate-y-1 hover:bg-white/10"
          >
            <Mail size={18} />
          </a>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-10 px-1 text-sm font-medium text-milk md:mt-14 md:flex-row md:px-2 md:text-base">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-16">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-white">
                Browse
              </p>
              <p>Cakes</p>
              <p>Small Chops</p>
              <p>Pastries</p>
              <p>Gift Sets</p>
            </div>
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-white">
                Occasions
              </p>
              <p>Birthday Gifts</p>
              <p>Valentine Packages</p>
              <p>Corporate Hampers</p>
            </div>
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-white">
                Studio
              </p>
              <p>Souvenirs</p>
              <p>Gift Sets</p>
              <p>Custom Orders</p>
            </div>
          </div>

          <div className="w-full md:max-w-[36%]">
            <p className="text-gray-300">
              Open for celebrations, office orders, thoughtful gifting, and
              sweet cravings that deserve better presentation and better
              flavour.
            </p>
            <div className="mt-5 flex items-center justify-between border-b border-[#d9d9d9]/40 py-4">
              <input
                type="email"
                placeholder="Start an order inquiry"
                className="w-full bg-transparent text-white placeholder:font-sans placeholder:text-[#999999] focus:outline-none"
              />
              <ArrowRight size={18} className="text-[#f3a3b2]" />
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
          <p>{`Copyright © ${new Date().getFullYear()} Cilla Treats - All Rights Reserved`}</p>
          <div className="flex flex-wrap items-center gap-5 md:gap-7">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes fadeInOut {
            0% { opacity: 0; transform: translateY(8px); }
            10% { opacity: 1; transform: translateY(0); }
            90% { opacity: 1; transform: translateY(0); }
            100% { opacity: 0; transform: translateY(-8px); }
          }
        `}
      </style>
    </footer>
  );
}
