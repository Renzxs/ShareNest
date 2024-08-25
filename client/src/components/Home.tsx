import { Link } from 'react-router-dom';
import HomePageSectionOneImg from '../assets/images/home_page_sec1_img.png'
import HugeDropDown from './layout/HugeDropDown';
import { Apartment, AttachMoney, LocationOn } from '@mui/icons-material';

const Home = () => {
  return (
    <div className="bg-Light flex flex-col justify-center items-center">
      <Section1 />
    </div>
  );
};

// Home Section1
const Section1 = () => {
  return (
      <section className="w-[90%] flex justify-center items-center flex-wrap gap-10 p-[20px] mt-[80px] max-lg:flex-col max-lg:mt-[160px]">
        <div className='flex-1 flex flex-col justify-between gap-[40px]'>
          {/* Home Title */}
          <div>
            <h1 className="font-Poppins text-[40px] text-Dark">Real estate for living and investments</h1>
            <Link to={'/'} className='bg-Dark flex justify-center items-center py-[12px] px-[30px] rounded-[30px] hover:opacity-80 w-fit mt-[20px]'>
              <p className='font-Poppins text-[13px] text-Light'>Get Started</p>
            </Link>
          </div>

          {/* Huge Drop downs */}
          <div className='flex flex-col gap-[15px]'>
            <HugeDropDown icon={<LocationOn className='text-Dark'/>} title='Location' value='Metro Manila, Philippines'/>
            <HugeDropDown icon={<Apartment className='text-Dark'/>} title='Property Type' value='Condominium'/>
            <HugeDropDown icon={<AttachMoney className='text-Dark'/>} title='Price range' value='₱900 - ₱1,500'/>
          </div>
        </div>

        {/* Home Image */}
        <div className='flex-[1.8]'>
          <img src={HomePageSectionOneImg} alt={HomePageSectionOneImg} className='object-cover rounded-[20px]'/>
        </div>
      </section>
  );
}

export default Home;
