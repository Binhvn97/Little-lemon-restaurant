import { Link } from "react-router-dom"


function Hero() {
    return (
        <div className="hero">
            <div className="hero-content">
                <div className="hero-desc">
                    <div className="hero-tittle">
                        <p className="title">Little Lemon</p>
                        <p className="subtitle">Chicago</p>
                    </div>
                    <p className="desc">We are a family owned Mediterranean restaurant,
                        focused on traditional recipes served with a modern twist.</p>
                    <Link to="/booking" ><button className="reserve-btn btn">
                        Reserve a table
                    </button></Link>
                </div>
                <div className="img-wrapper">
                    <img src={require('../assets/hero.jpg')} alt="hero-image" />
                </div>
            </div>
        </div>
    )
}

export default Hero