import { Link } from 'react-router-dom';
import '../css.pages/formPage.css'
import formImage from '../images/7375349.png';
import { useState } from 'react';

type IFormDataState = {
  name: string;
  email: string;
  password: string;
  reason: string;
}

function FormPage() {
  const [formData, setFormData] = useState<IFormDataState>({} as IFormDataState);
  
  const register = () => {
    fetch("http://localhost:3001/register", {
      method: "POST",
      body: JSON.stringify(formData),
    });
  }

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
              placeholder="Nome"
              value={formData.name}
              onChange={({ target }) => setFormData({ ...formData, name: target.value })}
            />
           <h3>Email:</h3>
           <input className="input"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={({ target }) => setFormData({ ...formData, email: target.value })}
             />
           <div className='divSenha'>    
             <h3>Senha:</h3>
             <input className="input-senha"
               type="password"
               placeholder="Senha"
               value={formData.password}
               onChange={({ target }) => setFormData({ ...formData, password: target.value })}
              />
             <h3>Confirme sua senha:</h3>
             <input className="input-senha"
               type="password"
               placeholder="Senha" />
           </div>   
           <p>Mínimo de 8 caracteres.</p>
           <h3>Escreva abaixo os motivos que levaram ao término:</h3>
            <textarea
              value={formData.reason}
              onChange={({ target }) => setFormData({ ...formData, reason: target.value })}
            />
           <Link to ="/homePage">
              <button
                className='button'
                onClick={register}
              >
                Enviar
              </button>
           </Link>
         </form>
       </div>
       </div>
     </body>
   </>  
)
}

export default FormPage;