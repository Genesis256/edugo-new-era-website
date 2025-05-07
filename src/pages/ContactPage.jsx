// src/pages/ContactPage.jsx
import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Button } from '../components/common/Button';
import {
  Input,
  FormField,
  FormLabel,
  FormDescription,
  FormError,
} from '../components/common/Input';
import { Textarea } from '../components/common/Textarea';
import { Select, SelectOption } from '../components/common/Select'; // Assuming SelectOption is exported from Select.jsx
import { Mail, Phone, MapPin, Send, CheckCircle, AlertTriangle } from 'lucide-react';
import { cn } from '../lib/utils';

const ContactPage = () => {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: searchParams.get('service') || '', // Pre-fill service if passed in URL
    subject: searchParams.get('subject') || '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: '',
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // If URL parameters change (e.g., user navigates to /kontak?service=new_service)
    setFormData((prev) => ({
      ...prev,
      service: searchParams.get('service') || prev.service,
      subject: searchParams.get('subject') || prev.subject,
    }));
  }, [searchParams]);

  const serviceOptions = [
    { value: '', label: 'Pilih Layanan (Opsional)' },
    { value: 'bimbingan-skripsi-tesis-disertasi', label: 'Bimbingan Skripsi/Tesis/Disertasi' },
    { value: 'analisis-data', label: 'Analisis Data & Statistik' },
    { value: 'publikasi-ilmiah', label: 'Jasa Penulisan & Publikasi Ilmiah' },
    { value: 'riset-literatur', label: 'Riset & Studi Literatur' },
    { value: 'proofreading', label: 'Proofreading & Editing' },
    { value: 'konsultasi-umum', label: 'Konsultasi Akademik Umum' },
    { value: 'paket-sempro', label: 'Paket SEMPRO' },
    { value: 'paket-semhas', label: 'Paket SEMHAS' },
    { value: 'lainnya', label: 'Lainnya / Pertanyaan Umum' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null })); // Clear error on change
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Nama lengkap wajib diisi.';
    if (!formData.email.trim()) {
      newErrors.email = 'Alamat email wajib diisi.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Alamat email tidak valid.';
    }
    if (!formData.message.trim()) newErrors.message = 'Pesan wajib diisi.';
    if (formData.phone.trim() && !/^\+?[0-9\s-]{7,15}$/.test(formData.phone)) {
      newErrors.phone = 'Nomor telepon tidak valid.';
    }
    // Add more specific validations if needed, e.g., for subject or service
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Harap perbaiki kesalahan pada formulir.',
      });
      return;
    }

    setFormStatus({ submitted: false, error: false, message: 'Mengirim pesan...' }); // Loading state

    // --- STATIC SITE SIMULATION ---
    // In a real application with a backend (e.g., Supabase Functions, Netlify Functions, or other API):
    // You would make an API call here, e.g.:
    // try {
    //   const response = await fetch('/api/contact', { // or your Supabase function endpoint
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(formData),
    //   });
    //   if (response.ok) {
    //     setFormStatus({ submitted: true, error: false, message: 'Pesan Anda telah berhasil terkirim! Tim kami akan segera menghubungi Anda.' });
    //     setFormData({ name: '', email: '', phone: '', service: '', subject: '', message: '' }); // Clear form
    //     setErrors({});
    //   } else {
    //     const errorData = await response.json();
    //     setFormStatus({ submitted: false, error: true, message: `Gagal mengirim pesan: ${errorData.message || 'Silakan coba lagi.'}` });
    //   }
    // } catch (error) {
    //   setFormStatus({ submitted: false, error: true, message: 'Terjadi kesalahan jaringan. Silakan periksa koneksi Anda dan coba lagi.' });
    // }

    // For this static site, we'll simulate a successful submission after a delay:
    console.log('Form data submitted (static simulation):', formData);
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        error: false,
        message:
          'Pesan Anda telah berhasil terkirim (simulasi)! Tim kami akan segera menghubungi Anda.',
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: searchParams.get('service') || '',
        subject: searchParams.get('subject') || '',
        message: '',
      });
      setErrors({});
    }, 1500);
    // --- END STATIC SITE SIMULATION ---
  };

  return (
    <div className="space-y-12 md:space-y-16">
      {/* Page Header */}
      <section className="py-10 md:py-16 bg-slate-100 dark:bg-slate-800/60 text-center rounded-lg shadow-sm">
        <div className="container mx-auto px-4">
          <Send className="w-16 h-16 mx-auto mb-4 text-[var(--color-brand-primary)] dark:text-[var(--color-brand-secondary)]" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-brand-primary)] dark:text-[var(--color-brand-secondary)] mb-4">
            Hubungi Kami
          </h1>
          <p className="text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
            Kami siap mendengarkan kebutuhan Anda dan menjawab setiap pertanyaan. Silakan gunakan
            formulir di bawah ini atau hubungi kami melalui detail kontak yang tersedia.
          </p>
        </div>
      </section>

      {/* Contact Form & Details Section */}
      <section className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-6">
              Kirim Pesan Kepada Kami
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <FormField>
                  <FormLabel htmlFor="name">
                    Nama Lengkap Anda <span className="text-red-500">*</span>
                  </FormLabel>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Contoh: Budi Gunawan"
                    required
                  />
                  {errors.name && <FormError>{errors.name}</FormError>}
                </FormField>
                <FormField>
                  <FormLabel htmlFor="email">
                    Alamat Email <span className="text-red-500">*</span>
                  </FormLabel>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="anda@domain.com"
                    required
                  />
                  {errors.email && <FormError>{errors.email}</FormError>}
                </FormField>
              </div>
              <FormField>
                <FormLabel htmlFor="phone">Nomor Telepon/WhatsApp (Opsional)</FormLabel>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+62 812 XXXX XXXX"
                />
                {errors.phone && <FormError>{errors.phone}</FormError>}
              </FormField>
              <FormField>
                <FormLabel htmlFor="service">Layanan yang Diminati (Opsional)</FormLabel>
                <Select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                >
                  {serviceOptions.map((opt) => (
                    <SelectOption key={opt.value} value={opt.value}>
                      {opt.label}
                    </SelectOption>
                  ))}
                </Select>
              </FormField>
              <FormField>
                <FormLabel htmlFor="subject">Subjek Pesan</FormLabel>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Contoh: Pertanyaan mengenai Bimbingan Skripsi"
                />
              </FormField>
              <FormField>
                <FormLabel htmlFor="message">
                  Pesan Anda <span className="text-red-500">*</span>
                </FormLabel>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tuliskan detail pertanyaan atau kebutuhan Anda di sini..."
                  required
                />
                {errors.message && <FormError>{errors.message}</FormError>}
              </FormField>
              <div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full sm:w-auto"
                  disabled={formStatus.message === 'Mengirim pesan...'}
                >
                  {formStatus.message === 'Mengirim pesan...' ? 'Mengirim...' : 'Kirim Pesan'}
                </Button>
              </div>
              {formStatus.message && formStatus.message !== 'Mengirim pesan...' && (
                <div
                  className={cn(
                    'mt-4 p-3 rounded-md text-sm flex items-center',
                    formStatus.error
                      ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'
                      : 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                  )}
                >
                  {formStatus.error ? (
                    <AlertTriangle className="w-5 h-5 mr-2 flex-shrink-0" />
                  ) : (
                    <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                  )}
                  {formStatus.message}
                </div>
              )}
            </form>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-6">
                Informasi Kontak
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-[var(--color-brand-primary)] dark:text-[var(--color-brand-secondary)] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-700 dark:text-slate-200">Email</h4>
                    <a
                      href="mailto:info@edugo.id"
                      className="text-slate-600 dark:text-slate-300 hover:text-[var(--color-brand-primary)] dark:hover:text-[var(--color-brand-secondary)] break-all"
                    >
                      info@edugo.id {/* Replace with actual email */}
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-[var(--color-brand-primary)] dark:text-[var(--color-brand-secondary)] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-700 dark:text-slate-200">
                      Telepon / WhatsApp
                    </h4>
                    <a
                      href="tel:+6281234567890"
                      className="text-slate-600 dark:text-slate-300 hover:text-[var(--color-brand-primary)] dark:hover:text-[var(--color-brand-secondary)]"
                    >
                      +62 812-3456-7890 {/* Replace with actual number */}
                    </a>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      (Jam Kerja: Senin - Jumat, 09:00 - 17:00 WIB)
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-[var(--color-brand-primary)] dark:text-[var(--color-brand-secondary)] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-700 dark:text-slate-200">
                      Alamat Kantor (Jika Ada)
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300">
                      Jl. Pendidikan No. 123, Kota Akademis, <br />
                      Provinsi Cerdas, Indonesia 12345{' '}
                      {/* Replace with actual address or remove if no physical office */}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Optional Map Section */}
            {/*
            <div>
              <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-6">Lokasi Kami</h2>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-md border dark:border-slate-700">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.013000000000!2d106.82715281478636!3d-6.175392795501046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTAnMzQuMSJTIDEwNsKwNDInMzUuMCJF!5e0!3m2!1sen!2sid!4v1610000000000!5m2!1sen!2sid" 
                  width="100%" 
                  height="100%" 
                  style={{ border:0 }} 
                  allowFullScreen="" 
                  loading="lazy"
                  title="Peta Lokasi Edugo"
                  referrerPolicy="no-referrer-when-downgrade" // Important for some embed URLs
                ></iframe>
              </div>
            </div>
            */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
