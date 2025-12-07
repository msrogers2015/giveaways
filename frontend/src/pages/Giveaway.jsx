import React, {useLayoutEffect} from 'react';
import { stateList } from "../data/states";
import { useParams, Link, useLocation } from 'react-router-dom';
import {useEffect, useState} from "react";
import api from "../utility/axiosAPI";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import Form from "react-bootstrap/Form";
import HeroTemplate from "../components/templates/HeroTemplate";

function Giveaway() {
  const {id} = useParams();
  const loc = useLocation();
  const [validated, setValidated] = useState(false);
  const [giveawayData, setGiveawayData] = useState({details: []})
  const [entryEmail, setEntryEmail] = useState("")
  const [entryName, setEntryName] = useState("")
  const [entryState, setEntryState] = useState("")
  const [acceptTerms, setAcceptTerms] = useState(false)
  const [moreGiveaways, setMoreGiveaways] = useState(true)
  const [notFound, setNotFound] = useState(false)
  const [loading, setLoading] = useState(true)

  useLayoutEffect(() => {
    document.title = giveawayData.name || "Enter Giveaway"
  }, [giveawayData]);

  useEffect(() => {
    try {
      setMoreGiveaways(loc.state.giveawayCount >= 4)
    } catch {
      setMoreGiveaways(1)
    }
    api.get(`/giveaway/id/${id}`)
      .then(res => {
        setGiveawayData(res.data)
        setNotFound(false)
        setLoading(false)
      })
      .catch(err => {
        if (err.response.status === 404){
          setNotFound(true)
        }
        setLoading(false)
      })
  }, []);


  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation()
    } else {
      api.post(`/giveaway/entry/${id}?email=${entryEmail}&name=${entryName}&state=${entryState}`)
        .then(res => {
          alert(`You have entered the ${giveawayData.name} giveaway!`)
        })
        .catch(err => {
          if (err.status === 400) {
            alert(err.response.data.detail)
          }
        })
    }
    setValidated(true);
  }


  const formatHero = (data) => {
    if ((typeof data) === 'string') {
      return <Image className='card-image' src={`/images/${data}.png`} />
    } else {
      return (
        <>
          <h4><b>{data.name}</b></h4>
        <p>{data.description}</p>
        <p>Learn more <a href={data.link} target="_blank">here</a></p>
        </>
      )
    }
  }

  if (loading) {
    return (
      <div className="container text-center mt-5">
        <h3>Loading...</h3>
      </div>
    )
  }

  if (notFound) {
    return (
      <div className="container text-center my-5">
        <h1>Giveaway Not Found</h1>
        <p className="mt-3">Sorry, the giveaway you're looking for doesn't exist or has been removed.</p>
        <Link to="/" className="btn btn-primary mt-3">Return to Homepage</Link>
      </div>
    )
  }


  return (
    <>
      {/* Giveaway title and entry */}
      <div className="container-fluid stem-banner-bg pb-3">
        <div className='text-center'>
          <h1>{giveawayData.name}</h1>
        </div>
      </div>
      {/* Entry Form */}
      <div className="container-fluid my-5">
        <div className='container'>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            {/* Name */}
            <Row className='justify-content-center mt-2'>
              <Col xs={4} sm={3} md={4} lg={2} className='text-end h5'>
                <Form.Label>First Name</Form.Label>
              </Col>
              <Col className='d-grid' xs={8} sm={9} md={8} lg={10}>
                <Form.Control
                  className='d-grid'
                  type='text'
                  required
                  placeholder='John'
                  onChange={(e) => setEntryName(e.target.value)}
                />
              </Col>
            </Row>
            {/* Email */}
            <Row className='justify-content-center mt-2'>
              <Col xs={4} sm={3} md={4} lg={2} className='text-end h5'>
                <Form.Label>Email</Form.Label>
              </Col>
              <Col className='d-grid' xs={8} sm={9} md={8} lg={10}>
                <Form.Control
                  className='d-grid'
                  type='email'
                  required
                  placeholder='my_email@example.abc'
                  onChange={(e) => setEntryEmail(e.target.value)}
                />
              </Col>
            </Row>
            {/* State */}
            <Row className='justify-content-center mt-2'>
              <Col xs={4} sm={3} md={4} lg={2} className='text-end h5'>
                <Form.Label>State</Form.Label>
              </Col>
              <Col className='d-grid' xs={8} sm={9} md={8} lg={10}>
                <Form.Select className='d-grid' required onChange={(e) => setEntryState(e.target.value)} defaultValue={null}>
                  <option value="">Select a State</option>
                  {Object.keys(stateList).map(states => <option key={states} value={states}>{stateList[states]}</option>)}
                </Form.Select>
              </Col>
            </Row>
            {/* Buttons */}
            <Row className='justify-content-center text-center mt-3'>
              <Col className='d-grid pb-2 pb-md-0' xs={12} sm={moreGiveaways ? 4 : 6} md={moreGiveaways ? 4 : 6} lg={moreGiveaways ? 4 : 6}>
                <Link to="/" className='btn btn-primary'>Homepage</Link>
              </Col>
              <Col className='d-grid pb-2 pb-md-0' xs={12} sm={moreGiveaways ? 4 : 6} md={moreGiveaways ? 4 : 6} lg={moreGiveaways ? 4 : 6}>
                <Button className='d-grid' type='submit' disabled={!acceptTerms}>Enter</Button>
              </Col>
              {moreGiveaways &&
                <Col className='d-grid pb-2 pb-md-0' xs={12} sm={4} md={4} lg={4}>
                  <Link to="/giveaways" className='btn btn-primary'>All Giveaways</Link>
                </Col>
              }
            </Row>
            <Row className='mt-4'>
              <Col>
                <Form.Check
                  type='checkbox'
                  id={'tos-checkbox'}
                  onChange={() => {setAcceptTerms(!acceptTerms);}}
                  label="I agree to the terms and privacy policy for this giveaway (view the page footer for more details)." />
              </Col>
            </Row>
          </Form>
        </div>
      </div>
      {/* Giveaway Outline */}
      <div className="container-fluid stem-banner-bg pt-5">
        <div className="container">
          <div className="row text-center">
            <div className="col"><h3>Retail Value</h3><br/><h5>${giveawayData.mrsp}.00</h5></div>
            <div className="col"><h3>End Date</h3><br/><h5>{giveawayData.end_date !== undefined && new Date(giveawayData.end_date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</h5></div>
            <div className="col"><h3>Total Winners</h3><br/><h5>{giveawayData.total_winners}</h5></div>
          </div>
          <div className="row text-center mt-5 pb-2">
            <div className="col h5"><b>No purchase necessary. Must be 18+ and a US resident to enter.</b></div>
          </div>
        </div>
      </div>
      {/* Giveaway Details */}
      <div className="container-fluid text-center pt-5">
        <h3>Whats Included?</h3>
        {giveawayData.details.map((item, index) => {
          let photo = formatHero(item.giveaway_platform)
          let text = formatHero(item)
          return (
            <div className="py-3" key={index}><HeroTemplate leftCol={index%2===0 ? photo : text} rightCol={index%2!==0 ? photo : text} main={index%2===0 ? 'right' : 'left'} /></div>
          )
        })}
      </div>
    </>
  )
}

export default Giveaway;