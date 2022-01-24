import {useState} from 'react';



function Home(){
    return ( 
    <div>
        <h1>ate que em fim no ar</h1>
        <p> LIKE </p>
        <Contador/>
        <div>e isso ai persistencia e perceveranca</div>
        <img src='../mulher.jpg'></img>
        <h2>to feliz!!!</h2>

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
        <button onClick={adicionarContador}>adicionar</button>


        </div>
    )
}

export default Home