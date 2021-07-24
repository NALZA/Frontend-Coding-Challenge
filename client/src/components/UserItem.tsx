import styled from 'styled-components';

const Card = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    height: 60px;
`;

const Avatar = styled.h3`
    display: flex;
    align-items: center;
    justify-content: center;
    color: SteelBlue;
    background-color: #e4f3ff;
    border-radius: 10px;
    width: 50px;
    height: 50px;
`;

const NameTag = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

const Role = styled.p`
    margin: 0;
    font-size: .95em;
    color: gray;
`;

const Name = styled.p`
    margin: 0;
    font-size: 1.17em;
`;

interface Props {
    name: string,
    role: string
}

export const UserItem = (props: Props) => {
    return (
        <Card>
            <Avatar data-testid="avatar">
                {props.name[0]}
            </Avatar>
            <NameTag>
                <Name data-testid="name">{props.name}</Name>
                <Role data-testid="role">{props.role}</Role>
            </NameTag>
        </Card>
    )
}
