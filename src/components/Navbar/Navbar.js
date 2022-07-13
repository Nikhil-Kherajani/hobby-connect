import './Navbar.css'
import { Link } from "react-router-dom";


function Navbar(){

    return (
        <>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            
            <Link className="navbar-brand" to="/">Hobby Connect</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                
                <Link className="nav-link active" to="/">Home</Link>
                </li>
                <li className="nav-item">
                
                <Link className="nav-link active" to="/Explore">Explore</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" to="/User">User</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" to="/Login">Login</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" to="/Signup">Signup</Link>
                </li>

                <li>
                    <button className="btn red">Logout</button>
                </li>
                
               
                
            </ul>
            
            </div>
        </div>
        </nav>
        </>
    );
}

export default Navbar ;