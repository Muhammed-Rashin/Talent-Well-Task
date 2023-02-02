import React from 'react';
import headerBg from '../../assets/images/header-bg.jpg';
import shape from '../../assets/images/header-shape.svg';

function Home() {
  return (
    <div>
      <div
        id="home"
        class="header-hero bg_cover"
        style={{ backgroundImage: `url(${headerBg})` }}
      >
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-8 col-lg-10">
              <div class="header-content text-center">
                <h3 class="header-title">
                  Handcrafted Landing Page for Startups and SaaS Businesses
                </h3>
                <p class="text">
                  A simple, customizable, and, beautiful SaaS business focused
                  landing page to make your project closer to launch!
                </p>
                <ul class="header-btn rounded-buttons">
                  <li>
                    <a class="main-btn rounded-three" href="/#">
                      GET IN TOUCH
                    </a>
                  </li>
                  <li>
                    <a
                      class="main-btn rounded-four video-popup"
                      href="../../watch.html?v=r44RKWyfcFw"
                    >
                      WATCH THE VIDEO <i class="lni-play"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="header-shape">
          <img src={shape} alt="shape" />
        </div>
      </div>
    </div>
  );
}

export default Home;
