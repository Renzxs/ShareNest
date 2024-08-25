import { Link } from 'react-router-dom';
import ShareNestLogo from '../../assets/images/sharenest_dark_no_bg_logo.png';
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <div className='bg-Gray h-auto rounded-[10px] m-[10px] flex justify-between items-center px-[30px] max-md:flex-col max-md:p-[10px]'>
      {/* Left Container */}
      <div className='flex items-center gap-[20px]'>
        {/* ShareNest Logo */}
        <img className='w-[70px]'
              src={ShareNestLogo} 
              alt={ShareNestLogo}/>
        
        {/* Navigation Links */}
        <nav className='flex items-center gap-[20px]'>
          <Link className='font-Poppins text-[13px] hover:opacity-50' to={'/'}>Home</Link>
          <Link className='font-Poppins text-[13px] hover:opacity-50' to={'/'}>Explore</Link>
          <Link className='font-Poppins text-[13px] hover:opacity-50' to={'/'}>Trends</Link>
          <Link className='font-Poppins text-[13px] hover:opacity-50' to={'/'}>About Us</Link>
        </nav>
      </div>

      {/* Right Container */}
      <div className='flex items-center gap-[20px]'>
        {/* Search Bar */}
        <SearchBar />

        {/* Login Button */}
        <Link to={'/'} className='bg-Dark flex justify-center items-center py-[12px] px-[30px] rounded-[30px] hover:opacity-80'>
          <p className='font-Poppins text-[13px] text-Light'>Sign in</p>
        </Link>
      </div>
    </div>
  )
};

export default Navbar;
