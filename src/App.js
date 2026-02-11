
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

function App() {
  const name = "Mateus";
  const [userName] = useState("Maria");

  const dataCar = [{"name":"98","km":7631395,"color":"Crimson","newCar":true},
                  {"name":"Mazda3","km":8926806,"color":"Purple","newCar":false},
                  {"name":"Tiburon","km":4742782,"color":"Goldenrod","newCar":true},
                  {"name":"E-Series","km":8220331,"color":"Violet","newCar":true},
                  {"name":"MX-6","km":2328898,"color":"Aquamarine","newCar":false},
                  {"name":"Model T","km":8941632,"color":"Mauv","newCar":true},
                  {"name":"300","km":2444878,"color":"Goldenrod","newCar":true},
                  {"name":"940","km":7695079,"color":"Pink","newCar":true},
                  {"name":"MKT","km":6384010,"color":"Mauv","newCar":false},
                  {"name":"Camaro","km":1392116,"color":"Turquoise","newCar":false}];


  return (
    <div className="App">
      <h1>Avançando em React</h1>
      <ManageData></ManageData>
      <ListRender></ListRender>
      <ConditionalRender></ConditionalRender>
      <ShowUserName name={name} useStateName={userName}></ShowUserName>

      {/*ao utilizar as props com o conceito de destructuring é importante passa-las na mesma orderm que esta definido no componente*/}
    
      {dataCar.map((car) => (
            <CarDetails brand={car.brand} km={car.km} color={car.color} newCar={car.newCar}></CarDetails>   
      ))}

      <Fragment></Fragment>
      <Container>

        <p>Este é o conteúdo</p>

      </Container>

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
