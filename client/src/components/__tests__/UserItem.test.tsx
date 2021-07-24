import { render} from '@testing-library/react';
import { UserItem } from '../UserItem';

describe("Creates a card with a user avatar, name and role", () => {
    it("Creates a manager card for Jim James", () =>{
        const card = render(<UserItem name="Jim James" role="Manager" /> );
        expect(card.getByTestId('avatar').textContent).toBe('J');
        expect(card.getByTestId('name').textContent).toBe('Jim James');
        expect(card.getByTestId('role').textContent).toBe('Manager');
    })
})