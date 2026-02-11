import logo from './logo.svg';
import './App.css';
import LogoReact from "./assets/logo512.png";
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';


function App() {
  return (
    <div className="App">
      <h1>Avançando em React</h1>
      <ManageData></ManageData>
      <ListRender></ListRender>
      <ConditionalRender></ConditionalRender>
{/* 
      Imagens publicas
      <div>
        <img src="/logo192.png" alt="LogoReact" />
      </div>

      {/**Imagens em Src */}
      {/* <div>
        <img src={LogoReact} alt="" />
      </div> */}


    </div>
  );
}

export default App;
