import React from 'react';
import "../LandingPage/LandingPage.css";
import Slider from "../Pagecontents/MainSlider/Slider";
import Slider2 from "../Pagecontents/slidebox/Sliders";
import Slider3 from "../Pagecontents/slidebox 2/Sliderss";
import Slider4 from "../Pagecontents/slidebox 3/Slidersss";
import Card from "../Pagecontents/Card/Card";

function LandingPage() {
    return (
        <div className='mini-nav'>
          <hr/>
          <div className='mini-menu'>
            <ul className='mm-style'>
              <li>
                <a href="#">
                 제품 추천
                </a>
              </li>
            </ul>
            <ul className='mm-style'>
              <li>
                <a href="/bmical">
                  BMI 계산기
                </a>
              </li>
            </ul>
          </div>
          <br/>
          <Slider/>
          <br/><br/>
          <Card/>
          <br/>
          
      
          <Slider2/>
          <Slider3/>
          <Slider4/>
    
    
          <br/>
      
        </div>
      );
}

export default LandingPage
