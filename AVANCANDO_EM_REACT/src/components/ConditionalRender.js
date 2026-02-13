import { useState } from "react"

const ConditionalRender = () => {

  const [x] = useState(true);

  const [name, setName] = useState("Carlos");

  const transformName = () => {
    
    setName((prevState) => {

        if (prevState == "João") return "Carlos";

        
        return "João";
    });
  }


  return (
    <div>
        <h1>Isso será exibido?</h1>
        {x && <p>Se x for true, sim!</p>}
        {!x && <p>Agora x é falso!</p>}

        <h1>If ternário</h1>
        <button onClick={() => transformName()}>Clique aqui para transformar seu nome!</button>
        {name == "João"? (
            <div>
                <p>O nome é {name}</p>
            </div>
        ) : 
        (
            <div>
                <p>O nome não é João, e sim {name}</p>
            </div>
        )}
    </div>
  )
}   

export default ConditionalRender