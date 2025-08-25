import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import VisionTeaser from './VisionTeaser';

describe('VisionTeaser', () => {
  it('renders the vision teaser with correct title', () => {
    render(<VisionTeaser />);
    
    // Check if the main title is rendered
    expect(screen.getByText('Our Vision & Mission')).toBeInTheDocument();
    
    // Check if the subtitle is rendered
    expect(screen.getByText('Building a brighter future for Kayamandi')).toBeInTheDocument();
    
    // Check if the vision card is rendered
    expect(screen.getByText('Our Vision')).toBeInTheDocument();
    
    // Check if the mission card is rendered
    expect(screen.getByText('Our Mission')).toBeInTheDocument();
    
    // Check if the values card is rendered
    expect(screen.getByText('Our Values')).toBeInTheDocument();
  });
});
