import WelcomeMessage from "./WelcomeMessage.jsx";

function App() {
    return (
        <>
            <WelcomeMessage name='Анна' age={25} />
            <WelcomeMessage name='Иван' age={30} />
            <WelcomeMessage name='Дима' age={15} />
        </>
    );
}

export default App
