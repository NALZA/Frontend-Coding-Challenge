import React from 'react';
import { fireEvent, getByLabelText, render } from '@testing-library/react';
import {UserSelection} from '../UserSelection'

describe("renders selection radio buttons", () => {
    it("renders 2 radio buttons with Manager selected", ()=>{
        const handleUserType = (event: React.ChangeEvent<HTMLInputElement>) => {};
        const component = render(<UserSelection userType="Manager" onUserTypeChange={handleUserType} /> );

        const manager = component.getByTestId("manager")
        expect(manager).toHaveAttribute("checked");
    })
    it("renders 2 radio buttons with Admin selected", ()=>{
        const handleUserType = (event: React.ChangeEvent<HTMLInputElement>) => {};
        const component = render(<UserSelection userType="Admin" onUserTypeChange={handleUserType} /> );

        const admin = component.getByTestId("admin");
        expect(admin).toHaveAttribute("checked");
    })
    it('calls "handelUserType" prop on selection', () => {
        const handleUserType = jest.fn();
        const component = render(<UserSelection userType="Manager" onUserTypeChange={handleUserType} /> );
        fireEvent.click(component.getByTestId('admin'));
        expect(handleUserType).toHaveBeenCalled();
    })
    it("Match Snapshot", ()=>{
        const handleUserType = (event: React.ChangeEvent<HTMLInputElement>) => {};
        const component = render(<UserSelection userType="Admin" onUserTypeChange={handleUserType} /> );
        expect(component).toMatchSnapshot();
    })
})