import './bannerstyle.css';

const Banner = ({ background, logo }) => {
    return (
        <div className='banner-background' style={{ backgroundImage: `url(${background})` }}>
            <div className='background-overlay'></div>
            <img className='logo-in-banner' src={logo} alt="Logo" />
        </div>
    );
};

export default Banner;
