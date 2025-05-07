// src/pages/ServicesPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/common/Button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '../components/common/Card';
import AccordionPrimitive from '../components/common/AccordionPrimitive'; // Using our common accordion
import {
  BookOpen, // Skripsi, Tesis, Disertasi
  Calculator, // Analisis Data
  PenTool, // Penulisan Ilmiah
  Search, // Riset & Literatur
  Presentation, // Persiapan Sidang
  Users, // Kelas & Workshop
  ClipboardCheck, // Proofreading & Editing
  GraduationCap, // Konsultasi Umum
  ChevronRight, // For list items
} from 'lucide-react';
import { cn } from '../lib/utils';

// Placeholder for a relevant banner image for services page
// const servicesBannerUrl = '/src/assets/images/services-banner.jpg';

const servicesData = [
  {
    id: 'bimbingan-skripsi-tesis-disertasi',
    icon: <BookOpen className="w-10 h-10 text-[var(--color-brand-secondary)]" />,
    title: 'Bimbingan Skripsi, Tesis, & Disertasi',
    shortDescription:
      'Pendampingan intensif dari awal hingga akhir untuk karya ilmiah S1, S2, dan S3.',
    details: [
      'Konsultasi pemilihan judul yang relevan dan feasible.',
      'Bimbingan penyusunan proposal penelitian yang kuat.',
      'Arahan metodologi penelitian yang tepat.',
      'Pendampingan dalam pengumpulan dan analisis data awal.',
      'Review dan masukan konstruktif per bab/bagian.',
      "Bantuan mengatasi writer's block dan tantangan penulisan.",
      'Persiapan mental dan materi untuk seminar dan sidang akhir.',
    ],
    ctaText: 'Diskusi Kebutuhan Bimbingan Anda',
    ctaLink: '/kontak?service=bimbingan-std', // Example: pre-fill contact form
  },
  {
    id: 'analisis-data-statistik',
    icon: <Calculator className="w-10 h-10 text-[var(--color-brand-secondary)]" />,
    title: 'Analisis Data & Statistik',
    shortDescription:
      'Olah data kuantitatif dan kualitatif dengan berbagai software dan interpretasi hasil.',
    details: [
      'Pengolahan data dengan SPSS, AMOS, SmartPLS, EViews, R, Python, NVivo, dll.',
      'Analisis statistik deskriptif dan inferensial.',
      'Uji validitas dan reliabilitas instrumen penelitian.',
      'Pemodelan regresi, SEM, Path Analysis, dll.',
      'Interpretasi output statistik yang komprehensif dan mudah dipahami.',
      'Visualisasi data untuk laporan dan presentasi.',
    ],
    ctaText: 'Konsultasikan Proyek Analisis Data',
    ctaLink: '/kontak?service=analisis-data',
  },
  {
    id: 'penulisan-ilmiah-publikasi',
    icon: <PenTool className="w-10 h-10 text-[var(--color-brand-secondary)]" />,
    title: 'Jasa Penulisan Ilmiah & Bantuan Publikasi',
    shortDescription:
      'Bantuan penulisan artikel jurnal, paper konferensi, dan panduan submit publikasi.',
    details: [
      'Pengembangan outline dan struktur artikel ilmiah.',
      'Penulisan draf artikel berdasarkan data dan hasil penelitian.',
      'Penyempurnaan tata bahasa, gaya penulisan akademis, dan sitasi.',
      'Formatting artikel sesuai template jurnal target (nasional/internasional).',
      'Pemilihan jurnal yang sesuai dan strategi submit.',
      'Bantuan revisi berdasarkan feedback reviewer (major/minor).',
    ],
    ctaText: 'Tingkatkan Peluang Publikasi Anda',
    ctaLink: '/kontak?service=publikasi-ilmiah',
  },
  {
    id: 'riset-literatur-review',
    icon: <Search className="w-10 h-10 text-[var(--color-brand-secondary)]" />,
    title: 'Riset & Studi Literatur',
    shortDescription: 'Pencarian literatur yang relevan, penyusunan tinjauan pustaka sistematis.',
    details: [
      'Pencarian sumber literatur primer dan sekunder yang kredibel.',
      'Sintesis literatur dan identifikasi research gap.',
      'Penyusunan tinjauan pustaka (literature review) yang mendalam.',
      'Penggunaan tools manajemen referensi (Mendeley, Zotero).',
      'Analisis bibliometrik (jika diperlukan).',
    ],
    ctaText: 'Dapatkan Literatur Review Berkualitas',
    ctaLink: '/kontak?service=riset-literatur',
  },
  {
    id: 'proofreading-editing',
    icon: <ClipboardCheck className="w-10 h-10 text-[var(--color-brand-secondary)]" />,
    title: 'Proofreading & Editing Profesional',
    shortDescription:
      'Pemeriksaan tata bahasa, ejaan, gaya penulisan, dan plagiarisme untuk naskah akademik.',
    details: [
      'Koreksi kesalahan tata bahasa (grammar, PUEBI/EYD).',
      'Penyempurnaan struktur kalimat dan alur paragraf.',
      'Peningkatan kejelasan dan koherensi tulisan.',
      'Pemeriksaan konsistensi terminologi dan format.',
      'Layanan pengecekan plagiarisme dengan software terpercaya.',
      'Saran perbaikan untuk meningkatkan kualitas naskah secara keseluruhan.',
    ],
    ctaText: 'Pastikan Naskah Anda Sempurna',
    ctaLink: '/kontak?service=proofreading',
  },
  {
    id: 'konsultasi-akademik-umum',
    icon: <GraduationCap className="w-10 h-10 text-[var(--color-brand-secondary)]" />,
    title: 'Konsultasi Akademik Umum',
    shortDescription: 'Sesi konsultasi one-on-one untuk berbagai kebutuhan akademik Anda.',
    details: [
      'Diskusi ide penelitian dan perumusan masalah.',
      'Pengembangan kerangka konseptual atau teoritis.',
      'Strategi menghadapi dosen pembimbing atau penguji.',
      'Perencanaan studi lanjut (S2/S3) dalam/luar negeri.',
      'Tips & trik publikasi ilmiah dan presentasi.',
      'Motivasi dan manajemen waktu dalam pengerjaan tugas akhir.',
    ],
    ctaText: 'Jadwalkan Sesi Konsultasi Anda',
    ctaLink: '/kontak?service=konsultasi-umum',
  },
];

