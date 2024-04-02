import React from 'react'
import '../ManagementCss/ManageHero.css'
import DropdownContainer from '../../Components/Header/Header'
import Director from '../../images/Png/manage.png'
import Facebook from '../../images/Svg/facebook.svg'
import Instagram from '../../images/Svg/instagram.svg'
import Telegram from '../../images/Svg/telegram.svg'
import { Link } from 'react-router-dom'
export default function ManageHero() {
  return (
    <div className='manage'>
      <div className='container'>
        <DropdownContainer/>
        <p className='locate'>Maktab &gt; Rahbariyat</p>
        <div className='manage_box'>
          <img className='manage_img' src={Director}/>

          <div className='manage_left_box'>
            <h3 className='manage_title'>Mirsagatova Tamara Maxamatovna</h3>
            <p className='manage_left_box_text'>Toshkent shahar BABM direktori</p>
            <a className='director_tel'>Telefon raqami: +998 71 237 34 22 </a>
            <a className='director_mail'>E-mail: info@barkamolavlod.uz</a>
            <ul className='social_list'>
              <li className='social_list_item'><img src={Facebook}/></li>
              <li className='social_list_item'><img src={Instagram}/></li>
              <li className='social_list_item'><img src={Telegram}/></li>
            </ul>
          </div>
        </div>

        <ul className='manage_list'>

          <li className='manage_list_item'>
          <img className='manage_list_item_img' src={Director}/>
            <h4 className='maage_item_title'>Mirsagatova Tamara Maxamatovna</h4>
            <p className='manage_item_text'>Toshkent shahar BABM direktori</p>
            <a className='director_tel'>Telefon raqami: +998 71 237 34 22 </a>
            <a className='director_mail'>E-mail: info@barkamolavlod.uz</a>
          </li>

          <li className='manage_list_item'>
          <img className='manage_list_item_img' src={Director}/>
            <h4 className='maage_item_title'>Mirsagatova Tamara Maxamatovna</h4>
            <p className='manage_item_text'>Toshkent shahar BABM direktori</p>
            <a className='director_tel'>Telefon raqami: +998 71 237 34 22 </a>
            <a className='director_mail'>E-mail: info@barkamolavlod.uz</a>
          </li>

          <li className='manage_list_item'>
          <img className='manage_list_item_img' src={Director}/>
            <h4 className='maage_item_title'>Mirsagatova Tamara Maxamatovna</h4>
            <p className='manage_item_text'>Toshkent shahar BABM direktori</p>
            <a className='director_tel'>Telefon raqami: +998 71 237 34 22 </a>
            <a className='director_mail'>E-mail: info@barkamolavlod.uz</a>
          </li>

          <li className='manage_list_item'>
          <img className='manage_list_item_img' src={Director}/>
            <h4 className='maage_item_title'>Mirsagatova Tamara Maxamatovna</h4>
            <p className='manage_item_text'>Toshkent shahar BABM direktori</p>
            <a className='director_tel'>Telefon raqami: +998 71 237 34 22 </a>
            <a className='director_mail'>E-mail: info@barkamolavlod.uz</a>
          </li>
        </ul>

        <Link to='/secondhero' className='manage_link'>&lt; Ortga </Link>
      </div>
    </div>
  )
}
