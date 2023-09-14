import Cart from "./Cart";
import PropTypes from 'prop-types';


const Carts = ({allData,selectHandle}) => {




    return (
        <div>
            <div className="grid grid-cols-3 gap-5">
            {
                allData.map((data, index) => <Cart key={index} datas={data} selectHandle={selectHandle}></Cart>)
            }
            </div>
        </div>
    );
};

Carts.propTypes ={
    allData: PropTypes.array.isRequired,
    selectHandle: PropTypes.func.isRequired
}

export default Carts;