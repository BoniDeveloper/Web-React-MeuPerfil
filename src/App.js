import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <MPerfil />
      </div>
    );
  }
}
export default App;
function MPerfil() {
  let img = 'https://media-exp1.licdn.com/dms/image/C4E03AQHU649ESTD62w/profile-displayphoto-shrink_800_800/0/1584541499307?e=1668643200&v=beta&t=b99gqTQkmDrH1pbwoppkELkZDNmfCr7BHsXfD_NtTO8';
  return (
    <>
      <div id="foto">
        <img src={img} width={200} height={200} id={'eu'} />
      </div>
    <h1>Bruno Boni</h1>
    <div class="infos"></div>
    <div class="infos" id="dados_pessoais">
    
      <h3>Dados Pessoais</h3>
    
      <p>E-mail: brunoboni03@gmail.com <br></br>
      Telefone: (13) 991189308, (13) 34679161 <br></br>
      Endereço: João Batista Robortela, 150
      Catiapoã, São Vicente <br></br>
      Idade: 18 anos <br></br>
      Nacionalidade: Brasileiro
      </p>
    
    </div>
    <div class="infos" id="formacao">
      <h3>Formação</h3>
      <p>
      Análise e Desenvolvimento de Sistemas | UNIP <br></br>
      Redes de Computadores | SENAI <br></br>
      Desenvolvimento Web Full Stack | SENAI <br></br>
      </p>
    </div>
    <div class="infos">
      
    </div>
    <div class="infos" id="experiencia">
      <h3>Experiência</h3>
      <p>
      Auxiliar de Suporte Técnico <br></br>
      Empresa: Alex Ferreira Costa <br></br>
      Local: Cólegio Integração - Av. Capitão-<br></br>
      Mor Aguiar, 572 - Centro, São Vicente - SP
      </p>
    </div>
    <div class="infos" id="projetos">
      <h3>Projetos</h3>
      <p>
      <a href="https://github.com/BoniDeveloper/Web-NodeJS-ReactJS">React.js</a><br></br>
      <a href="https://github.com/BoniDeveloper/backend-pedidos">Rest API</a>
      </p>
    
    
    
    
    
    </div>
    
    
    
    
    </>
    
  );
}