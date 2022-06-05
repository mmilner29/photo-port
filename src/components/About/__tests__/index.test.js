import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

//ensures we won't have leftover memory data providing false results
afterEach(cleanup);

//declare component for testing
describe('About component', () => {
    //renders About test
    //test 1
    it('renders', () => {
        render(<About />);
    });
    //test 2
    it('matches snapshot DOM node structure', () => {
        // render About
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
      });
  })