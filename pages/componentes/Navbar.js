import Link from "next/link"
import styles from '../styles/Navbar.module.css'



export default function Navbar(){
    return(
        <div  className={styles.Navbar}>

        
        <div>
            <Link href='/'><button>Home</button></Link>
        
       
          <Link href='/produtos'><button>Produtos</button></Link>
    
        
          <Link href='/sobre'><button>Anuncios</button></Link>
          </div>

          
         







          <h1>🌎SantanaNews🌎 </h1>
          
          <p>Tudo que voce prescisa saber na hora certa!!</p>
        
        
        
      
  
    </div>
    )
}