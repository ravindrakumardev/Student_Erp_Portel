import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  
  useEffect(() => {
    const handler = (e) => {
      if (!ref.current?.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <nav className="bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-white shadow-xl font-[Poppins]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <h1 className="text-2xl font-semibold tracking-wide">
             School ERP
          </h1>

          {/* Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="hover:text-gray-200">Home</a>
            <a href="/about" className="hover:text-gray-200">About</a>
            <a href="/features" className="hover:text-gray-200">Features</a>
            <a href="/contact" className="hover:text-gray-200">Contact</a>

            {/* Premium Dropdown */}
            <div className="relative" ref={ref}>
              <button
                onClick={() => setOpen(!open)}
                className="  px-5 py-2 border-white/30 hover:text-gray-200 "
              >
                Login ▾
              </button>

              {open && (
                <div className="absolute right-0 mt-3 w-56 bg-white text-gray-700 rounded-2xl shadow-2xl overflow-hidden animate-fade">
                  
                  <a href="/student-login"
                    className="flex items-center gap-3 px-5 py-3 hover:bg-blue-50">
                <span className="font-medium">Student Login</span>
                  </a>

                  <a href="/teacher-login"
                    className="flex items-center gap-3 px-5 py-3 hover:bg-blue-50">
                    <span className="font-medium">Teacher Login</span>
                  </a>

                  <a href="/school-login"
                    className="flex items-center gap-3 px-5 py-3 hover:bg-blue-50">
                    <span className="font-medium">School Login</span>
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
}