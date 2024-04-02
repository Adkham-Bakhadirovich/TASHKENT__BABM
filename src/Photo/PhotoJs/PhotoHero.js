import React from 'react'
import '../../Photo/PhotoCss/PhotoHero.css'
import DropdownContainer from '../../Components/Header/Header'
import { Link } from 'react-router-dom'
import Facebook from '../../images/Svg/facebook.svg'
import Instagram from '../../images/Svg/instagram.svg'
import Telegram from '../../images/Svg/telegram.svg'
export default function PhotoHero() {
  return (
    <div className='photohero'>
     <DropdownContainer/>
     <div className='container'>
      <p className='photo_text'>Axborot xizmati &gt; Fotogalereya</p>
      <h2 className='photo_title'>Fotogalereya</h2>

      <ul className='photo_list'>
        <li className='photo_list_item'>
          <div className='photo_item_box writing_pen_extra'>
          </div>
          <div className='photo_item_next_box'>
            <time className='photo_item_time'>20:30 | 03.02.2023</time>
            <p className='photo_item_next_text'>Mustaqillik bayrami kuni bo’lib o’tgan yig’ilishdan lavhalar</p>
          </div>
        </li>

        <li className='photo_list_item'>
          <div className='photo_item_box chess_extra'>
          </div>
          <div className='photo_item_next_box'>
            <time className='photo_item_time'>20:30 | 03.02.2023</time>
            <p className='photo_item_next_text'>Halqaro olimpiada sovrindorlaruni kutib olish jarayonidan lavhalar</p>
          </div>
        </li>

        <li className='photo_list_item'>
          <div className='photo_item_box power_extra'>
          </div>
          <div className='photo_item_next_box'>
            <time className='photo_item_time'>20:30 | 03.02.2023</time>
            <p className='photo_item_next_text'>14-yanvar, Vatan Himoyachilari Kunidagi ekskursiyadan lavhalar</p>
          </div>
        </li>

        <li className='photo_list_item'>
          <div className='photo_item_box meeting_extra'>
          </div>
          <div className='photo_item_next_box'>
            <time className='photo_item_time'>20:30 | 03.02.2023</time>
            <p className='photo_item_next_text'>Mustaqillik bayrami kuni bo’lib o’tgan yig’ilishdan lavhalar</p>
          </div>
        </li>

        <li className='photo_list_item'>
          <div className='photo_item_box airport_extra'>
          </div>
          <div className='photo_item_next_box'>
            <time className='photo_item_time'>20:30 | 03.02.2023</time>
            <p className='photo_item_next_text'>Halqaro olimpiada sovrindorlaruni kutib olish jarayonidan lavhalar</p>
          </div>
        </li>

        <li className='photo_list_item'>
          <div className='photo_item_box military_airdrom_extra'>
          </div>
          <div className='photo_item_next_box'>
            <time className='photo_item_time'>20:30 | 03.02.2023</time>
            <p className='photo_item_next_text'>14-yanvar, Vatan Himoyachilari Kunidagi ekskursiyadan lavhalar</p>
          </div>
        </li>
      </ul>
      <Link to='/secondhero' className='photo_link'>&lt; Ortga</Link>

      <div className='social_box'>
      <h5 className='social_box_title'>Yangilikni ijtimoiy tarmoqlarda ulashing</h5>
      <ul className='social_box_list'>
        <li className='social_box_list_item'>
          <img className='social_box_img' src={Facebook}/>
          <p className='social_box_text'>Facebook</p>
        </li>

        <li className='social_box_list_item'>
          <img className='social_box_img' src={Instagram}/>
          <p className='social_box_text'>Instagram</p>
        </li>

        <li className='social_box_list_item'>
          <img className='social_box_img' src={Telegram}/>
          <p className='social_box_text'>Telegram</p>
        </li>
      </ul>
     </div>
    </div>
    </div>
  )
}
