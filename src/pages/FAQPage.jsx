// src/pages/FAQPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import AccordionPrimitive from '../components/common/AccordionPrimitive';
import { HelpCircle, MessageSquare } from 'lucide-react';
import { Button } from '../components/common/Button';
import { cn } from '../lib/utils';

const faqData = [
  {
    category: 'Layanan Umum',
    questions: [
      {
        q: 'Layanan apa saja yang ditawarkan oleh Edugo New Era?',
        a: "Kami menawarkan berbagai layanan pendampingan akademik, termasuk bimbingan skripsi, tesis, dan disertasi; analisis data statistik; jasa penulisan ilmiah dan bantuan publikasi; riset dan studi literatur; proofreading & editing profesional; serta konsultasi akademik umum. Silakan kunjungi halaman <a href='/layanan' class='text-[var(--color-brand-primary)] hover:underline dark:text-[var(--color-brand-secondary)]'>Layanan Kami</a> untuk detail lebih lanjut.",
      },
      {
        q: 'Bagaimana cara memulai menggunakan layanan Edugo?',
        a: "Sangat mudah! Anda bisa menghubungi kami melalui formulir kontak di website, email, atau nomor telepon yang tertera. Tim kami akan segera merespons untuk sesi konsultasi awal gratis guna memahami kebutuhan Anda. Kunjungi halaman <a href='/cara-kerja' class='text-[var(--color-brand-primary)] hover:underline dark:text-[var(--color-brand-secondary)]'>Cara Kerja</a> untuk melihat proses lengkapnya.",
      },
      {
        q: 'Apakah konsultasi awal dikenakan biaya?',
        a: 'Tidak. Konsultasi awal dengan tim kami sepenuhnya gratis dan tidak mengikat. Tujuannya adalah agar kami dapat memahami kebutuhan Anda dengan baik dan Anda dapat mengenal layanan kami lebih jauh sebelum memutuskan.',
      },
      {
        q: 'Siapa saja yang tergabung dalam tim Edugo New Era?',
        a: 'Tim kami terdiri dari para akademisi, peneliti, dan praktisi berpengalaman di berbagai bidang ilmu. Mereka adalah lulusan dari universitas terkemuka dan memiliki rekam jejak yang solid dalam pendampingan akademik serta publikasi ilmiah. Kami memilih konsultan yang paling sesuai dengan keahlian proyek Anda.',
      },
    ],
  },
  {
    category: 'Proses & Pengerjaan',
    questions: [
      {
        q: 'Berapa lama waktu pengerjaan untuk setiap layanan?',
        a: 'Waktu pengerjaan bervariasi tergantung pada jenis layanan, kompleksitas proyek, dan ketersediaan data/materi dari Anda. Estimasi waktu akan kami sampaikan secara transparan dalam penawaran layanan setelah konsultasi awal.',
      },
      {
        q: 'Bagaimana jika saya membutuhkan revisi?',
        a: "Kami menyediakan layanan revisi. Jumlah revisi yang termasuk dalam paket layanan akan disepakati di awal. Kami berkomitmen untuk bekerja sama dengan Anda hingga hasil akhir sesuai dengan ekspektasi. Beberapa layanan kami, seperti yang tertera di <a href='/harga' class='text-[var(--color-brand-primary)] hover:underline dark:text-[var(--color-brand-secondary)]'>halaman Harga</a>, bahkan menawarkan opsi 'Bebas Revisi'.",
      },
      {
        q: 'Apakah kerahasiaan data saya terjamin?',
        a: 'Tentu saja. Kerahasiaan data dan informasi pribadi klien adalah prioritas utama kami. Kami siap menandatangani Perjanjian Kerahasiaan (NDA) jika diperlukan untuk memberikan Anda ketenangan pikiran.',
      },
      {
        q: 'Apakah Edugo menjamin kelulusan atau publikasi?',
        a: 'Kami menjamin kualitas layanan pendampingan terbaik, originalitas, dan pengerjaan sesuai standar akademik. Namun, keputusan akhir mengenai kelulusan (untuk tugas akhir) atau penerimaan publikasi ilmiah tetap berada di tangan institusi akademik atau pihak penerbit jurnal. Kami akan berusaha semaksimal mungkin untuk membantu Anda mencapai target tersebut.',
      },
    ],
  },
  {
    category: 'Pembayaran & Biaya',
    questions: [
      {
        q: 'Bagaimana sistem pembayaran di Edugo?',
        a: 'Sistem pembayaran akan dijelaskan secara detail dalam penawaran layanan. Umumnya, untuk proyek yang lebih besar, kami memberlakukan sistem pembayaran bertahap (misalnya, DP di awal dan pelunasan setelah selesai). Metode pembayaran yang kami terima juga beragam.',
      },
      {
        q: 'Apakah ada biaya tambahan di luar harga yang tertera?',
        a: 'Harga yang kami tawarkan di awal sudah mencakup lingkup kerja yang disepakati. Biaya tambahan mungkin berlaku untuk permintaan di luar lingkup awal, tingkat kesulitan yang sangat tinggi, atau permintaan pengerjaan dengan tenggat waktu yang sangat mendesak. Semua potensi biaya tambahan akan selalu dikomunikasikan dan disetujui oleh Anda terlebih dahulu.',
      },
      {
        q: 'Apakah ada diskon atau paket khusus?',
        a: "Ya, kami memiliki beberapa paket layanan spesial seperti SEMPRO dan SEMHAS yang menawarkan harga lebih hemat. Silakan periksa <a href='/harga' class='text-[var(--color-brand-primary)] hover:underline dark:text-[var(--color-brand-secondary)]'>halaman Harga</a> kami. Kami juga terkadang memiliki promo khusus yang diinformasikan melalui website atau media sosial kami.",
      },
    ],
  },
];

