import logo from './logo.png';


const Navbar = () => {
    return ( 
        <div>
            <nav className="navbar">
                <div className="logo-image">
                    <h1> Atharboxd </h1>
                    <img src={ logo } />
                </div>
                
                <div className="links">
                    <a href="/"> Home </a>
                    <a href="/review">Review </a>
                    <a href="/list">List </a>
                </div>
            </nav>
        </div>
     );
}
 
export default Navbar;