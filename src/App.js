import React from 'react';

import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="">Usuário do Github</label>
            <input name="github_username" id="github_username" required />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>
          
          <button type="submit">Salvar</button>
        </form>
      </aside>
      
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/19976090?s=460&v=4" alt="Hikaro Cordeiro"/>
              <div className="user-info">
                <strong>Hikaro Cordeiro</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Bio text goes here</p>
            <a href="https://github.com/hikarocordeiro">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/19976090?s=460&v=4" alt="Hikaro Cordeiro"/>
              <div className="user-info">
                <strong>Hikaro Cordeiro</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Bio text goes here</p>
            <a href="https://github.com/hikarocordeiro">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/19976090?s=460&v=4" alt="Hikaro Cordeiro"/>
              <div className="user-info">
                <strong>Hikaro Cordeiro</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Bio text goes here</p>
            <a href="https://github.com/hikarocordeiro">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/19976090?s=460&v=4" alt="Hikaro Cordeiro"/>
              <div className="user-info">
                <strong>Hikaro Cordeiro</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Bio text goes here</p>
            <a href="https://github.com/hikarocordeiro">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
