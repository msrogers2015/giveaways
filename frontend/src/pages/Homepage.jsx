import React, {useEffect, useLayoutEffect, useState} from 'react';
import './Homepage.scss';
import LatestEntries from '../components/homepage/LatestEntries'
import api from "../utility/axiosAPI"

function Homepage() {
  const [giveawayMetrics, setGiveawayMetrics] = useState({completed_giveaways: "", total_winners: ""})

  useLayoutEffect(() => {
    document.title = "Homepage"
  }, []);

  useEffect(() => {
    api.get('giveaway/metrics')
      .then(res => {
        setGiveawayMetrics(res.data)
      })
  }, []);

  return (
    <>
      {/* Winner Overall general stats */}
      <div className='container-fluid stem-banner-bg'>
        <div className="container">
          <div className="row text-center">
            <div className="col-12 col-md-6"><h1>{giveawayMetrics.completed_giveaways}</h1><br /><h5>Giveaways Completed</h5></div>
            <div className="col-12 col-md-6"><h1>{giveawayMetrics.total_winners}</h1><br /><h5>Winners and counting</h5></div>
          </div>
        </div>
      </div>
      {/* Active Giveaway cards */}
      <LatestEntries />
      {/* How to Sign up for a giveaway */}
      <div className="container-fluid text-center stem-banner-bg">
        <div className="container py-5">
          <h1>How It Works</h1>
          <div className="row">
            <div className="col-12 col-md-4 py-4 pb-md-0">
              <i className="bi bi-search icon-xl"></i>
              <h4><b>Find</b> something interesting</h4>
            </div>
            <div className="col-12 col-md-4 py-4 pb-md-0">
              <i className="bi bi-file-earmark-text icon-xl"></i>
              <h4><b>Fill</b> out the Google Form</h4>
            </div>
            <div className="col-12 col-md-4 py-4 pb-md-0">
              <i className="bi bi-stopwatch icon-xl"></i>
              <h4><b>Wait</b> until the end date.</h4>
            </div>
          </div>
        </div>
      </div>
      {/* About Us */}
      <div className="container pt-5">
        <div className="row text-center"><h1>About Us</h1></div>
        <div className="row">
          <div className="col">
            <h4 className='text-center'>Our Goals</h4>
            <p>Education should be easily accessible and not have a huge financial barrier. Originally started as a spur of
            the moment desire to give away things for free during the holiday season to spread joy, we have adapted to focus
            on stem content and not be a free for all as far as the content of the giveaways go. In 2025, it was decided
            to streamline the process instead of dropping redeemable links in random discord servers at random times as a
            first come first serve system.</p>
          </div>
          <div className="col">
            <h4 className='text-center'>How To Help</h4>
            <p>This project is currently being funded out of pocket when possible, thus you may see seemingly
            long stints of time where there are no giveaways. Any donations will first go towards hosting and making
            the platform better e.g. future plans for user logins or email automation for the winners. Whatever is
            left gets funneled into giveaways.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Homepage;