// src/pages/TermsOfServicePage.jsx
import React from 'react';
import { FileText } from 'lucide-react';
import { cn } from '../lib/utils';

// ****  WARNING: THIS IS A GENERIC TEMPLATE. ****
// ****  YOU MUST REPLACE THIS WITH YOUR ACTUAL TERMS OF SERVICE. ****
// ****  CONSULT A LEGAL PROFESSIONAL. ****

const TermsOfServicePage = () => {
  const lastUpdated = '25 Mei 2025'; // Update this date

  return (
    <div className="space-y-10">
      {/* Page Header */}
      <section className="py-10 md:py-12 bg-slate-100 dark:bg-slate-800/60 text-center rounded-lg shadow-sm">
        <div className="container mx-auto px-4">
          <FileText className="w-16 h-16 mx-auto mb-4 text-[var(--color-brand-primary)] dark:text-[var(--color-brand-secondary)]" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-brand-primary)] dark:text-[var(--color-brand-secondary)] mb-4">
            Ketentuan Layanan
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
          <h2>1. Persetujuan terhadap Ketentuan</h2>
          <p>
            Selamat datang di Edugo New Era ("Perusahaan", "kami", "milik kami", "kita")! Ketentuan
            Layanan ini ("Ketentuan") mengatur akses Anda ke dan penggunaan situs web kami yang
            terletak di [Nama Domain Website Anda, misalnya edugo-new-era.id] ("Situs") dan layanan
            terkait yang kami tawarkan (secara kolektif disebut "Layanan").
          </p>
          <p>
            Dengan mengakses atau menggunakan Layanan kami, Anda setuju untuk terikat oleh Ketentuan
            ini dan <a href="/kebijakan-privasi">Kebijakan Privasi</a> kami. Jika Anda tidak setuju
            dengan semua Ketentuan ini, maka Anda secara tegas dilarang menggunakan Situs dan
            Layanan dan Anda harus segera menghentikan penggunaan.
          </p>

          <h2>2. Layanan Kami</h2>
          <p>
            Edugo New Era menyediakan layanan pendampingan akademik, termasuk namun tidak terbatas
            pada bimbingan skripsi/tesis/disertasi, analisis data, konsultasi penelitian, dan
            layanan terkait lainnya seperti yang dijelaskan di Situs kami. Lingkup spesifik layanan
            dan biaya terkait akan dituangkan dalam perjanjian layanan terpisah atau penawaran yang
            disepakati oleh Anda dan Perusahaan.
          </p>
          <p>
            Semua layanan yang kami berikan bertujuan untuk membantu dan membimbing Anda dalam
            proses akademik Anda. Anda bertanggung jawab penuh atas orisinalitas dan integritas
            karya akhir Anda. Layanan kami tidak dimaksudkan untuk menggantikan upaya akademis Anda
            sendiri atau untuk melakukan penulisan ulang substansial yang melanggar kebijakan
            integritas akademik institusi Anda.
          </p>

          <h2>3. Penggunaan Situs dan Layanan</h2>
          <h3>Kelayakan</h3>
          <p>
            Anda harus berusia minimal 18 tahun atau usia dewasa menurut hukum di yurisdiksi Anda
            untuk menggunakan Layanan kami. Dengan menggunakan Layanan, Anda menyatakan dan menjamin
            bahwa Anda memenuhi persyaratan kelayakan ini.
          </p>

          <h3>Perilaku Pengguna</h3>
          <p>Anda setuju untuk tidak menggunakan Situs atau Layanan untuk:</p>
          <ul>
            <li>Tujuan ilegal atau yang melanggar hukum.</li>
            <li>Melanggar hak kekayaan intelektual kami atau pihak ketiga lainnya.</li>
            <li>Menyebarkan virus atau kode berbahaya lainnya.</li>
            <li>Mengumpulkan informasi pribadi pengguna lain tanpa persetujuan mereka.</li>
            <li>Terlibat dalam aktivitas penipuan atau menyesatkan.</li>
            {/* Tambahkan larangan lain yang relevan */}
          </ul>

          <h2>4. Hak Kekayaan Intelektual</h2>
          <p>
            Kecuali dinyatakan lain, Situs dan Layanan adalah properti kami dan semua kode sumber,
            database, fungsionalitas, perangkat lunak, desain situs web, audio, video, teks, foto,
            dan grafik di Situs (secara kolektif, "Konten") dan merek dagang, merek layanan, dan
            logo yang terkandung di dalamnya ("Merek") dimiliki atau dikendalikan oleh kami atau
            dilisensikan kepada kami, dan dilindungi oleh undang-undang hak cipta dan merek dagang
            serta berbagai hak kekayaan intelektual lainnya.
          </p>
          <p>
            Konten dan Merek disediakan di Situs "SEBAGAIMANA ADANYA" hanya untuk informasi dan
            penggunaan pribadi Anda. Kecuali sebagaimana diatur secara tegas dalam Ketentuan ini,
            tidak ada bagian dari Situs atau Layanan dan tidak ada Konten atau Merek yang boleh
            disalin, direproduksi, diagregasi, diterbitkan ulang, diunggah, diposting, ditampilkan
            secara publik, dikodekan, diterjemahkan, ditransmisikan, didistribusikan, dijual,
            dilisensikan, atau dieksploitasi untuk tujuan komersial apa pun, tanpa izin tertulis
            sebelumnya dari kami.
          </p>

          <h2>5. Pembatasan Tanggung Jawab</h2>
          <p>
            SEJAUH DIIZINKAN OLEH HUKUM YANG BERLAKU, DALAM KEADAAN APAPUN PERUSAHAAN ATAU DIREKTUR,
            KARYAWAN, ATAU AGENNYA TIDAK AKAN BERTANGGUNG JAWAB KEPADA ANDA ATAU PIHAK KETIGA
            MANAPUN ATAS KERUSAKAN LANGSUNG, TIDAK LANGSUNG, KONSEKUENSIAL, INSIDENTAL, KHUSUS, ATAU
            HUKUMAN, TERMASUK KEHILANGAN KEUNTUNGAN, KEHILANGAN PENDAPATAN, KEHILANGAN DATA, ATAU
            KERUSAKAN LAIN YANG TIMBUL DARI PENGGUNAAN SITUS ATAU LAYANAN OLEH ANDA, BAHKAN JIKA
            KAMI TELAH DIBERITAHU TENTANG KEMUNGKINAN KERUSAKAN TERSEBUT.
          </p>

          <h2>6. Ganti Rugi</h2>
          <p>
            Anda setuju untuk membela, mengganti rugi, dan membebaskan kami, termasuk anak
            perusahaan, afiliasi, dan semua pejabat, agen, mitra, dan karyawan kami masing-masing,
            dari dan terhadap setiap kerugian, kerusakan, kewajiban, klaim, atau permintaan,
            termasuk biaya dan pengeluaran pengacara yang wajar, yang dibuat oleh pihak ketiga mana
            pun karena atau yang timbul dari: (1) penggunaan Layanan oleh Anda; (2) pelanggaran
            Ketentuan ini oleh Anda; (3) setiap pelanggaran pernyataan dan jaminan Anda yang
            ditetapkan dalam Ketentuan ini; (4) pelanggaran Anda terhadap hak-hak pihak ketiga,
            termasuk namun tidak terbatas pada hak kekayaan intelektual; atau (5) setiap tindakan
            berbahaya yang nyata terhadap pengguna Layanan lain yang terhubung dengan Anda melalui
            Layanan.
          </p>

          <h2>7. Hukum yang Mengatur</h2>
          <p>
            Ketentuan ini dan penggunaan Situs dan Layanan oleh Anda diatur oleh dan ditafsirkan
            sesuai dengan hukum Negara Republik Indonesia, tanpa memperhatikan pertentangan
            prinsip-prinsip hukum.
          </p>

          <h2>8. Perubahan pada Ketentuan</h2>
          <p>
            Kami berhak, atas kebijakan kami sendiri, untuk membuat perubahan atau modifikasi pada
            Ketentuan ini kapan saja dan untuk alasan apa pun. Kami akan memberi tahu Anda tentang
            perubahan apa pun dengan memperbarui tanggal "Terakhir diperbarui" dari Ketentuan ini,
            dan Anda melepaskan hak apa pun untuk menerima pemberitahuan khusus tentang setiap
            perubahan tersebut. Adalah tanggung jawab Anda untuk meninjau Ketentuan ini secara
            berkala untuk tetap mendapat informasi tentang pembaruan. Anda akan tunduk pada, dan
            akan dianggap telah diberitahu dan telah menerima, perubahan dalam Ketentuan yang
            direvisi dengan terus menggunakan Situs setelah tanggal Ketentuan yang direvisi tersebut
            diposting.
          </p>

          <h2>9. Hubungi Kami</h2>
          <p>
            Untuk menyelesaikan keluhan mengenai Situs atau Layanan atau untuk menerima informasi
            lebih lanjut mengenai penggunaan Situs atau Layanan, silakan hubungi kami di:
          </p>
          <p>
            Edugo New Era <br />
            Email: [Alamat Email Kontak Anda, misal: legal@edugo.id atau info@edugo.id] <br />
            Alamat: [Alamat Fisik Anda Jika Ada dan Relevan]
          </p>
        </div>
      </section>
    </div>
  );
};

export default TermsOfServicePage;
