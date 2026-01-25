import { useEffect, useRef } from 'react';

/**
 * Custom hook for TagCloud initialization
 * @param {string[]} tags - Array of tag strings
 * @param {Object} options - TagCloud configuration options
 */
export const useTagCloud = (tags, options = {}) => {
  const containerRef = useRef(null);
  const initializedRef = useRef(false);

  useEffect(() => {
    if (initializedRef.current || !containerRef.current) return;

    const TagCloud = require('TagCloud');
    
    const defaultOptions = {
      radius: calculateRadius(),
      maxSpeed: 'normal',
      initSpeed: 'normal',
      direction: 135,
      keep: true,
      ...options,
    };

    TagCloud(containerRef.current, tags, defaultOptions);
    
    if (containerRef.current) {
      containerRef.current.style.color = '#00ffff';
    }

    initializedRef.current = true;

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
        initializedRef.current = false;
      }
    };
  }, [tags, options]);

  return containerRef;
};

/**
 * Calculate TagCloud radius based on window width
 */
const calculateRadius = () => {
  const width = window.innerWidth;
  if (width < 400) return 130;
  if (width > 1000) return 250;
  return 180;
};

