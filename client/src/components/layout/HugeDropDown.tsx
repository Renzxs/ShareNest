import { ArrowDropDown } from '@mui/icons-material';

const HugeDropDown = ({icon, title, value} : HugeDropDown) => {
    return (
        <div className='bg-LightGray rounded-[20px] py-[10px] px-[20px] flex justify-between items-center cursor-pointer hover:opacity-70'>
              <div className="flex justify-normal items-center gap-[10px]">
                {icon}
                <div>
                  <p className="font-Poppins text-[13px] text-Dark">{title}</p>
                  <h1 className="font-Poppins text-[15px] text-Dark">{value}</h1>
                </div>
              </div>
              <ArrowDropDown className='text-Dark' />
        </div>
    );
}

export default HugeDropDown;