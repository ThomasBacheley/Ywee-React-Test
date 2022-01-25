import '../styles/Banner.css';
import logo from '../assets/logo.png'

function Banner() {
    const title = "Ywee Test React"
    return (
        <div className="ytr-banner">
            <img src={logo} alt='logo' className="ytr-logo"/>
            <h1 className="ytr-title">{title}</h1>
        </div>
    )
}

export default Banner