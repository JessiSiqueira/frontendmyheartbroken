import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css.pages/loginPage.css'
import user from '../images/user.svg'
import CardOfAlert from '../components/card';

function Login() {
  const [emailValue, setEmail] = useState('');
  const [senhaValue, setSenha] = useState('');
  const [cardValue, setCardValue] = useState(false);

  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const navigate = useNavigate();

  const validaForm = () => {
    if (senhaValue.length > 0 && senhaValue.length >= 8 && emailValue.length !== 0
      && emailRegex.test(emailValue)) {
     return true;
    }
    return
  };

  const handleClick = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    if (validaForm()) {
      navigate("/homePage")
    } 
    else {
      setCardValue(true);
    }
  }

    return (
    <>
      {cardValue === true && <CardOfAlert />}    
      <div className='boxdiv'>
        <div className="login-div">
        <h1 className='title'>My Heartbroken</h1>
        <form>
          <input
            className="email-input"
            type="email"
            placeholder="Email"
            data-testid="email-input"
            value={ emailValue }
            onChange={ ({ target }) => setEmail(target.value) }
          />
          <input className="password-input"
            type="password"
            placeholder="Senha"
            data-testid="password-input"
            value={ senhaValue }
            onChange={ ({ target }) => setSenha(target.value) }
          />
        </form>
        <div className="div-button">
            <button
              type="submit"
              className="login-submit-btn"
              onClick={handleClick}
             >
             Log in
            </button>
         <span className='span'>Ainda não possui conta?<Link className='link' to="/register"> Cadastre-se</Link></span>
        </div>
      </div>
      <div className='div-welcome'>
        <h1 className='h1-welcome'>Welcome to login!</h1>
        <img src={user}/>
      </div>
    </div>
  </>

    )
}
export default Login;
