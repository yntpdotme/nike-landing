import {star} from '../assets/icons';

const PopularProductCard = ({imgURL, name, price, rating}) => {
  return (
    <div>
      <img
        src={imgURL}
        alt={name}
        className="h-[280px] w-[280px] transition ease-in-out hover:scale-105"
      />

      <div className="mt-6 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-400">
          ({rating})
        </p>
      </div>

      <h3 className="mt-2 font-palanquin text-2xl font-semibold leading-normal dark:text-white">
        {name}
      </h3>
      <p className="mt-2 font-montserrat text-2xl font-semibold leading-normal text-coral-red">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
