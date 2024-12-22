import CustomerReviewCard from './CustomerReviewCard';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const RecentActivites = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
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
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    const reviews = [
        {
            rating: 5, restaurantImages: ['/review1.png', '/review2.png', '/review3.png'], name: 'Leslie sakho', location: 'Canada, toronto', date: '09/11/2023', about: `The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.
            
             The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.` },

        {
            rating: 5, restaurantImages: ['/review4.png', '/review5.png', '/review6.png'], name: 'Chris macari', location: 'Singapour', date: '14/09/2023', about: `The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.
    
                 The lorem ipsum is, in printing.` },

        {
            rating: 5, restaurantImages: ['/review7.png', '/review8.png', '/review9.png'], name: 'Jojo alba', location: 'Kuala lumpur', date: '24/11/2023', about: `The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.

             The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.` },




    ]
    return (
        <div className='container flex flex-col space-y-5'>
            <p className='text-3xl font-extrabold'>Recents activities</p>


            <Slider {...settings}>
                {
                    reviews.map((review, i) => (
                        <CustomerReviewCard data={review} key={i} />
                    ))
                }
            </Slider>
        </div>
    );
};

export default RecentActivites;

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