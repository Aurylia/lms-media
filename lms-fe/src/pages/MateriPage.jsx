import React from 'react';

// Komponen utama aplikasi
const MateriPage = () => {

  // Komponen Tombol Putar (Play Button)
  const PlayButton = () => (
    <div className="absolute inset-0 flex items-center justify-center">
      <button
        onClick={() => console.log('Aksi: Memutar video...')}
        aria-label="Putar Video"
        className="w-16 h-16 bg-white/70 backdrop-blur-sm rounded-full flex items-center justify-center transition duration-300 hover:bg-white/90 shadow-xl focus:outline-none focus:ring-4 focus:ring-white/50"
      >
        <svg className="w-8 h-8 text-blue-600 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
        </svg>
      </button>
    </div>
  );

  return (
    // Container utama dengan warna latar belakang biru dan pola gradien
    <div className="min-h-screen bg-[#1F6294] flex flex-col font-sans">
      
      {/* Background radial gradient decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="w-[800px] h-[800px] bg-white/10 rounded-full blur-3xl absolute -top-40 -left-40 opacity-30 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Konten Utama (Card) */}
      <main className="grow flex items-center justify-center p-4 md:p-8 relative z-10">
        <div className="w-full max-w-4xl bg-white p-6 md:p-10 lg:p-12 rounded-4xl shadow-2xl transition duration-500 hover:shadow-3xl transform hover:scale-[1.005]">
          
          {/* Bagian Judul Materi */}
          <div className="mb-8 pt-4"> {/* Menambahkan padding atas sedikit agar tidak terlalu mepet */}
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1F6294] mb-2">Materi</h2>
            <div className="w-full h-px bg-gray-200"></div>
          </div>
          
          {/* Judul Konten */}
          <div className="text-center mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-gray-700">TP 1</h3>
          </div>

          {/* Video Placeholder Area */}
          <div className="flex justify-center mb-12">
            <div className="w-full max-w-2xl bg-gray-100 rounded-xl overflow-hidden aspect-video relative shadow-inner flex items-center justify-center">
              {/* Ini adalah area video placeholder */}
              <PlayButton />
              <p className="text-gray-400 absolute text-sm opacity-0 md:opacity-100">Area Konten Video</p>
            </div>
          </div>

          {/* Tombol Navigasi */}
          <div className="flex justify-between space-x-4">
            {/* Tombol Kembali */}
            <button
              onClick={() => navigate("")}
              className="px-6 py-3 w-32 md:w-40 bg-blue-500 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-600 transition duration-300 transform hover:scale-105 active:bg-blue-700"
              style={{
                background: 'linear-gradient(180deg, #66A3E0 0%, #468CD7 100%)',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
              }}
            >
              Kembali
            </button>
            
            {/* Tombol Next */}
            <button
              onClick={() => navigate("/kuis")}
              className="px-6 py-3 w-32 md:w-40 bg-blue-500 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-600 transition duration-300 transform hover:scale-105 active:bg-blue-700"
              style={{
                background: 'linear-gradient(180deg, #66A3E0 0%, #468CD7 100%)',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
              }}
            >
              Next
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full p-4 text-center text-white/80 text-sm">
        <p>© 2025 Aurylia | ALL RIGHTS RESERVED</p>
      </footer>
    </div>
  );
};

export default MateriPage;
