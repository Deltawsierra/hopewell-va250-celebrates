
import { useState, useEffect } from 'react';

interface AccessibilityState {
  textSize: 'normal' | 'large';
  highContrast: boolean;
}

export const useAccessibility = () => {
  const [accessibility, setAccessibility] = useState<AccessibilityState>({
    textSize: 'normal',
    highContrast: false
  });

  // Load preferences from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('accessibility-preferences');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setAccessibility(parsed);
      } catch (error) {
        console.log('Failed to parse accessibility preferences');
      }
    }
  }, []);

  // Apply accessibility settings to document
  useEffect(() => {
    const root = document.documentElement;
    
    // Apply text size
    if (accessibility.textSize === 'large') {
      root.style.fontSize = '1.125rem'; // 18px base instead of 16px
    } else {
      root.style.fontSize = '';
    }

    // Apply high contrast
    if (accessibility.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Save to localStorage
    localStorage.setItem('accessibility-preferences', JSON.stringify(accessibility));
  }, [accessibility]);

  const increaseTextSize = () => {
    setAccessibility(prev => ({
      ...prev,
      textSize: prev.textSize === 'normal' ? 'large' : 'normal'
    }));
  };

  const toggleHighContrast = () => {
    setAccessibility(prev => ({
      ...prev,
      highContrast: !prev.highContrast
    }));
  };

  const resetPreferences = () => {
    setAccessibility({
      textSize: 'normal',
      highContrast: false
    });
    localStorage.removeItem('accessibility-preferences');
  };

  return {
    accessibility,
    increaseTextSize,
    toggleHighContrast,
    resetPreferences
  };
};
