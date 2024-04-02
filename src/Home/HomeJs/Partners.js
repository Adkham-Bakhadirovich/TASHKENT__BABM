import React from 'react'
import '../HomeCss/Partners.css'
import Adliya from '../../images/Png/justice.png'
import LexUz from '../../images/Png/lexuz.png'
import MyGov from '../../images/Png/mygov.png'
import Database from '../../images/Png/database.png'
import SymbolUz from '../../images/Png/symboluz.png'
export default function Partners() {
  return (
    <div className='partners'>
      <div className='container'>
       <p className='partners_main_text'>-Hamkorlar-</p>
       <h2 className='partners_main_title'>Bizning hamkorlar</h2>

       <ul className='partners_list'>
        <li className='partners_list_item'>
          <img className='partners_list_item_img partners_list_item_img_first' src={Adliya}/>
          <p className='partners_list_item_text'>O’zbekiston Respublikasi milliy huquqiy internet portali</p>
        </li>

        <li className='partners_list_item'>
          <img className='partners_list_item_img partners_list_item_img_second' src={LexUz}/>
          <p className='partners_list_item_text'>O’zbekiston Respublikasining qonun hujjatlari ma’lumotlar milliy bazasi</p>
        </li>

        <li className='partners_list_item'>
          <img className='partners_list_item_img partners_list_item_img_third' src={MyGov}/>
          <p className='partners_list_item_text'>Yagona interaktiv davlat xizmatlari portali</p>
        </li>

        <li className='partners_list_item'>
          <img className='partners_list_item_img partners_list_item_img_fourth' src={Database}/>
          <p className='partners_list_item_text'>O’zbekiston Respublikasining ochiq ma’lumotlar bazasi</p>
        </li>

        <li className='partners_list_item'>
          <img className='partners_list_item_img partners_list_item_img_fivth' src={SymbolUz}/>
          <p className='partners_list_item_text'>O’zbekiston Respublikasi Prezidenti rasmiy veb sayti</p>
        </li>
       </ul>
      </div>
    </div>
  )
}
