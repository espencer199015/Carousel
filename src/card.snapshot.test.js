import React from 'react';
import renderer from 'react-test-renderer';
import Card from './Card';

test('Card component snapshot', () => {
  const tree = renderer
    .create(
      <Card
        caption="Test Caption"
        src="test.jpg"
        currNum={1}
        totalNum={3}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});