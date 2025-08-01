import { useState } from 'react';
import Input from './Input.jsx';
import Botao from './Botao.jsx';

export default function FormRedefinirSenha({ onVoltar }) {
  const [email, setEmail] = useState('');

  const handleRedefinir = (e) => {
    e.preventDefault();
    if (!email) {
      alert('Preencha o e-mail.');
      return;
    }

    alert('Link de redefinição enviado (simulado).');
  };

  return (
    <form onSubmit={handleRedefinir} className="form-redefinir">
      <Input
        tipo="email"
        valor={email}
        aoMudar={(e) => setEmail(e.target.value)}
        placeholder="Seu e-mail"
        classeExtra="input-redefinir"
      />

      <Botao tipo="submit" texto="Enviar link" classeExtra="btn-redefinir" />
      <Botao texto="Voltar ao login" onClick={onVoltar} classeExtra="btn-link" />
    </form>
  );
}
