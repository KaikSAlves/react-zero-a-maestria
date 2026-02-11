
import './App.css';
import LogoReact from "./assets/logo512.png";
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import { useState } from 'react';
import CarDetails from './components/CarDetails';


function App() {
  const name = "Mateus";
  const [userName] = useState("Maria");




  return (
    <div className="App">
      <h1>Avançando em React</h1>
      <ManageData></ManageData>
      <ListRender></ListRender>
      <ConditionalRender></ConditionalRender>
      <ShowUserName name={name} useStateName={userName}></ShowUserName>

      {/*ao utilizar as props com o conceito de destructuring é importante passa-las na mesma orderm que esta definido no componente*/}

      <CarDetails brand="Ferrari" km={100000} color="red" newCar={false}></CarDetails>
      <CarDetails brand="Reaproveitando" km={100000} color="propriedades" newCar={true}></CarDetails>
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
