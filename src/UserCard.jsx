function UserCard({name, onButtonClick}) {
    return (
        <div>
            <h1>Привет, {name}</h1>
            <button onClick={() => onButtonClick(name)}>
                press me
            </button>
        </div>
    )
}

export default UserCard;
