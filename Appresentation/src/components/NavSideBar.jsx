import { useState,useEffect } from "react";
//props para desativar o evento de teclado quando é digitado algo nos inputs
export default function NavSideBar({stopSpace}) {

  //Hook para gerenciar o estado da  classe do componente
  const [changeClassNavBar, setClass] = useState("l-sidebar");

  //função para mudar a classe da NavBar
  let changeNavBar = () => {
     if (changeClassNavBar == "l-sidebar l-sidebar--open") {
     setClass("l-sidebar l-sidebar--close");} 

     else {setClass("l-sidebar l-sidebar--open");}
    };

    //hook para mudar a navbar conforme o teclado
    useEffect(()=>{
        document.onkeydown = (event)=>{
        if(event.key=="Escape" && !stopSpace){changeNavBar();}
        }
    },)

  return (
    <>
      <div 
      className="l-sidebar__btn"   
      onClick={changeNavBar}>
      Menu
      </div>

      <div className={changeClassNavBar}>
        <div className="u-text-align-end" onClick={changeNavBar}>X</div>
        <h1 className="l-logo">Caramelo</h1>
        <nav className="c-sidebar">
          <a className="c-nav__item" href="#sobre-mim"onClick={changeNavBar}>sobre mim</a>
          <a className="c-nav__item" href="#contatos"onClick={changeNavBar}>contatos</a>
        </nav>
      </div>
    </>
  )
}
