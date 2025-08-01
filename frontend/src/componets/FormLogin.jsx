import { useState } from 'react';
import Input from './Input.jsx';
import Botao from './Botao.jsx';

export default function FormLogin({ onRedefinir }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !senha) {
      alert('Preencha todos os campos.');
      return;
    }

    alert('Login simulado com sucesso!');
  };

  return (
    <form onSubmit={handleLogin} className="form-login">
      <Input
        tipo="email"
        valor={email}
        aoMudar={(e) => setEmail(e.target.value)}
        placeholder="Seu e-mail"
        classeExtra="input-login"
      />

      <Input
        tipo="password"
        valor={senha}
        aoMudar={(e) => setSenha(e.target.value)}
        placeholder="Sua senha"
        classeExtra="input-login"
      />

      <Botao tipo="submit" texto="Entrar" classeExtra="btn-login" />

      <Botao texto="Esqueci minha senha" onClick={onRedefinir} classeExtra="btn-link" />
    </form>
  );
}
