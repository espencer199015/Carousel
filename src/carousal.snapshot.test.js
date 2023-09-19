import React from 'react';
import renderer from 'react-test-renderer';
import Carousel from './Carousel';

test('Carousel component snapshot', () => {
  const tree = renderer
    .create(
      <Carousel
        cardData={[
          { src: 'test1.jpg', caption: 'Caption 1' },
          { src: 'test2.jpg', caption: 'Caption 2' },
        ]}
        title="Test Carousel"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});