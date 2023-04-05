import React from 'react';
import './Header.css'
import { HomeModernIcon } from '@heroicons/react/24/solid'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='brd flex items-center justify-between bgC px-9 py-2'>
            <Link to='./' className='inline-flex items-center'>
                <HomeModernIcon className="h-10 w-10 txC" />
                <h1 className='font-bold text-4xl ml-2 font-serif'>S<span className='txC'>hrabon</span></h1>
            </Link>
            <div>
                <ul className='flex space-x-9 text-2xl font-semibold font-serif'>
                    <li>
                        <NavLink to='/' className={({ isActive }) => (isActive ? 'text-red-700' : '')} >Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/foods' className={({ isActive }) => (isActive ? 'text-red-700' : '')} >Foods</NavLink>
                    </li>
                    <li>
                        <NavLink to='/recharts' className={({ isActive }) => (isActive ? 'text-red-700' : '')} >Recharts</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' className={({ isActive }) => (isActive ? 'text-red-700' : '')} >About</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;