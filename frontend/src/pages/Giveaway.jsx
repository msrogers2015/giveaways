import {useNavigate, useParams} from 'react-router-dom';
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
  const nav = useNavigate();
  const [validated, setValidated] = useState(false);
  const [giveawayData, setGiveawayData] = useState({details: []})
  const [entryEmail, setEntryEmail] = useState("")
  console.log(giveawayData.details)


  useEffect(() => {
    api.get(`/giveaway/id/${id}`)
      .then(res => {
        setGiveawayData(res.data)
      })
  }, []);


  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation()
    } else {
      api.post(`/giveaway/entry/${id}?email=${entryEmail}`)
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


  return (
    <>
      {/* Banner */}
      <div className='stem-banner'></div>
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
            <Row className='justify-content-center'>
              <Col className='d-grid' xs={10} md={8} lg={6}>
                <Form.Control
                  className='d-grid'
                  type='email'
                  required
                  placeholder='my_email@example.abc'
                  onChange={(e) => setEntryEmail(e.target.value)}
                />
              </Col>
            </Row>
            <Row className='justify-content-center text-center mt-3'>
              <Col className='d-grid pb-2 pb-sm-0' xs={10} sm={5} md={4} lg={3}>
                <Button className='d-grid' type='submit'>Enter</Button>
              </Col>
              <Col className='d-grid' xs={10} sm={5} md={4} lg={3}>
                <Button className='d-grid' onClick={() => nav('/')}>Homepage</Button>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
      {/* Giveaway Information */}
      <div className="container-fluid text-center pt-5 stem-banner-bg">
        <h3>Whats Included?</h3>
        {giveawayData.details.map((item, index) => {
          console.log(item)
          let photo = formatHero(item.giveaway_platform)
          let text = formatHero(item)
          return (
            <div className="py-3"><HeroTemplate leftCol={index%2===0 ? photo : text} rightCol={index%2!==0 ? photo : text} main={index%2===0 ? 'right' : 'left'} /></div>
          )
        })}
      </div>
    </>
  )
}

export default Giveaway;