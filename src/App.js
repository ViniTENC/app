import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"
//import container from react-bootstrap
import { Container } from 'react-bootstrap'

function App() {
    const edad= 17
    const usuarios = ["Tomas", "Facundo", "Juan"]
    return (
        <>
            <Header/>
            <Main
                nombre="Vicente"
                apellido="Tenconi"
                edad={edad}
                usuarios={usuarios}
            />
            <Footer/>
        </>
    )
}

export default App