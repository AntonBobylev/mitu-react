import {useState} from "react";

function App() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Email', email);
        console.log('Password', password);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input type="email"
                       placeholder='Email'
                       value={email}
                       onChange={(event) => setEmail(event.target.value)}
                />
            </div>
            <div>
                <input type="password"
                       placeholder='Password'
                       value={password}
                       onChange={(event) => setPassword(event.target.value)}
                />
            </div>
            <button type="submit">Войти</button>
        </form>
    );
}

export default App
