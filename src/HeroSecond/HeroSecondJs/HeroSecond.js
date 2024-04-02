import React from 'react';
import '../../HeroSecond/HeroSecondCss/HeroSecond.css'
import Header from '../../Components/Header/Header';
import Telegram from '../../images/Svg/Telegramlogo.svg'
import Instagram from '../../images/Svg/Instagramlogo.svg'
import Facebook from '../../images/Svg/Facebooklogo.svg'
export default function HeroSecond() {
  return (
    <div className='herosecond'>
    <Header/>
     <div className='hero_box'>
        <div className='container'>
        <ul className='hero_social_list'>
            <li className='hero_social_list_item'><img className='hero_social_list_item_img' src={Facebook}/></li>
            <li className='hero_social_list_item'><img className='hero_social_list_item_img' src={Instagram}/></li>
            <li className='hero_social_list_item'><img className='hero_social_list_item_img hero_social_list_item_img_extra' src={Telegram}/></li>
          </ul>
          <div className='hero_inner_box'>
            <h1 className='hero_title'>Toshkent shahar <p className="desc">“Barkamol avlod” bolalar maktabi</p></h1>
            <p className='hero_text'>
              Keling, ko'ring, biz bilan birgalikda bolalar bilimini yuksaltiring!
              Zero, Yangi O'zbekistonning kelajagi bo'lmish barkamol avlodni voyaga 
              yetkazish har birimizning burchimizdir.
            </p>
            <span className='hero_link_span'><a className='hero_link'>Batafsil</a></span>
          </div>
        
          
        </div>
      </div>
    </div>
  );
}
