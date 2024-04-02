import React from 'react'
import '../../Another/AnotherCss/AnotherHero.css'
import DropdownContainer from '../../Components/Header/Header'
import Director from '../../images/Png/manage.png'
import { Link } from 'react-router-dom'
export default function AnotherHero() {
  return (
    <div className='anotherhero'>
      <DropdownContainer/>
      <div className='container'>
      <p className='anotherhero_text'>Faoliyat &gt; Boshqa xodimlar</p>
      <h2 className='anotherhero_title'>Toshkent shahar “Barkamol Avlod” bolalar maktabining xodimlari</h2>

      <ul className='anotherhero_list'>
        <li className='anotherhero_list_item'>
          <img className='anotherhero_list_item_img' src={Director}/>
            <h4 className='anotherhero_list_item_title'>Mirsagatova Tamara Maxamatovna</h4>
            <p className='anotherhero_list_item_text'>Toshkent shahar BABM direktori</p>
            <a className='anotherhero_list_item_tel'>Telefon raqami: +998 71 237 34 22 </a>
            <a className='anotherhero_list_item_mail'>E-mail: info@barkamolavlod.uz</a>
        </li>

        <li className='anotherhero_list_item'>
          <img className='anotherhero_list_item_img' src={Director}/>
            <h4 className='anotherhero_list_item_title'>Mirsagatova Tamara Maxamatovna</h4>
            <p className='anotherhero_list_item_text'>Toshkent shahar BABM direktori</p>
            <a className='anotherhero_list_item_tel'>Telefon raqami: +998 71 237 34 22 </a>
            <a className='anotherhero_list_item_mail'>E-mail: info@barkamolavlod.uz</a>
        </li>

        <li className='anotherhero_list_item'>
          <img className='anotherhero_list_item_img' src={Director}/>
            <h4 className='anotherhero_list_item_title'>Mirsagatova Tamara Maxamatovna</h4>
            <p className='anotherhero_list_item_text'>Toshkent shahar BABM direktori</p>
            <a className='anotherhero_list_item_tel'>Telefon raqami: +998 71 237 34 22 </a>
            <a className='anotherhero_list_item_mail'>E-mail: info@barkamolavlod.uz</a>
        </li>

        <li className='anotherhero_list_item'>
          <img className='anotherhero_list_item_img' src={Director}/>
            <h4 className='anotherhero_list_item_title'>Mirsagatova Tamara Maxamatovna</h4>
            <p className='anotherhero_list_item_text'>Toshkent shahar BABM direktori</p>
            <a className='anotherhero_list_item_tel'>Telefon raqami: +998 71 237 34 22 </a>
            <a className='anotherhero_list_item_mail'>E-mail: info@barkamolavlod.uz</a>
        </li>

        <li className='anotherhero_list_item'>
          <img className='anotherhero_list_item_img' src={Director}/>
            <h4 className='anotherhero_list_item_title'>Mirsagatova Tamara Maxamatovna</h4>
            <p className='anotherhero_list_item_text'>Toshkent shahar BABM direktori</p>
            <a className='anotherhero_list_item_tel'>Telefon raqami: +998 71 237 34 22 </a>
            <a className='anotherhero_list_item_mail'>E-mail: info@barkamolavlod.uz</a>
        </li>

        <li className='anotherhero_list_item'>
          <img className='anotherhero_list_item_img' src={Director}/>
            <h4 className='anotherhero_list_item_title'>Mirsagatova Tamara Maxamatovna</h4>
            <p className='anotherhero_list_item_text'>Toshkent shahar BABM direktori</p>
            <a className='anotherhero_list_item_tel'>Telefon raqami: +998 71 237 34 22 </a>
            <a className='anotherhero_list_item_mail'>E-mail: info@barkamolavlod.uz</a>
        </li>

        <li className='anotherhero_list_item'>
          <img className='anotherhero_list_item_img' src={Director}/>
            <h4 className='anotherhero_list_item_title'>Mirsagatova Tamara Maxamatovna</h4>
            <p className='anotherhero_list_item_text'>Toshkent shahar BABM direktori</p>
            <a className='anotherhero_list_item_tel'>Telefon raqami: +998 71 237 34 22 </a>
            <a className='anotherhero_list_item_mail'>E-mail: info@barkamolavlod.uz</a>
        </li>

        <li className='anotherhero_list_item'>
          <img className='anotherhero_list_item_img' src={Director}/>
            <h4 className='anotherhero_list_item_title'>Mirsagatova Tamara Maxamatovna</h4>
            <p className='anotherhero_list_item_text'>Toshkent shahar BABM direktori</p>
            <a className='anotherhero_list_item_tel'>Telefon raqami: +998 71 237 34 22 </a>
            <a className='anotherhero_list_item_mail'>E-mail: info@barkamolavlod.uz</a>
        </li>
      </ul>

      <Link to='/secondhero' className='anotherhero_link'>&lt; Ortga </Link>

      </div>
    </div>
  )
}
