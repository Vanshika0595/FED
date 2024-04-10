import React from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
    return (
        <nav className = "flex flex-col lg:flex-row justify-between items-center py-3 border-none lg:border px-2 fixed top-0 left-0 right-0 bg-[#f5f5f5ff] z-20" style={{ position: 'fixed', top: 0, left: 0, right: 0, backgroundColor: '#fff', boxShadow: '0 2px 2px rgba(0, 0, 0, 0.1)', padding: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div className="flex justify-between items-center gap-2 mr-4">
                    <img src="/logoZ.png" alt="logo" width={200} />
                    <Link to="/" className="font-extrabold text-lg">
                        JioSaavn
                    </Link>
                </div>
                <div className='flex text-[24px] gap-10' style={{ color: '#888' }}>
                    <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex', gap: '10px' }}>
                        <li className="list-name"><Link to="/music" className="text-gray-500 font-semibold">Music</Link></li>
                        <li className="list-name"><Link to="/podcasts" className="text-gray-500 font-semibold">Podcasts</Link></li>
                        <li className="list-name"><Link to="/go-pro" className="text-gray-500 font-semibold">Go Pro</Link></li>
                    </ul>
                </div>
            </div>

            <div className="hidden lg: block" >
                <input type="text"
                        name="search"
                            id="search"
                            className="py-2 rounded-full w-{40vw} outline-name text-center border text-black"
                            placeholder="Search for songs" 
                            />
            </div>
            <div className='hidden lg:flex justify-between items gap-2'>
                <div className='flex justify-center gap-2'>
                    <div className="flex flex-col text-sm">
                        <span className='text-gray-500 font-semibold'>
                            Music Languages
                        </span>
                        <span className='text-gray-500'>
                            Hindi
                        </span>
                    </div>
                    <MdKeyboardArrowDown className="text-xl text-gray-500 mt-2" />
                </div>
                <div className= "flex gap-2 text-gray-500 font-semibold">
                    <li className='list-name'>Log in</li>
                    <li className='list-name'>Sign up</li>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
