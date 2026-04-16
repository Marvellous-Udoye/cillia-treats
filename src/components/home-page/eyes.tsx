import { useEffect, useState } from "react";

export function Eyes() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      const deltaX = event.clientX - window.innerWidth / 2;
      const deltaY = event.clientY - window.innerHeight / 2;
      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 gap-4 md:gap-10">
        {[0, 1].map((item) => (
          <div
            className="flex h-[27vw] w-[27vw] items-center justify-center rounded-full bg-white md:h-[15vw] md:w-[15vw]"
            key={item}
          >
            <div className="relative flex h-2/3 w-2/3 items-center justify-center rounded-full bg-black font-brand text-[3vw] uppercase text-white md:text-[1.2vw]">
              <div
                className="absolute left-1/2 top-1/2 h-6 w-full -translate-x-1/2 -translate-y-1/2"
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
              >
                <div className="h-4 w-4 rounded-full bg-white md:h-6 md:w-6" />
              </div>
              order
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
