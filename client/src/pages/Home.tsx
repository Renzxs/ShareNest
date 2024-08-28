import { Link } from 'react-router-dom';
import HomePageSectionOneImg from '../assets/images/home_page_sec1_img.png'
import HugeDropDown from '../components/layout/HugeDropDown'
import { Apartment, ArrowForwardIos, AttachMoney, LocationOn } from '@mui/icons-material';
import PropertiesSlider from '../components/property/PropertiesSlider';
import dummydata from '../api/dummydata';
import PropertiesGrid from '../components/property/PropertiesGrid';
import { motion } from 'framer-motion';

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
      <section className="w-[90%] flex justify-center items-center flex-wrap gap-10 p-[20px] mt-[80px] max-sm:mt-[100px] max-lg:flex-col">
        <div className='flex-1 flex flex-col justify-between gap-[40px]'>
          {/* Home Title */}
          <motion.div 
          variants={{ initial: {opacity: 0, x: -100}, 
          animate: { opacity: 1, x:0 ,transition: { delay: 0.08, duration: 1.2 }}}} 
          initial="initial" whileInView="animate" className='max-lg:flex max-lg:flex-col max-lg:items-center max-lg:text-center'>
            <h1 className="font-Poppins text-[40px] text-Dark">Real estate for living and investments</h1>
            <Link to={'/'} className='bg-Dark flex justify-center items-center py-[12px] px-[30px] rounded-[30px] hover:opacity-80 w-fit mt-[20px]'>
              <p className='font-Poppins text-[13px] text-Light'>Get Started</p>
            </Link>
          </motion.div>

          {/* Huge Drop downs */}
          <div className='flex flex-col gap-[15px]'>
            <motion.div 
              variants={{ initial: {opacity: 0, y: 100,},
              animate: {opacity: 1, y: 1, transition: { delay: 0.05, duration: 1.2 }}}} initial="initial" whileInView="animate">
              <HugeDropDown icon={<LocationOn className='text-Dark'/>} title='Location' value='Metro Manila, Philippines'/>
            </motion.div>

            <motion.div 
              variants={{ initial: {opacity: 0, y: 100,},
              animate: {opacity: 1, y: 1, transition: { delay: 0.05, duration: 1.2 }}}} initial="initial" whileInView="animate">
              <HugeDropDown icon={<Apartment className='text-Dark'/>} title='Property Type' value='Condominium'/>
            </motion.div>

            <motion.div
                variants={{ initial: {opacity: 0, y: 100,},
                animate: {opacity: 1, y: 1, transition: { delay: 0.05, duration: 1.2 }}}} initial="initial" whileInView="animate">
              <HugeDropDown icon={<AttachMoney className='text-Dark'/>} title='Price range' value='₱900 - ₱1,500'/>
            </motion.div>
          </div>
        </div>

        {/* Home Image */}
        <motion.div variants={{ initial: {opacity: 0, x: 100}, 
          animate: { opacity: 1, x: 0, transition: { delay: 0.08, duration: 1.2 }}}} 
          initial="initial" whileInView="animate"className='flex-[1.8]'>
          <img src={HomePageSectionOneImg} alt={HomePageSectionOneImg} className='object-cover rounded-[20px]'/>
        </motion.div>
      </section>
  );
}

// Section2
const Section2 = () => {
  return (
    <section className="w-[90%] flex justify-center items-center flex-wrap mt-[80px] p-[10px] gap-[20px]">
      {/* Section Title */}
      <div className='flex justify-between items-center w-full gap-[10px]'>
        <h1 className="font-Poppins text-[40px] text-Dark max-sm:text-[30px]">Check latest in your area</h1>
        <Link to={'/'} className='bg-LightGray flex justify-center items-center gap-2 py-[12px] px-[30px] flex-nowrap rounded-[30px] hover:opacity-80 w-fit max-sm:px-[20px]'>
              <p className='font-Poppins text-[13px] text-Dark text-nowrap'>View all</p>
              <ArrowForwardIos sx={{fontSize: 13}} className='text-Dark'/>
        </Link>
      </div>

      {/* Properties Slider */}
      <PropertiesSlider 
        animation_speed={4000} 
        properties_data={dummydata}/>

      
      {/* Section Title */}
      <div className='flex justify-between items-center w-full mt-[50px] gap-[10px]'>
        <h1 className="font-Poppins text-[40px] text-Dark max-sm:text-[30px]">Most liked properties</h1>
        <Link to={'/'} className='bg-LightGray flex justify-center items-center gap-2 py-[12px] flex-nowrap  px-[30px] rounded-[30px] hover:opacity-80 w-fit max-sm:px-[20px]'>
              <p className='font-Poppins text-[13px] text-Dark text-nowrap'>View all</p>
              <ArrowForwardIos sx={{fontSize: 13}} className='text-Dark'/>
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
    <motion.section variants={{ initial: {opacity: 0}, 
      animate: { opacity: 1, transition: { delay: 0.08, duration: 1.2 }}}} 
      initial="initial" whileInView="animate" className="w-[90%] flex justify-center items-center flex-wrap mt-[80px] p-[10px] gap-[50px]">
      {/* Section Title */}
      <div className='flex justify-center items-center w-full'>
        <h1 className="font-Poppins text-[40px] text-Dark text-center max-sm:text-[30px]">Explore inspiring modern houses designs</h1>
      </div>
      
      <div className='flex justify-center items-center flex-col'>
        <PropertiesGrid properties_data={dummydata}/>

        <Link to={'/'} className='bg-Dark flex justify-center items-center py-[12px] px-[30px] rounded-[30px] hover:opacity-80 w-fit mt-[40px]'>
              <p className='font-Poppins text-[13px] text-Light'>Browse more post</p>
        </Link>
      </div>
    </motion.section>
  )
} 

// Section 4
const Section4 = () => {
  return (
    <section className="w-[100%] flex justify-center items-center flex-wrap mt-[80px] gap-[50px] bg-Gray py-[50px] overflow-hidden">
      <motion.div 
        variants={{ initial: {opacity: 0, y: 100,}, animate: {opacity: 1, y: 1, transition: { delay: 0.05, duration: 1.2 }}}}
        initial="initial" whileInView="animate" className='w-[50%] flex flex-col items-center gap-[20px] max-sm:w-[90%]'>
        <h1 className='font-Poppins font-semibold text-center text-Dark text-[40px] max-sm:text-[30px]'>Embark on Your Extraordinary Real Estate Journey Today</h1>
        <p className='font-Poppins text-[13px] text-Dark text-center w-[60%]'>Join the ranks of satisfied homeowners who have entrusted us with their real estate journey</p>
        <Link to={'/'} className='bg-Dark flex justify-center items-center py-[12px] px-[30px] rounded-[30px] hover:opacity-80 w-fit mt-[20px]'>
              <p className='font-Poppins text-[13px] text-Light'>Get Started</p>
        </Link>
      </motion.div>
    </section>
  );
}

export default Home;
