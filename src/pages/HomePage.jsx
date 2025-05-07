// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/common/Button'; // Assuming this is your styled Button
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '../components/common/Card';
import {
  CheckCircle,
  Users,
  BookOpen,
  Brain,
  Lightbulb,
  Target,
  MessageSquare,
  GraduationCap,
  Eye,
} from 'lucide-react';
import { cn } from '../lib/utils';

// Import the new Aurora Hero component
import EdugoAuroraHero from '../components/features/homepage/EdugoAuroraHero';

const HomePage = () => {
  const services = [
    {
      icon: (
        <BookOpen className="w-12 h-12 text-[var(--color-brand-primary)] dark:text-[var(--color-brand-secondary)] mb-4" />
      ),
      title: 'Bimbingan Skripsi & Tesis',
      description:
        'Pendampingan komprehensif dari pemilihan judul hingga sidang akhir. Kami bantu Anda lalui setiap tahap dengan percaya diri.',
    },
    {
      icon: (
        <Brain className="w-12 h-12 text-[var(--color-brand-primary)] dark:text-[var(--color-brand-secondary)] mb-4" />
      ),
      title: 'Analisis Data & Statistik',
      description:
        'Layanan olah data kualitatif dan kuantitatif dengan berbagai software statistik. Dapatkan hasil analisis yang akurat dan mudah dipahami.',
    },
    {
      icon: (
        <Lightbulb className="w-12 h-12 text-[var(--color-brand-primary)] dark:text-[var(--color-brand-secondary)] mb-4" />
      ),
      title: 'Konsultasi Akademik',
      description:
        'Diskusi mendalam dengan konsultan ahli untuk memecahkan kebuntuan akademik, merancang penelitian, atau publikasi ilmiah.',
    },
  ];

  const whyUsPoints = [
    'Tim Profesional & Berpengalaman',
    'Pendekatan Personal & Solutif',
    'Kerahasiaan Terjamin 100%',
    'Harga Terjangkau & Transparan',
    'Proses Cepat & Tepat Waktu',
    'Garansi Revisi (Sesuai Kesepakatan)*', // Added S&K
  ];

  return (
    <>
      {' '}
      {/* Using a fragment as EdugoAuroraHero is a top-level sibling now */}
      <EdugoAuroraHero />
      {/* This div will now contain all content *below* the full-screen hero */}
      <div className="bg-white dark:bg-slate-900">
        {' '}
        {/* Base background for content area */}
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 space-y-16 md:space-y-24">
          {/* Services Overview Section */}
          <section id="layanan-unggulan">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-3">
                Layanan Unggulan Kami
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Kami menyediakan berbagai solusi pendampingan akademik yang dirancang khusus untuk
                kebutuhan Anda.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow duration-300 dark:bg-slate-800"
                >
                  <CardHeader>
                    <div className="flex justify-center items-center">{service.icon}</div>
                    <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600 dark:text-slate-400 min-h-[60px]">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-10">
              <Button as={Link} to="/layanan" variant="secondary" size="lg">
                {' '}
                {/* Used our custom button, ensure 'as' works or wrap Link in Button */}
                Pelajari Lebih Lanjut Semua Layanan
              </Button>
            </div>
          </section>

          {/* Why Choose Us Section - now within the main container */}
          <section id="mengapa-kami" className="py-12 bg-slate-100 dark:bg-slate-800 rounded-lg">
            {/* Container is now inherited from parent div, or re-add if full-width background is still desired with contained content */}
            {/* <div className="container mx-auto px-4"> */}
            <div className="grid md:grid-cols-2 gap-10 items-center px-4 sm:px-6 lg:px-8">
              {' '}
              {/* Added padding here if not in a separate container */}
              <div>
                <div className="p-6 bg-gradient-to-br from-[var(--color-brand-primary)] to-[var(--color-brand-secondary)] rounded-lg shadow-xl">
                  <Target className="w-20 h-20 text-white mx-auto mb-6 opacity-80" />
                  <h3 className="text-3xl font-bold text-white text-center mb-4">
                    Fokus Pada Kesuksesan Anda
                  </h3>
                  <p className="text-slate-100 text-center">
                    {' '}
                    {/* Changed to slate-100 for better contrast on gradient */}
                    Di Edugo New Era, kami tidak hanya membantu Anda menyelesaikan tugas, tapi juga
                    membekali Anda dengan pemahaman mendalam untuk meraih prestasi akademik
                    tertinggi.
                  </p>
                </div>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-6">
                  Mengapa Memilih Edugo New Era?
                </h2>
                <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
                  Kami berkomitmen untuk memberikan layanan pendampingan akademik terbaik dengan
                  standar kualitas dan profesionalisme tertinggi.
                </p>
                <ul className="space-y-3">
                  {whyUsPoints.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700 dark:text-slate-300">{point}</span>
                    </li>
                  ))}
                </ul>
                <Button as={Link} to="/tentang-kami" className="mt-8" size="lg">
                  Kenali Kami Lebih Dekat
                </Button>
              </div>
            </div>
            {/* </div> */}
          </section>

          {/* Testimonial Section (Placeholder) - now within the main container */}
          <section id="testimoni">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-3">
                Apa Kata Klien Kami?
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Kepuasan klien adalah prioritas utama kami. Lihat bagaimana kami telah membantu
                mereka.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white dark:bg-slate-800">
                {' '}
                {/* Explicit dark bg for card */}
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-slate-100 dark:bg-slate-700 rounded-full">
                      <Users className="w-8 h-8 text-slate-500 dark:text-slate-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800 dark:text-slate-100">Alya Putri</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        Mahasiswi S2, Universitas Ternama
                      </p>
                    </div>
                  </div>
                  <blockquote className="mt-4 text-slate-600 dark:text-slate-300 italic border-l-4 border-[var(--color-brand-secondary)] pl-4 py-2">
                    "Tim Edugo sangat membantu tesis saya, terutama dalam analisis data.
                    Penjelasannya detail dan mudah dimengerti. Sangat direkomendasikan!"
                  </blockquote>
                </CardContent>
              </Card>
              <Card className="bg-white dark:bg-slate-800">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-slate-100 dark:bg-slate-700 rounded-full">
                      <Users className="w-8 h-8 text-slate-500 dark:text-slate-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800 dark:text-slate-100">
                        Budi Santoso
                      </p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Peneliti Muda</p>
                    </div>
                  </div>
                  <blockquote className="mt-4 text-slate-600 dark:text-slate-300 italic border-l-4 border-[var(--color-brand-secondary)] pl-4 py-2">
                    "Konsultasi dengan Edugo New Era sangat membuka wawasan untuk proposal riset
                    saya. Timnya profesional dan sangat suportif."
                  </blockquote>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>{' '}
        {/* End of main content container div */}
        {/* Call to Action Section - This can be full-width, so placed outside the inner container but inside the main bg div */}
        <section className="py-16 bg-gradient-to-r from-[var(--color-brand-primary)] to-[var(--color-brand-secondary)] text-white">
          <div className="container mx-auto px-4 text-center">
            {' '}
            {/* Container for content within this section */}
            <MessageSquare className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Siap Memulai Perjalanan Akademik Anda?
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Jangan biarkan tugas akademik menghambat langkah Anda. <br /> Hubungi kami sekarang
              untuk konsultasi gratis dan temukan solusi terbaik untuk Anda.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button
                as={Link}
                to="/kontak"
                size="lg"
                className="bg-white text-[var(--color-brand-primary)] hover:bg-slate-100 w-full sm:w-auto shadow-lg"
                // Explicitly overriding Button's default 'primary' variant styles if needed:
                // variant="custom" // if Button supports a 'custom' variant, or define specific classes here
              >
                Hubungi Kami Sekarang
              </Button>
              <Button
                as={Link}
                to="/faq"
                size="lg"
                variant="outline" // Assuming outline variant is defined in your Button component
                className="border-white text-white hover:bg-white hover:text-[var(--color-brand-primary)] w-full sm:w-auto shadow-lg"
              >
                Lihat FAQ
              </Button>
            </div>
          </div>
        </section>
      </div>{' '}
      {/* End of base background div for content */}
    </>
  );
};

export default HomePage;
