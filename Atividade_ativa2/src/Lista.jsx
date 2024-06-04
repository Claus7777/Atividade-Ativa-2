import React from 'react';


function ListagemItens({ usuarios }) {
  return (
    <div className="container">
      <h2>Usuários cadastrados:</h2>
      <ul>
        {usuarios.map((usuario, index) => (
          <li key={index}>{usuario.nome} - {usuario.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListagemItens;