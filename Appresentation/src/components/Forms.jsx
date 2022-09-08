import { useState} from "react";

export default function Forms(){

 //Função de sumbmissão do formulário
 let submitUser=(e)=>{
    
    //Validação dos caracteres do nome
    let validateName = testName(name) && name;
    //Validação do email
    let validateEmail = testEmail(email) && email;

    if(validateName && validateEmail){
      e.preventDefault()
      //Sweet Alert
      Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Obrigado!',
        text:"Logo mais entrarei em contato",
        showConfirmButton: false,
        timer: 1800
      })
      //função de reload para a página
      function reloadPage(){location.reload()}
      setTimeout(reloadPage,2000); }

    else if(!validateName){
      e.preventDefault();
      Swal.fire({
        imageUrl: 'https://c.tenor.com/Iv-vsEnjbGwAAAAd/dog.gif',
        imageWidth: 160,
        imageHeight: 240,
        imageAlt: 'Custom image',
        title: 'Oops... Nome inválido',
        text: `Digite um nome com letras e espaços.
               Se quiser pode colocar acentos.`,
        confirmButtonColor:"green"
        
      })
    }

    

    else if(!validateEmail){
      e.preventDefault();
      Swal.fire({
        imageUrl: 'https://c.tenor.com/yPsALWQL1EEAAAAd/darcy-dog.gif',
        imageWidth: 160,
        imageHeight: 240,
        imageAlt: 'Custom image',
        title: 'Epaaa... Email inválido',
        text: `Tem certeza que esse Email existe?`,
        confirmButtonColor:"green"
      })
    }

    //Regex do nome
    function testName(name) {
      const letras = /^([A-zÀ-ú]|\s)+$/
      const espaco = /^[\s]/

      return (letras.test(name) && !espaco.test(name))?true:false;
    }

    //Regex do email
    function testEmail(email) {
      return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }

    /* //dados recebidos
    console.log(name);
    console.log(subject);
    console.log(name);
    console.log(email);
    console.log(mesage); */
  } 
  
  //Captura dos inputs
  const [name,setName] = useState();
  const [email,setEmail] = useState();
  //const [subject,setSubject] = useState();
  //const [mesage,setMesage] = useState();

  //hook para alterar a variável stopSpace
  const[validate,setValidate]=useState(false);
  //Função para alterar a variável responsavel pela abertura da SideBar
  function stopSideBar(){
    setValidate(true);
  }


  return(
    
    
    <form name="contact" className="c-form" onSubmit={submitUser}>

                <div className="c-form__group">
                  <label htmlFor="name" className="c-form__label">Nome</label>
                  <input type="text" 
                  placeholder="Digite seu nome" 
                  id="name"  
                  className="c-form__control"
                  onChange={(e)=> {setName(e.target.value)}}
                  onFocus={stopSideBar}/>
                </div>

                <div className="c-form__group">
                  <label htmlFor="email" className="c-form__label">E-mail</label>
                  <input type="text"
                   placeholder="Digite seu  melhor e-mail" 
                   id="email" 
                   className="c-form__control"
                   onChange={(e)=> setEmail(e.target.value)}/>
                </div>

                <div className="c-form__group">
                  <label htmlFor="subject" className="c-form__label">Assunto</label>
                  <select id="subject" 
                  className="c-form__control" 
                  onChange={(e)=> setSubject(e.target.value)}>
                    <optgroup label="Qual o assunto?">
                    <option value="oportunidade">Oportunidade</option>
                    <option value="orçamento">Orçamento</option>
                    <option value="parceria">Parcerias</option>
                    <option value="outro">Outro</option>
                    </optgroup>
                    
                  </select>
                </div>

                <div className="c-form__group">
                  <label htmlFor="messager" className="c-form__label">Mensagem</label>
                  <textarea rows="5"
                   placeholder="Se desejar, explique-me melhor..."
                    id="messager" 
                    className="c-form__control"
                    onChange={(e)=> setMesage(e.target.value)}></textarea>
                </div>

                <div className="c-form__group">
                  <button className="c-btn" type="submit">Enviar</button>
                </div>

              </form>
     )
}