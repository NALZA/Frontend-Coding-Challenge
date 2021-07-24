import React from 'react';
import { render } from '@testing-library/react';
import {UserSelection} from '../UserSelection'

describe("renders selection radio buttons", () => {
    it("renders 2 radio buttons with Manager selected", ()=>{
        const handleUserType = (event: React.ChangeEvent<HTMLInputElement>) => {};
        const component = render(<UserSelection userType="Manager" onUserTypeChange={handleUserType} /> );

        const manager = component.getByTestId("manager")
        component.getByTestId("admin")
        expect(manager).toHaveAttribute("checked");
    })
    it("renders 2 radio buttons with Admin selected", ()=>{
        const handleUserType = (event: React.ChangeEvent<HTMLInputElement>) => {};
        const component = render(<UserSelection userType="Admin" onUserTypeChange={handleUserType} /> );

        const admin = component.getByTestId("admin");
        expect(admin).toHaveAttribute("checked");
    })
})