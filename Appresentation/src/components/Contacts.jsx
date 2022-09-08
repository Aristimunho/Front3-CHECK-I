
import Forms from "./Forms";

export default function Contacts(){
    return(
        
        <div className="l-page" id="contatos">
        <section>
          <h1 className="title">Posso te ajudar?</h1>

          <nav className="c-nav">
            <a className="c-nav__item" href="">Github</a>
            <a className="c-nav__item" href="">Linkedin</a>
            <a className="c-nav__item" href="tel:+5521972190000">Telefone</a>
          </nav>
          <Forms/>
        </section>

        <footer className="u-my-2">
          <marquee behavior="scroll">Todos os direitos reservados  a Caramelo.</marquee>
        </footer>

      </div>
    )
}
