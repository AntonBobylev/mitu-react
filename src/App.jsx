import AlertButton from "./AlertButton.jsx";

function App() {
    const name = 'Мир',
          year = 2026;

    return (
        <>
            <h1>Hello, {name}!</h1>
            <p>текущий год: {year}</p>
            <AlertButton />
            <AlertButton />
            <AlertButton />
        </>
    );
}

export default App
