// sidebar.jsx
import React from 'react';
import {
  BsGrid1X2Fill,
  BsPlusLg,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
} from 'react-icons/bs';
import { IoLibrarySharp, IoArrowBack } from 'react-icons/io5';
import './styles/sidebar.css';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside id='sidebar' className={openSidebarToggle ? 'sidebar-responsive' : ''}>
      <div className='sidebar-title'>
        {openSidebarToggle && (
          <span className='icon back-arrow' onClick={OpenSidebar}>
            <IoArrowBack />
          </span>
        )}
      </div>
      <div className='sidebar-brand'>
        <IoLibrarySharp className='icon_header' /> LIBRARY
      </div>
      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <a href=''>
            <BsGrid1X2Fill className='icon' /> Dashboard
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href=''>
            <BsPlusLg className='icon' /> Add Book
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href=''>
            <BsPeopleFill className='icon' /> Readers
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href=''>
            <BsListCheck className='icon' /> Book List
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href=''>
            <BsMenuButtonWideFill className='icon' /> Reports
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href=''>
            <BsFillGearFill className='icon' /> Setting
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
