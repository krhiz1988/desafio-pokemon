import { Container } from "react-bootstrap"
export default function Home () {
  
    return (
        <Container className="text-center">
        <h1 className="pt-5">
          Bienvenido Maestro Pokemón 
        </h1>
        
        <img style={{width: '20%', height: '20%', marginTop: '30px'}} src="/img/pikachu.png"  />
      </Container>
    )
  }