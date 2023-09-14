import PropTypes from 'prop-types';


const Cart = ({datas, selectHandle}) => {
    const {id, image, title, description, price, credit} = datas
    console.log(datas)
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <p>{price}</p>
          <p>{credit}</p>
          <div className="card-actions">
            <button onClick={selectHandle} className="btn btn-primary">Buy Now</button>
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
