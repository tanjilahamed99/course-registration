import PropTypes from 'prop-types';

const Card = ({ card }) => {
    const { image, title, description, price, credit } = card;
    return (
        <div className='bg-white p-4 shadow-md shadow-white'>
            <img className='w-[280px] mb-4' src={image} alt="" />
            <h2 className='font-semibold text-lg mb-3'>{title}</h2>
            <h2 className='text-sm text-[#1C1B1B99] mb-4'>{description}</h2>
            <div className='mb-6 flex justify-around'>
                <h2 className='text-[#1C1B1B99]'><i className="fa-solid fa-dollar-sign text-[#1C1B1B] mr-3"></i> Price : {price}</h2>
                <h2 className='text-[#1C1B1B99]'><i className="fa-solid fa-book-open text-[#1C1B1B] mr-3"></i> Credit : {credit}hr</h2>
            </div>
            <button className='btn btn-primary bg-[#2F80ED] w-full text-white'>Select</button>
        </div>
    );
};

Card.propTypes = {
    card: PropTypes.array
};

export default Card;