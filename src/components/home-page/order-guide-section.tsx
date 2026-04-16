import { homePageSoftSurface, orderSteps } from "../../data/home-page-data";

export function OrderGuideSection() {
  return (
    <section
      className="order-guide-section relative z-[2] -mt-1 rounded-t-3xl py-16 text-[#1f1713] md:min-h-screen md:py-20"
      style={{ backgroundColor: homePageSoftSurface }}
    >
      <div className="mt-12 order-guide-pin-layout grid gap-10 px-5 py-8 md:grid-cols-[0.46fr_0.54fr] md:px-10 md:py-12">
        <div className="relative font-brand">
          <div className="order-guide-slot relative hidden min-h-[23rem] overflow-hidden md:block md:min-h-[30rem]">
            <ul className="order-guide-list relative h-full pt-20">
              {orderSteps.map((step, index) => (
                <li
                  className="order-guide-list-item absolute inset-0 flex flex-col justify-center text-[2.7rem] font-semibold uppercase leading-none md:text-[5vw]"
                  key={step.title}
                >
                  <span className="mb-4 block text-sm tracking-[0.28em] text-[#b5162f] md:mb-6">
                    0{index + 1}
                  </span>
                  {step.title}
                </li>
              ))}
            </ul>
          </div>

          <ul className="order-guide-mobile-list space-y-12 md:hidden">
            {orderSteps.map((step, index) => (
              <li className="order-guide-mobile-item" key={step.title}>
                <span className="mb-4 block text-sm tracking-[0.28em] text-[#b5162f]">
                  0{index + 1}
                </span>
                <h3 className="text-[2.7rem] font-semibold uppercase leading-none">
                  {step.title}
                </h3>
                <p className="mt-5 max-w-xl text-sm font-normal leading-7 text-[#4d4139]">
                  {step.copy}
                </p>
              </li>
            ))}
          </ul>

          <div className="order-guide-fill absolute left-[-12px] top-0 hidden h-full w-[2px] origin-top bg-[#b5162f] md:block" />
        </div>

        <div className="order-guide-image-wrap h-[58vh] overflow-hidden rounded-3xl md:sticky md:top-24 md:h-[76vh]">
          <img
            src="/imgs/main.webp"
            alt="Packaged Cillia Treats order"
            className="order-guide-image ochi-parallax h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
