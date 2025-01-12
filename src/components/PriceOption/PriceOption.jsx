import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({ option }) => {

    const { name, price, features } = option;

    return (
        <div className='bg-blue-500 rounded-md p-4 text-white text-center flex flex-col'>
            <h2>
                <span className='text-3xl'>{price}</span>
                <span className='text-3xl'>/month</span>
            </h2>
            <h3 className='text-2xl my-4'>{name}</h3>
            <div className='flex-grow'>
                {
                    features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
                }
            </div>
            <button className='mt-12 bg-lime-600 w-full rounded-md py-2'>Buy now</button>
        </div>

    );
};
PriceOption.propTypes = {
    option: PropTypes.object
}
export default PriceOption;