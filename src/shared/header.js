import "./header.css"

const Header = () =>{
    return(
        <div className="coffee position-relative">
            <img src="/assets/latte-art-coffee-cup.jpg" alt="art coffee" className="w-100"/>
            <div className="logo position-absolute d-flex justify-content-center align-items-center overflow-hidden">
                <img src="/assets/kaktus.png" alt="kaktus logo" className="img-fluid"/>
            </div>
        </div>
    )
}

export default Header