import React from 'react';
import '../../About/AboutCss/AboutHero.css';
import DropdownContainer from '../../Components/Header/Header';
import AboutHeroBG from '../../images/Png/Aboutherobg.png';
import { Link } from 'react-router-dom';

export default function AboutHero() {
  return (
    <div className='abouthero'>
      <div className="container">
        <DropdownContainer />
        <p className='abouthero_text'>Maktab &gt; Maktab haqida</p>
        <img className='abouthero_img' src={AboutHeroBG} alt="About Hero Background"/>
        <h2 className='abouthero_title'>“BARKAMOL AVLOD” BILAN YURT KELAJAGI SARI</h2>
        <p className='abouthero_big_text'>“Barkamol avlod” bolalar maktablari ish faoliyati davomida ming-minglab o‘quvchi yoshlarning o‘z qiziqishlariga ko‘ra kasb-xunarga yo‘naltirib, hayotda to‘g‘ri yo‘lini topishida ko‘mak berib kelmoqda.
            Dastavval 2011-yilda “Barkamol avlod” markazlari O‘zbekiston Respublikasi vazirlar mahkamasining 2011-yil 28-fevraldagi Maktabdan tashqari ta’lim tizimini yanada takomillashtirish chora-tadbirlari to‘g‘risidagi 50-sonli Qarori hamda 2011-yil 11-maydagi “Barkamol avlod” markazlari to‘g‘risidagi nizom, 130-son qarorga ilova asosida tashkil etilgan. “Barkamol avlod” markazlari 3 ta yo‘nalishda (Badiiy ijodiyot, texnik ijodiyot hamda o‘lkashunoslik va ekalogiya) o‘z faoliyatni olib borgan.
            2019-yil 30-sentabrdagi O‘zbekiston Respublikasi Prezidentinig 4467-sonli qarori asosida “Barkamol avlod” markazlari tugatilib 2020-yil mart oyida O‘zbekiston Respublikasi Xalq ta’limi vazirligi tasarrufidagi texnik ijodiyot, badiiy ijodiyot, o‘lkashunoslik va ekologiya bo‘yicha “Barkamol avlod” respublika bolalar markazlari negizida “Barkamol avlod” bolalar maktablari tashkil etilgan. Shundan so‘ng, “Barkamol avlod” bolalar maktabi 2021-yil 27-maydagi O‘zbekiston Respublikasi Vazirlar mahkamasining Maktabdan tashqari ta’lim tizimini takomillashtirishning qo‘shma chora tadbirlari to‘g‘risidagi 331-sonli qarori bilan “Barkamol avlod” bolalar maktablari to‘g‘risidagi nizom asosida o‘z ish faoliyatini boshladi va 7-yo‘nalish 65 nomdagi to‘garaklar faoliyatini yo‘lga qo‘ydi. Ushbu yo‘nalishlarda Madaniyat va san’at (11 nomdagi to‘garak), Texnika konstruktorlik va modellashtirish (17 nomdagi to‘gark), Jimoniy tarbiya va sport (4 nomdagi to‘garak), Hunarmandchilik va qo‘l mehnati (14 nomdagi to‘garak), Turizm va ekologiya (9 nomdagi to‘garak), Oliy ta’lim muassasalari va maktabga tayyorlov va Xorijiy til yo‘nalishlarida to‘garaklar tashkil etilib, kelajak avlodning komil inson bo‘lib shakllanishiga xizmat qilib kelmoqda.
            Jumladan, “Barkamol avlod” respublika bolalar maktabi AKFA Universiteti, Hunarmand uyushmasi, “Sharq ayoli” Xalqaro xotin qizlar jamoat fondi, O‘zbekiston Respublikasi Badiiy akademiyasi va boshqa bir qancha nufuzli tashkilotlar bilan hamkorlik Memorandumlar imzolandi. Bu albatta quvonarli hol. Joriy yilda “Barkamol avlod” bolalar maktablari to‘garak a’zolari bir qancha Xalqaro tanlovlarda ishtirok etishib yuqori natijalarni qo‘lga kiritib kelishmoqda. Biz ishonamiz-ki “Barkamol avlod” bolalari har javhada ilg‘or, intiluvchan va o‘z kuch qudratiga ishonadigan yoshlar bo‘lib maqsad sari olg‘a qadam tashlaydi. Vatanimizning buyuk kelajagiga, “Barkamol avlod” bolalari o‘z xissasini qo‘shadi va dovrug‘ini dunyoga tanitadigan yetakchi yoshlar qatorida albatta bo‘ladi.
        </p>
        <Link to='/secondhero' className='abouthero_link'>&lt; Ortga </Link>
      </div>
    </div>
  );
}

