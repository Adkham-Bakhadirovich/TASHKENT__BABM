import React from 'react'
import '../../Painting/PaintingCss/PaintingHero.css'
import DropdownContainer from '../../Components/Header/Header'
import Colors from '../../images/Png/colors.png'
import HandlePencil from '../../images/Png/pencil.png'
import { Link } from 'react-router-dom'
import Facebook from '../../images/Svg/facebook.svg'
import Instagram from '../../images/Svg/instagram.svg'
import Telegram from '../../images/Svg/telegram.svg'
export default function PaintingHero() {
  return (
    <div className='paintinghero'>
     <DropdownContainer/>
     <div className='container'>
     <div className='paintinghero_box'>
     <div className='paintinghero_left_box'>
     <p className='paintinghero_text'>Ta’lim yo’nalishlari &gt; Madaniyat va San’at &gt; Rassomchilik to’garagi</p>
     <h2 className='paintinghero_title'>Rassomchilik to’garagi</h2>
     <ul className='paintinghero_list'>
      <li className='paintinghero_list_item'>
      <img className='paintinghero_list_item_img' src={Colors}/>
      <p className='paintinghero_list_item_text'>Toshkent shahrida kichik yoshdagi bolalarni tarbiyalash va ularga ta’lim berish masalalari bo‘yicha jahon konferensiyasi bo‘lib o‘tdi. 15 noyabr kuni bu anjumanga O‘zbekiston prezidenti Shavkat Mirziyoyev tashrif buyurdi.
         <br/>
         <br/>
         Konferensiya dunyoda 2030 yilga qadar maktabgacha ta’lim sohasiga oid siyosatni belgilab olish va bu boradagi xalqaro hamkorlikni kengaytirishga qaratilgan. Unda YuNeSKO Bosh direktori Odri Azule, 150 ga yaqin mamlakatdan vazirlar va vakillar, xalqaro tashkilotlar mutasaddilari qatnashmoqda.
         <br/>
         <br/>
         Davlat rahbari nutqining avvalida soha bo‘yicha dunyodagi vaziyatga to‘xtalib, millionlab bolalarning boshlang‘ich bilim olish imkoniyati cheklangani, mutaxassislar birgalashib, maktabgacha ta’lim qamrovini oshirishi muhimligini aytdi. O‘zbekistonda «inson qadri, uning huquq va manfaatlari – oliy qadriyat» degan tamoyil asosida aholi uchun munosib turmush sharoitlari yaratilayotgani ta’kidlandi.</p>
      </li>

      <li className='paintinghero_list_item'>
      <img className='paintinghero_list_item_img' src={HandlePencil}/>
      <p className='paintinghero_list_item_text paintinghero_list_item_text_extra'>
        Shu bois davlat rahbari bu bo‘g‘inga alohida e’tibor qaratib, barkamol avlodni aynan kichik yoshdan tarbiyalash siyosatini belgilab berdi. O‘zbekiston Prezidentining 2017 yil 30 sentabrdagi farmoniga muvofiq, Maktabgacha ta’lim vazirligi tashkil etildi. Bog‘chalar qurish va ta’mirlash, ilg‘or tarbiya uslublari va metodikalarini joriy etish bo‘yicha ko‘p ishlar boshlandi.
        <br/>
        <br/>
        Sohani rivojlantirish uchun xususiy sektor kirib kelishiga ham imkoniyat yaratildi. Har bir tarbiyalanuvchi bola uchun davlat budjeti hisobidan subsidiyalar berish yo‘lga qo‘yildi. Olis va chekka hududlarda minglab oilaviy bog‘chalar tashkil qilindi.
        
        </p>
      </li>
     </ul>
     
     </div>
     <div class="paintinghero_right_box">
       <h5 className='paintinghero_right_box_title'>Boshqa to’garaklar</h5>
       <ul className='paintinghero_right_box_list'>
        <li className='paintinghero_right_box_list_item'>Futbol to’garagi</li>
        <li className='paintinghero_right_box_list_item'>Basketbol to’garagi</li>
        <li className='paintinghero_right_box_list_item'>Qo’shiqchilik to’garagi</li>
        <li className='paintinghero_right_box_list_item'>Kulolchilik to’garagi</li>
        <li className='paintinghero_right_box_list_item'>Duradgorlik to’garagi</li>
       </ul>
     </div>
     </div>
     <p className='paintinghero_ent_text'>
      Natijada so‘nggi yillarda maktabgacha ta’lim muassasalari soni 6 barobarga ko‘paydi. Tarbiyachi va pedagoglar soni ham 3 barobarga o‘sib, 160 mingga yetdi. Shu tariqa, bog‘cha yoshidagi 2 million 800 ming nafar boladan 2 million nafari maktabgacha ta’lim bilan qamrab olindi.
     </p>
     <Link to='/secondhero' className='paintinghero_link'>&lt; Ortga</Link>
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
