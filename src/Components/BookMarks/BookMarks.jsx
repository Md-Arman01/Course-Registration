import PropTypes from 'prop-types';

const BookMarks = ({names}) => {
    console.log(names)
    return (
        <div className="bg-[#FFF] px-4 py-5 rounded-xl space-y-4">
            <h1 className="text-[#2F80ED] text-lg font-bold border-b-gray-400">Credit Hour Remaining 7 hr</h1>
            <hr />
            <h1 className="text-[#1C1B1B] text-lg font-bold">Course Name</h1>
            {
                names.map((name,index) => <p key={index} className="text-[#777676] text-sm">{name}</p>)
            }
            <hr />
            <h1 className="text-[#1C1B1BCC] font-medium border-t-gray-400">Total Credit Hour : 13</h1>
            <hr />
            <h1 className="text-[#1C1B1BCC] font-medium border-t-gray-400">Total Price : 48000 USD</h1>
        </div>
    )
};

BookMarks.propTypes ={
    names: PropTypes.array.isRequired,
}

export default BookMarks;