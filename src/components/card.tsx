import '../css.components/card.css'
import Card from 'react-bootstrap/Card';

function CardOfAlert() {
  return (
    <Card className="card" style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Erro 404</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Not found</Card.Subtitle>
        <Card.Text className='cardText'>
          Usuário não encontrado: email ou senha incorretos!
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardOfAlert;