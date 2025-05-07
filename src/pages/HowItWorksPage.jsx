// src/pages/HowItWorksPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/common/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/common/Card';
import { MessageCircle, Edit3, Search, Users, Zap, ShieldCheck, Smile } from 'lucide-react'; // Icons
import { cn } from '../lib/utils';

// Placeholder for a relevant banner image for this page
// const howItWorksBannerUrl = '/src/assets/images/how-it-works-banner.jpg';

const processSteps = [
  {
    step: 1,
    icon: <MessageCircle className="w-12 h-12 md:w-16 md:h-16 text-white" />,
    bgColor: 'bg-[var(--color-brand-primary)]',
    title: 'Konsultasi Awal & Pemahaman Kebutuhan',
    description:
      'Anda menghubungi kami melalui kontak yang tersedia (telepon, email, atau formulir). Tim kami akan merespons dengan cepat untuk menjadwalkan sesi konsultasi gratis. Dalam sesi ini, kami akan mendengarkan dengan saksama kebutuhan, tantangan, dan tujuan akademik Anda. Kami akan mengajukan pertanyaan relevan untuk memahami ruang lingkup proyek secara detail.',
    points: [
      'Diskusi bebas biaya & tanpa komitmen.',
      'Identifikasi layanan yang paling sesuai.',
      'Penjelasan awal mengenai estimasi waktu & biaya (jika memungkinkan).',
    ],
  },
  {
    step: 2,
    icon: <Edit3 className="w-12 h-12 md:w-16 md:h-16 text-white" />,
    bgColor: 'bg-sky-600', // A slightly different shade for variety
    title: 'Penawaran & Perjanjian Layanan',
    description:
      'Berdasarkan hasil konsultasi, kami akan menyusun penawaran layanan yang transparan. Penawaran ini mencakup rincian lingkup kerja, jadwal pengerjaan, biaya layanan, serta syarat dan ketentuan yang berlaku. Setelah Anda menyetujui penawaran, kami akan melanjutkan ke tahap perjanjian formal untuk memastikan kesepahaman bersama.',
    points: [
      'Rincian biaya yang jelas dan terstruktur.',
      'Jadwal pengerjaan yang realistis.',
      'Perjanjian kerahasiaan (NDA) jika diperlukan.',
    ],
  },
  {
    step: 3,
    icon: <Users className="w-12 h-12 md:w-16 md:h-16 text-white" />,
    bgColor: 'bg-[var(--color-brand-secondary)]',
    title: 'Penunjukan Tim & Kick-off Proyek',
    description:
      'Setelah perjanjian disepakati dan administrasi awal selesai (misalnya, pembayaran tahap awal jika ada), kami akan menunjuk tim ahli yang paling sesuai dengan bidang dan kebutuhan proyek Anda. Kami akan mengadakan sesi kick-off meeting untuk memperkenalkan tim, mengklarifikasi detail, dan menyepakati alur komunikasi selama proyek berlangsung.',
    points: [
      'Tim terdiri dari konsultan & spesialis berpengalaman.',
      'Pembahasan detail teknis & materi yang dibutuhkan.',
      'Penetapan timeline pengerjaan per tahap.',
    ],
  },
  {
    step: 4,
    icon: <Zap className="w-12 h-12 md:w-16 md:h-16 text-white" />,
    bgColor: 'bg-cyan-600',
    title: 'Proses Pengerjaan & Komunikasi Berkala',
    description:
      'Tim kami akan mulai mengerjakan proyek sesuai dengan jadwal yang telah disepakati. Selama proses pengerjaan, kami akan menjaga komunikasi yang proaktif dengan Anda. Kami akan memberikan update progres secara berkala dan siap mengakomodasi diskusi atau masukan yang relevan. Keterlibatan Anda (sesuai kesepakatan) sangat kami hargai.',
    points: [
      'Update progres reguler (mingguan/per milestone).',
      'Sesi diskusi terjadwal untuk feedback.',
      'Fleksibilitas untuk penyesuaian minor (jika diperlukan & disepakati).',
    ],
  },
  {
    step: 5,
    icon: <ShieldCheck className="w-12 h-12 md:w-16 md:h-16 text-white" />,
    bgColor: 'bg-teal-600',
    title: 'Review, Revisi & Finalisasi',
    description:
      'Setelah draf awal selesai, kami akan menyerahkannya kepada Anda untuk direview. Kami menyediakan sesi revisi (jumlah revisi sesuai kesepakatan awal) untuk memastikan hasil akhir sesuai dengan ekspektasi Anda dan standar kualitas Edugo New Era. Kami akan bekerja sama dengan Anda hingga hasil akhir benar-benar memuaskan.',
    points: [
      'Draf hasil pengerjaan sesuai timeline.',
      'Sesi revisi yang konstruktif.',
      'Quality control internal sebelum penyerahan final.',
    ],
  },
  {
    step: 6,
    icon: <Smile className="w-12 h-12 md:w-16 md:h-16 text-white" />,
    bgColor: 'bg-emerald-600',
    title: 'Penyerahan Hasil & Dukungan Pasca-Layanan',
    description:
      'Setelah semua revisi diselesaikan dan hasil akhir disetujui, kami akan menyerahkan seluruh hasil pekerjaan kepada Anda. Kami juga dapat memberikan panduan atau penjelasan singkat mengenai penggunaan hasil tersebut (jika relevan). Hubungan kami tidak berhenti di sini; kami siap memberikan dukungan pasca-layanan jika ada pertanyaan lanjutan yang bersifat minor.',
    points: [
      'Penyerahan seluruh file & dokumen terkait.',
      'Kepuasan Anda adalah prioritas kami.',
      'Feedback Anda sangat berharga untuk perbaikan layanan kami.',
    ],
  },
];

