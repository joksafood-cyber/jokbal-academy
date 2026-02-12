import React from 'react';

export const NoiseOverlay: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[9000] opacity-[0.04] noise-bg"></div>
  );
};