const FAQPage = () => {
  return (
    <div className="space-y-12 md:space-y-16">
      {/* Page Header */}
      <section className="py-10 md:py-16 bg-slate-100 dark:bg-slate-800/60 text-center rounded-lg shadow-sm">
        <div className="container mx-auto px-4">
          <HelpCircle className="w-16 h-16 mx-auto mb-4 text-[var(--color-brand-primary)] dark:text-[var(--color-brand-secondary)]" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-brand-primary)] dark:text-[var(--color-brand-secondary)] mb-4">
            Pertanyaan Umum (FAQ)
          </h1>
          <p className="text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
            Temukan jawaban atas pertanyaan-pertanyaan yang sering diajukan mengenai layanan kami.
            Jika pertanyaan Anda tidak terjawab di sini, jangan ragu untuk menghubungi kami.
          </p>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="container mx-auto px-4 max-w-4xl">
        {' '}
        {/* Constrain width for better readability of FAQs */}
        {faqData.map((categoryItem, index) => (
          <div key={index} className="mb-10">
            <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-6 pb-2 border-b-2 border-[var(--color-brand-secondary)]">
              {categoryItem.category}
            </h2>
            <div className="space-y-3">
              {categoryItem.questions.map((faq, qIndex) => (
                <AccordionPrimitive
                  key={qIndex}
                  title={<span className="text-md font-medium">{faq.q}</span>}
                  buttonClassName="text-left w-full hover:bg-slate-100/70 dark:hover:bg-slate-800/70 focus-visible:ring-[var(--color-brand-primary)]/70"
                  panelClassName="text-slate-600 dark:text-slate-300 text-sm leading-relaxed"
                  className="border dark:border-slate-700 rounded-md shadow-sm bg-white dark:bg-slate-900/50"
                >
                  {/* Use dangerouslySetInnerHTML for answers containing HTML links. Ensure content is trusted. */}
                  <div dangerouslySetInnerHTML={{ __html: faq.a }} />
                </AccordionPrimitive>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Still Have Questions Section */}
      <section className="container mx-auto px-4 py-12 text-center">
        <div className="bg-slate-50 dark:bg-slate-800 p-8 md:p-12 rounded-lg shadow-md">
          <MessageSquare className="w-12 h-12 mx-auto mb-4 text-[var(--color-brand-primary)] dark:text-[var(--color-brand-secondary)]" />
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-4">
            Masih Ada Pertanyaan Lain?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
            Tim kami selalu siap membantu menjawab setiap pertanyaan Anda. Jangan ragu untuk
            menghubungi kami untuk diskusi lebih lanjut.
          </p>
          <Button asChild size="lg">
            <Link to="/kontak">Hubungi Tim Edugo</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
