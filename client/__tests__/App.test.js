import 'react-native';
import React from 'react';
import App from '../App';

import renderer from 'react-test-renderer';

test('Renders the app correctly', () => {
  const snap = renderer.create(<App />).toJSON();

  expect(snap).toMatchSnapshot();
});
