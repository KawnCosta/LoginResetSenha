import { useState } from "react";
import Login from '../pages/Login.jsx';
import RedefinirSenha from '../pages/RedefinirSenha.jsx';

// Componente principal que controla a navegação entre as páginas

export default function App() {
    const [TelaAtual, setTelaAtual] = useState('login');

    return (
        <div className="app-container">
            {TelaAtual === 'login' ? (
                <Login onRedefinir={() => setTelaAtual('redefinir')} />
            ) : (
                <RedefinirSenha onVoltar={() => setTelaAtual('login')} />
            )}
        </div>
    );
}