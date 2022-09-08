
import NavSideBar from "./components/NavSideBar";
import MainSection from "./components/MainSection";
import AboutMeSection from "./components/AboutMeSection";
import Contacts from "./components/Contacts";

function App() {
  
  return (
    <>
      <div className="l-app">
        <NavSideBar/>

        <div className="l-content">
          <MainSection/>
          <AboutMeSection/>
          <Contacts/>
        </div>

      </div>
    </>
  )
}

export default App

/*
 1. Apreentar a sideBar sempre que houver o click no botão MENU:✅
 
 2. Escape pode abrir e fechar a sideBar.✅

 3. Corrigir os erros presentes no dev tools.✅

 4. Capturar os valores do forms ✅

 5. Validar se os campos foram preenchidos corretamente ✅
    - Caso positivo: Aprensente uma msg sobre o form ter sido enviado e logo será feito contato✅
      Adicionar o envio na pagina (DOM)✅
    - Caso negativo: Apresente o motivo de o campo estar errado.✅
  
 6. Gere o build do projeto ???  

 7. Hospede a aplicação no NETLIFY

 8. Converta o code CSS para SASS✅

 */