const ServicesPage = () => {
  return (
    <div className="space-y-12 md:space-y-16">
      {/* Page Header */}
      <section className="py-10 md:py-16 bg-slate-100 dark:bg-slate-800/60 text-center rounded-lg shadow-sm">
        {/* Optional: Placeholder for banner image 
         {servicesBannerUrl && (
          <img 
            src={servicesBannerUrl} 
            alt="Layanan Edugo New Era" 
            className="w-full h-48 md:h-64 object-cover rounded-t-lg mb-8"
          />
         )}
        */}
        <div className="container mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-brand-primary)] dark:text-[var(--color-brand-secondary)] mb-4">
            Layanan Pendampingan Akademik Kami
          </h1>
          <p className="text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
            Temukan solusi komprehensif untuk setiap tantangan akademik Anda. Kami siap membantu
            Anda mencapai target studi dengan layanan profesional dan terpercaya.
          </p>
        </div>
      </section>

      {/* Services List / Accordion Section */}
      <section className="container mx-auto px-4">
        <div className="space-y-8">
          {servicesData.map((service) => (
            <Card
              key={service.id}
              className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="md:flex">
                {/* Icon and Title part - always visible */}
                <div className="bg-slate-50 dark:bg-slate-800 p-6 md:w-1/3 flex flex-col items-center justify-center text-center md:rounded-l-lg md:rounded-r-none rounded-t-lg">
                  <div className="mb-3 p-3 bg-gradient-to-br from-[var(--color-brand-primary)] to-[var(--color-brand-secondary)] rounded-full inline-block">
                    {React.cloneElement(service.icon, { className: 'w-10 h-10 text-white' })}
                  </div>
                  <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
                    {service.title}
                  </h2>
                  <p className="text-sm text-slate-600 dark:text-slate-400 px-2">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Details and CTA part - can be within an accordion or directly visible */}
                <div className="p-6 md:w-2/3">
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">
                    Detail Layanan:
                  </h3>
                  <ul className="space-y-2 mb-6">
                    {service.details.map((detail, index) => (
                      <li key={index} className="flex items-start">
                        <ChevronRight className="w-4 h-4 text-[var(--color-brand-primary)] dark:text-[var(--color-brand-secondary)] mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm text-slate-700 dark:text-slate-300">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  {service.ctaText && service.ctaLink && (
                    <Button asChild variant="outline" size="sm">
                      <Link to={service.ctaLink}>{service.ctaText}</Link>
                    </Button>
                  )}
                </div>
              </div>

              {/* Alternative: Use Accordion for details if list becomes too long or for a different style */}
              {/* 
              <AccordionPrimitive 
                key={service.id} 
                title={
                  <div className="flex items-center space-x-3">
                    {service.icon}
                    <span className="text-lg font-medium">{service.title}</span>
                  </div>
                }
                buttonClassName="py-4 px-6 hover:bg-slate-100 dark:hover:bg-slate-800"
                panelClassName="bg-white dark:bg-slate-900/50"
              >
                <div className="p-6 border-t border-slate-200 dark:border-slate-700">
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{service.shortDescription}</p>
                  <h4 className="text-md font-semibold text-slate-800 dark:text-slate-200 mb-2">Cakupan Layanan:</h4>
                  <ul className="space-y-1.5 mb-4">
                    {service.details.map((detail, index) => (
                      <li key={index} className="flex items-start">
                        <ChevronRight className="w-4 h-4 text-[var(--color-brand-primary)] mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm text-slate-700 dark:text-slate-300">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  {service.ctaText && service.ctaLink && (
                    <Button asChild variant="secondary" size="sm">
                      <Link to={service.ctaLink}>{service.ctaText}</Link>
                    </Button>
                  )}
                </div>
              </AccordionPrimitive>
              */}
            </Card>
          ))}
        </div>
      </section>

      {/* General CTA Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="bg-gradient-to-r from-[var(--color-brand-primary)] to-[var(--color-brand-secondary)] text-white p-8 md:p-12 rounded-lg shadow-xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Belum Menemukan yang Anda Cari?</h2>
          <p className="text-md md:text-lg mb-6 max-w-xl mx-auto">
            Jika Anda memiliki kebutuhan akademik spesifik lainnya, jangan ragu untuk menghubungi
            kami. Tim kami siap mendiskusikan solusi yang paling tepat untuk Anda.
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="bg-white text-[var(--color-brand-primary)] hover:bg-slate-100"
          >
            <Link to="/kontak">Hubungi Konsultan Kami</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
