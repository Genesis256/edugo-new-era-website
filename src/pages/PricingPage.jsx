// src/pages/PricingPage.jsx
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
import {
  Tag,
  FileText,
  Users,
  Zap,
  ShieldCheck,
  CheckSquare,
  DollarSign,
  AlertTriangle,
} from 'lucide-react'; // Icons
import { cn } from '../lib/utils';

const formatPrice = (price) => {
  if (typeof price === 'number') {
    return `IDR ${price.toLocaleString('id-ID')}`;
  }
  return price; // For strings like "N/A" or "[START FROM]..."
};

const penelitianHarga = {
  judul: { price: 75000, note: 'Topik/Instruksi. Harga Untuk 1 Judul + Jurnal' },
  matriks: { price: 200000, note: 'Template Khusus. Harga Untuk 1 Topik Penelitian' },
  refrensi: { price: 25000, note: 'Proposal/Topik. Harga Untuk Internasional +IDR 10.000' },
  jurnal: { price: 300000, note: 'Naskah Asli. Harga Tanpa Materi +IDR 200.000' }, // OCR shows 200.0000
  instrument: { price: 200000, note: 'Proposal. Harga Tanpa D.O +IDR 200.000' }, // OCR shows 200.0000
};

const babHarga = [
  {
    bab: 'BAB I',
    title: 'Pendahuluan',
    items: [
      'Latar Belakang',
      'Rumusan Masalah',
      'Tujuan Penelitian',
      'Batasan Masalah',
      'Manfaat Penelitian',
    ],
    harga1x: 500000,
    hargaBebasRevisi: 700000,
  },
  {
    bab: 'BAB II',
    title: 'Tinjauan Pustaka & Kerangka Teori',
    items: [
      'Landasan Teori',
      'Penelitian Relevan (3 Referensi)',
      'Kerangka Pikir',
      'Kerangka Konseptual',
      'Hipotesis',
    ],
    harga1x: 600000,
    hargaBebasRevisi: 800000,
  },
  {
    bab: 'BAB III',
    title: 'Metodologi Penelitian',
    items: [
      'Desain Penelitian',
      'Waktu dan Tempat',
      'Teknik Pengumpulan Data',
      'Pengolahan Data',
      'Teknik Analisis Data',
    ],
    harga1x: 400000,
    hargaBebasRevisi: 600000,
  },
  {
    bab: 'BAB IV',
    title: 'Hasil & Pembahasan',
    items: ['Hasil Penelitian', 'Pembahasan'],
    harga1x: 1200000,
    hargaBebasRevisi: 1600000,
  },
  {
    bab: 'BAB V',
    title: 'Kesimpulan & Saran',
    items: ['Kesimpulan', 'Saran'],
    // Harga tidak terpisah di OCR, tapi implisit sama dgn BAB IV jika paket? Asumsi pakai harga min.
    // Untuk page statis, kita bisa tentukan atau refer ke paket. Mari kita anggap ini bisa dipaketkan.
    // Atau, bisa dibuat 1x Order dan Bebas Revisi jika logikanya sama dengan Bab IV (dari sisi pengerjaan)
    // Melihat struktur gambar, BAB IV dan V harganya sama (untuk 1x dan bebas revisi)
    harga1x: null, // Asumsi tidak ada harga satuan, cek data berikutnya
    hargaBebasRevisi: 1600000, // Sesuai harga Ambil Data/Olah Data jika bebas revisi bagian ini
  },
];

const dataServices = [
  { name: 'Ambil Data (Tabulasi Data)', price: 500000, note: 'Bebas Revisi' },
  { name: 'Olah Data (Software Statistik)', price: 700000, note: 'Bebas Revisi' },
];

const catatanPenelitian = [
  '*Berlaku hanya untuk jurusan umum',
  '**Fakultas Hukum, I.T, dan Teknik dikenakan biaya tambahan +IDR 200.000/BAB',
  '**Jenjang pendidikan Sastra II (S2) dikenakan biaya tambahan +IDR 200.000/BAB',
];
const catatanPenelitianS2 = [
  // for S2/BAB IV-V notes on 2nd image
  '*Berlaku hanya untuk jurusan umum',
  '**Fakultas Hukum, I.T, dan Teknik dikenakan biaya tambahan', // no explicit amount for /BAB
  '**Jenjang pendidikan Sastra II (S2) dikenakan biaya tambahan +IDR 500.000/BAB',
];

