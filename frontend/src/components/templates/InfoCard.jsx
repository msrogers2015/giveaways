import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';

function InfoCard({ name, totalWinners, endDate, subject, form, totalGiveaways }) {

  const attrList = {
    'python': <>Python&trade; Programming Language</>,
    'csharp': <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.en">Wikimedia (View License)</a>,
    '': ' ',
  }

  return (
    <Card style={{ width: '18rem', height: '450px' }}>
      {subject !== "" &&
        <Card.Img variant="top" className="card-image p-2" src={`/images/${subject.toLocaleLowerCase()}.png`} />
      }
      <Card.Text><i>{attrList[subject]}</i></Card.Text>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {totalWinners}<br />
          {endDate}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Row className='px-5'>
          {form !== "" && <Link to={`/giveaway/${form}`} state={{giveawayCount: totalGiveaways}} className="btn btn-primary">Enter</Link>}
          {form === "" && <Link to={`/giveaways`} className="btn btn-primary">View More</Link>}
        </Row>
      </Card.Footer>
    </Card>
  );
}

export default InfoCard;
