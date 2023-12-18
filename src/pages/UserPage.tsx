import "../css.pages/userPage.css"
import Form from 'react-bootstrap/Form';

import ideiaImg from '../images/3196448.jpg'
import gym from '../images/5971179.jpg'
import videoGame from '../images/81_c29uX2ZhdGhlci0wMg.jpg'
import pet from '../images/5506687.jpg'
import clown from '../images/clown-fool.gif'
import ControlledCarousel from "../components/carrossel"
import Header from "../components/header"

function UserPage() {
    return (
        <>
        <Header />
        <div className='divUserPage'>
              <div className="div-esquerda">
                 <h1 className="h1-header">O que fazer ao invés de mandar mensagem:</h1>
                 <img className="img-ideia" src={ideiaImg}/> 
                 <div className="div-suggestion">
                     <div className="mini-div-suggestion"><img className="pet-div" src={pet}/></div>
                     <div className="mini-div-suggestion"><img className="game-div" src={videoGame}/></div>
                     <div className="mini-div-suggestion"><img className="gym-div" src={gym}/></div>
                 </div >
                     <div className="divInferior">                 <div className="div-esquerda-inferior">
                         <div className="Carousel">
                             <h2 className="h2-inferior">Links úteis:</h2>
                             <ControlledCarousel />
                         </div>
                     </div>
                     <div className="div-inferior-Todo">
                            <Form>
                                {['checkbox'].map((type) => (
                                <div key={`default-${type}`} className="mb-3">
                                    <h2 className="h2-todo">To do:</h2>
                                    <Form.Check className="check" aria-label="option 1" />
                                    <p className="p-inferior">Viver o presente</p>
                                    <Form.Check className="check" aria-label="option 1" />
                                    <p className="p-inferior">Respeitar seus limites</p>
                                    <Form.Check className="check" aria-label="option 1" />
                                    <p className="p-inferior">Deixar de se comparar</p>
                                    <Form.Check className="check" aria-label="option 1" />
                                    <p className="p-inferior">Ser mais confiante</p>
                                    <Form.Check className="check" aria-label="option 1" />
                                    <p className="p-inferior">Acolher seus sentimentos</p>
                                    <Form.Check className="check" aria-label="option 1" />
                                    <p className="p-inferior">Assitir um filme comfort</p>
                                    <Form.Check className="check" aria-label="option 1" />
                                    <p className="p-inferior">Pedir um lanche</p>
                                    <Form.Check className="check" aria-label="option 1" />
                                    <p className="p-inferior">Conhecer lugares novos</p>
                                </div>
                               ))}
                            </Form>
                     </div>
                 </div>

             </div>
           <div className='div-renderiza'>
              <h1 className="h1-title">Chegou ao fim porque:</h1>
              <textarea className="text-area"/>
              <div className="div-renderiza-inferior">
                 <h2 className="h2-clown">Ainda quer mandar mensagem?</h2>
                 <div className="clown">
                     <img className="img-clown" src={clown} />
                 </div>
              </div>
           </div>
        </div>  
        </>

    )
}

export default UserPage;