export default function Navbar() {
  return (
    <nav className="bg-white shadow-md flex items-center justify-between px-6 py-4">
      <div className="flex items-center gap-3">
        {/* Profil atau ikon menu */}
        <button className="text-gray-600 hover:text-blue-600 transition">
          ☰
        </button>
        <h1 className="text-[#1E3A8A] text-lg font-semibold py-1">
          Sistem Manajemen Pembelajaran
        </h1>
      </div>
    </nav>
  );
}
