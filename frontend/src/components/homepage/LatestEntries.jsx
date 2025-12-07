import InfoCard from '../templates/InfoCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from "react";
import api from '../../utility/axiosAPI';

function LatestEntries() {
  const [giveaways, setGiveaways] = useState([])
  const [totalGiveaways, setTotalGiveaways] = useState(0)

  useEffect(() => {
    api.get('/giveaway/active')
      .then(res => {
        setGiveaways(res.data)
        setTotalGiveaways(res.data.length)
      })
      .catch(err => {
        if (err.response.status === 404) {
          console.log('No Active Giveaways')
        }
      })
  }, []);

  return (
    <Container>
      <Row className='text-center my-4'>
        <h1>Current Giveaways</h1>
      </Row>
      <Row className='text-center justify-content-evenly my-5'>
        {/* Display first 3 giveaways */}
        {giveaways.slice(0,3).map((giveaway) => (
          <Col key={giveaway.id} xs='auto' className='mb-4'>
            <InfoCard
              name={giveaway.name}
              totalWinners={giveaway.totalWinners}
              endDate={giveaway.endDate}
              subject={giveaway.subject}
              form={giveaway.id}
              totalGiveaways={totalGiveaways}
            />
          </Col>
        ))}
        {/* Display More card if there's more than 3 active giveaways*/}
        {giveaways.length > 3 &&
          <Col xs='auto'>
            <InfoCard
              name={"See More Giveaways"}
              totalWinners={" "}
              endDate={" "}
              subject={"programming"}
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