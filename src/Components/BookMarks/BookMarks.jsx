import PropTypes from 'prop-types';

const BookMarks = ({totalPrice, remaining, credit, selectCard}) => {
    return (
        <div className="bg-[#FFF] px-4 py-5 rounded-xl space-y-4">
            <h1 className="text-[#2F80ED] text-lg font-bold border-b-gray-400">Credit Hour Remaining {remaining} hr</h1>
            <hr />
            <h1 className="text-[#1C1B1B] text-lg font-bold">Course Name</h1>
            {
                selectCard.map((item,index) => <p key={index} className="text-[#777676] text-sm">{index + 1}. {item.title}</p>)
            }
            <hr />
            <h1 className="text-[#1C1B1BCC] font-medium border-t-gray-400">Total Credit Hour : {credit}</h1>
            <hr />
            <h1 className="text-[#1C1B1BCC] font-medium border-t-gray-400">Total Price : {totalPrice} USD</h1>
        </div>
    )
};

BookMarks.propTypes ={
    selectCard: PropTypes.array.isRequired,
    credit: PropTypes.number.isRequired,
    remaining: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired
}

export default BookMarks;