import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import { FavoriteBorder } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const PropertiesSlider = ({properties_data}:PropertiesSlider) => {
    return (
        <Swiper
        spaceBetween={10}
        speed={3000}
        autoplay={{
          disableOnInteraction: false, 
        }}
        modules={[Autoplay]}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {
            properties_data.map((property, index) => (
                <SwiperSlide key={index}>
                    <Link to={property.hreflink} className='transition-all duration-300 hover:scale-[102%] flex flex-col justify-start gap-[20px]'>
                    <img src={property.image} alt={property.image} className='object-cover rounded-[20px] w-[500px] h-[450px]'/>
                    <div className='flex justify-between items-center'>
                        <div>
                            <p className='font-Poppins font-semibold text-[15px] text-Dark'>{property.location} - {property.price}</p>
                            <p className='font-Poppins text-[13px] text-Dark'>{property.beds} | {property.baths} | {property.sqft}</p>
                        </div>
                        <FavoriteBorder className='text-Dark hover:opacity-70'/>
                    </div>
                    </Link>
                </SwiperSlide>
            ))
        }
      </Swiper>
    );
}

export default PropertiesSlider;