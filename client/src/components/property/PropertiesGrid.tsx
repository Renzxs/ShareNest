import { AccountCircle, FavoriteBorder } from "@mui/icons-material"
import { Link } from "react-router-dom"

const PropertiesGrid = ({properties_data}:PropertiesGrid) => {
    return (
      <div className='flex justify-center flex-row items-center flex-wrap gap-[10px]'>

        {
          properties_data.map((property, index) => (
            <Link key={index} to={property.hreflink}>
              <div className="w-[430px] h-[300px] overflow-hidden rounded-[20px]">
                <img src={property.image} alt={property.image} className='object-cover w-full h-full transition-all duration-1000 hover:scale-[1.1]'/>
              </div>
    
              <div className='p-[10px] flex justify-between items-center w-full'>
                <div className='flex justify-normal items-center gap-[10px] hover:opacity-70 cursor-pointer'>
                  <AccountCircle className='text-Dark'/>
                  <p className='font-Poppins text-[13px] text-Dark'>{property.owner}</p>
                </div>
    
                <div className='flex justify-normal items-center gap-[10px]'>
                  <p className='font-Poppins text-[13px] text-Dark'>{property.number_of_likes}</p>
                  <FavoriteBorder className='text-Dark hover:opacity-70 cursor-pointer'/>
                </div>
              </div>
            </Link>
          ))
        }
      </div>
    )
}

export default PropertiesGrid;