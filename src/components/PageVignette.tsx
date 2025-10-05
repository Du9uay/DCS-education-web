import React from 'react';

interface PageVignetteProps {
  intensity?: 'light' | 'medium' | 'strong';
}

const PageVignette: React.FC<PageVignetteProps> = ({ intensity = 'medium' }) => {
  const opacityMap = {
    light: 0.15,
    medium: 0.25,
    strong: 0.35
  };

  return (
    <div
      className="fixed inset-0 pointer-events-none z-40"
      style={{
        background: `
          radial-gradient(110% 85% at 50% 45%, transparent 30%, rgba(0,0,0,${opacityMap[intensity]}) 100%),
          radial-gradient(75% 55% at 50% 50%, transparent 55%, rgba(0,0,0,${opacityMap[intensity] * 0.6}) 100%)
        `
      }}
    />
  );
};

export default PageVignette;