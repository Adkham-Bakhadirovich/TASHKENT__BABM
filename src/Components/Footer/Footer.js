import React from 'react'
import '../Footer/Footer.css'
import Foot_Logo from '../../images/Svg/foot-logo.svg'
import { Box, TextField } from '@mui/material'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <div className='footer'>
      <div className='container'>
        <div class="footer_box">
          <div className='footer_left_box'>
            

            <div className='mobile'>
            <Link to='/' className='footer_logo_link'><img className='footer_logo' src={Foot_Logo}/></Link>
            <p className='footer_left_box_text'>
              10011, O’zbekiston, Toshkent,
              Shayxontoxur tumani,
              Navoiy ko’chasi, 2A uy
            </p>
            </div>

            <address className='footer_address'>
              <a className='footer_address_link footer_address_link_first'>(71) 202 09 09</a>
              <a className='footer_address_link footer_address_link_second'>info@tbabm.uz</a>
              <a className='footer_address_link footer_address_link_third'>@tosh_babm</a>
              <a className='footer_address_link footer_address_link_fourth'>@toshbabm</a>
              <a className='footer_address_link footer_address_link_fivth'>@toshkent_babm</a>
            </address>
          </div>

          <div className='footer_right_box'>
        <form className='footer_form' action="">
          <label className='form_label'>Ism Familiya</label>
          <input className='form_name_input' type='text' placeholder='ismingiz...'/>

          <label className='form_label_next'>Elektron po’chta manzil</label>
          <input className='form_name_input_next' type='email' placeholder='elektron pochta...'/>
          <button className='form_button' type='submit'>Obuna bo’lish</button>
        </form>

          <div class="footer_bottom_box">
            <div>
              <ul className='school_list'>
                <strong className='school_list_strong'>Maktab</strong>
                <li><Link to="/about" className='school_list_item_link'>Maktab haqida</Link></li>
                <li><Link to="/manage" className='school_list_item_link'>Rahbariyat</Link></li>
                <li><Link to="/structur" className='school_list_item_link'>Maktab tuzilmasi</Link></li>
              </ul>
              <ul className='document_list'>
                <strong className='document_list_strong'>Hujjatlar</strong>
                <li><Link to="/" className='document_list_item_link'>331-qaror</Link></li>
                <li><Link to="/" className='document_list_item_link'>4467-qaror</Link></li>
              </ul>
            </div>
            <ul className='direction_list'>
              <strong className='direction_list_strong'>Ta'lim yo'nalishlari</strong>
              <li><Link to="/direct" className='direction_list_item_link'>Madaniyat va San'at</Link></li>
              <li><Link to="/direct" className='direction_list_item_link'>Texnika konstruktorlik va modellashtirish</Link></li>
              <li><Link to="/direct" className='direction_list_item_link'>Jismoniy tarbiya va sport</Link></li>
              <li><Link to="/direct" className='direction_list_item_link'>Hunarmandchilik va qo’l mehnati</Link></li>
              <li><Link to="/direct" className='direction_list_item_link'>Ekologiya va turizm</Link></li>
              <li><Link to="/direct" className='direction_list_item_link'>Oliy ta’lim muassasalari va maltablarga tayyorlov</Link></li>
              <li><Link to="/direct" className='direction_list_item_link'>Xorijiy Tillar</Link></li>
            </ul>
            <div className='footer_end_box'>
              <ul className='activity_list'>
                <strong className='activity_list_strong'>Faoliyat</strong>
                <li><Link to="/leader" className='activity_list_item_link'>To'garak rahbarlari</Link></li>
                <li><Link to="/another" className='activity_list_item_link'>Boshqa hodimlar</Link></li>
              </ul>
              <ul className='information_service_list'>
                <strong className='information_service_list_strong'>Axborot xizmati</strong>
                <li><Link to="/photo" className='information_service_list_item_link'>Galereya</Link></li>
                <li><Link to="/video" className='information_service_list_item_link'>Videogalereya</Link></li>
                <li><Link to="/news" className='information_service_list_item_link'>Yangiliklar</Link></li>
                <li><Link to="/photograph" className='information_service_list_item_link'>Rassomchilik to'garagi</Link></li>
              </ul>
          </div>

          </div>
          </div>
        </div>
      </div>
    </div>
  )
}
