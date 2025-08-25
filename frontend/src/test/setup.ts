// Import jest-dom for better assertions
import '@testing-library/jest-dom';

// Mock any global browser APIs if needed
global.matchMedia = global.matchMedia || function() {
  return {
    matches: false,
    addListener: function() {},
    removeListener: function() {},
  };
};

// Add any global test utilities or mocks here