const HowItWorksPage = () => {
  return (
    <div className="space-y-12 md:space-y-16">
      {/* Page Header */}
      <section className="py-10 md:py-16 bg-slate-100 dark:bg-slate-800/60 text-center rounded-lg shadow-sm">
        {/* Optional: Placeholder for banner image 
         {howItWorksBannerUrl && (
          <img 
            src={howItWorksBannerUrl} 
            alt="Proses Layanan Edugo New Era" 
            className="w-full h-48 md:h-64 object-cover rounded-t-lg mb-8"
          />
         )}
        */}
        <div className="container mx-auto px-4">
          <Search className="w-16 h-16 mx-auto mb-4 text-[var(--color-brand-primary)] dark:text-[var(--color-brand-secondary)]" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-brand-primary)] dark:text-[var(--color-brand-secondary)] mb-4">
            Bagaimana Kami Bekerja Untuk Anda
          </h1>
          <p className="text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
            Kami menerapkan proses yang sistematis, transparan, dan kolaboratif untuk memastikan
            Anda mendapatkan hasil terbaik dan pengalaman layanan yang memuaskan.
          </p>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="container mx-auto px-4">
        <div className="relative">
          {/* Vertical line for larger screens - декоративная линия */}
          <div
            className="hidden md:block absolute top-0 bottom-0 left-1/2 w-1 bg-slate-200 dark:bg-slate-700 -ml-0.5"
            aria-hidden="true"
          ></div>

          {processSteps.map((item, index) => (
            <div key={item.step} className="md:flex md:items-start mb-12 md:mb-16 relative">
              {/* Icon and Step Number - Left or Right alternating on MD+ screens */}
              <div
                className={cn(
                  'md:w-1/2 flex mb-6 md:mb-0',
                  index % 2 === 0
                    ? 'md:justify-end md:pr-12'
                    : 'md:justify-start md:pl-12 md:order-2'
                )}
              >
                <div
                  className={cn(
                    'p-4 rounded-full shadow-lg inline-flex items-center justify-center',
                    item.bgColor
                  )}
                >
                  {item.icon}
                </div>
                <div
                  className={cn(
                    'absolute top-6 hidden md:block w-8 h-8 bg-white dark:bg-slate-800 border-2 rounded-full flex items-center justify-center font-bold text-slate-700 dark:text-slate-200',
                    item.bgColor, // Same color as icon background for the dot border
                    index % 2 === 0 ? 'left-1/2 -ml-4' : 'left-1/2 -ml-4' // Position dot on the line
                  )}
                >
                  <span className="text-white">{item.step}</span>
                </div>
              </div>

              {/* Content Card - Right or Left alternating on MD+ screens */}
              <div className={cn('md:w-1/2', index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:order-1')}>
                <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl md:text-2xl text-slate-800 dark:text-slate-100">
                      <span className="font-normal text-slate-500 dark:text-slate-400">
                        Langkah {item.step}:{' '}
                      </span>
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-slate-700 dark:text-slate-300 text-base">
                      {item.description}
                    </p>
                    {item.points && item.points.length > 0 && (
                      <ul className="list-disc list-inside space-y-1 pl-1">
                        {item.points.map((point, pIndex) => (
                          <li key={pIndex} className="text-sm text-slate-600 dark:text-slate-400">
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Punya Pertanyaan Lebih Lanjut Mengenai Proses Kami?
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
          Kami selalu senang menjelaskan setiap detail agar Anda merasa nyaman dan yakin. Jangan
          ragu untuk menghubungi kami.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button asChild size="lg">
            <Link to="/kontak">Hubungi Kami</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/faq">Lihat FAQ</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;
