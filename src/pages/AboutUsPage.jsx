// src/pages/AboutUsPage.jsx
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
  BookHeart,
  TrendingUp,
  ShieldHalf,
  Users,
  Lightbulb,
  Handshake,
  GraduationCap,
  Target,
  Eye,
} from 'lucide-react'; // Icons
import { cn } from '../lib/utils';

// Placeholder images - replace with actual images in src/assets/images/
const teamCollageUrl = '/src/assets/images/team-collage-placeholder.jpg'; // A group photo or collage
const founderImageUrl = '/src/assets/images/founder-placeholder.jpg'; // Photo of the founder/leader

const teamMembers = [
  {
    name: 'Dr. Rina Handayani, M.Pd.',
    role: 'Founder & Kepala Konsultan',
    // imageUrl: founderImageUrl, // Replace with actual image path
    bio: 'Dengan pengalaman lebih dari 15 tahun di dunia akademik dan penelitian, Dr. Rina bersemangat membantu mahasiswa dan peneliti mencapai potensi penuh mereka. Beliau memiliki keahlian khusus dalam metodologi penelitian kualitatif dan pengembangan instrumen.',
    expertise: ['Metodologi Penelitian', 'Pendidikan Tinggi', 'Pengembangan Kurikulum'],
  },
  {
    name: 'Ahmad Syaiful, S.Stat., M.Si.',
    role: 'Spesialis Analisis Data',
    // imageUrl: '/src/assets/images/ahmad-syaiful.jpg',
    bio: 'Ahmad adalah seorang ahli statistik dengan penguasaan mendalam berbagai software analisis data seperti SPSS, R, dan Python. Ia berdedikasi untuk menyajikan data yang kompleks menjadi wawasan yang dapat ditindaklanjuti.',
    expertise: ['Statistika Terapan', 'Machine Learning', 'Visualisasi Data'],
  },
  {
    name: 'Putri Ayu Lestari, S.Hum., M.A.',
    role: 'Editor Ahli & Konsultan Publikasi',
    // imageUrl: '/src/assets/images/putri-ayu.jpg',
    bio: 'Putri memiliki ketajaman dalam penyuntingan naskah akademik dan pemahaman mendalam mengenai standar publikasi jurnal internasional. Ia berkomitmen untuk meningkatkan kualitas dan dampak setiap tulisan.',
    expertise: ['Academic Writing', 'Editing & Proofreading', 'Jurnal Internasional'],
  },
  // Add more team members as needed
];

const values = [
  {
    icon: <BookHeart className="w-10 h-10 text-[var(--color-brand-primary)] mb-3" />,
    title: 'Integritas Akademik',
    description: 'Menjunjung tinggi kejujuran, orisinalitas, dan etika dalam setiap layanan.',
  },
  {
    icon: <TrendingUp className="w-10 h-10 text-[var(--color-brand-primary)] mb-3" />,
    title: 'Kualitas Terbaik',
    description: 'Berkomitmen memberikan hasil dan pendampingan dengan standar kualitas tertinggi.',
  },
  {
    icon: <Users className="w-10 h-10 text-[var(--color-brand-primary)] mb-3" />,
    title: 'Fokus Pada Klien',
    description: 'Memahami kebutuhan unik setiap klien dan memberikan solusi yang personal.',
  },
  {
    icon: <Lightbulb className="w-10 h-10 text-[var(--color-brand-primary)] mb-3" />,
    title: 'Pembelajaran Berkelanjutan',
    description: 'Terus belajar dan berinovasi untuk memberikan layanan yang relevan dan terkini.',
  },
  {
    icon: <Handshake className="w-10 h-10 text-[var(--color-brand-primary)] mb-3" />,
    title: 'Kolaborasi & Kemitraan',
    description: 'Membangun hubungan kemitraan yang saling mendukung dengan klien dan stakeholder.',
  },
  {
    icon: <ShieldHalf className="w-10 h-10 text-[var(--color-brand-primary)] mb-3" />,
    title: 'Kerahasiaan Terjamin',
    description: 'Menjamin kerahasiaan data dan informasi pribadi klien sepenuhnya.',
  },
];

