import React from 'react';
import '../HomeCss/Hero.css';
import Header from '../../Components/Header/Header';
import Telegram from '../../images/Svg/Telegramlogo.svg'
import Instagram from '../../images/Svg/Instagramlogo.svg'
import Facebook from '../../images/Svg/Facebooklogo.svg'
export default function Hero() {
  return (
    <div className='hero'>
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
        
          <ul className='hero_list'>
            <li className='hero_list_item first_before'>
              <span>
                <h5 className='hero_list_item_title'>375</h5>
                <p className='hero_list_item_text'>Toshkent BABM ga jalb qilingan o'quvchilar soni</p>
              </span>
            </li>

            <li className='hero_list_item second_before'>
              <span>
                <h5 className='hero_list_item_title'>3.2%</h5>
                <p className='hero_list_item_text'>Maktabi o'quvchilari soniga nisbati</p>
              </span>
            </li>

            <li className='hero_list_item third_before'>
              <span>
                <h5 className='hero_list_item_title'>35</h5>
                <p className='hero_list_item_text'>Toshkent BABM dagi xodimlar soni</p>
              </span>
            </li>

            <li className='hero_list_item fourth_before'>
              <span>
                <h5 className='hero_list_item_title'>55+</h5>
                <p className='hero_list_item_text'>Toshkent BABM dagi to'garaklar soni</p>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
