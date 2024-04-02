import React from 'react'
import '../../Leader/LeaderCss/LeaderHero.css'
import DropdownContainer from '../../Components/Header/Header'
import Director from '../../images/Png/manage.png'
import { Link } from 'react-router-dom'
export default function LeaderHero() {
  return (
    <div className='leaderhero'>
      <DropdownContainer/>
      <div className='container'>
      <p className='leaderhero_text'>Faoliyat  &gt; To’garak rahbarlari</p>
      <h2 className='leaderhero_title'>Toshkent shahar “Barkamol Avlod” bolalar maktabining to’garak rahbarlari</h2>

      <ul className='leaderhero_list'>
        <li className='leaderhero_list_item'>
          <img className='leaderhero_list_item_img' src={Director}/>
            <h4 className='leaderhero_list_item_title'>Mirsagatova Tamara Maxamatovna</h4>
            <p className='leaderhero_list_item_text'>Toshkent shahar BABM direktori</p>
            <a className='leaderhero_list_item_tel'>Telefon raqami: +998 71 237 34 22 </a>
            <a className='leaderhero_list_item_mail'>E-mail: info@barkamolavlod.uz</a>
        </li>

        <li className='leaderhero_list_item'>
          <img className='leaderhero_list_item_img' src={Director}/>
            <h4 className='leaderhero_list_item_title'>Mirsagatova Tamara Maxamatovna</h4>
            <p className='leaderhero_list_item_text'>Toshkent shahar BABM direktori</p>
            <a className='leaderhero_list_item_tel'>Telefon raqami: +998 71 237 34 22 </a>
            <a className='leaderhero_list_item_mail'>E-mail: info@barkamolavlod.uz</a>
        </li>

        <li className='leaderhero_list_item'>
          <img className='leaderhero_list_item_img' src={Director}/>
            <h4 className='leaderhero_list_item_title'>Mirsagatova Tamara Maxamatovna</h4>
            <p className='leaderhero_list_item_text'>Toshkent shahar BABM direktori</p>
            <a className='leaderhero_list_item_tel'>Telefon raqami: +998 71 237 34 22 </a>
            <a className='leaderhero_list_item_mail'>E-mail: info@barkamolavlod.uz</a>
        </li>

        <li className='leaderhero_list_item'>
          <img className='leaderhero_list_item_img' src={Director}/>
            <h4 className='leaderhero_list_item_title'>Mirsagatova Tamara Maxamatovna</h4>
            <p className='leaderhero_list_item_text'>Toshkent shahar BABM direktori</p>
            <a className='leaderhero_list_item_tel'>Telefon raqami: +998 71 237 34 22 </a>
            <a className='leaderhero_list_item_mail'>E-mail: info@barkamolavlod.uz</a>
        </li>

        <li className='leaderhero_list_item'>
          <img className='leaderhero_list_item_img' src={Director}/>
            <h4 className='leaderhero_list_item_title'>Mirsagatova Tamara Maxamatovna</h4>
            <p className='leaderhero_list_item_text'>Toshkent shahar BABM direktori</p>
            <a className='leaderhero_list_item_tel'>Telefon raqami: +998 71 237 34 22 </a>
            <a className='leaderhero_list_item_mail'>E-mail: info@barkamolavlod.uz</a>
        </li>

        <li className='leaderhero_list_item'>
          <img className='leaderhero_list_item_img' src={Director}/>
            <h4 className='leaderhero_list_item_title'>Mirsagatova Tamara Maxamatovna</h4>
            <p className='leaderhero_list_item_text'>Toshkent shahar BABM direktori</p>
            <a className='leaderhero_list_item_tel'>Telefon raqami: +998 71 237 34 22 </a>
            <a className='leaderhero_list_item_mail'>E-mail: info@barkamolavlod.uz</a>
        </li>

        <li className='leaderhero_list_item'>
          <img className='leaderhero_list_item_img' src={Director}/>
            <h4 className='leaderhero_list_item_title'>Mirsagatova Tamara Maxamatovna</h4>
            <p className='leaderhero_list_item_text'>Toshkent shahar BABM direktori</p>
            <a className='leaderhero_list_item_tel'>Telefon raqami: +998 71 237 34 22 </a>
            <a className='leaderhero_list_item_mail'>E-mail: info@barkamolavlod.uz</a>
        </li>

        <li className='leaderhero_list_item'>
          <img className='leaderhero_list_item_img' src={Director}/>
            <h4 className='leaderhero_list_item_title'>Mirsagatova Tamara Maxamatovna</h4>
            <p className='leaderhero_list_item_text'>Toshkent shahar BABM direktori</p>
            <a className='leaderhero_list_item_tel'>Telefon raqami: +998 71 237 34 22 </a>
            <a className='leaderhero_list_item_mail'>E-mail: info@barkamolavlod.uz</a>
        </li>
      </ul>

      <Link to='/secondhero' className='leaderhero_link'>&lt; Ortga </Link>

      </div>
    </div>
  )
}
