import {useState} from 'react';

 

import './_app.css';
function Home(){
    return ( 
    <div>
        <div className='header'>
           <h1> Cardapio virtual 🍔 🍟 🍻</h1>
           

        </div>
    <div className='linha'>
    <img id='pinup' src='burguer1.jpg' alt='figure' width={160} height={170}></img>
        
    
       <img src='sanduba.jpg' alt='figure' width={170} height={160}></img>
       
       </div>
       <div className='linha'>

       <img src='burger2.jpg' alt='figure' width={170} height={160}></img>

       <img src='hamburger.jpg' alt='figure' width={170} height={160}></img>
       </div>
       <div className='linha'>

<img src='salgadinho.jpg' alt='figure' width={170} height={160}></img>

<img src='hotdog.jpg' alt='figure' width={170} height={160}></img>

</div>

<div className='linha'>

<img src='batata2.jpg' alt='figure' width={170} height={160}></img>

<img src='cocacola.jpg' alt='figure' width={170} height={160}></img>

</div>

<div className='linha'>

<img src='suco.jpg' alt='figure' width={170} height={160}></img>

<img src='cerveja.jpg' alt='figure' width={170} height={160}></img>

</div>

     <div className='pinup'>
         <img src='pinup.png' alt='figure' width={100} height={200}></img>
     </div>
     




       
        <Contador/>
        <footer className='footer'>
            InfinitSpace🌎DeV

        </footer>
        </div>

    )
}
function Contador(){
    const [Contador,setContador]=useState(0);

    function adicionarContador(){
        setContador(Contador + 1);
    };
    return(
        <div>
        <div>{Contador} </div>
        <button onClick={adicionarContador}>gostei</button>
        


        </div>
    )
}

export default Home