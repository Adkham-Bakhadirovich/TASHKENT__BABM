import React, { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import { Link } from 'react-router-dom';
import '../../Components/Header/Header.css'
import BABM from '../../images/Svg/BABM-logo.svg'
import { IoMenu } from "react-icons/io5";

const items = [
  {
    label: <Link to="/about" className="school_list_item_link">Maktab haqida</Link>,
    key: '0',
  },
  {
    label: <Link to="/manage" className="school_list_item_link">Rahbariyat</Link>,
    key: '1',
  },
  {
    label: <Link to="/structur" className="school_list_item_link">Maktab tuzilmasi</Link>,
    key: '2',
  },
];

const doc = [
  {
    label: (
      <Link to="/" className='school_list_item_link'>331-qaror</Link>
    ),
    key: '0',
  },
  {
    label: (
      <Link to="/" className='school_list_item_link'>4467-qaror</Link>
    ),
    key: '1',
  },
];

const direct = [
  {
    label: (
      <Link to="/direct" className='school_list_item_link'>Madaniyat 
      va san’at</Link>
    ),
    key: '0',
  },
  {
    label: (
      <Link to="/direct" className='school_list_item_link'>Texnika konstruktorlik
      va modellashtirish</Link>
    ),
    key: '1',
  },
  {
    label: (
      <Link to="/direct" className='school_list_item_link'>Jismoniy tarbiya 
      va sport</Link>
    ),
    key: '2',
  },
  {
    label: (
      <Link to="/direct" className='school_list_item_link'>Hunarmandchilik 
      va qo’l mehnati</Link>
    ),
    key: '3',
  },
  {
    label: (
      <Link to="/direct" className='school_list_item_link'>Ekologiya
      va turizm</Link>
    ),
    key: '4',
  },
  {
    label: (
      <Link to="/direct" className='school_list_item_link'>Oliy ta’lim muassasalari va maktablarga tayyorlov</Link>
    ),
    key: '5',
  },
  {
    label: (
      <Link to="/direct" className='school_list_item_link'>Xorijiy
      Tillar</Link>
    ),
    key: '6',
  },
];

const activ = [
  {
    label: (
      <Link to="/leader" className='school_list_item_link'>To’garak rahbarlari
      </Link>
    ),
    key: '0',
  },
  {
    label: (
      <Link to="/another" className='school_list_item_link'>Boshqa hodimlar</Link>
    ),
    key: '1',
  },
];

const InfoService = [
  {
    label: (
      <Link to="/photo" className='school_list_item_link'>Galereya
      </Link>
    ),
    key: '0',
  },
  {
    label: (
      <Link to="/video" className='school_list_item_link'>Videogalereya</Link>
    ),
    key: '1',
  },
  {
    label: (
      <Link to="/news" className='school_list_item_link'>Yangliklar</Link>
    ),
    key: '2',
  },
  {
    label: (
      <Link to="/photograph" className='school_list_item_link'>Rassomchilik to'garagi</Link>
    ),
    key: '3',
  },
];



const menu = (
  <Menu>
    {items.map(item => (
      <Menu.Item key={item.key}>{item.label}</Menu.Item>
    ))}
  </Menu>
);

const docs = (
  <Menu>
    {doc.map(item => (
      <Menu.Item key={item.key}>{item.label}</Menu.Item>
    ))}
  </Menu>
);

const direction = (
  <Menu>
    {direct.map(item => (
      <Menu.Item key={item.key}>{item.label}</Menu.Item>
    ))}
  </Menu>
);

const activity = (
  <Menu>
    {activ.map(item => (
      <Menu.Item key={item.key}>{item.label}</Menu.Item>
    ))}
  </Menu>
);

const infoService = (
  <Menu>
    {InfoService.map(item => (
      <Menu.Item key={item.key}>{item.label}</Menu.Item>
    ))}
  </Menu>
);



const DropdownContainer = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="header">
      <div className="container">
        <div className="header_box">
        <Link to="/" className='header_logo'><img src={BABM}/></Link>
          <div className="header_box_inner">
            <Dropdown overlay={menu}>
              <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                <Space className="navbar_list_item">
                  Maktab<DownOutlined />
                </Space>
              </a>
            </Dropdown>
            
          <Dropdown overlay={docs}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
              <Space className='navbar_list_item'>
                Hujjatlar
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
          <Dropdown overlay={direction}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
              <Space className='navbar_list_item'>
              Ta’lim yo’nalishlari
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
          <Dropdown overlay={activity}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
              <Space className='navbar_list_item'>
              Faoliyat
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
          <Dropdown overlay={infoService}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
              <Space className='navbar_list_item'>
              Axborot xizmati
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
            {/* Other Dropdowns */}
          </div>
          <div className="burger-menu">
            <button className="burger-menu-button" onClick={toggleMenu}>
            <IoMenu className='burger_icon' />
            </button>
            {menuVisible && (
              <div className="burger-menu-content">
                <ul className='burger_menu_list'>
                 <li className='burger_menu_list_item'>
                 <Link to="/about" className="school_list_item_link">Maktab haqida</Link>
                 </li>

                 <li>
                 <Link to="/manage" className="school_list_item_link">Rahbariyat</Link>
                 </li>

                 <li>
                 <Link to="/structur" className="school_list_item_link">Maktab tuzilmasi</Link>
                 </li>

                 <li>
                 <Link to="/" className="school_list_item_link">331-qaror</Link>
                 </li>

                 <li>
                 <Link to="/" className="school_list_item_link">4467-qaror</Link>
                 </li>

                 <li>
                 <Link to="/direct" className="school_list_item_link">Madaniyat va san’at</Link>
                 </li>

                 <li>
                 <Link to="/direct" className="school_list_item_link">Texnika konstruktorlik va modellashtirish</Link>
                 </li>

                 <li>
                 <Link to="/direct" className="school_list_item_link">Jismoniy tarbiya va sport</Link>
                 </li>

                 <li>
                 <Link to="/direct" className="school_list_item_link">Hunarmandchilik va qo’l mehnati</Link>
                 </li>

                 <li>
                 <Link to="/direct" className="school_list_item_link">Ekologiya va turizm</Link>
                 </li>

                 <li>
                 <Link to="/direct" className="school_list_item_link">Oliy ta’lim muassasalari va maktablarga tayyorlov</Link>
                 </li>

                 <li>
                 <Link to="/direct" className="school_list_item_link">Xorijiy Tillar</Link>
                 </li>

                 <li>
                 <Link to="/leader" className="school_list_item_link">To’garak rahbarlari</Link>
                 </li>

                 <li>
                 <Link to="/another" className="school_list_item_link">Boshqa hodimlar</Link>
                 </li>

                 <li>
                 <Link to="/photo" className="school_list_item_link">Galereya</Link>
                 </li>

                 <li>
                 <Link to="/video" className="school_list_item_link">Videogalereya</Link>
                 </li>

                 <li>
                 <Link to="/news" className="school_list_item_link">Yangliklar</Link>
                 </li>

                 <li>
                 <Link to="/photograph" className="school_list_item_link">Rassomchilik to'garagi</Link>
                 </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownContainer;
