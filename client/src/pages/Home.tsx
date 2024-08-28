import { Link } from 'react-router-dom';
import HomePageSectionOneImg from '../assets/images/home_page_sec1_img.png'
import HugeDropDown from '../components/layout/HugeDropDown'
import { Apartment, ArrowForwardIos, AttachMoney, LocationOn } from '@mui/icons-material';
import PropertiesSlider from '../components/property/PropertiesSlider';
import dummydata from '../api/dummydata';
import PropertiesGrid from '../components/property/PropertiesGrid';

const Home = () => {
  return (
    <div className="bg-Light flex flex-col justify-center items-center">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
};

// Section1
const Section1 = () => {
  return (
      <section className="w-[90%] flex justify-center items-center flex-wrap gap-10 p-[20px] mt-[80px]">
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

// Section2
const Section2 = () => {
  return (
    <section className="w-[90%] flex justify-center items-center flex-wrap mt-[80px] p-[10px] gap-[20px]">
      {/* Section Title */}
      <div className='flex justify-between items-center w-full'>
        <h1 className="font-Poppins text-[40px] text-Dark">Check latest in your area</h1>
        <Link to={'/'} className='bg-LightGray flex justify-center items-center gap-2 py-[12px] px-[30px] rounded-[30px] hover:opacity-80 w-fit mt-[20px]'>
              <p className='font-Poppins text-[13px] text-Dark'>View all</p>
              <ArrowForwardIos sx={{fontSize: 15}} className='text-Dark'/>
        </Link>
      </div>

      {/* Properties Slider */}
      <PropertiesSlider 
        animation_speed={4000} 
        properties_data={dummydata}/>

      
      {/* Section Title */}
      <div className='flex justify-between items-center w-full mt-[50px]'>
        <h1 className="font-Poppins text-[40px] text-Dark">Most liked properties</h1>
        <Link to={'/'} className='bg-LightGray flex justify-center items-center gap-2 py-[12px] px-[30px] rounded-[30px] hover:opacity-80 w-fit mt-[20px]'>
              <p className='font-Poppins text-[13px] text-Dark'>View all</p>
              <ArrowForwardIos sx={{fontSize: 15}} className='text-Dark'/>
        </Link>
      </div>

      {/* Properties Slider */}
      <PropertiesSlider 
        animation_speed={5000} 
        properties_data={dummydata}/>
    </section>
  );
}

// Section3
const Section3 = () => {
  return (
    <section className="w-[90%] flex justify-center items-center flex-wrap mt-[80px] p-[10px] gap-[50px]">
      {/* Section Title */}
      <div className='flex justify-center items-center w-full'>
        <h1 className="font-Poppins text-[40px] text-Dark text-center ">Explore inspiring modern houses designs</h1>
      </div>
      
      <div className='flex justify-center items-center flex-col'>
        <PropertiesGrid properties_data={dummydata}/>

        <Link to={'/'} className='bg-Dark flex justify-center items-center py-[12px] px-[30px] rounded-[30px] hover:opacity-80 w-fit mt-[20px]'>
              <p className='font-Poppins text-[13px] text-Light'>Browse more post</p>
        </Link>
      </div>
    </section>
  )
} 

// Section 4
const Section4 = () => {
  return (
    <section className="w-[100%] flex justify-center items-center flex-wrap mt-[80px] gap-[50px] bg-Gray py-[50px]">
      <div className='w-[50%] flex flex-col items-center gap-[20px]'>
        <h1 className='font-Poppins font-semibold text-center text-Dark text-[40px]'>Embark on Your Extraordinary Real Estate Journey Today</h1>
        <p className='font-Poppins text-[13px] text-Dark text-center w-[60%]'>Join the ranks of satisfied homeowners who have entrusted us with their real estate journey</p>
        <Link to={'/'} className='bg-Dark flex justify-center items-center py-[12px] px-[30px] rounded-[30px] hover:opacity-80 w-fit mt-[20px]'>
              <p className='font-Poppins text-[13px] text-Light'>Get Started</p>
        </Link>
      </div>
    </section>
  );
}

export default Home;