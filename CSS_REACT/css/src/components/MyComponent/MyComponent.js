import { useState } from "react";
import "./MyComponent.css";

const MyComponent  = () => {

    const [color, setColor] = useState("blue");

    const changeColor = (color) => {
        setColor(color)
    }

    return (
        <div>
            <h1>Meu Componente</h1>
            <p>Este é o parágrafo do meu componente</p>
            <p className="my-component-text">Este também é do componente, onde se utilizamos o className para 
                estilização de componentes, evitamos que ele vaze para outras tags
            </p>
            <p style={{color: "blue"}}>Css inline do React</p>

            <p style={ color == "blue"? {color: "blue"} : color == "red"? {color: "red"} : {}}>css inline dinamico</p>
            <p style={ color == "blue"? ({color: "red"}) : color == "red"? ({color: "blue"}) : {}}>invertendo as coisas kk</p>
            <button onClick={() => changeColor("blue")}>Deixa inline dinamico AZUL!</button>
            <button onClick={() => changeColor("red")}>Deixa inline dinamico VERMELHO!</button>
        </div>
    );
}

export default MyComponent;