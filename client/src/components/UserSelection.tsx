import {FC} from 'react'

interface Props {
    userType: string
    onUserTypeChange: (event: React.ChangeEvent<HTMLInputElement>) => void; 
}

export const UserSelection:FC<Props> = (props) => {
    return (
        <div onChange={props.onUserTypeChange}>
            <h2>User Types</h2>
                    <input type="radio" value="Admin" name="userType" id="admin" data-testid="admin" defaultChecked={props.userType === "Admin"} /> <label htmlFor="admin">Admin</label>
                    <input type="radio" value="Manager" name="userType" id="manager" data-testid="manager" defaultChecked={props.userType === "Manager"}/> <label htmlFor="manager">Manager</label>
        </div>
    )
}
