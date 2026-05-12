import { lazy, Suspense } from 'react';
import { styles } from '../styles';

// Lazy load ComputersCanvas so it doesn't block initial paint
const ComputersCanvas = lazy(() => import('./canvas'));

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      {/* Hero text — renders immediately, nothing blocking it */}
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Collins</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop Back-end systems for <br className="sm:block hidden" />
            mobile and web applications
          </p>
        </div>
      </div>

      {/* 3D Canvas — lazy loaded, only after hero text paints */}
      <Suspense fallback={null}>
        <div className="absolute inset-0 top-[80px] w-full h-full">
          <ComputersCanvas />
        </div>
      </Suspense>

      {/* Scroll indicator — pure CSS, no framer-motion */}
      <div className="absolute xs:bottom-10 bottom-10 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <div className="scroll-dot w-3 h-3 rounded-full bg-secondary mb-1" />
          </div>
        </a>
      </div>

      {/* Pure CSS bounce animation — replaces framer-motion entirely */}
      <style>{`
        .scroll-dot {
          animation: bounce-scroll 1.5s ease-in-out infinite;
        }
        @keyframes bounce-scroll {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(24px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;