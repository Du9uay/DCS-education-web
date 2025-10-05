import React from 'react';
import { motion } from 'framer-motion';

const GlobalBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* 基础渐变层 - 统一蓝绿色系 */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #0f1419 0%, #1a2832 35%, #1e3238 65%, #1a2832 100%)'
        }}
      />

      {/* 液态流动层 - 蓝绿色光斑 */}
      <motion.div
        className="absolute inset-[-20%]"
        style={{
          background: `
            radial-gradient(45% 30% at 70% 20%, rgba(18, 165, 184, 0.12), transparent 60%),
            radial-gradient(40% 28% at 30% 80%, rgba(10, 123, 140, 0.10), transparent 60%)
          `,
          filter: 'blur(30px)'
        }}
        animate={{
          x: ['-4%', '6%'],
          y: ['-2%', '3%'],
          rotate: [0.6, -0.6]
        }}
        transition={{
          duration: 25,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      {/* 极光效果层1 - 蓝绿色极光 */}
      <motion.div
        className="absolute w-full h-[200%] -top-1/2"
        style={{
          background: `linear-gradient(45deg,
            transparent 20%,
            rgba(18, 165, 184, 0.15) 30%,
            rgba(10, 123, 140, 0.20) 40%,
            rgba(18, 165, 184, 0.12) 50%,
            transparent 60%
          )`,
          filter: 'blur(60px)',
          transform: 'skewY(-15deg)',
          opacity: 0.6
        }}
        animate={{
          x: ['-100%', '100%'],
          opacity: [0.4, 0.7, 0.4]
        }}
        transition={{
          duration: 30,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      {/* 极光效果层2 - 深蓝绿色 */}
      <motion.div
        className="absolute w-full h-[200%] -top-1/2 opacity-20"
        style={{
          background: `linear-gradient(-30deg,
            transparent 10%,
            rgba(6, 90, 107, 0.15) 25%,
            rgba(10, 123, 140, 0.12) 35%,
            rgba(18, 165, 184, 0.10) 45%,
            transparent 60%
          )`,
          filter: 'blur(80px)',
          transform: 'skewY(10deg)'
        }}
        animate={{
          x: ['100%', '-100%'],
          opacity: [0.15, 0.3, 0.15]
        }}
        transition={{
          duration: 35,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          delay: 10
        }}
      />

      {/* 额外的流动层 - 蓝绿色微光 */}
      <motion.div
        className="absolute inset-[-30%]"
        style={{
          background: `
            radial-gradient(50% 35% at 20% 50%, rgba(10, 123, 140, 0.08), transparent 70%),
            radial-gradient(35% 25% at 80% 70%, rgba(18, 165, 184, 0.06), transparent 60%)
          `,
          filter: 'blur(40px)',
          opacity: 0.7
        }}
        animate={{
          x: ['5%', '-5%'],
          y: ['3%', '-4%'],
          rotate: [-1, 1]
        }}
        transition={{
          duration: 40,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      {/* 减少动效样式 */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .motion-div {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default GlobalBackground;