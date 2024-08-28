import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import { FavoriteBorder } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const PropertiesSlider = ({properties_data, animation_speed}:PropertiesSlider) => {
    return (
        <Swiper
        spaceBetween={10}
        speed={animation_speed}
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
                    <div className='flex justify-between items-center px-[10px] gap-[10px]'>
                        <div>
                            <p className='font-Poppins font-semibold text-[15px] text-Dark'>{property.location} - ₱{property.price_per_month}</p>
                            <p className='font-Poppins text-[13px] text-Dark'>{property.number_of_bedrooms} Beds | {property.number_of_restroom} Baths | {property.sqft} Sqft</p>
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