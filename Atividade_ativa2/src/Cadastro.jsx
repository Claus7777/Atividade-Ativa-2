import React, { useState } from 'react';

function CadastroForm({ adicionarUsuario }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    adicionarUsuario({ nome, email });
    setNome('');
    setEmail('');
  };

  return (
    <div class="container">
    <h2>Cadastro</h2>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Cadastrar</button>
    </form>
    </div>
  );
}

export default CadastroForm;