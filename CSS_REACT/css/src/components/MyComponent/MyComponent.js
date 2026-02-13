import { useState } from "react";
import "./MyComponent.css";

const MyComponent  = () => {

    const [color, setColor] = useState("blue");

    const changeColor = (color) => {
        setColor(color)
    }

     const data = 
        [{"id": 1, "nome":"Melisent","idade":23,"profissao":"Training"},
        {"id": 2, "nome":"Lynn","idade":82,"profissao":"Human Resources"},
        {"id": 3, "nome":"Orv","idade":43,"profissao":"Support"},
        {"id": 4, "nome":"Romy","idade":88,"profissao":"Research and Development"},
        {"id": 5, "nome":"Kalila","idade":32,"profissao":"Business Development"}];

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

             <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Idade</th>
                        <th>Profissao</th>
                        <th>Ápto a carteira?</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.nome}</td>
                            <td>{item.idade}</td>
                            <td>{item.profissao}</td>
                            <td className={item.idade >=18 ? "success" : "danger"} >{item.idade >= 18? "Sim" : "Não"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
}

export default MyComponent;