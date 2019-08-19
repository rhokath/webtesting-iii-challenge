// Test away!
import React from 'react';
import {render} from 'react-testing-library';
import Display from './Display.js';
describe('<Display/>', () => {
    it ('Display initally open and unlocked', () => {
        const { queryByText } = render(<Display/>);
        expect(queryByText(/unlocked/i)).toBeTruthy;
        expect(queryByText(/open/i)).toBeTruthy;
    });
    it('get those props', () => {
        const { getByText } = render(<Display locked={true} closed={true}/>);
        expect(getByText(/locked/i));
        expect(getByText(/closed/i));
    });
 });