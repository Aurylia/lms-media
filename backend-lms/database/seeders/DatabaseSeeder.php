<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // Admin (Guru)
        User::create([
            'name' => 'Guru Admin',
            'username' => 'admin',
            'password' => Hash::make('admin123'),
            'role' => 'admin',
        ]);

        // Akun Siswa
        $siswa = [
            ['name' => 'Ahmad Nufal Sidiq', 'username' => 'ahmad.rizki', 'kelas' => '12 IPA 1'],
            ['name' => 'Alvin Al Hafidz Wibowo', 'username' => 'alvin.wibowo', 'kelas' => '12 IPA 1'],
            ['name' => 'Aam Trianawati', 'username' => 'aam.trianawati', 'kelas' => '12 IPA 2'],
            ['name' => 'Ahmad Naufal Sidiq', 'username' => 'ahmad.naufal', 'kelas' => '12 IPA 2'],
            ['name' => 'Amanda Devika Hakim', 'username' => 'amanda.hakim', 'kelas' => '12 IPA 1'],
            ['name' => 'Cynthia Hasna Mazaya', 'username' => 'cynthia.mazaya', 'kelas' => '12 IPA 1'],
            ['name' => 'Dewi Yanti', 'username' => 'dewi.yanti', 'kelas' => '12 IPA 2'],
            ['name' => 'Ghefira Azka Fatharani', 'username' => 'ghefira.fatharani', 'kelas' => '12 IPA 2'],
            ['name' => 'Irsyad Aflaha Shobirin', 'username' => 'irsyad.shobirin', 'kelas' => '12 IPA 2'],
            ['name' => 'Khairunnisyak', 'username' => 'khairunnisyak', 'kelas' => '12 IPA 2'],
            ['name' => 'Muhammad Fathin Mughits', 'username' => 'muhammad.mughits', 'kelas' => '12 IPA 2'],
            ['name' => 'Muhammad Ridho Fajri', 'username' => 'muhammad.fajri', 'kelas' => '12 IPA 2'],
            ['name' => 'M Daffa Al Qory', 'username' => 'm.daffa', 'kelas' => '12 IPA 2'],
            ['name' => 'Nabil Subhi Syah Putra', 'username' => 'nabil.putra', 'kelas' => '12 IPA 2'],
            ['name' => 'SyahrulMubarok', 'username' => 'syahrul.mubarok', 'kelas' => '12 IPA 2'],
            ['name' => 'Yuzrizal Hidayat', 'username' => 'yuzrizal.hidayat', 'kelas' => '12 IPA 2'],
        ];

        foreach ($siswa as $s) {
            User::create([
                'name' => $s['name'],
                'username' => $s['username'],
                'password' => Hash::make('siswa123'), // password sama untuk semua siswa
                'role' => 'siswa',
                'kelas' => $s['kelas'],
            ]);
        }
    }
}