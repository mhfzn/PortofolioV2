"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  ExternalLink,
  Cpu,
  Network,
  Wifi,
  Shield,
  Car,
  LayoutGrid,
  GraduationCap,
  Award,
  Code,
  Database,
  Server,
  Box,
  Globe,
  Users,
  Calendar,
  Briefcase,
  Menu,
  X,
  Terminal,
  Radio,
  Lock,
  ParkingCircle,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  LinkedIn Icon (not in lucide-react)                                */
/* ------------------------------------------------------------------ */

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const PROJECTS = [
  {
    title: "Digitalisasi Logbook Laboratorium",
    role: "Project Developer (Tugas Akhir)",
    period: "2026",
    location: "Depok, Indonesia",
    icon: LayoutGrid,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    description: [
      "Perancangan sistem untuk manajemen alat praktikum secara terpadu",
      "Mengintegrasikan Face Recognition sebagai metode autentikasi yang aman dan Web Management System untuk pendataan alat",
    ],
    techs: ["Face Recognition", "Web System", "Manajemen Data"],
  },
  {
    title: "Sistem Monitoring Pertanian Berbasis Drone",
    role: "Drone Data Analyst",
    period: "Feb 2026 – Apr 2026",
    location: "Depok, Indonesia",
    icon: Cpu,
    color: "text-green-400",
    bg: "bg-green-400/10",
    description: [
      "Membangun dan memodifikasi sistem drone untuk pemantauan area pertanian dengan fokus pada deteksi daun",
      "Memanfaatkan kamera bawaan drone untuk monitoring visual dan pengambilan data lapangan",
    ],
    techs: ["Drone Platform", "Computer Vision", "Data Analysis"],
  },
  {
    title: "SMAPAR (Smart Parking System)",
    role: "IoT & Back-End Developer",
    period: "Juni 2024 – Jan 2025",
    location: "Depok, Indonesia",
    icon: ParkingCircle,
    color: "text-teal-400",
    bg: "bg-teal-400/10",
    description: [
      "Mengembangkan sistem parkir mobil pintar berbasis IoT",
      "Bertanggung jawab atas komunikasi antara Flask dan MQTT untuk pengiriman data sensor secara real-time",
      "Mendukung integrasi backend dengan sistem deteksi ketersediaan parkir",
    ],
    techs: ["Python", "Flask", "MQTT", "IoT"],
  },
  {
    title: "Sistem Absensi RFID Terintegrasi Web",
    role: "Project Developer",
    period: "Oktober 2022 – November 2022",
    location: "Bekasi, Indonesia",
    icon: Radio,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    description: [
      "Membangun sistem absensi berbasis RFID menggunakan ESP8266 yang terkoneksi secara real-time ke website sekolah",
      "Memanfaatkan kartu identitas siswa sebagai media autentikasi kehadiran",
    ],
    techs: ["ESP8266", "RFID", "HTML/CSS", "JavaScript"],
  },
  {
    title: "Prototipe Keyless Starter Motor (BLE)",
    role: "Project Developer Team",
    period: "Oktober 2022 – November 2022",
    location: "Bekasi, Indonesia",
    icon: Car,
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    description: [
      "Mengembangkan sistem starter motor tanpa kunci menggunakan ESP32 dan Bluetooth Low Energy",
      "Terinspirasi dari konsep keamanan motor GSX untuk meningkatkan perlindungan kendaraan",
    ],
    techs: ["ESP32", "BLE", "C++", "Arduino"],
  },
  {
    title: "Implementasi Jaringan LAN SMK",
    role: "Pengalaman Proyek Jaringan",
    period: "Agustus 2022 – November 2022",
    location: "Bekasi, Indonesia",
    icon: Network,
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
    description: [
      "Terlibat dalam instalasi dan konfigurasi jaringan lokal menggunakan router TP-Link",
      "Menangani proses routing dan pengujian konektivitas bersama tim",
    ],
    techs: ["Mikrotik", "TP-Link", "LAN", "Routing"],
  },
];

