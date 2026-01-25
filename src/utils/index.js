/**
 * Utility functions
 */

/**
 * Smooth scroll to element
 * @param {string} elementId - ID of the element to scroll to
 */
export const scrollToElement = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

/**
 * Format text with line breaks
 * @param {string} text - Text to format
 * @returns {string[]} Array of text segments
 */
export const formatTextWithBreaks = (text) => {
  return text.split('\n').filter((line) => line.trim());
};

