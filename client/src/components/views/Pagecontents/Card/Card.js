import React from 'react'
import "./Card.css"
import img from "../../../assets/알약.jpg";
import view from "../../../assets/풍경.jpg";

const Card = () => {
  return (
      <section class="info_section">
          <div class="info_wrap">
              <strong class="info_title">
                AAH는 개인이 필요한 모든 건강지식과 <br/> 스스로 건강을 체크하고  영양제 비교 추천 서비스 입니다.
              </strong>
              <div class="info_area">
                <ul>
                    <li>
                        <img src={img} alt="영양제추천"/>
                        <p>
                            "360명의 의료진이 검증한"
                        </p>
                    </li>
                </ul> 
                <ul>
                    <li>
                        <img src={view} alt="영양제추천"/>
                        <p>
                            "360명의 의료진이 검증한"
                        </p>
                    </li>
                </ul> 
                <ul>
                    <li>
                        <img src={img} alt="영양제추천"/>
                        <p>
                            "360명의 의료진이 검증한"
                        </p>
                    </li>
                </ul> 
              </div>
          </div>
      </section>
    
  )
}

export default Card