import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

describe('renders react app', () => {
  it('renders the app without crashing', () => {
    render(<App />);
  })
});
