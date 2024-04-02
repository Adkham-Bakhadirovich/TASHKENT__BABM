import React from 'react'
import '../../Video/VideoCss/VideoHero.css'
import DropdownContainer from '../../Components/Header/Header'
import { Link } from 'react-router-dom'
import Facebook from '../../images/Svg/facebook.svg'
import Instagram from '../../images/Svg/instagram.svg'
import Telegram from '../../images/Svg/telegram.svg'
export default function VideoHero() {
  return (
    <div className='videohero'>
     <DropdownContainer/>
     <div className='container'>
      <p className='video_text'>Axborot xizmati &gt; Videogalereya</p>
      <h2 className='video_title'>Videogalereya</h2>

      <ul className='video_list'>
        <li className='video_list_item'>
          <div className='video_item_box writing_pen_extra_video'>
          </div>
          <div className='video_item_next_box'>
            <time className='video_item_time'>20:30 | 03.02.2023</time>
            <p className='video_item_next_text'>Mustaqillik bayrami kuni bo’lib o’tgan yig’ilishdan lavhalar</p>
          </div>
        </li>

        <li className='video_list_item'>
          <div className='video_item_box chess_extra_video'>
          </div>
          <div className='video_item_next_box'>
            <time className='video_item_time'>20:30 | 03.02.2023</time>
            <p className='video_item_next_text'>Halqaro olimpiada sovrindorlaruni kutib olish jarayonidan lavhalar</p>
          </div>
        </li>

        <li className='video_list_item'>
          <div className='video_item_box power_extra_video'>
          </div>
          <div className='video_item_next_box'>
            <time className='video_item_time'>20:30 | 03.02.2023</time>
            <p className='video_item_next_text'>14-yanvar, Vatan Himoyachilari Kunidagi ekskursiyadan lavhalar</p>
          </div>
        </li>

        <li className='video_list_item'>
          <div className='video_item_box meeting_extra_video'>
          </div>
          <div className='video_item_next_box'>
            <time className='video_item_time'>20:30 | 03.02.2023</time>
            <p className='video_item_next_text'>Mustaqillik bayrami kuni bo’lib o’tgan yig’ilishdan lavhalar</p>
          </div>
        </li>

        <li className='video_list_item'>
          <div className='video_item_box airport_extra_video'>
          </div>
          <div className='video_item_next_box'>
            <time className='video_item_time'>20:30 | 03.02.2023</time>
            <p className='video_item_next_text'>Halqaro olimpiada sovrindorlaruni kutib olish jarayonidan lavhalar</p>
          </div>
        </li>

        <li className='video_list_item'>
          <div className='video_item_box military_airdrom_extra_video'>
          </div>
          <div className='video_item_next_box'>
            <time className='video_item_time'>20:30 | 03.02.2023</time>
            <p className='video_item_next_text'>14-yanvar, Vatan Himoyachilari Kunidagi ekskursiyadan lavhalar</p>
          </div>
        </li>
      </ul>
      <Link to='/secondhero' className='video_link'>&lt; Ortga</Link>

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
