// Test away!
import React from "react";
import { render, fireEvent } from "react-testing-library";
import Controls from "./Controls";
describe("<Controls />", () => {
   it("testing button text", () => {
     const closeSpy = jest.fn();
     const { queryByText, getByText } = render(<Controls locked={false} closed={false} toggleClosed={closeSpy} toggleLocked={closeSpy}/>);
     const lockButton = queryByText(/lock gate/i);
     expect(lockButton.disabled).toBe(true);
     fireEvent.click(lockButton);
     const closeButton = queryByText(/close gate/i);
     expect(closeButton.disabled).toBe(false);
     fireEvent.click(closeButton);
     expect(closeSpy).toBeCalled();
   });
});