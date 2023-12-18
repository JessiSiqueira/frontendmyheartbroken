import { Link } from 'react-router-dom';
import Header from '../components/header';
import '../css.pages/buttonPage.css'
import icone from '../images/6407961.jpg'

function PageButton() {
    return (
        <>
          <Header />
          <h1 className='h1Button'>Olá 👋 </h1>
          <h2 className='h2Button'>Sentiu vontade de mandar mensagem?</h2>
          <div className="buttonDiv-sdd">
            <div>
              <Link to="/userPage">
                <div className="buttonPage">
                  <a href="#">Clique aqui</a>
                </div> 
              </Link>
           </div>
          </div>
          <div className='imgIcone'>
            <img className='icone' src={icone}/>
          </div>
        </>
    )
} 
export default PageButton;