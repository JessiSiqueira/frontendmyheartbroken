import { Link } from 'react-router-dom';
import '../css.pages/formPage.css'
import formImage from '../images/7375349.png';

function FormPage() {
    return (
   <>
     <body>
      <div className='box'>
       <div className='img-div'>
         <img src={formImage} className='img' />
       </div>
       <div className='form-div'>
         <h1><span className='spanh1'>Cadas</span>tre-se</h1>
         <form>
           <h3>Nome:</h3>
           <input
             className="input"
             type="text"
             placeholder="Nome" />
           <h3>Email:</h3>
           <input className="input"
             type="email"
             placeholder="Email" />
           <div className='divSenha'>    
             <h3>Senha:</h3>
             <input className="input-senha"
               type="password"
               placeholder="Senha" />
             <h3>Confirme sua senha:</h3>
             <input className="input-senha"
               type="password"
               placeholder="Senha" />
           </div>   
           <p>Mínimo de 8 caracteres.</p>
           <h3>Escreva abaixo os motivos que levaram ao término:</h3>
           <textarea />
           <Link to ="/homePage">
              <button className='button'>Enviar</button>
           </Link>
         </form>
       </div>
       </div>
     </body>
   </>  
)
}

export default FormPage;