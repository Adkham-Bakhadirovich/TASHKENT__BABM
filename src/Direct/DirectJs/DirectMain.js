import React from 'react';
import '../../Direct/DirectCss/DirectMain.css';
import { Accordion, AccordionDetails, AccordionSummary,} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
export default function DirectMain() {
  return (
    <div className='directmain'>
      <div className='container'>
        <div className='directmain_box'>
          <div className='directmain_left_box'>
            <p className='directain_text'>Talim yo’nalishlari &gt;</p>
            <Accordion sx={{border: 'none', boxShadow: 'none'}}>
            <AccordionSummary
                expandIcon={<AddIcon/>}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <p class="accordion_text">Madaniyat va San’at</p>
              </AccordionSummary>
              <AccordionDetails>
                <ul className='accor_list'>
                  <li className='accor_list_item'>Ona tili va adabiyoti</li>
                  <li className='accor_list_item'>Biologiya</li>
                  <li className='accor_list_item'>Kimyo</li>
                  <li className='accor_list_item'>Fizika</li>
                  <li className='accor_list_item'>Matematika</li>
                  <li className='accor_list_item'>Tarix</li>
                  <li class="accor_list_item">
                    <Link className='accor_list_item_link' to='/paint'>Rassomchilik to'garagi</Link>
                  </li>
                  <li className='accor_list_item'>Mental Arifmetika</li>
                </ul>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{border: 'none', boxShadow: 'none'}}>
              <AccordionSummary
                expandIcon={<AddIcon/>}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <p class="accordion_text">Texnika konstruktorlik va modellashtirish</p>
              </AccordionSummary>
              <AccordionDetails>
              <ul className='accor_list'>
                  <li className='accor_list_item'>Ona tili va adabiyoti</li>
                  <li className='accor_list_item'>Biologiya</li>
                  <li className='accor_list_item'>Kimyo</li>
                  <li className='accor_list_item'>Fizika</li>
                  <li className='accor_list_item'>Matematika</li>
                  <li className='accor_list_item'>Tarix</li>
                  <li className='accor_list_item'>Mental Arifmetika</li>
                  <li className='accor_list_item'>Mental Arifmetika</li>
                </ul>
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{border: 'none', boxShadow: 'none'}}>
              <AccordionSummary
                expandIcon={<AddIcon/>}
                aria-controls="panel2-content"
                id="panel2-header"
              >
               <p class="accordion_text">Jismoniy tarbiya va sport</p>
              </AccordionSummary>
              <AccordionDetails>
              <ul className='accor_list'>
                  <li className='accor_list_item'>Ona tili va adabiyoti</li>
                  <li className='accor_list_item'>Biologiya</li>
                  <li className='accor_list_item'>Kimyo</li>
                  <li className='accor_list_item'>Fizika</li>
                  <li className='accor_list_item'>Matematika</li>
                  <li className='accor_list_item'>Tarix</li>
                  <li className='accor_list_item'>Mental Arifmetika</li>
                  <li className='accor_list_item'>Mental Arifmetika</li>
                </ul>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{border: 'none', boxShadow: 'none'}}>
              <AccordionSummary
                expandIcon={<AddIcon/>}
                aria-controls="panel2-content"
                id="panel2-header"
              >
               <p class="accordion_text">Hunarmandchilik va qo’l mehnati</p>
              </AccordionSummary>
              <AccordionDetails>
              <ul className='accor_list'>
                  <li className='accor_list_item'>Ona tili va adabiyoti</li>
                  <li className='accor_list_item'>Biologiya</li>
                  <li className='accor_list_item'>Kimyo</li>
                  <li className='accor_list_item'>Fizika</li>
                  <li className='accor_list_item'>Matematika</li>
                  <li className='accor_list_item'>Tarix</li>
                  <li className='accor_list_item'>Mental Arifmetika</li>
                  <li className='accor_list_item'>Mental Arifmetika</li>
                </ul>
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{border: 'none', boxShadow: 'none'}}>
              <AccordionSummary
                expandIcon={<AddIcon/>}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <p class="accordion_text">Ekologiya va turizm</p>
              </AccordionSummary>
              <AccordionDetails>
              <ul className='accor_list'>
                  <li className='accor_list_item'>Ona tili va adabiyoti</li>
                  <li className='accor_list_item'>Biologiya</li>
                  <li className='accor_list_item'>Kimyo</li>
                  <li className='accor_list_item'>Fizika</li>
                  <li className='accor_list_item'>Matematika</li>
                  <li className='accor_list_item'>Tarix</li>
                  <li className='accor_list_item'>Mental Arifmetika</li>
                  <li className='accor_list_item'>Mental Arifmetika</li>
                </ul>
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{border: 'none', boxShadow: 'none'}}>
              <AccordionSummary
                expandIcon={<AddIcon/>}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                 <p class="accordion_text">Oliy ta’lim muassasalari va maktabga tayyorlov</p>
              </AccordionSummary>
              <AccordionDetails>
              <ul className='accor_list'>
                  <li className='accor_list_item'>Ona tili va adabiyoti</li>
                  <li className='accor_list_item'>Biologiya</li>
                  <li className='accor_list_item'>Kimyo</li>
                  <li className='accor_list_item'>Fizika</li>
                  <li className='accor_list_item'>Matematika</li>
                  <li className='accor_list_item'>Tarix</li>
                  <li className='accor_list_item'>Mental Arifmetika</li>
                  <li className='accor_list_item'>Mental Arifmetika</li>
                </ul>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{border: 'none', boxShadow: 'none'}}>
              <AccordionSummary
                expandIcon={<AddIcon/>}
                aria-controls="panel2-content"
                id="panel2-header"
              >
               <p class="accordion_text">Xorijiy tillar</p>
              </AccordionSummary>
              <AccordionDetails>
              <ul className='accor_list'>
                  <li className='accor_list_item'>Ona tili va adabiyoti</li>
                  <li className='accor_list_item'>Biologiya</li>
                  <li className='accor_list_item'>Kimyo</li>
                  <li className='accor_list_item'>Fizika</li>
                  <li className='accor_list_item'>Matematika</li>
                  <li className='accor_list_item'>Tarix</li>
                  <li className='accor_list_item'>Mental Arifmetika</li>
                  <li className='accor_list_item'>Mental Arifmetika</li>
                </ul>
              </AccordionDetails>
            </Accordion>
          

          </div>

          <ul className='directmain_list'>
            <p className='directmain_list_text'>Yangiliklar</p>
            <li className='directmain_list_item'>
              <time className='directmain_list_item_time'>20:30 | 03.02.2023</time>
              <p className='directmain_list_item_text'>Toshkent Shahar hokimiyati 30 nafar o’quvchining hirijda ta;lim olishiga yordam qiladi</p>
            </li>

            <li className='directmain_list_item'>
              <time className='directmain_list_item_time'>20:30 | 03.02.2023</time>
              <p className='directmain_list_item_text'>O’zbekiston maxsus borti Turkiyaga yetib bordi</p>
            </li>

            <li className='directmain_list_item'>
              <time className='directmain_list_item_time'>20:30 | 03.02.2023</time>
              <p className='directmain_list_item_text'>Toshkent Barkamol Avlod Bolalar Maktabi shaxmat to’garaklari uchun joylar sonini ko’paytiradi</p>
            </li>

            <li className='directmain_list_item'>
              <time className='directmain_list_item_time'>20:30 | 03.02.2023</time>
              <p className='directmain_list_item_text'>Prezident ta’lim sohasini rivojlantitish va takomillashtirish bo’yicha yana bir yangi qarorni tasdiqladi</p>
            </li>

            <li className='directmain_list_item'>
              <time className='directmain_list_item_time'>20:30 | 03.02.2023</time>
              <p className='directmain_list_item_text'>Toshkent Aeroportida yo’lovchilarni kutib olish uchin bir nechta zonalar paydo bo’ladi</p>
            </li>

            <li className='directmain_list_item'>
              <time className='directmain_list_item_time'>20:30 | 03.02.2023</time>
              <p className='directmain_list_item_text'>Gazprom Qozog’iston va O’zbekiston bilan uch tomonlama hamkorlikni muhokama qildi</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}