import "./MyComponent.css";

const MyComponent  = () => {
    return (
        <div>
            <h1>Meu Componente</h1>
            <p>Este é o parágrafo do meu componente</p>
            <p className="my-component-text">Este também é do componente, onde se utilizamos o className para 
                estilização de componentes, evitamos que ele vaze para outras tags
            </p>
            <p style={{color: "blue"}}>Css inline do React</p>
        </div>
    );
}

export default MyComponent;