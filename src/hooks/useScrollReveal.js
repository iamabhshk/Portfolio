import { useEffect } from 'react';

/**
 * Custom hook for scroll reveal animation
 * Adds 'active' class to elements with 'reveal' class when they enter viewport
 * @param {number} elementVisible - Distance from viewport top to trigger reveal (default: 150)
 */
export const useScrollReveal = (elementVisible = 150) => {
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        } else {
          element.classList.remove('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on mount to check initial state
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [elementVisible]);
};

