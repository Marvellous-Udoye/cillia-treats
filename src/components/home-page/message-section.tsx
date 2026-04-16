import { messageSectionCopy } from "../../data/home-page-data";

export function MessageSection() {
  return (
    <section className="message-content relative z-20 -mt-1 flex min-h-[52vh] w-full items-center justify-center overflow-hidden bg-[#111318] px-4 text-[#f5f1e8] md:min-h-[60vh] md:px-6">
      <div className="relative mx-auto flex w-full max-w-7xl items-center justify-center py-14 md:py-20">
        <div className="h-full w-full">
          <div className="msg-wrapper flex flex-col items-center justify-center gap-10 text-[2rem] font-bold uppercase leading-[1] tracking-[-0.08em] md:gap-24 md:text-8xl 2xl:text-[8.5rem]">
            <h1 className="first-message max-w-[14rem] text-center text-[#f3f4f610] md:max-w-2xl 2xl:max-w-4xl">
              {messageSectionCopy.first}
            </h1>
            <div
              style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
              className="msg-text-scroll absolute z-10 -mt-10 -translate-y-2 rotate-[3deg] border-[.5vw] border-[#111318] text-[1.7rem] md:-mt-30 md:-translate-y-5 md:text-8xl 2xl:-mt-50 2xl:translate-y-5 2xl:text-[8.5rem]"
            >
              <div className="bg-[#b5162f] px-3 pb-2 text-white md:px-5 md:pb-5">
                <h2 className="font-head leading-none md:tracking-wide max-sm:text-4xl ">
                  {messageSectionCopy.highlight}
                </h2>
              </div>
            </div>
            <h1 className="second-message max-w-[16rem] sm:pt-14 text-center text-[#f3f4f610] md:max-w-4xl md:pt-20 2xl:max-w-7xl 2xl:pt-30">
              {messageSectionCopy.second}
            </h1>
          </div>

          <div className="mt-10 flex justify-center overflow-hidden md:mt-20">
            <div className="flex max-w-md justify-center px-2 md:px-10">
              <p className="text-center font-brand text-sm uppercase text-white/80 md:text-lg">
                {messageSectionCopy.paragraph}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