const specialOffers = [
  {
    kategori: 'SEMPRO (BAB I-III / Proposal)',
    harga: [
      { level: 'S1', price: 1800000 },
      // { level: "S2", price: 1200000 } // This S1/S2 looks swapped in OCR or is different pricing logic, for now following the visual: Higher price as first option S1
      // Based on second image order. 1.800.000 (S1), 1.200.000 (S1). Assuming it means S1 for one price, and another S1 for different scope/package
      // Let's assume the image meant:
      // S1 Standar: 1.800.000
      // S1 Lite (perhaps different conditions for the second 1.200.000 price): 1.200.000 (this needs clarification from client)
      // For now I will list them as two S1 options:
      { level: 'S1 (Paket A)', price: 1800000 },
      { level: 'S1 (Paket B)', price: 1200000 },
    ],
    details: [
      'BAB I-III',
      'Bebas Revisi',
      'PPT (Standar)',
      'Plagiasi (<30%)',
      'Bebas Bimbingan',
      'Berkas Referensi',
      'Instrument',
    ],
  },
  {
    kategori: 'SEMHAS (BAB IV-V / Hasil)',
    harga: [
      { level: 'S1 (Paket A)', price: 2500000 },
      { level: 'S1 (Paket B)', price: 3000000 }, // Note: Semhas S1 (Paket B) is more expensive than A here.
    ],
    details: [
      'BAB IV-V',
      'Bebas Revisi',
      'PPT (Standar)',
      'Bebas Bimbingan',
      'Olah Data',
      'Revisi Data',
      'Review BAB I-III',
    ],
  },
];

const lainnyaHarga = [
  { order: 'Editing (BAB I-III)', price: 300000, keterangan: 'Sesuai Pedoman' },
  { order: 'Editing (BAB IV-V)', price: 300000, keterangan: 'Sesuai Pedoman' },
  { order: 'Cek Plagiat', price: 15000, keterangan: 'Sekali Pengecekan' },
  { order: 'Parafrase', price: 150000, keterangan: 'Manual / 10%' },
  { order: 'Konsultasi', price: 100000, keterangan: 'Dalam Hitungan per Jam' },
  { order: 'Powerpoint', price: 200000, keterangan: 'Tidak Termasuk Bahan' },
  { order: 'Soal + Jawaban', price: 150000, keterangan: 'Dalam Setiap 30 Item' },
  { order: 'Review Paper', price: 150000, keterangan: 'Untuk Setiap Naskah' },
  { order: 'Tugas', price: '[START FROM] IDR 50.000', keterangan: 'Menyesuaikan Order' },
  { order: 'Makalah', price: '[START FROM] IDR 150.000', keterangan: 'Menyesuaikan Order' },
];