const ORGANIZATIONS = [
  {
    role: "Kepala Divisi IoT",
    org: "Telextion PNJ",
    period: "Maret 2025 – Feb 2026",
    icon: Cpu,
  },
  {
    role: "Wakil Ketua",
    org: "Computer Student Club PNJ",
    period: "Maret 2025 – Maret 2026",
    icon: Users,
  },
  {
    role: "Staff P&K",
    org: "Psychorobotic PNJ",
    period: "Maret 2025 – Januari 2026",
    icon: Terminal,
  },
  {
    role: "Staff Divisi Dana Konsumsi",
    org: "Olahraga Elektro 2023",
    period: "April 2024 – Juli 2024",
    icon: Briefcase,
  },
];

const EDUCATION = [
{
    school: "Politeknik Negeri Jakarta",
    // Tambahkan IPK di baris bawah ini:
    degree: "Diploma III, Teknik Elektro, Telekomunikasi • IPK: 3.69",
    period: "September 2023 – September 2026",
    location: "Depok, Indonesia",
    current: true,
  },
  {
    school: "SMK Taman Harapan",
    degree: "Teknik Komputer Jaringan",
    period: "Juni 2020 – Juni 2023",
    location: "Bekasi, Indonesia",
    current: false,
  },
];

const SKILLS = [
  { name: "SQL", icon: Database },
  { name: "HTML/CSS", icon: Globe },
  { name: "MATLAB", icon: Terminal },
  { name: "Python", icon: Code },
  { name: "3D Design", icon: Box },
  { name: "Networking", icon: Network },
  { name: "IoT", icon: Cpu },
  { name: "Server", icon: Server },
];

const CERTIFICATIONS = [
  { name: "Certified MTCNA by Mikrotik", image: "/mikrotikmtcna.png" },
  { name: "Belajar Dasar-Dasar DevOps by Dicoding", image: "/devops.png" },
  { name: "Belajar Dasar Pemrograman JavaScript by Dicoding", image: "/pemogramanjava.png" },
  { name: "Cloud Practitioner Essentials (AWS Cloud) by Dicoding", image: "/aws.png" },
  { name: "Training Cisco Dasar by ID-Networkers", image: "/ciscodasar.png" },
  { name: "Training Jaringan Komputer Dasar by ID-Networkers", image: "/jaringankomputer.png" },
  { name: "Training Mikrotik Dasar by ID-Networkers", image: "/mikrotikdasar.png" },
];

const NAV_LINKS = [
  { label: "Tentang", href: "#about" },
  { label: "Proyek", href: "#projects" },
  { label: "Organisasi", href: "#organizations" },
  { label: "Pendidikan", href: "#education" },
  { label: "Keahlian", href: "#skills" },
  { label: "Kontak", href: "#contact" },
];

/* ------------------------------------------------------------------ */
/*  ANIMATED SECTION WRAPPER                                          */
/* ------------------------------------------------------------------ */

function AnimatedSection({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  const { ref, isVisible } = useScrollAnimation(0.1);
  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        "transition-all duration-700",
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8",
        className
      )}
    >
      {children}
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  NAVBAR                                                            */
/* ------------------------------------------------------------------ */

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a
          href="#"
          className="text-lg font-bold tracking-tight bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent"
        >
          MF.
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent"
            >
              {link.label}
            </a>
          ))}
          <Button
            variant="ghost"
            size="icon"
            className="ml-2"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            {!mounted ? (
              <div className="h-5 w-5" />
            ) : theme === "dark" ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
            )}
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            {!mounted ? (
              <div className="h-5 w-5" />
            ) : theme === "dark" ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
            )}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border animate-fade-in">
          <div className="px-4 py-3 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

/* ------------------------------------------------------------------ */
/*  HERO                                                               */
/* ------------------------------------------------------------------ */

