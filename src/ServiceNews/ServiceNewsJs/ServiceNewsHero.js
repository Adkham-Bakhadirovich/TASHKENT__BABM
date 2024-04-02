import React from 'react'
import '../../ServiceNews/ServiceNewsCss/ServiceNewsHero.css'
import DropdownContainer from '../../Components/Header/Header'
import President from '../../images/Png/president.png'
import { Link } from 'react-router-dom'
import Facebook from '../../images/Svg/facebook.svg'
import Instagram from '../../images/Svg/instagram.svg'
import Telegram from '../../images/Svg/telegram.svg'
export default function ServiceNewsHero() {
  return (
    <div className='servicenewshero'>
    <DropdownContainer/>
    <div className='container'>
    <div className='servicenewshero_box'>
    <div className='servicenewshero_box_left'>
    <p className='servicenewshero_left_text'>Axborot xizmati &gt; Yangiliklar</p>
    <h2 className='servicenewshero_left_title'>«Sarflangan investitsiyalar ortig‘i bilan qaytishiga shubha yo‘q» - Shavkat Mirziyoyev maktabgacha ta’lim sohasiga e’tibor haqida</h2>
    <span className='servicenewshero_left_span'>
      <time className='servicenewshero_left_span_time'>20:30 | 03.02.2023</time>
      <p className='servicenewshero_left_span_text'>129</p>
    </span>
    <img className='servicenewshero_left_img' src={President}/>
    <strong className='servicenewshero_left_strong'>O‘zbekiston prezidenti maktabgacha ta’lim sohasida xalqaro hamkorlikni kengaytirish bo‘yicha muhim tashabbuslarni ilgari surdi.</strong>
    <p className='servicenewshero_left_next_text'>Toshkent shahrida kichik yoshdagi bolalarni tarbiyalash va ularga ta’lim berish masalalari bo‘yicha jahon konferensiyasi bo‘lib o‘tdi. 15 noyabr kuni bu anjumanga O‘zbekiston prezidenti Shavkat Mirziyoyev tashrif buyurdi.
       <br/>
       <br/>
       Konferensiya dunyoda 2030 yilga qadar maktabgacha ta’lim sohasiga oid siyosatni belgilab olish va bu boradagi xalqaro hamkorlikni kengaytirishga qaratilgan. Unda YuNeSKO Bosh direktori Odri Azule, 150 ga yaqin mamlakatdan vazirlar va vakillar, xalqaro tashkilotlar mutasaddilari qatnashmoqda.
       <br/>
       <br/>
       Davlat rahbari nutqining avvalida soha bo‘yicha dunyodagi vaziyatga to‘xtalib, millionlab bolalarning boshlang‘ich bilim olish imkoniyati cheklangani, mutaxassislar birgalashib, maktabgacha ta’lim qamrovini oshirishi muhimligini aytdi. O‘zbekistonda «inson qadri, uning huquq va manfaatlari – oliy qadriyat» degan tamoyil asosida aholi uchun munosib turmush sharoitlari yaratilayotgani ta’kidlandi.</p>
    <quote className='servicenewshero_left_quote'>«Bu borada, avvalambor, yoshlar va bolalarga e’tibor va amaliy g‘amxo‘rlik ko‘rsatish, ularni jismoniy va ma’naviy barkamol etib tarbiyalashga alohida ahamiyat qaratmoqdamiz. Bolalarni kichik yoshdan boshlab rivojlantirish orqali kelajakda ularning o‘zligini to‘la namoyon etishiga mustahkam zamin yaratayapmiz. Zero, bu ezgu maqsadimiz yo‘lida sarflangan investitsiyalar ertaga bir necha barobar ortig‘i bilan qaytishiga shubha yo‘q», – dedi Shavkat Mirziyoyev.</quote>
    <p className='servicenewshero_left__end_text'>Shu bois davlat rahbari bu bo‘g‘inga alohida e’tibor qaratib, barkamol avlodni aynan kichik yoshdan tarbiyalash siyosatini belgilab berdi. O‘zbekiston Prezidentining 2017 yil 30 sentabrdagi farmoniga muvofiq, Maktabgacha ta’lim vazirligi tashkil etildi. Bog‘chalar qurish va ta’mirlash, ilg‘or tarbiya uslublari va metodikalarini joriy etish bo‘yicha ko‘p ishlar boshlandi.
       <br/>
       <br/>
       Sohani rivojlantirish uchun xususiy sektor kirib kelishiga ham imkoniyat yaratildi. Har bir tarbiyalanuvchi bola uchun davlat budjeti hisobidan subsidiyalar berish yo‘lga qo‘yildi. Olis va chekka hududlarda minglab oilaviy bog‘chalar tashkil qilindi.
       <br/>
       <br/>
       Natijada so‘nggi yillarda maktabgacha ta’lim muassasalari soni 6 barobarga ko‘paydi. Tarbiyachi va pedagoglar soni ham 3 barobarga o‘sib, 160 mingga yetdi. Shu tariqa, bog‘cha yoshidagi 2 million 800 ming nafar boladan 2 million nafari maktabgacha ta’lim bilan qamrab olindi.</p>
    </div>
    
    <div className='servicenewshero_box_right'>
      <p className='servicenewshero_box_right_text'>Boshqa yangiliklar</p>
      <ul className='servicenewshero_box_right_list'>
        <li className='servicenewshero_box_right_list_item'>
          <time className='servicenewshero_box_right_list_item_time'>20:30 | 03.02.2023</time>
          <p className='servicenewshero_box_right_list_item_text'>Toshkent Shahar hokimiyati 30 nafar o’quvchining hirijda ta;lim olishiga yordam qiladi</p>
        </li>

        <li className='servicenewshero_box_right_list_item'>
          <time className='servicenewshero_box_right_list_item_time'>20:30 | 03.02.2023</time>
          <p className='servicenewshero_box_right_list_item_text'>O’zbekiston maxsus borti Turkiyaga yetib bordi</p>
        </li>

        <li className='servicenewshero_box_right_list_item'>
          <time className='servicenewshero_box_right_list_item_time'>20:30 | 03.02.2023</time>
          <p className='servicenewshero_box_right_list_item_text'>Toshkent Barkamol Avlod Bolalar Maktabi shaxmat to’garaklari uchun joylar sonini ko’paytiradi</p>
        </li>

        <li className='servicenewshero_box_right_list_item'>
          <time className='servicenewshero_box_right_list_item_time'>20:30 | 03.02.2023</time>
          <p className='servicenewshero_box_right_list_item_text'>Gazprom Qozog’iston va O’zbekiston bilan uch tomonlama hamkorlikni muhokama qildi</p>
        </li>

        <li className='servicenewshero_box_right_list_item'>
          <time className='servicenewshero_box_right_list_item_time'>20:30 | 03.02.2023</time>
          <p className='servicenewshero_box_right_list_item_text'>Prezident ta’lim sohasini rivojlantitish va takomillashtirish bo’yicha yana bir yangi qarorni tasdiqladi</p>
        </li>
      </ul>
    </div>
    
    </div>
    <Link to='/secondhero' className='servicenewshero_link'>&lt; Ortga </Link>
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
