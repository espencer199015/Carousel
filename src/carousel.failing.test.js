import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Carousel from './Carousel';

test('Clicking left arrow should move to previous image', () => {
  const { getByTestId } = render(
    <Carousel
      cardData={[
        { src: 'test1.jpg', caption: 'Caption 1' },
        { src: 'test2.jpg', caption: 'Caption 2' },
      ]}
      title="Test Carousel"
    />
  );

  const leftArrow = getByTestId('left-arrow');
  fireEvent.click(leftArrow);

  // Expecting the caption of the first image since we're on the second image
  const captionElement = getByText('Caption 1');
  expect(captionElement).toBeInTheDocument();
});