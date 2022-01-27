import {useState} from 'react';



function Home(){
    return ( 
    <div>
        <h1>teste deploy


        </h1>
        <p> LIKE </p>
        <Contador/>
        
        <img src='./img/burguer.jpg'></img>
    

    </div>
    )
}
function Contador(){
    const [Contador,setContador]=useState(0);

    function adicionarContador(){
        setContador(Contador + 1);
    }
    return(
        <div>
        <div>{Contador} </div>
        <button onClick={adicionarContador}>gostei</button>


        </div>
    )
}

export default Home