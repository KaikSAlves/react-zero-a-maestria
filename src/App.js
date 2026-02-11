
import './App.css';
import LogoReact from "./assets/logo512.png";
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import { useState } from 'react';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';

function App() {
  const name = "Mateus";
  const [userName] = useState("Maria");

  
  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  }

  function showMessage(){
    console.log("Mostrando mensagem no console: f12 para observar mais!s");
  }

  const dataCar = [{"keyCar": 1123, "brand":"98","km":7631395,"color":"Crimson","newCar":true},
                  {"keyCar": 23454, "brand":"Mazda3","km":8926806,"color":"Purple","newCar":false},
                  {"keyCar": 37624, "brand":"Tiburon","km":4742782,"color":"Goldenrod","newCar":true},
                  {"keyCar": 41236, "brand":"E-Series","km":8220331,"color":"Violet","newCar":true},
                  {"keyCar": 466235, "brand":"MX-6","km":2328898,"color":"Aquamarine","newCar":false},
                  {"keyCar": 6109, "brand":"Model T","km":8941632,"color":"Mauv","newCar":true},
                  {"keyCar": 7872, "brand":"300","km":2444878,"color":"Goldenrod","newCar":true},
                  {"keyCar": 81002, "brand":"940","km":7695079,"color":"Pink","newCar":true},
                  {"keyCar": 9231, "brand":"MKT","km":6384010,"color":"Mauv","newCar":false},
                  {"keyCar": 10138, "brand":"Camaro","km":1392116,"color":"Turquoise","newCar":false}];


  return (
    <div className="App">
      <h1>Avançando em React</h1>
      <ManageData></ManageData>
      <ListRender></ListRender>
      <ConditionalRender></ConditionalRender>
      <ShowUserName name={name} useStateName={userName}></ShowUserName>

      {/*ao utilizar as props com o conceito de destructuring é importante passa-las na mesma orderm que esta definido no componente*/}
    
      {dataCar.map((car) => (
            <CarDetails keyCar={car.keyCar} brand={car.brand} km={car.km} color={car.color} newCar={car.newCar}></CarDetails>   
      ))}

      <Fragment></Fragment>
      <Container>

        <p>Este é o conteúdo</p>

      </Container>

      <ExecuteFunction myFunction={showMessage}></ExecuteFunction>
      <Message msg={message}></Message>
      <ChangeMessageState handleMessage={handleMessage}></ChangeMessageState>
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
