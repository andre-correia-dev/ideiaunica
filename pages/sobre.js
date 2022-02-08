import styles from './styles/batata.module.css'


export default function batata(){
    return (
        <div className={
            styles.anuncio
        }>
            <h1>Viu como voce viu!!!</h1>
               <h1> ANUNCIE AQUI!!!
            </h1>
             <button>
            <a href='/'>voltar</a>
            </button>


        </div>
    );  
}
