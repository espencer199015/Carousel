import React from 'react';
import { render } from '@testing-library/react';
import Card from './Card';

test('Card component renders without crashing', () => {
  render(
    <Card
      caption="Test Caption"
      src="test.jpg"
      currNum={1}
      totalNum={3}
    />
  );
});