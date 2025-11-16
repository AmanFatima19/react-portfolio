import React, { useEffect, useRef } from 'react';

const MouseFollower = () => {
  const dotRef = useRef(null);
  const isHoveringRef = useRef(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (dotRef.current) {
        const size = isHoveringRef.current ? 20 : 3; // 6px normal, 40px hover
        dotRef.current.style.left = `${e.clientX - size}px`;
        dotRef.current.style.top = `${e.clientY - size}px`;
      }
    };

    const handleMouseEnter = () => {
      isHoveringRef.current = true;
      if (dotRef.current) {
        dotRef.current.className = 'fixed pointer-events-none z-50 w-8 h-8 bg-transparent border border-[#f59f0be8] rounded-full transition-all duration-300 ease-in-out';
      }
    };

    const handleMouseLeave = () => {
      isHoveringRef.current = false;
      if (dotRef.current) {
        dotRef.current.className = 'fixed pointer-events-none z-50 w-1.5 h-1.5 bg-[#f59f0be8] rounded-full transition-all duration-300 ease-in-out';
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Add event listeners to buttons
    const buttons = document.querySelectorAll('.button-hover');
    buttons.forEach(button => {
      button.addEventListener('mouseenter', handleMouseEnter);
      button.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      buttons.forEach(button => {
        button.removeEventListener('mouseenter', handleMouseEnter);
        button.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      ref={dotRef}
      className="fixed pointer-events-none z-50 w-1.5 h-1.5 bg-[#f59f0be8] rounded-full transition-all duration-300 ease-in-out"
    />
  );
};

export default MouseFollower;
