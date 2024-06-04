import React, { useState } from 'react';
import NavigationMenu from './Menu';
import CadastroForm from './Cadastro';
import ListagemItens from './Lista';

function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [page, setPage] = useState('Home');

  const adicionarUsuario = (usuario) => {
    setUsuarios([...usuarios, usuario]);
};

  return (
      <div class="container">
        <NavigationMenu setPage={setPage} />
        {page === 'Home' && <h2>Menu</h2>}
        {page === 'Cadastro' && <CadastroForm adicionarUsuario={adicionarUsuario} />}
        {page === 'Lista' && <ListagemItens usuarios = {usuarios}/>}
      </div>
  );
};

export default App;
