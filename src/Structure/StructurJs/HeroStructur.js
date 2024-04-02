import React from 'react'
import '../../Structure/StructurCss/HeroStructur.css'
import DropdownContainer from '../../Components/Header/Header'
import Struct from '../../images/Png/struct.png'
import { Link } from 'react-router-dom'
export default function HeroStructur() {
  return (
    <div className='herostruct'>
     <DropdownContainer/>
     <div className='container'>
      <p className='struct_text'>Maktab &gt; Maktab Tuzilmasi</p>
      <h2 className='struct_title'>Toshkent shahar “Barkamol Avlod” bolalar maktabining tuzilmasi</h2>
      <img className='struct_img' src={Struct}/>
      <Link to='/secondhero' className='struct_link'>&lt; Ortga</Link>
     </div>
    </div>
  )
}
