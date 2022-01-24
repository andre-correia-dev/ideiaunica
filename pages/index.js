import {useState} from 'react';



function Home(){
    return ( 
    <div>
        <h1>PRIMEIRO COMPONENTE REACT</h1>
        <Contador/>
        <div>e isso ai persistencia</div>
        <img src='../mulher.jpg'></img>

    </div>
    )
}
function Contador(){
    const [Contador,setContador]=useState(1);

    function adicionarContador(){
        setContador(Contador + 1);
    }
    return(
        <div>
        <div>{Contador} </div>
        <button onClick={adicionarContador}>adicionar</button>


        </div>
    )
}

export default Home