const AboutUsPage = () => {
  return (
    <div className="space-y-16 md:space-y-24">
      {/* Header Section */}
      <section className="relative py-16 md:py-24 bg-slate-100 dark:bg-slate-800/60 rounded-lg overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={teamCollageUrl}
            alt="Tim Edugo New Era"
            className="w-full h-full object-cover opacity-20 dark:opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-100 via-slate-100/80 to-transparent dark:from-slate-800/60 dark:via-slate-800/40 dark:to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 relative text-center">
          <GraduationCap className="w-16 h-16 mx-auto mb-4 text-[var(--color-brand-primary)] dark:text-[var(--color-brand-secondary)]" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--color-brand-primary)] dark:text-[var(--color-brand-secondary)] mb-4">
            Tentang Edugo New Era
          </h1>
          <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
            Lebih dari sekadar pendampingan, kami adalah partner pertumbuhan akademik Anda.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-4">
              Cerita Kami: Dedikasi untuk Pendidikan
            </h2>
            <p>
              Edugo New Era lahir dari sebuah visi sederhana: memberdayakan setiap individu untuk
              mencapai puncak potensi akademiknya. Kami memahami bahwa perjalanan akademik, baik itu
              skripsi, tesis, disertasi, maupun penelitian, seringkali penuh tantangan. Tekanan
              tenggat waktu, kesulitan metodologi, hingga kebuntuan kreativitas adalah hal yang
              lumrah.
            </p>
            <p>
              Berbekal pengalaman bertahun-tahun di dunia pendidikan dan riset, tim kami terbentuk
              dengan satu tujuan: menjadi mitra yang suportif, ahli, dan terpercaya bagi para
              mahasiswa, peneliti, dan akademisi. Kami percaya bahwa dengan pendampingan yang tepat,
              setiap orang dapat menghasilkan karya ilmiah berkualitas tinggi dan memberikan
              kontribusi bermakna.
            </p>
            <p>
              Kami bukan sekadar 'jasa', melainkan sebuah ekosistem pendukung yang mengedepankan
              proses pembelajaran, integritas, dan pencapaian hasil yang optimal. Selamat datang di
              Edugo New Era, tempat di mana aspirasi akademik Anda kami wujudkan bersama.
            </p>
          </div>
          <div>
            {/* You can use a relevant image here */}
            <img
              src="/src/assets/images/about-story-placeholder.jpg" // Replace with a relevant, inspiring image
              alt="Inspirasi Akademik Edugo"
              className="rounded-lg shadow-xl w-full h-auto object-cover max-h-[450px]"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-slate-50 dark:bg-slate-800 py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div>
            <Card className="h-full shadow-lg">
              <CardHeader>
                <div className="flex items-center mb-3">
                  <Target className="w-10 h-10 text-[var(--color-brand-primary)] mr-3" />
                  <CardTitle className="text-2xl text-slate-800 dark:text-slate-100">
                    Misi Kami
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-700 dark:text-slate-300 text-base leading-relaxed">
                  Memberikan layanan pendampingan akademik yang profesional, komprehensif, dan
                  personal untuk membantu klien mencapai keberhasilan studi dan penelitian. Kami
                  berkomitmen untuk memberdayakan klien dengan pengetahuan, keterampilan, dan
                  kepercayaan diri yang dibutuhkan untuk menghasilkan karya ilmiah berkualitas
                  tinggi serta berkontribusi pada pengembangan ilmu pengetahuan.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className="h-full shadow-lg">
              <CardHeader>
                <div className="flex items-center mb-3">
                  <Eye className="w-10 h-10 text-[var(--color-brand-primary)] mr-3" />
                  <CardTitle className="text-2xl text-slate-800 dark:text-slate-100">
                    Visi Kami
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-700 dark:text-slate-300 text-base leading-relaxed">
                  Menjadi lembaga pendampingan akademik terdepan dan terpercaya di Indonesia, yang
                  dikenal karena integritas, kualitas layanan, dan kontribusi nyata dalam
                  meningkatkan standar penelitian serta kualitas sumber daya manusia di bidang
                  pendidikan dan riset. Kami bercita-cita membangun komunitas akademik yang kuat dan
                  inovatif.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-3">
            Nilai-Nilai Inti Kami
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Prinsip-prinsip yang memandu setiap tindakan dan keputusan kami dalam melayani Anda.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="text-center hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="inline-block p-3 bg-slate-100 dark:bg-slate-700 rounded-full mb-2">
                  {value.icon}
                </div>
                <CardTitle className="text-xl text-slate-800 dark:text-slate-100">
                  {value.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 dark:text-slate-400">
                  {value.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Meet The Team Section (Static Placeholder) */}
      <section className="bg-slate-100 dark:bg-slate-800/60 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-3">
              Tim Profesional Kami
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Didukung oleh para ahli di bidangnya, siap membantu Anda dengan dedikasi penuh.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center overflow-hidden">
                {member.imageUrl ? (
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-56 object-cover object-top"
                  />
                ) : (
                  <div className="w-full h-56 bg-slate-300 dark:bg-slate-700 flex items-center justify-center">
                    <Users className="w-24 h-24 text-slate-500 dark:text-slate-400" />
                  </div>
                )}
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl text-slate-900 dark:text-slate-50">
                    {member.name}
                  </CardTitle>
                  <p className="text-sm text-[var(--color-brand-primary)] dark:text-[var(--color-brand-secondary)] font-semibold">
                    {member.role}
                  </p>
                </CardHeader>
                <CardContent className="text-sm text-slate-600 dark:text-slate-400">
                  <p className="mb-2">{member.bio.substring(0, 100)}...</p>{' '}
                  {/* Short bio snippet */}
                  {/* Could add a link to a more detailed bio if pages for team members were planned */}
                  <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-700">
                    <h4 className="font-semibold text-xs text-slate-500 dark:text-slate-400 mb-1 uppercase tracking-wider">
                      Keahlian Utama:
                    </h4>
                    <div className="flex flex-wrap justify-center gap-1.5">
                      {member.expertise.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-slate-700 dark:text-slate-300">
              Dan banyak lagi konsultan serta spesialis lain yang berdedikasi. <br /> Kami memilih
              tim terbaik sesuai dengan kebutuhan spesifik proyek Anda.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Siap Bergabung dengan Ratusan Klien Sukses Kami?
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
          Jadikan Edugo New Era bagian dari perjalanan sukses akademik Anda. Kami siap mendengarkan
          dan memberikan solusi.
        </p>
        <Button asChild size="lg">
          <Link to="/kontak">Hubungi Kami Hari Ini</Link>
        </Button>
      </section>
    </div>
  );
};

export default AboutUsPage;
