'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ProductAssembly() {
  const containerRef = useRef<HTMLDivElement>(null);

  // میزان اسکرول درون container (از 0 تا 1)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'], // وقتی container به بالای viewport می‌رسد شروع، و وقتی انتهایش به پایین viewport می‌رسد پایان
  });

  // تبدیل پیشرفت اسکرول به مقادیر حرکتی برای هر قطعه
  // قطعه ۱ (بالایی): از بالا به مرکز
  const part1Y = useTransform(scrollYProgress, [0, 1], [-100, 0]);
  // قطعه ۲ (وسط): شفاف‌تر و بدون حرکت
  // قطعه ۳ (پایینی): از پایین به مرکز
  const part3Y = useTransform(scrollYProgress, [0, 1], [100, 0]);

  // چرخش کلی محصول (مثلاً ۳۶۰ درجه)
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <section
      ref={containerRef}
      className="relative h-[300vh] bg-graphite" // ارتفاع زیاد برای ایجاد فضای اسکرول
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          className="relative w-64 h-64"
          style={{ rotate }}
        >
          {/* قطعه ۱ */}
          <motion.div
            className="absolute left-0 right-0 h-16 bg-bronze rounded-md flex items-center justify-center text-warmwhite text-xs"
            style={{ y: part1Y, top: '0%' }}
          >
            Part 1
          </motion.div>

          {/* قطعه ۲ (ثابت در مرکز) */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-16 bg-graphite-light border border-steel/30 rounded-md flex items-center justify-center text-warmwhite text-xs">
            Part 2
          </div>

          {/* قطعه ۳ */}
          <motion.div
            className="absolute left-0 right-0 h-16 bg-bronze-dark rounded-md flex items-center justify-center text-warmwhite text-xs"
            style={{ y: part3Y, bottom: '0%' }}
          >
            Part 3
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}