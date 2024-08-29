import { ArrowDropDown } from '@mui/icons-material';
import { useState } from 'react';

const HugeDropDown = ({icon, title, selection_data, onSelectChange} : HugeDropDown) => {
    const [open, setOpen] = useState<boolean>(false);
    const [value, setValue] = useState<string>(selection_data[0]);

    const onSelect = (value: string) => {
      setValue(value);
      setOpen(false);
      onSelectChange(value);
    } 

    return (
      <div>
        <div onClick={() => setOpen(!open)} className='bg-LightGray rounded-[20px] py-[10px] px-[20px] flex justify-between items-center cursor-pointer'>
          <div className="flex justify-normal items-center gap-[10px] hover:opacity-70">
              {icon}
              <div>
                <p className="font-Poppins text-[13px] text-Dark">{title}</p>
                <h1 className="font-Poppins text-[15px] text-Dark">{value || selection_data[0]}</h1>
              </div>
            </div>
          <ArrowDropDown className={`text-Dark ${open ? 'rotate-180' : 'rotate-0'}`} />
        </div>

        <div className={`overflow-y-auto transition-all pl-[50px] ${open ? 'h-[80px] flex flex-col justify-start items-start py-[10px]' : 'h-0 '}`}>
            {
              selection_data.map((select, index) => (
                <h2 onClick={() => onSelect(select)} key={index} className={`hover:bg-LightGray w-full cursor-pointer font-Poppins text-[15px] text-Dark ${select === value && 'bg-LightGray'}`}>- {select}</h2>
              ))
            }
        </div>
      </div>
    );
}

export default HugeDropDown;