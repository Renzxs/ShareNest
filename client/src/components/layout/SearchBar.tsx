import { ArrowForward, Search } from '@mui/icons-material';
import TuneIcon from '@mui/icons-material/Tune';
import { useState } from 'react';

const SearchBar = () => {
    // States
    const [search, setSearch] = useState<string>();

    const onClickSearchType = () => {
      // Search Type (Property Name, Location, User, Price)
    }

    const onClickSearch = () => {
      // Click Search
    }

    return (
      <>
        <div className='flex justify-normal items-center'>
          {/* Search Type */}
          <TuneIcon onClick={onClickSearchType} className='text-Dark mr-[10px] hover:opacity-80 cursor-pointer'/>
          {/* Search Input */}
          <div className='bg-Light flex justify-normal items-center gap-[10px] rounded-[10px]'>
            <Search className='text-Dark ml-[15px]'/>

            <input 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className='outline-none border-none font-Poppins text-[13px] bg-Light'
              type="text" 
              name="search" 
              id="search"
              placeholder='Search...'/>

            {/* Search button */}
            <div onClick={onClickSearch} className='bg-Dark p-[10px] rounded-[10px] hover:opacity-80 cursor-pointer'>
                <ArrowForward className='text-Light' />
            </div>
          </div>
        </div>
      </>
    );
}

export default SearchBar;