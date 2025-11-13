import React from 'react';

// Komponen utama aplikasi (Tampilan LKPD)
const Sumatif = () => {
  
  // Fungsi dummy untuk tombol Kembali
  const handleKembali = () => {
    console.log("Tombol Kembali ditekan");
    console.log("Navigasi: Kembali ke halaman sebelumnya.");
  };

  // Data langkah-langkah pengerjaan LKPD
  const langkahPengerjaan = [
    'Bacalah skenario permasalahan tentang jaringan WiFi di laboratorium sekolah.',
    'Diskusikan bersama kelompok mengenai masalah yang terjadi',
    'Catat poin penting dari hasil temuan bersama kelompok',
    'Tulis jawaban dan kesimpulan pribadi di kolom LKPD masing-masing.',
    'Lakukan praktik konfigurasi Access Point bersama sama lalu mendokumentasikan setiap langkahnya. Cisco Packet Tracer bisa di download link berikut Soal CPT.',
    'Pilih salah satu anggota untuk menjelaskan hasil diskusi kelompok secara lisan.',
  ];

  return (
    // Container utama dengan warna latar belakang biru dan pola gradien
    <div className="min-h-screen bg-[#1F6294] flex flex-col font-sans">
      
      {/* Background radial gradient decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="w-[800px] h-[800px] bg-white/10 rounded-full blur-3xl absolute -top-40 -left-40 opacity-30 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Konten Utama (Card LKPD) */}
      <main className="grow flex items-center justify-center p-4 md:p-8 relative z-10"> {/* flex-grow diubah menjadi grow */}
        <div className="w-full max-w-4xl bg-white p-6 md:p-10 lg:p-12 rounded-4xl shadow-2xl transition duration-500 hover:shadow-3xl transform hover:scale-[1.005]"> {/* rounded-[2rem] diubah menjadi rounded-4xl */}
          
          {/* Bagian Judul */}
          <div className="mb-8 pt-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1F6294] mb-2">Asesmen Sumatif</h2>
            <div className="w-full h-px bg-gray-200"></div>
          </div>
          
          {/* Instruksi Scan Barcode & Konten Tengah */}
          <div className="mb-10 text-center">
            <h3 className="text-xl font-bold text-[#1F6294] mb-6">Scan Barcode</h3>
            
            {/* Wrapper untuk Barcode dan URL agar bisa diatur lebarnya bersamaan */}
            <div className="inline-block w-full max-w-xs mx-auto">
              
              {/* Placeholder untuk Barcode Scanner / Area Barcode, menggunakan rounded-4xl untuk sudut yang besar */}
              <div className="w-64 h-64 bg-gray-100 mx-auto rounded-4xl flex items-center justify-center text-gray-500 text-sm mb-0 shadow-inner">
                <p>Area Barcode</p>
              </div>

              {/* Link atau URL Asesmen - Diletakkan tepat di bawah barcode, menggunakan rounded-xl */}
              <div 
                className="w-full h-12 flex items-center justify-center text-blue-700 rounded-xl text-xs md:text-sm font-semibold mt-4"
                style={{
                  backgroundColor: 'rgba(238, 245, 253, 1)', // Warna biru muda sesuai gambar
                  border: '1px solid rgba(220, 235, 250, 1)' // Border lembut opsional
                }}
              >
                http://asesmenSumatif
              </div>
            </div>
          </div>

          {/* Tombol Kembali */}
          <div className="flex justify-start">
            <button
              onClick={handleKembali}
              className="px-6 py-3 w-32 md:w-40 bg-blue-500 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-600 transition duration-300 transform hover:scale-105 active:bg-blue-700"
              style={{
                background: 'linear-gradient(180deg, #66A3E0 0%, #468CD7 100%)',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
              }}
            >
              Kembali
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

export default Sumatif;

