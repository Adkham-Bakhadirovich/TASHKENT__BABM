import React from 'react'
import '../HomeCss/Circle.css'
export default function Circle() {
  return (
    <div className='circle'>
      <div className='container'>
       <p className='circle_main_text'>-To’garaklar-</p>
       <h2 className='circle_main_title'>Maktabimizdagi mavjud to’garaklar bilan tanishing</h2>

       <ul className='circle_list'>
        <li className='circle_list_item circle_zero'>
          <div className='circle_list_item_box'>
            <h4 className='circle_item_title circle_item_title_cultur'>Madaniyat va san’at</h4>
            <p className='circle_item_text circle_first_text'>Madaniyat va san’at yo‘nalishida 11 turdagi to‘garak mavjud</p>
          </div>
        </li>

        <li className='circle_list_item circle_first'>
          <div className='circle_list_item_box'>
            <h4 className='circle_item_title circle_item_title_extra'>Texnika konstruktorlik va modellashtirish</h4>
            <p className='circle_item_text circle_second_text'>Ushbu yo‘nalishida <br/> 17 turdagi to‘garak mavjud</p>
          </div>
        </li>

        <li className='circle_list_item graduation'>
          <div className='circle_list_item_box circle_list_item_box_extra'>
            <h4 className='circle_item_title'>Oliy ta’lim muassasalari va maltablarga tayyorlov</h4>
            <p className='circle_item_text circle_third_text'>Oliy ta’lim muassasalari va maktabga tayyorlov yo‘nalishida 8 turdagi (Ona tili va adabiyoti, Biologiya, Kimyo, Fizika, Matematika, Tarix, Mental arifmetika, Logika, o’yinli matematika, husnixat, o’qish, tasviriy san’at, teatr va raqs kabi) to‘garaklar mavjud</p>
          </div>
        </li>

        <li className='circle_list_item circle_third'>
          <div className='circle_list_item_box'>
            <h4 className='circle_item_title'>Jismoniy tarbiya <br/> va sport</h4>
            <p className='circle_item_text circle_fourth_text'>Ushbu yo‘nalishida 4 turdagi <br/> to‘garak mavjud</p>
          </div>
        </li>

        <li className='circle_list_item circle_fourth'>
          <div className='circle_list_item_box'>
            <h4 className='circle_item_title'>Hunarmandchilik <br/> va qo’l mehnati</h4>
            <p className='circle_item_text circle_fivth_text'>Ushbu yo‘nalishida 14 turdagi <br/>  to‘garak mavjud</p>
          </div>
        </li>

        <li className='circle_list_item circle_fivth'>
          <div className='circle_list_item_box'>
            <h4 className='circle_item_title'>Ekologiya <br/> va turizm</h4>
            <p className='circle_item_text circle_sex_text'>Ushbu yo‘nalishida 14 turdagi <br/> to‘garak mavjud</p>
          </div>
        </li>

        <li className='circle_list_item circle_sex'>
          <div className='circle_list_item_box'>
            <h4 className='circle_item_title'>Xorijiy <br/> Tillar</h4>
            <p className='circle_item_text circle_seventh_text'>Ushbu yo‘nalishida 14 turdagi <br/> to‘garak mavjud</p>
          </div>
        </li>
       </ul>
      </div>
    </div>
  )
}

