import React from "react";  
import { Link } from "react-router-dom";


const Navbar = () => {
    const [isopen, setIsOpen] = React.useState(false);
    const [isprofileopen, setIsProfileOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsOpen(!isopen);
    };
    const toggleProfileMenu = () => {
        setIsProfileOpen(!isprofileopen);
    };
    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4">    
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="text-xl font-bold text-gray-800">MyApp</Link>
                    </div>
                    <div className="hidden md:flex items-center space-x-4">
                        <Link to="/" className="text-gray-600 hover:text-gray-800">Home</Link>  
                        <Link to="/about" className="text-gray-600 hover:text-gray-800">About</Link>
                        <Link to="/contact" className="text-gray-600 hover:text-gray-800">Contact</Link>
                        <Link to="/register" className="text-gray-600 hover:text-gray-800">Register</Link>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button onClick={toggleMenu} className="text-gray-600 hover:text-gray-800 focus:outline-none">      
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>   
                    </div>
                </div>  
            </div>
            {isopen && (
                <div className="md:hidden">
                    <Link to="/" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Home</Link>
                    <Link to="/about" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">About</Link>
                    <Link to="/contact" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Contact</Link>  
                    <Link to="/register" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Register</Link>
                </div>
            )}
        </nav>
    );
}   


export default Navbar;  