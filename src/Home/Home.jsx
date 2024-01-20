import "./homestyle.css"
import Header from '../Header/Header'
import Footer from "../Footer/Footer"
import { Link } from "react-router-dom"
import Banner from "./Banner"

const Home = () => {

    return (
        <>
            <Header />
            <div className="home-intro">
                <h1 className="home-intro-title">EpicByte Entertainment</h1>
                <p className="home-intro-slogan">Level up your fun!</p>
            </div>
            <div className="home-what">
                <div className="what-container">
                    <p className="home-what-is-it"> <label style={{color: '#2596be'}}>EpicByte Entertainment</label> is an italian start-up which aims to release enjoyable and helpful products for the audience.</p>
                    <div className="services">
                        <img className="service-logo" src="https://i.ibb.co/NS8yTHG/game-controller.png" />
                        <img className="service-logo" src="https://i.ibb.co/TmfLLH2/web.png" />
                        <img className="services-logo" src="https://i.ibb.co/H2NSqkV/autism.png" />
                        <img className="service-logo" src="https://i.ibb.co/VLyb99G/phone.png" />
                        <img className="service-logo" src="https://i.ibb.co/m9vV6pq/layers.png" />
                    </div>
                </div>
            </div>
            <div className="roadmap">
                <h2 className="history-title">History</h2>
                <ul className="ul-home">
                <li>
                        <div className="date">October 2022</div>
                        <div className="title">Where it all began</div>
                        <div className="descr">Our journey started at ITS Angelo Rizzoli where the original members met each other for the first time.</div>
                    </li>
                    <li>
                        <div className="date">November 2022</div>
                        <div className="title">ilDreamTeam.jsx</div>
                        <div className="descr">Before the name "EpicByte Entertainment" was born, 
                        the group was originally called "ilDreamTeam.jsx", and that's because the original members 
                        have been getting along since the beginning so well, we called ourselves the dream team. 
                        The .jsx bit is because we love working with React.js library.</div>
                    </li>
                    <li >
                        <div className="date">October 2023</div>
                        <div className="title">Rise of EpicByte</div>
                        <div className="descr">During the English subject at ITS Angelo Rizzoli, we were tasked to idealize our company and we came up with the idea of a gaming company, which later on we named "EpicByte Entertainment".</div>
                    </li>
                    <li >
                        <div class="date">January 2024</div>
                        <div class="title">From idea to reality</div>
                        <div class="descr">After discussing it with our professors, we decided to start working on the realization of the EpicByte as an SRLs.</div>
                    </li>
                    
                </ul>
                
            </div>
            <div className="home-coming-soon">
                <h1 className="home-coming-soon-title">Coming Soon...</h1>
                <p className="home-coming-soon-p">Here are some currently work-in-progress projects!</p>
                <div className="coming-soon-background">
                    <img />
                </div>
                <div className="coming-soon-background">
                    <img />
                </div>
                <Banner
                    background={"https://i.ibb.co/tm7kMmL/wp8768980.jpg"} 
                    logo={"https://i.ibb.co/pz4JVKv/assistit.png"}
                    />
                <Banner
                    background={"https://i.ibb.co/GJvX2Wd/ghostybg.png"}
                    logo={"https://i.ibb.co/7Kw1ktG/ghosty-Haunt-Logo-New.png"}
                    />
                <Link to={"/projects"} >
                    <button className="see-more-btn">See more</button>
                </Link>
            </div>
            <Footer />
        </>
    )
}

export default Home;