import PropTypes from 'prop-types';
import { FiDollarSign } from "react-icons/Fi";
import { HiOutlineBookOpen } from "react-icons/Hi";

const Cart = ({datas, selectHandle}) => {
    const { image, title, description, price, credit} = datas
    
  return (
    <div>
      <div className="bg-base-100 rounded-xl p-4">
        <div  className="flex justify-center">
        <figure>
          <img
            src={image}
            alt="Shoes"
            className='w-[333px] h-[171px]'
          />
        </figure>
        </div>
        <div className="text-left space-y-4 mt-4">
          <h2 className="text-[#1C1B1B] text-lg font-semibold">{title}</h2>
          <p className='text-[#777676] text-sm'>{description}</p>
          <div className='flex justify-between gap-20'>
            <div className='flex justify-between items-center flex-1'>
            <FiDollarSign className='text-[#1c1b1b] text-xl'></FiDollarSign>
            <p className='text-[#777676] text-base font-medium'>Price : {price}</p>
            </div>
            <div  className='flex justify-between items-center flex-1'>
            <HiOutlineBookOpen  className='text-[#1c1b1b] text-2xl'></HiOutlineBookOpen>
            <p className='text-[#777676] text-base font-medium'>Credit : {credit}hr</p>
            </div>
          </div>
          <div className="">
            <button onClick={()=> selectHandle(datas)} className="btn bg-[#2F80ED] hover:bg-[#2f81ede7] text-white text-base font-semibold normal-case w-full">Select</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Cart.propTypes ={
    datas: PropTypes.object.isRequired,
    selectHandle: PropTypes.func.isRequired
}

export default Cart;
