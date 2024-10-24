export default function ExperienceEducation() {
    return (
      <div
        id="experienceEducation"
        className="bg-gradient-to-b from-[#ffdd57] to-white text-gray-900 p-16 grid gap-10 rounded-xl shadow-lg mx-auto max-w-4x4" // Mengubah lebar maksimum agar lebih besar
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Experience Section */}
          <div
            id="experience"
            className="p-8 bg-white rounded-lg shadow-md border border-gray-300 transform transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer" // Animasi zoom saat diklik
          >
            <h2 className="text-3xl font-semibold mb-6 text-gray-900">Experience</h2>
            <ul className="space-y-6">
              <li>
                <div className="flex justify-between">
                  <h3 className="text-xl font-semibold text-gray-900">Fashion Stylist</h3>
                  <span className="text-gray-700">2032-2034</span>
                </div>
                <p className="text-gray-700">Mix and match clothes, Model dress style concept</p>
              </li>
              <li>
                <div className="flex justify-between">
                  <h3 className="text-xl font-semibold text-gray-900">Fashion Designer</h3>
                  <span className="text-gray-700">2034-2036</span>
                </div>
                <p className="text-gray-700">Choose and know about suitable fabrics and color combinations, Designing dress</p>
              </li>
            </ul>
          </div>
  
          {/* Education Section */}
          <div
            id="education"
            className="p-8 bg-white rounded-lg shadow-md border border-gray-300 transform transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer" // Animasi zoom saat diklik
          >
            <h2 className="text-3xl font-semibold mb-6 text-gray-900">Education</h2>
            <ul className="space-y-6">
              <li>
                <div className="flex justify-between">
                  <h3 className="text-xl font-semibold text-gray-900">High School of Fashion Design</h3>
                  <span className="text-gray-700">2024</span>
                </div>
              </li>
              <li>
                <div className="flex justify-between">
                  <h3 className="text-xl font-semibold text-gray-900">Master of Fashion, Borcolle University</h3>
                  <span className="text-gray-700">2027</span>
                </div>
              </li>
              <li>
                <div className="flex justify-between">
                  <h3 className="text-xl font-semibold text-gray-900">Licoria Fashion Course</h3>
                  <span className="text-gray-700">2032</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
}