function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section
      id="#"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(20,184,166,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(20,184,166,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-32">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <div
              className={cn(
                "transition-all duration-700",
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              )}
            >
              <Badge
                variant="secondary"
                className="mb-4 px-4 py-1.5 text-xs font-medium tracking-wide uppercase"
              >
                <Wifi className="h-3.5 w-3.5 mr-1.5" />
                Teknik Telekomunikasi
              </Badge>
            </div>

            <h1
              className={cn(
                "text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight transition-all duration-700 delay-100",
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              )}
            >
              Halo, saya{" "}
              <span className="bg-gradient-to-r from-teal-400 via-emerald-400 to-teal-300 bg-clip-text text-transparent">
                Mohammad Fauzan
              </span>
            </h1>

            <p
              className={cn(
                "mt-4 text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 transition-all duration-700 delay-200",
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              )}
            >
              Mahasiswa Teknik Telekomunikasi di Politeknik Negeri Jakarta.
              <br className="hidden sm:block" />
              Passionate dalam IoT, Networking, dan Inovasi Teknologi.
            </p>

            <div
              className={cn(
                "mt-8 flex flex-wrap gap-3 justify-center lg:justify-start transition-all duration-700 delay-300",
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              )}
            >
              <Button asChild size="lg" className="gap-2">
                <a href="#projects">
                  <LayoutGrid className="h-4 w-4" />
                  Lihat Proyek
                </a>
              </Button>
              <Button asChild variant="secondary" size="lg" className="gap-2">
                <a href="/CV_Mohammad_Fauzan.pdf" download target="_blank" rel="noopener noreferrer">
                  <Download className="h-4 w-4" />
                  Download CV
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <a href="#contact">
                  <Mail className="h-4 w-4" />
                  Hubungi Saya
                </a>
              </Button>
            </div>

            <div
              className={cn(
                "mt-8 flex items-center gap-4 justify-center lg:justify-start transition-all duration-700 delay-400",
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              )}
            >
              <a
                href="mailto:mohammadfauzan0207@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/6285974785943"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="WhatsApp"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Profile image */}
          <div
            className={cn(
              "relative flex-shrink-0 transition-all duration-1000 delay-300",  
              mounted
                ? "opacity-100 scale-100"
                : "opacity-0 scale-90"
            )}
          >
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-400 via-emerald-400 to-teal-500 opacity-20 blur-2xl animate-pulse-glow" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/20 ring-4 ring-primary/5">
                <Image
                  src="/profile.jpeg"
                  alt="Mohammad Fauzan"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            {/* Floating badges */}
            <div className="absolute -top-2 -right-2 bg-card border border-border rounded-xl px-3 py-1.5 shadow-lg animate-fade-in animation-delay-500">
              <div className="flex items-center gap-1.5 text-xs font-medium">
                <Cpu className="h-3.5 w-3.5 text-teal-400" />
                IoT Dev
              </div>
            </div>
            <div className="absolute -bottom-2 -left-2 bg-card border border-border rounded-xl px-3 py-1.5 shadow-lg animate-fade-in animation-delay-700">
              <div className="flex items-center gap-1.5 text-xs font-medium">
                <Network className="h-3.5 w-3.5 text-emerald-400" />
                MTCNA
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  ABOUT                                                              */
/* ------------------------------------------------------------------ */

function About() {
  return (
    <AnimatedSection id="about" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Tentang Saya"
          title="Mengenal Lebih Dekat"
          description="Seorang mahasiswa yang antusias dalam dunia teknologi dan inovasi"
        />

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            {
              icon: Cpu,
              title: "IoT Developer",
              desc: "Mengembangkan solusi Internet of Things menggunakan ESP32, ESP8266, dan berbagai sensor untuk memecahkan masalah nyata.",
            },
            {
              icon: Network,
              title: "Network Engineer",
              desc: "Berpengalaman dalam konfigurasi jaringan LAN, routing, dan manajemen perangkat jaringan dengan sertifikasi MTCNA.",
            },
            {
              icon: GraduationCap,
              title: "Lifelong Learner",
              desc: "Terus belajar dan berkembang melalui berbagai pelatihan dan sertifikasi di bidang cloud, DevOps, dan jaringan.",
            },
          ].map((item, i) => (
            <Card
              key={i}
              className="group hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 border-border/50"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10">
          <Card className="border-border/50">
            <CardContent className="p-6 sm:p-8">
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                Saya adalah mahasiswa <strong className="text-foreground">Teknik Telekomunikasi</strong> di{" "}
                <strong className="text-foreground">Politeknik Negeri Jakarta</strong> (IPK 3.69) dengan rasa penasaran
                yang tinggi dan ide kreatif yang mendorong inovasi. Memiliki kemampuan manajemen waktu
                yang baik, bekerja dalam tim, dan tekad yang kuat untuk menyelesaikan proyek sesuai
                kebutuhan dan tenggat waktu. Saya terbuka terhadap masukan dan terus berusaha
                berkembang untuk memberikan kontribusi terbaik.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </AnimatedSection>
  );
}

/* ------------------------------------------------------------------ */
/*  PROJECTS                                                           */
/* ------------------------------------------------------------------ */

function Projects() {
  return (
    <AnimatedSection id="projects" className="py-20 sm:py-28 bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Proyek"
          title="Karya & Pengalaman"
          description="Berbagai proyek yang telah saya kerjakan di bidang IoT, jaringan, dan embedded systems"
        />

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {PROJECTS.map((project, i) => (
            <Card
              key={i}
              className="group hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 border-border/50 overflow-hidden"
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div
                      className={cn(
                        "w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0",
                        project.bg
                      )}
                    >
                      <project.icon className={cn("h-5 w-5", project.color)} />
                    </div>
                    <div className="min-w-0">
                      <CardTitle className="text-base font-semibold leading-snug">
                        {project.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground mt-0.5">
                        {project.role}
                      </p>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {project.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {project.period}
                  </span>
                </div>
                <ul className="space-y-1.5 mb-4">
                  {project.description.map((desc, j) => (
                    <li
                      key={j}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-primary/50 mt-2 flex-shrink-0" />
                      {desc}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5">
                  {project.techs.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs font-normal"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

/* ------------------------------------------------------------------ */
/*  ORGANIZATIONS                                                      */
/* ------------------------------------------------------------------ */

function Organizations() {
  return (
    <AnimatedSection id="organizations" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Organisasi"
          title="Pengalaman Organisasi"
          description="Aktif berkontribusi dalam berbagai organisasi kampus dan komunitas"
        />

        <div className="grid sm:grid-cols-2 gap-4 mt-12">
          {ORGANIZATIONS.map((org, i) => (
            <Card
              key={i}
              className="group hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 border-border/50"
            >
              <CardContent className="p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors">
                  <org.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-sm">{org.role}</h3>
                  <p className="text-sm text-muted-foreground">{org.org}</p>
                  <p className="text-xs text-muted-foreground/70 mt-0.5 flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {org.period}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

/* ------------------------------------------------------------------ */
/*  EDUCATION                                                         */
/* ------------------------------------------------------------------ */

function Education() {
  return (
    <AnimatedSection id="education" className="py-20 sm:py-28 bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Pendidikan"
          title="Riwayat Pendidikan"
          description="Perjalanan akademis di bidang teknik dan teknologi"
        />

        <div className="mt-12 max-w-2xl mx-auto space-y-6">
          {EDUCATION.map((edu, i) => (
            <Card
              key={i}
              className="group hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 border-border/50"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2 flex-wrap">
                      <div>
                        <h3 className="font-semibold text-base">{edu.school}</h3>
                        <p className="text-sm text-muted-foreground mt-0.5">
                          {edu.degree}
                        </p>
                      </div>
                      
                      {/* Bagian Badge & Tombol Transkrip */}
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 mt-2 sm:mt-0">
                        {edu.current && (
                          <Badge className="bg-primary/10 text-primary border-0 text-xs">
                            Saat Ini
                          </Badge>
                        )}
                        
                        {/* Tombol ini hanya akan muncul di card Politeknik Negeri Jakarta */}
                        {edu.school === "Politeknik Negeri Jakarta" && (
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="h-6 text-[10px] px-2 border-primary/20 hover:bg-primary/10 gap-1.5" 
                            asChild
                          >
                            <a href="/Transkrip_Nilai_Mohammad_Fauzan.pdf" target="_blank" rel="noopener noreferrer">
                              <Download className="h-3 w-3" />
                              Transkrip Nilai
                            </a>
                          </Button>
                        )}
                      </div>
                      
                    </div>
                    <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {edu.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {edu.location}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

/* ------------------------------------------------------------------ */
/*  SKILLS & CERTIFICATIONS                                            */
/* ------------------------------------------------------------------ */

function Skills() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <AnimatedSection id="skills" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Keahlian"
          title="Skills & Sertifikasi"
          description="Kemampuan teknis dan sertifikasi yang telah saya raih"
        />

        {/* Skills grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12">
          {SKILLS.map((skill, i) => (
            <div
              key={i}
              className="group flex flex-col items-center gap-2.5 p-4 rounded-xl border border-border/50 hover:border-primary/30 bg-card hover:bg-accent/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                <skill.icon className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm font-medium">{skill.name}</span>
            </div>
          ))}
        </div>

        {/* Languages */}
        <div className="mt-10">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4 flex items-center gap-2">
            <Globe className="h-4 w-4" />
            Bahasa
          </h3>
          <div className="flex flex-wrap gap-3">
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              Bahasa Indonesia — Fluent
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              English — Beginner
            </Badge>
          </div>
        </div>

        <Separator className="my-10" />

        {/* Certifications */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-6 flex items-center gap-2">
            <Award className="h-4 w-4" />
            Sertifikasi & Pelatihan
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CERTIFICATIONS.map((cert, i) => (
              <Card
                key={i}
                className="group overflow-hidden hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 border-border/50"
              >
                <div 
                  className="relative w-full aspect-[4/3] bg-muted/50 border-b border-border/50 cursor-pointer"
                  onClick={() => setSelectedImage(cert.image)}
                >
                  <Image
                    src={cert.image}
                    alt={cert.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                     <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-md font-medium text-sm">
                        Perbesar Gambar
                     </span>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors">
                      <Award className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium leading-snug">{cert.name}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox / Pop-up Gambar Fullscreen */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm animate-in fade-in duration-200 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-50"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-6 w-6" />
          </button>

          <div 
            className="relative w-full max-w-5xl h-[80vh] sm:h-[90vh] shadow-2xl rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Sertifikat Fullscreen"
              fill
              className="object-contain"
              quality={100}
            />
          </div>
        </div>
      )}
    </AnimatedSection>
  );
}

/* ------------------------------------------------------------------ */
/*  CONTACT                                                            */
/* ------------------------------------------------------------------ */

function Contact() {
  return (
    <AnimatedSection id="contact" className="py-20 sm:py-28 bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Kontak"
          title="Hubungi Saya"
          description="Tertarik untuk berkolaborasi atau sekadar berdiskusi? Jangan ragu untuk menghubungi saya"
        />

        <div className="grid sm:grid-cols-3 gap-4 mt-12 max-w-3xl mx-auto">
          {[
            {
              icon: Mail,
              label: "Email",
              value: "mohammadfauzan0207@gmail.com",
              href: "mailto:mohammadfauzan0207@gmail.com",
            },
            {
              icon: Phone,
              label: "WhatsApp",
              value: "+62 85974785943",
              href: "https://wa.me/6285974785943",
            },
            {
              icon: LinkedinIcon,
              label: "LinkedIn",
              value: "Mohammad Fauzan",
              href: "https://linkedin.com",
            },
          ].map((item, i) => (
            <Card
              key={i}
              className="group hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 border-border/50 cursor-pointer"
            >
              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="block"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/15 transition-colors">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-sm">{item.label}</h3>
                  <p className="text-xs text-muted-foreground mt-1 break-all">
                    {item.value}
                  </p>
                </CardContent>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

/* ------------------------------------------------------------------ */
/*  FOOTER                                                             */
/* ------------------------------------------------------------------ */

function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
              MF.
            </span>
            <Separator orientation="vertical" className="h-4" />
            <span className="text-xs text-muted-foreground">
              Mohammad Fauzan
            </span>
          </div>
          <p className="text-xs text-muted-foreground text-center sm:text-right">
            &copy; {new Date().getFullYear()} Mohammad Fauzan. Dibuat dengan Next.js &
            Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/*  SECTION HEADER                                                     */
/* ------------------------------------------------------------------ */

function SectionHeader({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <Badge
        variant="secondary"
        className="mb-3 px-3 py-1 text-xs font-medium tracking-wide uppercase"
      >
        {label}
      </Badge>
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{title}</h2>
      <p className="mt-3 text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
        {description}
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  MAIN PAGE                                                          */
/* ------------------------------------------------------------------ */

export default function PortfolioPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Projects />
        <Organizations />
        <Education />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}