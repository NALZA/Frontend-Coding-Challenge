import {FC} from 'react'
import styled from 'styled-components'

const Radio = styled.input`
    -ms-transform: scale(1.5); /* IE 9 */
    -webkit-transform: scale(1.5); /* Chrome, Safari, Opera */
    transform: scale(1.5);
`;

const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px 0px 20px 0px;
    
`;

const RadioHolder = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    font-size: 1.17em;
    padding: 15px;

    &.blue{
        background-color: #e4f3ff;
        border-radius: 10px;
    }
`;

interface Props {
    userType: string
    onUserTypeChange: (event: React.ChangeEvent<HTMLInputElement>) => void; 
}

export const UserSelection:FC<Props> = (props) => {
    return (
        <div onChange={props.onUserTypeChange}>
            <h2>User Types</h2>
            <InputGroup>
                <RadioHolder className={props.userType === "Admin" ? "blue": ""}>
                    <Radio type="radio" value="Admin" name="userType" id="admin" data-testid="admin" defaultChecked={props.userType === "Admin"} /> <label htmlFor="admin">Admin</label>
                </RadioHolder>
                <RadioHolder className={props.userType === "Manager" ? "blue": ""}>
                    <Radio  type="radio" value="Manager" name="userType" id="manager" data-testid="manager" defaultChecked={props.userType === "Manager"}/> <label htmlFor="manager">Manager</label>
                </RadioHolder>
            </InputGroup>
        </div>
    )
}
