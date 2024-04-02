import React from 'react'
import '../../Photographs/PhotographsCss/PhotographsHero.css'
import DropdownContainer from '../../Components/Header/Header'
import { Link } from 'react-router-dom'
import Colors from '../../images/Png/colors.png'
import Facebook from '../../images/Svg/facebook.svg'
import Instagram from '../../images/Svg/instagram.svg'
import Telegram from '../../images/Svg/telegram.svg'
import Handle from'../../images/Png/pencil.png'
import Other from'../../images/Png/other.png'
export default function PhotographsHero() {
  return (
    <div className='photographshero'>
    <DropdownContainer/>
    <div className='container'>
    <div className='photographshero_box'>
    <div className='photographshero_box_left'>
    <p className='photographshero_left_text'>Ta’lim yo’nalishlari  &gt; Madaniyat va San’at  &gt; Rassomchilik to’garagi</p>
    <h2 className='photographshero_left_title'>Rassomchilik tadbiridan olingan fotosuratlar</h2>
    <span className='photographshero_left_span'>
      <time className='photographshero_left_span_time'>20:30 | 03.02.2023</time>
      <p className='photographshero_left_span_text'>129</p>
    </span>
    <img className='photographshero_left_img' src={Colors}/>
    <img className='photographshero_left_img' src={Handle}/>
    <img className='photographshero_left_img' src={Colors}/>
    <img className='photographshero_left_img' src={Handle}/>
    </div>
    
    <div className='photographshero_box_right'>
      <p className='photographshero_box_right_text'>Boshqa lavhalar</p>
      <ul className='photographshero_box_right_list'>
        <li className='photographshero_box_right_list_item'>
          <img className='photographshero_box_right_list_item_img' src={Other}/>
          <time className='photographshero_box_right_list_item_time'>20:30 | 03.02.2023</time>
          <p className='photographshero_box_right_list_item_text'>14-yanvar, Vatan Himoyachilari Kunidagi ekskursiyadan lavhalar</p>
        </li>

        <li className='photographshero_box_right_list_item'>
        <img className='photographshero_box_right_list_item_img' src={Other}/>
          <time className='photographshero_box_right_list_item_time'>20:30 | 03.02.2023</time>
          <p className='photographshero_box_right_list_item_text'>14-yanvar, Vatan Himoyachilari Kunidagi ekskursiyadan lavhalar</p>
        </li>

        <li className='photographshero_box_right_list_item'>
        <img className='photographshero_box_right_list_item_img' src={Other}/>
          <time className='photographshero_box_right_list_item_time'>20:30 | 03.02.2023</time>
          <p className='photographshero_box_right_list_item_text'>14-yanvar, Vatan Himoyachilari Kunidagi ekskursiyadan lavhalar</p>
        </li>

        <li className='photographshero_box_right_list_item'>
        <img className='photographshero_box_right_list_item_img' src={Other}/>
          <time className='photographshero_box_right_list_item_time'>20:30 | 03.02.2023</time>
          <p className='photographshero_box_right_list_item_text'>14-yanvar, Vatan Himoyachilari Kunidagi ekskursiyadan lavhalar</p>
        </li>

        <li className='photographshero_box_right_list_item'>
        <img className='photographshero_box_right_list_item_img' src={Other}/>
          <time className='photographshero_box_right_list_item_time'>20:30 | 03.02.2023</time>
          <p className='photographshero_box_right_list_item_text'>14-yanvar, Vatan Himoyachilari Kunidagi ekskursiyadan lavhalar</p>
        </li>
      </ul>
    </div>
    
    </div>
    <Link to='/secondhero' className='photographshero_link'>&lt; Ortga </Link>
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
