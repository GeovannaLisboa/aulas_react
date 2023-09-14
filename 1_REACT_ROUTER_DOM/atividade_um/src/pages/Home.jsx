import {Link} from "react-router-dom"

function Home() {
    return(
        <div>
            <h1>Seja bem vindo!</h1>
            <p>Tenho uma mensagem secreta para você:</p>
            <Link to={"/mensagem"}>Ler mensagem secreta</Link>
        </div>
    )
}

export default Home