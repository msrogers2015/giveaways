import InfoCard from '../templates/InfoCard';
import { giveaways } from "../../data/runningGiveaways";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function LatestEntries() {

  return (
    <Container>
      <Row className='text-center mb-4'>
        <h1>Current Giveaways</h1>
      </Row>
      <Row className='text-center justify-content-evenly my-5'>
        {/* Display first 3 giveaways */}
        {giveaways.slice(0,3).map((giveaway) => (
          <Col key={giveaway.id} xs='auto'>
            <InfoCard
              name={giveaway.name}
              totalWinners={giveaway.totalWinners}
              endDate={giveaway.endDate}
              subject={giveaway.subject}
              form={giveaway.formLink}
            />
          </Col>
        ))}
        {/* Display More card if there's more than 3 active giveaways*/}
        {giveaways.length > 3 &&
          <Col>
            <InfoCard
              name={"View More"}
              totalWinners={" "}
              endDate={" "}
              subject={""}
              form={""}
            />
          </Col>
        }
        {/* If there are no giveaways, display as plain text */}
        {giveaways.length === 0 &&
          <div className="col">
            There are currently no giveaways running.
          </div>
        }
      </Row>
    </Container>
  )
}

export default LatestEntries;