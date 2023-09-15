import PropTypes from 'prop-types';

const Cart = ({ carts,total,credits,remaining }) => {
    return (
        <div className='md:w-[40%] lg:w-[25%]'>
            <div className='bg-white mx-auto w-[90%] rounded-lg p-6'>
                <h2 className='text-center text-[#2F80ED] font-bold'>Credit Hour Remaining {remaining} hr</h2>
                <hr className='my-4 h-1 ' />
                <h2 className='text-xl font-bold mb-4'>Course Name</h2>
                {
                    carts.map((item, idx) => <h2 key={idx} className='text-[#1C1B1B99]'>{idx + 1} {item.title}</h2>)
                }
                <hr className='mt-5 h-1' />
                <h2 className='font-medium mt-3'>Total Credit Hour : {credits}</h2>
                <hr className='my-3 h-1 ' />
                <h2 className='font-semibold'>Total Price : {total} USD</h2>
            </div>
        </div>
    );
};

Cart.propTypes = {
    carts: PropTypes.array,
    total:PropTypes.number,
    credits:PropTypes.number,
    remaining:PropTypes.number
};

export default Cart;