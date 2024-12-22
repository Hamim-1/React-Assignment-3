import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import './Hero.css'
import Card from "../Card";

const CustomArrow = ({ onClick, direction }) => {
    return (
        <button
            onClick={onClick}
            className={`absolute top-1/2 transform -translate-y-1/2 p-2 text-black bg-white/60 rounded-full shadow-md hover:bg-white z-10 ${direction === "prev" ? "left-4" : "right-4"
                }`}
        >
            {direction === "prev" ? <FaArrowLeft size={20} /> : <FaArrowRight size={20} />}
        </button>
    );
};

const Hero = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: true,
        nextArrow: <CustomArrow direction="next" />,
        prevArrow: <CustomArrow direction="prev" />,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };


    const bestRestaurants = [
        { name: 'Bottega', about: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.', img: '/restaurant1.png', rating: 5, review: '876' },
        { name: 'Bottega', about: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.', img: '/restaurant2.png', rating: 3, review: '876' },
        { name: 'Bottega', about: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.', img: '/restaurant3.png', rating: 4, review: '876' },
        { name: 'Bottega', about: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.', img: '/restaurant4.png', rating: 5, review: '876' },
    ]

    return (
        <div className="relative w-4/5 mx-auto container flex flex-col space-y-5 bg-primary xl:rounded-xl p-14">
            <p className="text-white text-3xl">Find the best restaurant ratings below</p>
            <Slider {...settings}>
                {
                    bestRestaurants.map((restaurant, i) => (
                        <Card data={restaurant} key={i} />
                    ))
                }
            </Slider >
        </div >
    );
};

export default Hero;