const PricingPage = () => {
  return (
    <div className="space-y-16 md:space-y-24">
      {/* Page Header */}
      <section className="py-10 md:py-16 bg-slate-100 dark:bg-slate-800/60 text-center rounded-lg shadow-sm">
        <div className="container mx-auto px-4">
          <DollarSign className="w-16 h-16 mx-auto mb-4 text-[var(--color-brand-primary)] dark:text-[var(--color-brand-secondary)]" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-brand-primary)] dark:text-[var(--color-brand-secondary)] mb-4">
            Katalog Harga Layanan Edugo
          </h1>
          <p className="text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
            Kami menawarkan struktur harga yang transparan dan kompetitif untuk semua layanan
            pendampingan akademik. Temukan paket yang paling sesuai dengan kebutuhan Anda.
          </p>
        </div>
      </section>

      {/* Harga Penelitian Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-8 text-center">
          Harga Layanan Penelitian Satuan
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {Object.entries(penelitianHarga).map(([key, value]) => (
            <Card key={key} className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="capitalize text-xl text-slate-800 dark:text-slate-100">
                  {key.replace(/([A-Z])/g, ' $1')}
                </CardTitle>
                <p className="text-2xl font-bold text-[var(--color-brand-primary)] dark:text-[var(--color-brand-secondary)] pt-1">
                  {formatPrice(value.price)}
                </p>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm text-slate-600 dark:text-slate-400">
                  {value.note}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center text-xs text-slate-500 dark:text-slate-400 mt-2">
          <p className="font-semibold">Catatan (Layanan Satuan):</p>
          <p>
            {penelitianHarga.instrument.note.split('+')[0]}{' '}
            <span className="font-semibold">{penelitianHarga.instrument.note.split('+')[1]}</span>{' '}
            (untuk layanan Instrumen, Fakultas Pendidikan dikenakan biaya khusus).
          </p>
        </div>
      </section>

      {/* Harga per BAB Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-8 text-center">
          Harga Pengerjaan per BAB
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] text-sm text-left text-slate-500 dark:text-slate-400">
            <thead className="text-xs text-slate-700 dark:text-slate-300 uppercase bg-slate-100 dark:bg-slate-800">
              <tr>
                <th scope="col" className="px-6 py-3 rounded-tl-lg">
                  BAB
                </th>
                <th scope="col" className="px-6 py-3">
                  Isi Utama
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Harga (1x Order)
                </th>
                <th scope="col" className="px-6 py-3 text-center rounded-tr-lg">
                  Harga (Bebas Revisi)
                </th>
              </tr>
            </thead>
            <tbody>
              {babHarga.map((item, index) => (
                <tr
                  key={item.bab}
                  className="bg-white dark:bg-slate-900/70 border-b dark:border-slate-700 hover:bg-slate-50/50 dark:hover:bg-slate-800/50"
                >
                  <td className="px-6 py-4 font-medium text-slate-900 dark:text-white whitespace-nowrap">
                    {item.bab}
                    <br />
                    <span className="text-xs font-normal text-slate-500">{item.title}</span>
                  </td>
                  <td className="px-6 py-4">
                    <ul className="list-disc list-inside">
                      {item.items.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  </td>
                  <td className="px-6 py-4 text-center font-semibold text-slate-700 dark:text-slate-200">
                    {item.harga1x ? formatPrice(item.harga1x) : 'N/A'}
                  </td>
                  <td className="px-6 py-4 text-center font-semibold text-[var(--color-brand-primary)] dark:text-[var(--color-brand-secondary)]">
                    {formatPrice(item.hargaBebasRevisi)}
                  </td>
                </tr>
              ))}
              {/* Data Services */}
              {dataServices.map((service, index) => (
                <tr
                  key={service.name + index}
                  className="bg-white dark:bg-slate-900/70 border-b dark:border-slate-700 hover:bg-slate-50/50 dark:hover:bg-slate-800/50"
                >
                  <td colSpan={2} className="px-6 py-4 font-medium text-slate-900 dark:text-white">
                    {service.name}
                  </td>
                  <td className="px-6 py-4 text-center font-semibold text-slate-700 dark:text-slate-200">
                    N/A
                  </td>
                  <td className="px-6 py-4 text-center font-semibold text-[var(--color-brand-primary)] dark:text-[var(--color-brand-secondary)]">
                    {formatPrice(service.price)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/30 border-l-4 border-yellow-400 dark:border-yellow-500 rounded-r-md">
          <h4 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-1 flex items-center">
            <AlertTriangle className="w-5 h-5 mr-2" />
            Catatan Penting (Harga per BAB):
          </h4>
          <ul className="list-disc list-inside pl-4 text-sm text-yellow-700 dark:text-yellow-400 space-y-1">
            {catatanPenelitian.map((note, i) => (
              <li key={i}>
                {note.includes('**') ? (
                  <span className="font-medium">
                    {note.split('**')[0]}**{note.split('**')[1]}
                  </span>
                ) : (
                  note
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-8 text-center">
          <Tag className="w-8 h-8 inline-block mr-2 text-[var(--color-brand-secondary)]" />{' '}
          Penawaran Spesial (Paket)
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {specialOffers.map((offer) => (
            <Card
              key={offer.kategori}
              className="shadow-xl border-2 border-[var(--color-brand-secondary)] dark:border-[var(--color-brand-primary)] flex flex-col"
            >
              <CardHeader className="bg-gradient-to-r from-[var(--color-brand-primary)] to-[var(--color-brand-secondary)] text-white rounded-t-md p-6">
                <CardTitle className="text-2xl text-center">{offer.kategori}</CardTitle>
              </CardHeader>
              <CardContent className="p-6 flex-grow space-y-4">
                <div>
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Harga:
                  </p>
                  {offer.harga.map((h) => (
                    <p
                      key={h.level}
                      className="text-lg font-bold text-slate-800 dark:text-slate-100"
                    >
                      {formatPrice(h.price)}{' '}
                      <span className="text-sm font-normal text-slate-500 dark:text-slate-400">
                        ({h.level})
                      </span>
                    </p>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Termasuk:
                  </p>
                  <ul className="space-y-1.5">
                    {offer.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-center text-sm text-slate-600 dark:text-slate-300"
                      >
                        <CheckSquare className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <div className="p-6 border-t dark:border-slate-700 mt-auto">
                <Button asChild className="w-full" variant="secondary">
                  <Link to="/kontak?service=paket_spesial">Ambil Penawaran Ini</Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Katalog Lainnya Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-8 text-center">
          Layanan Lainnya
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] text-sm text-left text-slate-500 dark:text-slate-400">
            <thead className="text-xs text-slate-700 dark:text-slate-300 uppercase bg-slate-100 dark:bg-slate-800">
              <tr>
                <th scope="col" className="px-6 py-3 rounded-tl-lg">
                  Layanan
                </th>
                <th scope="col" className="px-6 py-3 text-right">
                  Harga
                </th>
                <th scope="col" className="px-6 py-3 rounded-tr-lg">
                  Keterangan
                </th>
              </tr>
            </thead>
            <tbody>
              {lainnyaHarga.map((item) => (
                <tr
                  key={item.order}
                  className="bg-white dark:bg-slate-900/70 border-b dark:border-slate-700 hover:bg-slate-50/50 dark:hover:bg-slate-800/50"
                >
                  <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">
                    {item.order}
                  </td>
                  <td className="px-6 py-4 text-right font-semibold text-slate-700 dark:text-slate-200">
                    {formatPrice(item.price)}
                  </td>
                  <td className="px-6 py-4">{item.keterangan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-400 dark:border-blue-500 rounded-r-md">
          <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-1">
            Catatan Tambahan (Harga S2):
          </h4>
          <ul className="list-disc list-inside pl-4 text-sm text-blue-700 dark:text-blue-400 space-y-1">
            {catatanPenelitianS2
              .map((note, i) => (
                <li key={i}>
                  {note.includes('**') ? (
                    <span className="font-medium">
                      {note.split('**')[0]}**{note.split('**')[1]}
                    </span>
                  ) : (
                    note
                  )}
                </li>
              ))
              .slice(1)}
            {/* Sliced to only show the S2 specific notes from second image bottom part for context with other services. The "jurusan umum" is repetitive. */}
          </ul>
        </div>
      </section>

      {/* Disclaimer & Contact CTA */}
      <section className="container mx-auto px-4 text-center">
        <div className="p-6 bg-slate-50 dark:bg-slate-800/40 rounded-lg border border-slate-200 dark:border-slate-700">
          <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-3">
            Informasi Penting
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 max-w-2xl mx-auto">
            Harga yang tercantum dapat berubah sewaktu-waktu tanpa pemberitahuan terlebih dahulu.
            Untuk mendapatkan penawaran harga yang paling akurat dan sesuai dengan kebutuhan
            spesifik Anda, silakan hubungi tim konsultan kami.
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto">
            Biaya tambahan mungkin berlaku untuk permintaan khusus, tingkat kesulitan tinggi, atau
            tenggat waktu yang sangat mendesak. Semua akan dikomunikasikan secara transparan sebelum
            pengerjaan dimulai.
          </p>
          <Button asChild size="lg">
            <Link to="/kontak">Konsultasi & Penawaran Detail</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
