import React from 'react';
import { render } from '@testing-library/react';
import Carousel from './Carousel';

test('Carousel component renders without crashing', () => {
  render(
    <Carousel
      cardData={[
        { src: 'test1.jpg', caption: 'Caption 1' },
        { src: 'test2.jpg', caption: 'Caption 2' },
      ]}
      title="Test Carousel"
    />
  );
});