// Test away
import React from 'react';
import {render, fireEvent} from 'react-testing-library';
import Dashboard from './Dashboard';

describe('<Dashboard/>', ()=> {
    it('renders without crasing', ()=> {
        const {getByText} = render(<Dashboard/>)
    })
    it('cannot be closed or opened if it locked is true', ()=> {
        const {queryByText} = render(<Dashboard/>);
        queryByText(/locked/i);
        expect(queryByText(/opened/i)).toBeFalsy();
        expect(queryByText(/closed/i)).toBeFalsy();
    })
    it('buttons text change', ()=> {
        const click = jest.fn();
        const {getByText} = render(<Dashboard/>);
        const open = getByText(/close gate/i);
        fireEvent.click(open);
        getByText(/open gate/i);
        const lock = getByText(/lock gate/i)
        fireEvent.click(lock);
        getByText(/unlock gate/i);
        const unlock = getByText(/unlock gate/i);
        fireEvent.click(unlock);
        getByText(/lock gate/i);
        getByText(/open gate/i);
        const openGate = getByText(/open gate/i)
        fireEvent.click(openGate);
        getByText(/close gate/i);


    })
})