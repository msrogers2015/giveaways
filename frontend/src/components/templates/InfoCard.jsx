import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";

function InfoCard({ name, totalWinners, endDate, subject, form }) {
  const nav = useNavigate()
  const attrList = {
    'python': <>Python&trade; Programming Language</>,
    'csharp': <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.en">Wikimedia (View License)</a>,
    '': ' ',
  }

  return (
    <Card style={{ width: '18rem' }} className='mb-5 mb-md-0'>
      <Card.Img variant="top" className="card-image p-2" src={`/images/${subject}.png`} />
      <Card.Text><i>{attrList[subject]}</i></Card.Text>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {totalWinners}<br />
          {endDate}
        </Card.Text>
        <Button variant="primary" onClick={() => nav(`/giveaway/${form}`)}>Enter Now</Button>
      </Card.Body>
    </Card>
  );
}

export default InfoCard;
