// src/pages/PrivacyPolicyPage.jsx
import React from 'react';
import { Shield } from 'lucide-react';
import { cn } from '../lib/utils';

// ****  WARNING: THIS IS A GENERIC TEMPLATE. ****
// ****  YOU MUST REPLACE THIS WITH YOUR ACTUAL PRIVACY POLICY. ****
// ****  CONSULT A LEGAL PROFESSIONAL. ****

const PrivacyPolicyPage = () => {
  const lastUpdated = '25 Mei 2025'; // Update this date

  return (
    <div className="space-y-10">
      {/* Page Header */}
      <section className="py-10 md:py-12 bg-slate-100 dark:bg-slate-800/60 text-center rounded-lg shadow-sm">
        <div className="container mx-auto px-4">
          <Shield className="w-16 h-16 mx-auto mb-4 text-[var(--color-brand-primary)] dark:text-[var(--color-brand-secondary)]" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-brand-primary)] dark:text-[var(--color-brand-secondary)] mb-4">
            Kebijakan Privasi
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Terakhir diperbarui: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="container mx-auto px-4 max-w-3xl">
        <div
          className={cn(
            'prose prose-slate dark:prose-invert max-w-none', // Tailwind typography plugin classes
            'prose-headings:text-[var(--color-brand-primary)] dark:prose-headings:text-[var(--color-brand-secondary)] prose-headings:font-semibold',
            'prose-a:text-[var(--color-brand-primary)] hover:prose-a:text-opacity-80 dark:prose-a:text-[var(--color-brand-secondary)]',
            'prose-strong:font-semibold'
          )}
        >
          <h2>Pendahuluan</h2>
          <p>
            Selamat datang di Kebijakan Privasi Edugo New Era ("kami", "milik kami", atau "kita").
            Edugo New Era berkomitmen untuk melindungi privasi data pribadi Anda. Kebijakan Privasi
            ini menjelaskan bagaimana kami mengumpulkan, menggunakan, mengungkapkan, dan melindungi
            informasi Anda ketika Anda mengunjungi website kami [Nama Domain Website Anda, misalnya
            edugo-new-era.id] (selanjutnya disebut "Situs") dan menggunakan layanan kami.
          </p>
          <p>
            Harap baca kebijakan privasi ini dengan saksama. Jika Anda tidak setuju dengan ketentuan
            kebijakan privasi ini, mohon untuk tidak mengakses situs ini.
          </p>

          <h2>Informasi yang Kami Kumpulkan</h2>
          <p>
            Kami dapat mengumpulkan informasi tentang Anda dalam berbagai cara. Informasi yang dapat
            kami kumpulkan di Situs meliputi:
          </p>

          <h3>Data Pribadi</h3>
          <p>
            Informasi yang dapat diidentifikasi secara pribadi, seperti nama Anda, alamat email,
            nomor telepon, dan informasi demografis (seperti usia atau jenis kelamin), yang Anda
            berikan secara sukarela kepada kami ketika Anda mendaftar di Situs, mengisi formulir
            kontak, atau berinteraksi dengan layanan kami.
          </p>

          <h3>Data Derivatif</h3>
          <p>
            Informasi yang dikumpulkan server kami secara otomatis ketika Anda mengakses Situs,
            seperti alamat IP Anda, jenis browser Anda, sistem operasi Anda, waktu akses Anda, dan
            halaman yang telah Anda lihat secara langsung sebelum dan sesudah mengakses Situs. (Jika
            menggunakan analitik).
          </p>

          {/* Add more sections as appropriate, for example:
          <h3>Data Keuangan</h3>
          <p>...</p>
          <h3>Data dari Media Sosial</h3>
          <p>...</p>
          <h3>Data Seluler</h3>
          <p>...</p>
          */}

          <h2>Penggunaan Informasi Anda</h2>
          <p>
            Memiliki informasi yang akurat tentang Anda memungkinkan kami untuk memberikan Anda
            pengalaman yang lancar, efisien, dan disesuaikan. Secara khusus, kami dapat menggunakan
            informasi yang dikumpulkan tentang Anda melalui Situs untuk:
          </p>
          <ul>
            <li>Membuat dan mengelola akun Anda (jika ada fungsionalitas akun).</li>
            <li>Memproses pertanyaan dan permintaan Anda.</li>
            <li>
              Mengirimkan email newsletter atau promosi kepada Anda (dengan persetujuan Anda).
            </li>
            <li>Meningkatkan efisiensi dan operasi Situs.</li>
            <li>
              Memantau dan menganalisis penggunaan dan tren untuk meningkatkan pengalaman Anda
              dengan Situs.
            </li>
            <li>Memberitahu Anda tentang pembaruan pada Situs dan layanan kami.</li>
            {/* Add more uses as appropriate */}
          </ul>

          <h2>Pengungkapan Informasi Anda</h2>
          <p>
            Kami tidak akan membagikan, menjual, menyewakan, atau memperdagangkan informasi pribadi
            Anda kepada pihak ketiga tanpa persetujuan Anda, kecuali sebagaimana dijelaskan dalam
            Kebijakan Privasi ini atau sebagaimana diwajibkan oleh hukum.
          </p>
          <p>Kami dapat mengungkapkan informasi Anda dalam situasi berikut:</p>
          <ul>
            <li>
              <strong>Oleh Hukum atau untuk Melindungi Hak:</strong> Jika kami percaya bahwa
              pelepasan informasi tentang Anda diperlukan untuk menanggapi proses hukum, untuk
              menyelidiki atau memperbaiki potensi pelanggaran kebijakan kami, atau untuk melindungi
              hak, properti, dan keselamatan orang lain.
            </li>
            <li>
              <strong>Penyedia Layanan Pihak Ketiga:</strong> Kami dapat membagikan informasi Anda
              dengan vendor pihak ketiga, penyedia layanan, kontraktor, atau agen yang melakukan
              layanan untuk kami atau atas nama kami dan memerlukan akses ke informasi tersebut
              untuk melakukan pekerjaan itu (misalnya, pemrosesan pembayaran, analisis data, hosting
              email).
            </li>
            {/* Add more disclosure situations if any */}
          </ul>

          <h2>Keamanan Informasi Anda</h2>
          <p>
            Kami menggunakan langkah-langkah keamanan administratif, teknis, dan fisik untuk
            membantu melindungi informasi pribadi Anda. Meskipun kami telah mengambil
            langkah-langkah yang wajar untuk mengamankan informasi pribadi yang Anda berikan kepada
            kami, perlu diketahui bahwa terlepas dari upaya kami, tidak ada langkah-langkah keamanan
            yang sempurna atau tidak dapat ditembus, dan tidak ada metode transmisi data yang dapat
            dijamin terhadap intersepsi atau jenis penyalahgunaan lainnya.
          </p>

          <h2>Hak Anda Terkait Data Pribadi</h2>
          <p>
            Sesuai dengan peraturan perlindungan data yang berlaku di Indonesia, Anda memiliki
            hak-hak tertentu terkait data pribadi Anda. Ini mungkin termasuk hak untuk:
          </p>
          <ul>
            <li>Mengakses data pribadi Anda.</li>
            <li>Meminta perbaikan data pribadi Anda yang tidak akurat.</li>
            <li>Meminta penghapusan data pribadi Anda dalam kondisi tertentu.</li>
            <li>
              Menarik kembali persetujuan Anda untuk pemrosesan data (jika pemrosesan didasarkan
              pada persetujuan).
            </li>
            <li>Mengajukan keluhan kepada otoritas perlindungan data yang berwenang.</li>
          </ul>
          <p>
            Untuk menggunakan hak-hak ini, silakan hubungi kami menggunakan detail kontak yang
            disediakan di bawah.
          </p>

          <h2>Kebijakan untuk Anak-Anak</h2>
          <p>
            Kami tidak secara sengaja mengumpulkan informasi dari atau memasarkan kepada anak-anak
            di bawah usia 13 tahun (atau usia lain yang relevan sesuai hukum setempat). Jika Anda
            mengetahui adanya data yang kami kumpulkan dari anak-anak di bawah usia yang ditentukan,
            silakan hubungi kami menggunakan informasi kontak yang diberikan di bawah ini.
          </p>

          <h2>Perubahan pada Kebijakan Privasi Ini</h2>
          <p>
            Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Versi terbaru akan
            ditunjukkan oleh tanggal "Terakhir diperbarui" yang diperbarui dan versi yang diperbarui
            akan berlaku segera setelah dapat diakses. Kami menganjurkan Anda untuk meninjau
            kebijakan privasi ini secara berkala agar tetap mendapat informasi tentang bagaimana
            kami melindungi informasi Anda.
          </p>

          <h2>Hubungi Kami</h2>
          <p>
            Jika Anda memiliki pertanyaan atau komentar tentang Kebijakan Privasi ini, silakan
            hubungi kami di:
          </p>
          <p>
            Edugo New Era <br />
            Email: [Alamat Email Kontak Anda untuk Privasi, misal: privacy@edugo.id] <br />
            Alamat: [Alamat Fisik Anda Jika Ada dan Relevan] <br />
            Nomor Telepon: [Nomor Telepon Kontak Anda Jika Relevan]
          </p>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
