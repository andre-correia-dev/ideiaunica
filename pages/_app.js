
 import MainContainer from "./componentes/maincontainer"
 
 
 


function MyApp({ Component, pageProps }) {
    return(
    <MainContainer>
    <Component {...pageProps} />
    </MainContainer>


   )
  }

  export default MyApp