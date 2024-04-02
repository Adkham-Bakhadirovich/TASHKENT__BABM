import React from 'react'
import '../../HeroSecond/HeroSecondCss/NewsSecond.css'
export default function NewsSecond() {
  return (
    <div className='news'>
     <div className='container'>
      <p className='news_main_text'>-Yangiliklar-</p>
      <h2 className='news_main_title'>So’ngi yangilik, e’lon va habarlar</h2>

      <ul className='news_list'>
        <li className='news_list_item'>
          <div className='news_item_box writing_pen_extra'>
            <p className='news_item_box_text'>Yangiliklar</p>
          </div>
          <div className='news_item_next_box'>
            <time className='news_item_time'>20:30 | 03.02.2023</time>
            <p className='news_item_next_text'>Prezident ta’lim sohasini rivojlantitish va takomillashtirish bo’yicha yana bir yangi qarorni tasdiqladi</p>
          </div>
        </li>

        <li className='news_list_item'>
          <div className='news_item_box chess_extra'>
            <p className='news_item_box_text news_item_box_text_extra'>Matbuot hizmati</p>
          </div>
          <div className='news_item_next_box'>
            <time className='news_item_time'>20:30 | 03.02.2023</time>
            <p className='news_item_next_text'>Toshkent Barkamol Avlod Bolalar Maktabi shaxmat to’garaklari uchun joylar sonini ko’paytiradi</p>
          </div>
        </li>

        <li className='news_list_item'>
          <div className='news_item_box power_extra'>
            <p className='news_item_box_text'>Yangiliklar</p>
          </div>
          <div className='news_item_next_box'>
            <time className='news_item_time'>20:30 | 03.02.2023</time>
            <p className='news_item_next_text'>Toshkent Shahar hokimiyati 30 nafar o’quvchining hirijda ta;lim olishiga yordam qiladi</p>
          </div>
        </li>

        <li className='news_list_item'>
          <div className='news_item_box meeting_extra'>
            <p className='news_item_box_text'>Yangiliklar</p>
          </div>
          <div className='news_item_next_box'>
            <time className='news_item_time'>20:30 | 03.02.2023</time>
            <p className='news_item_next_text'>Gazprom Qozog’iston va O’zbekiston bilan uch tomonlama hamkorlikni muhokama qildi</p>
          </div>
        </li>

        <li className='news_list_item'>
          <div className='news_item_box airport_extra'>
            <p className='news_item_box_text news_item_box_text_extra'>Matbuot hizmati</p>
          </div>
          <div className='news_item_next_box'>
            <time className='news_item_time'>20:30 | 03.02.2023</time>
            <p className='news_item_next_text'>Toshkent Aeroportida yo’lovchilarni kutib olish uchin bir nechta zonalar paydo bo’ladi</p>
          </div>
        </li>

        <li className='news_list_item'>
          <div className='news_item_box military_airdrom_extra'>
            <p className='news_item_box_text'>Yangiliklar</p>
          </div>
          <div className='news_item_next_box'>
            <time className='news_item_time'>20:30 | 03.02.2023</time>
            <p className='news_item_next_text'>O’zbekiston maxsus borti Turkiyaga yetib bordi</p>
          </div>
        </li>
      </ul>
     </div>
    </div>
  )
}
