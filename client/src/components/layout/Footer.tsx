import { Link } from 'react-router-dom';
import ShareNestLogo from '../../assets/images/sharenest_dark_no_bg_logo.png'
import { Facebook, GitHub, Google, Instagram } from '@mui/icons-material';

const Footer = () => {
  return (
    <footer className='flex justify-center items-center flex-col'>
        <div className='flex justify-between items-start py-[30px] w-[90%] max-sm:flex-col'>
            <div className='flex justify-normal items-center'>
                <img src={ShareNestLogo} alt={ShareNestLogo} className='w-[70px] max-sm:ml-[-20px]' />
                <p className='font-Poppins font-semibold text-Dark'>ShareNest</p>
            </div>
            <div className='flex justify-between items-start gap-[30px] max-sm:flex-col max-sm:pt-[20px] max-sm:border-t-2 max-sm:w-full'>
                <div className='flex flex-col justify-start gap-[5px]'>
                    <p className='font-Poppins text-[15px] font-semibold mb-[10px] text-Dark'>Company</p>
                    <Link className='font-Poppins text-[13px] hover:opacity-70 text-Dark' to={'/'}>About Us</Link>
                    <Link className='font-Poppins text-[13px] hover:opacity-70 text-Dark' to={'/'}>Blog</Link>
                    <Link className='font-Poppins text-[13px] hover:opacity-70 text-Dark' to={'/'}>Features</Link>
                    <Link className='font-Poppins text-[13px] hover:opacity-70 text-Dark' to={'/'}>News</Link>
                </div>
                <div className='flex flex-col justify-start gap-[5px]'>
                    <p className='font-Poppins text-[15px] font-semibold mb-[10px] text-Dark'>Help</p>
                    <Link className='font-Poppins text-[13px] hover:opacity-70 text-Dark' to={'/'}>FAQ</Link>
                    <Link className='font-Poppins text-[13px] hover:opacity-70 text-Dark' to={'/'}>Support</Link>
                    <Link className='font-Poppins text-[13px] hover:opacity-70 text-Dark' to={'/'}>Contact</Link>
                </div>
                <div className='flex flex-col justify-start gap-[5px]'>
                    <p className='font-Poppins text-[15px] font-semibold mb-[10px]'>Careers</p>
                    <Link className='font-Poppins text-[13px] hover:opacity-70 text-Dark' to={'/'}>Job</Link>
                    <Link className='font-Poppins text-[13px] hover:opacity-70 text-Dark' to={'/'}>Teams</Link>
                    <Link className='font-Poppins text-[13px] hover:opacity-70 text-Dark' to={'/'}>Environment</Link>
                </div>
                <div className='flex flex-col justify-start gap-[5px]'>
                    <p className='font-Poppins text-[15px] font-semibold mb-[10px] text-Dark'>Legal</p>
                    <Link className='font-Poppins text-[13px] hover:opacity-70 text-Dark' to={'/'}>Terms</Link>
                    <Link className='font-Poppins text-[13px] hover:opacity-70 text-Dark' to={'/'}>Conditions</Link>
                    <Link className='font-Poppins text-[13px] hover:opacity-70 text-Dark' to={'/'}>Privacy</Link>
                    <Link className='font-Poppins text-[13px] hover:opacity-70 text-Dark' to={'/'}>Cookies</Link>
                </div>
            </div>
        </div>

        <div className='flex justify-between items-center w-[100%] p-[20px] border-t-2  gap-[20px] max-sm:flex-col'>
            <p className='font-Poppins text-[13px] font-medium text-Dark'>© 2024 ShareNest, All Rights Reserved</p>
            <div className='flex justify-between items-center gap-[10px]'>
                <Link to={'/'}>
                    <GitHub className='text-Dark hover:opacity-70 cursor-pointer'/>
                </Link>
                <Link to={'/'}>
                    <Facebook className='text-Dark hover:opacity-70 cursor-pointer'/>
                </Link>
                <Link to={'/'}>
                    <Instagram className='text-Dark hover:opacity-70 cursor-pointer'/>
                </Link>
                <Link to={'/'}>
                    <Google className='text-Dark hover:opacity-70 cursor-pointer'/>
                </Link>
            </div> 
        </div>
    </footer>
  )
}

export default Footer;