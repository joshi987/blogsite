import { Link } from "react-router-dom";

const Navbar = () => {
    return (  
        <div>

      
        <nav className="navbar">
            <h1>Quick Blogs</h1>
            <Link to="/">Home</Link>
            <Link to="/create" style={{
                color:"white",
                backgroundColor:'#f1356d',
                borderRadius:'8px'
            }}>New Blog</Link>
        </nav>
        </div>
    );
}
 
export default Navbar;