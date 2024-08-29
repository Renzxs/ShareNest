import { Link } from 'react-router-dom';
import ShareNestLogo from '../../assets/images/sharenest_dark_no_bg_logo.png';
import SearchBar from './SearchBar';
import { Close, Menu } from '@mui/icons-material';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <div className='p-[10px] fixed w-full z-50'>
      <div className='bg-Gray h-auto rounded-[10px] flex justify-between max-sm:justify-between gap-[20px] items-center px-[30px] backdrop-blur-md bg-LightGray/30'>
        {/* Left Container */}
        <div className='flex items-center gap-[20px]'>
          {/* ShareNest Logo */}
          <img className='w-[70px]'
                src={ShareNestLogo} 
                alt={ShareNestLogo}/>
          
          {/* Navigation Links */}
          <nav className='flex items-center gap-[20px] max-lg:hidden'>
            <Link className='font-Poppins text-[13px] hover:opacity-50' to={'/'}>Home</Link>
            <Link className='font-Poppins text-[13px] hover:opacity-50' to={'/'}>Explore</Link>
            <Link className='font-Poppins text-[13px] hover:opacity-50' to={'/'}>Trends</Link>
            <Link className='font-Poppins text-[13px] hover:opacity-50' to={'/'}>About Us</Link>
          </nav>
        </div>

        {/* Right Container */}
        <div className='flex items-center gap-[20px]'>
          {/* Search Bar */}
          <div className='max-sm:hidden'>
            <SearchBar />
          </div>

          {/* Login Button */}
          <Link to={'/'} className='bg-Dark flex justify-center items-center py-[12px] px-[30px] rounded-[30px] hover:opacity-80 '>
            <p className='font-Poppins text-[13px] text-Light text-nowrap'>Sign in</p>
          </Link>

          <div className='hidden max-lg:block'>
            { isMenuOpen ? (
                <Close onClick={() => setIsMenuOpen(false)} className='text-Dark cursor-pointer hover:opacity-70'/>
              )
              :
              (
                <Menu onClick={() => setIsMenuOpen(true)} className='text-Dark cursor-pointer hover:opacity-70'/>
              )
            }
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`bg-Gray rounded-[10px] justify-between gap-[20px] items-center mt-[5px] p-[20px] backdrop-blur-md bg-LightGray/30 hidden max-sm:flex transition-all duration-300 ${isMenuOpen ? 'translate-y-0 ' : 'translate-y-[-999px]'}`}>
          {/* Navigation Links */}
          <nav className='flex justify-center items-center gap-[20px] w-full'>
            <Link className='font-Poppins text-[13px] hover:opacity-50' to={'/'}>Home</Link>
            <Link className='font-Poppins text-[13px] hover:opacity-50' to={'/'}>Explore</Link>
            <Link className='font-Poppins text-[13px] hover:opacity-50' to={'/'}>Trends</Link>
            <Link className='font-Poppins text-[13px] hover:opacity-50' to={'/'}>About Us</Link>
          </nav>
      </div>
    </div>
  )
};

export default Navbar;
