import React from 'react';

const NavigationMenu = ({ setPage }) =>{
  return (
    <nav>
        <div class="container">
         <ul>
            <li><button onClick={() => setPage('Home')}>Home</button></li>
            <li><button onClick={() => setPage('Cadastro')}>Cadastro</button></li>
            <li><button onClick={() => setPage('Lista')}>Lista</button></li>
        </ul>
        </div>
    </nav>
  );
}

export default NavigationMenu;