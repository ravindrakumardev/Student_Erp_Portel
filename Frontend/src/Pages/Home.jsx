export default function Home() {
  return (
    <div className="font-[Poppins]">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">
            🎓 Smart School ERP Portal
          </h1>
          <p className="text-lg opacity-90 mb-8">
            Attendance, Homework, Results aur Fee sab ek hi jagah manage kare.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a href="/student-login"
              className="bg-white text-blue-700 px-6 py-3 rounded-full shadow hover:bg-gray-200">
              Student Login
            </a>

            <a href="/teacher-login"
              className="bg-white text-blue-700 px-6 py-3 rounded-full shadow hover:bg-gray-200">
              Teacher Login
            </a>

            <a href="/school-login"
              className="bg-white text-blue-700 px-6 py-3 rounded-full shadow hover:bg-gray-200">
              School Login
            </a>
          </div>
        </div>
      </section>


      {/* FEATURES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12 text-gray-800">
            Powerful ERP Features
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl">
              📊 <h3 className="font-semibold mt-3">Attendance Tracking</h3>
              <p className="text-gray-600 mt-2">
                Daily attendance easily manage kare.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl">
              📝 <h3 className="font-semibold mt-3">Homework & DPP</h3>
              <p className="text-gray-600 mt-2">
                Homework upload aur download easy.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl">
              🏆 <h3 className="font-semibold mt-3">Result & Report</h3>
              <p className="text-gray-600 mt-2">
                Result analysis aur marks tracking.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl">
              💰 <h3 className="font-semibold mt-3">Fee Management</h3>
              <p className="text-gray-600 mt-2">
                Fee status aur payment tracking.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl">
              📅 <h3 className="font-semibold mt-3">Time Table</h3>
              <p className="text-gray-600 mt-2">
                Class schedule always available.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl">
              📢 <h3 className="font-semibold mt-3">School Notices</h3>
              <p className="text-gray-600 mt-2">
                Important notices instantly mile.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* ABOUT */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Our ERP?</h2>
          <p className="text-gray-600">
            Ye ERP system students, teachers aur school admin ko ek platform par
            laata hai jahan attendance, result, homework aur notices easily manage
            kiye ja sakte hain. Secure login, fast performance aur mobile-friendly design.
          </p>
        </div>
      </section>


      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-10 text-center">
        <p>© 2026 School ERP Portal • All Rights Reserved</p>
        <p className="opacity-70 mt-2">Contact: schoolerp@gmail.com</p>
      </footer>

    </div>
  );
}