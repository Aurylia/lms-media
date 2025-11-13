import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#1E4D6B] flex flex-col items-center justify-center font-sans">
      {/* Container utama */}
      <div className="bg-white shadow-xl rounded-3xl w-[90%] max-w-1xl p-8 mt-10 mb-6">
        {/* Header */}
        <h1 className="text-3xl font-bold text-center text-[#0B355B] mb-4">
          Selamat Datang!
        </h1>
        <hr className="border-gray-300 mb-6" />

        {/* Tujuan Pembelajaran */}
        <div className="bg-[#E8F0EB] rounded-2xl p-6 mb-6">
          <h2 className="text-lg font-semibold text-[#0B355B] mb-2">
            Tujuan Pembelajaran
          </h2>
          <ol className="list-decimal ml-6 space-y-1 text-gray-700">
            <li>
              Peserta didik mampu mendeskripsikan cara kerja Wi-Fi secara runtut
            </li>
            <li>
              Peserta didik mampu menganalisis pentingnya keamanan Wi-Fi dengan
              menyebutkan risiko
            </li>
            <li>
              Peserta didik mampu mengkonfigurasi jaringan Wi-Fi sederhana pada
              Access Point hingga berhasil membuat SSID dengan password
            </li>
          </ol>
        </div>

        {/* Appersepsi */}
        <div className="bg-[#FFF8E3] rounded-2xl p-6 mb-8">
          <h2 className="text-lg font-semibold text-[#0B355B] mb-2">
            Appersepsi
          </h2>
          <p className="text-gray-700">
            Kalian pasti sering pakai Wi-Fi di rumah, kan? Kalian tahu nggak,
            Wi-Fi itu pakai gelombang radio, lho. Kira-kira kenapa ya kita bisa
            internetan tanpa kabel? Kalau begitu, bagaimana data bisa dikirim
            lewat udara tanpa kabel sama sekali?
          </p>
        </div>

        {/* Tombol */}
        <div className="flex justify-center gap-6">
          <button onClick={() => navigate("/materi")} className="bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold px-6 py-3 rounded-full shadow-md transition">
            Mulai Materi
          </button>
          <button onClick={() => navigate("/kriteria")} className="bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold px-6 py-3 rounded-full shadow-md transition">
            Kriteria Penilaian
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-white text-sm mt-6">
        © 2025 Aurylia | ALL RIGHTS RESERVED
      </footer>
    </div>
  )
}

export default Home
