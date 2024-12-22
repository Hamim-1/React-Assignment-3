import { IoStar } from "react-icons/io5";
import { useNavigate } from "react-router-dom";


const Card = ({ data, isRow }) => {
    const navigate = useNavigate();
    const { img, rating, about, name, review } = data;
    const star = [1, 2, 3, 4, 5];
    const handleClick = () => {
        isRow && navigate("/restaurant-details", { state: { data } });
    };
    return (
        <div className={`flex ${isRow ? 'lg:flex-row gap-5 lg:items-center border-b border-[#DCDCDC] pb-10 pt-5 flex-col items-start sm:w-3/5 md:w-full' : 'flex-col space-y-5 max-w-[350px] pb-5 rounded-xl '} bg-white  outline-none  mx-auto`}>
            <img src={img} alt="" className="w-full" />

            <div className="px-2 lg:px-2 xl:px-4">

                <p onClick={handleClick}
                    className={`text-[19px] font-semibold ${isRow && 'hover:underline cursor-pointer'}`}
                >
                    {name}
                </p>

                <p className="text-sm text-[#5e5e5e]">{about}</p>

                <section className="flex items-center mt-5">
                    {star.map(value => (
                        <section className={`${value <= rating ? 'bg-yellow-500' : 'bg-secondary'} text-white mr-2 p-0.5 rounded-sm`}>

                            < IoStar />
                        </section>
                    ))}
                    <p className="font-semibold">{data.rating.toString().length === 1 ? rating + '.0' : rating}</p>
                    <p className="text-secondary ml-1 text-sm">({review})</p>
                </section>
            </div>
        </div>
    );
};

export default Card;