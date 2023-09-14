import PropTypes from 'prop-types';

const Cart = props => {
    return (
        <div className='w-[25%]'>
            <div className='bg-white mx-auto w-[85%] rounded-lg p-6'>
                <h2 className='text-center text-[#2F80ED] font-bold'>Credit Hour Remaining 7 hr</h2>
                <hr className='my-4 h-1 ' />
                <h2 className='text-xl font-bold mb-4'>Course Name</h2>
                {
                    <h2 className='text-[#1C1B1B99]'>list</h2>
                }
                <hr className='mt-5 h-1'/>
                <h2 className='font-medium mt-3'>Total Credit Hour : 13</h2>
                <hr className='my-3 h-1 ' />
                <h2 className='font-semibold'>Total Price : 48000 USD</h2>
            </div>
        </div>
    );
};

Cart.propTypes = {

};

export default Cart;