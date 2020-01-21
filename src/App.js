import React, { useState, useEffect } from 'react';

import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

function App() {
  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    )
  },[]);

  async function handleAddDev(e) {
    e.preventDefault();


  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>
          <div className="input-block">
            <label htmlFor="">Usuário do Github</label>
            <input 
              name="github_username" 
              id="github_username" 
              required 
              value={github_username}
              onChange={e => setGithubUsername(e.target.value)}
            />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input 
              name="techs" 
              id="techs" 
              required
              value={techs}
              onChange={e => setTechs(e.target.value)}
            />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input 
                type="number" 
                name="latitude" 
                id="latitude" 
                value={latitude} 
                required
                onChange={e => setLatitude(e.target.value)}
               />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input 
                type="number" 
                name="longitude" 
                id="longitude" 
                value={longitude} 
                required
                onChange={e => setLongitude(e.target.value)}
              />
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
