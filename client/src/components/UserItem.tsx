interface Props {
    name: string,
    role: string
}

export const UserItem = (props: Props) => {
    return (
        <div>
            <h3 data-testid="avatar">
                {props.name[0]}
            </h3>
            <div>
                <p data-testid="name">{props.name}</p>
                <p data-testid="role">{props.role}</p>
            </div>
        </div>
    )
}
