import React from 'react';
import logo from '../images/sidebar/company_logo.svg'
import logo_text from '../images/sidebar/doors_text.svg'
import pos_pic from '../images/sidebar/pos.svg'

const Sidebar = () => {
    return (
        <section className='sidebar'>
            <img className='sidebar__logo' src={logo} alt="logo" />
            <img className='sidebar__text' src={logo_text} alt="logo" />
            <ul className="menu">
                <li className="menu__item"><span className='menu__text'>Коллекции</span></li>
                <li className="menu__item"><span className='menu__text'>Где купить</span></li>
                <li className="menu__item"><span className='menu__text'>Гарантия</span></li>
                <li className="menu__item"><span className='menu__text'>О компании</span></li>
            </ul>
            <div className="sidebar__bottom">
                <div className="date">
                    <span className="date__day">20</span>
                    <span className="date__mouth_year">12 | 2021</span>
                </div>
                <div className="position">
                    <img className='position__pic' src={pos_pic} alt="position_pic" />
                    <span className='position__text'>Балашиха (учи язык)</span>
                </div>
            </div>
        </section>
    );
};

export default Sidebar;