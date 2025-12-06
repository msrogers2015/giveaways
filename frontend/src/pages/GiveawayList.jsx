import InfoCard from "../components/templates/InfoCard";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import React, {useEffect, useState, useLayoutEffect } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import api from "../utility/axiosAPI";

function GiveawayList() {
  const nav = useNavigate()
  const [giveaways, setGiveaways] = useState([])

  useLayoutEffect(() => {
    document.title = "Giveaways"
  }, []);

  useEffect(() => {
    api.get('/giveaway/active')
      .then(res => {
        setGiveaways(res.data)
      })
  }, []);

  return (
    <Container>
      <div className="container pb-5 mt-3 d-grid">
        <Button variant='outline-primary' onClick={() => nav('/')}>Return to Homepage</Button>
      </div>
      <Row className='justify-content-evenly'>
        {giveaways.map((giveaway) => (
          <Col key={giveaway.id} className='mb-3 mx-1' xs='auto' md={5} lg={3} xl={3}>
            <InfoCard
              name={giveaway.name}
              totalWinners={giveaway.totalWinners}
              endDate={giveaway.endDate}
              subject={giveaway.subject}
              form={giveaway.id}
            />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default GiveawayList;