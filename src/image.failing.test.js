import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Carousel from './Carousel';

test('Left arrow should be missing on first image, and right arrow on last image', () => {
  const { getByTestId, rerender } = render(
    <Carousel
      cardData={[
        { src: 'test1.jpg', caption: 'Caption 1' },
        { src: 'test2.jpg', caption: 'Caption 2' },
      ]}
      title="Test Carousel"
    />
  );

  // Initially, the left arrow should not be present
  const leftArrow = getByTestId('left-arrow');
  expect(leftArrow).not.toBeInTheDocument();

  // Move to the second image
  const rightArrow = getByTestId('right-arrow');
  fireEvent.click(rightArrow);

  // Now, left arrow should be present
  rerender(
    <Carousel
      cardData={[
        { src: 'test1.jpg', caption: 'Caption 1' },
        { src: 'test2.jpg', caption: 'Caption 2' },
      ]}
      title="Test Carousel"
    />
  );

  // Expecting the left arrow to be present
  expect(leftArrow).toBeInTheDocument();

  // Move to the last image
  fireEvent.click(rightArrow);

  // Now, right arrow should not be present
  rerender(
    <Carousel
      cardData={[
        { src: 'test1.jpg', caption: 'Caption 1' },
        { src: 'test2.jpg', caption: 'Caption 2' },
      ]}
      title="Test Carousel"
    />
  );

  // Expecting the right arrow to be missing
  expect(rightArrow).not.toBeInTheDocument();
});