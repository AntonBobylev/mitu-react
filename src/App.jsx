import UserCard from "./UserCard.jsx";

function App() {
    const handleClick = (name) => {
        alert(`Вы нажали на кнопку ${name}`);
    };

    return (
        <>
            <UserCard name='Мария' onButtonClick={handleClick} />
            <UserCard name='Дима' onButtonClick={handleClick} />
            <UserCard name='Иван' onButtonClick={handleClick} />
        </>
    );
}

export default App
