import React from "react";

function Orbit() {
    return (

<div className="orbit testimonial-slider-container" role="region" aria-label="testimonial-slider" data-orbit>
  <ul className="orbit-container">
    <button className="orbit-previous"><span class="show-for-sr">Previous Slide</span>&#9664;&#xFE0E;</button>
    <button className="orbit-next"><span class="show-for-sr">Next Slide</span>&#9654;&#xFE0E;</button>

    {/* <!-- content slide 1 --> */}

    <li className="is-active orbit-slide">
      <div className="testimonial-slide row">
        <div className="small-12 large-9 column">
          <div className="row align-middle testimonial-slide-content">
            <div className="small-12 medium-4 column hide-for-small-only profile-pic">
              <img src="https://placeimg.com/300/300/nature"></img>
            </div>
            <div className="small-12 medium-8 column testimonial-slide-text">
              <p className="testimonial-slide-quotation">Hide when guests come over instantly break out into full speed gallop across the house for no reason mrow touch water with paw then recoil in horror.</p>
              <div className="testimonial-slide-author-container">
                <div className="small-profile-pic show-for-small-only">
                  <img src="https://placeimg.com/50/50/nature"></img>
                </div>
                <p className="testimonial-slide-author-info">Fleas Witherspoon<i className="subheader">Cat World Inc.</i></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>

    {/* <!--content slide 2 --> */}

    <li className="orbit-slide">
      <div className="testimonial-slide row">
        <div className="small-12 large-9 column">
          <div className="row align-middle testimonial-slide-content">
            <div className="small-12 medium-4 column hide-for-small-only profile-pic">
              <img src="https://placeimg.com/300/300/architecture"></img>
            </div>
            <div className="small-12 medium-8 column testimonial-slide-text">
              <p className="testimonial-slide-quotation">Hide when guests come over instantly break out into full speed gallop across the house for no reason mrow touch water with paw then recoil in horror.</p>
              <div className="testimonial-slide-author-container">
                <div className="small-profile-pic show-for-small-only">
                  <img src="https://placeimg.com/50/50/architecture"></img>
                </div>
                <p className="testimonial-slide-author-info">Fleas Witherspoon<i className="subheader">Cat World Inc.</i></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>

    {/* <!-- content slide 3 --> */}

    <li className="orbit-slide">
      <div className="testimonial-slide row">
        <div className="small-12 large-9 column">
          <div className="row align-middle testimonial-slide-content">
            <div className="small-12 medium-4 column hide-for-small-only profile-pic">
              <img src="https://placeimg.com/300/300/animals"></img>
            </div>
            <div className="small-12 medium-8 column testimonial-slide-text">
              <p className="testimonial-slide-quotation">Hide when guests come over instantly break out into full speed gallop across the house for no reason mrow touch water with paw then recoil in horror.</p>
              <div className="testimonial-slide-author-container">
                <div className="small-profile-pic show-for-small-only">
                  <img src="https://placeimg.com/50/50/animals"></img>
                </div>
                <p className="testimonial-slide-author-info">Fleas Witherspoon<i className="subheader">Cat World Inc.</i></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>

    {/* <!-- content slide 4 --> */}

    <li className="orbit-slide">
      <div className="testimonial-slide row">
        <div className="small-12 large-9 column">
          <div className="row align-middle testimonial-slide-content">
            <div className="small-12 medium-4 column hide-for-small-only profile-pic">
              <img src="https://placeimg.com/300/300/any"></img>
            </div>
            <div className="small-12 medium-8 column testimonial-slide-text">
              <p className="testimonial-slide-quotation">Hide when guests come over instantly break out into full speed gallop across the house for no reason mrow touch water with paw then recoil in horror.</p>
              <div className="testimonial-slide-author-container">
                <div className="small-profile-pic show-for-small-only">
                  <img src="https://placeimg.com/50/50/any"></img>
                </div>
                <p className="testimonial-slide-author-info">Fleas Witherspoon<i className="subheader">Cat World Inc.</i></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  </ul>
</div>
    );
}
export default Orbit;