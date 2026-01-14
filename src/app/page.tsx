"use client";
import { Spotlight } from "@/components/ui/spotlight";
import { FloatingNav } from "@/components/ui/floating-nav";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { Button } from "@/components/ui/moving-border";
import { motion } from "framer-motion";
import {
  IconBrandFigma,
  IconCode,
  IconDeviceDesktop,
  IconPalette,
  IconRocket,
  IconUsers,
  IconBrandGithub,
  IconMail,
  IconBrandLinkedin,
  IconArrowRight,
  IconSparkles,
  IconBulb,
  IconChartBar,
} from "@tabler/icons-react";

const navItems = [
  { name: "Home", link: "#home", icon: <IconDeviceDesktop className="h-4 w-4" /> },
  { name: "Leistungen", link: "#services", icon: <IconCode className="h-4 w-4" /> },
  { name: "Projekte", link: "#projects", icon: <IconPalette className="h-4 w-4" /> },
  { name: "Über uns", link: "#about", icon: <IconUsers className="h-4 w-4" /> },
];

const services = [
  {
    title: "Web Design",
    description: "Individuelle Webseiten, die Ihre Marke perfekt repräsentieren. Modernes Design trifft auf Benutzerfreundlichkeit.",
    icon: <IconPalette className="h-8 w-8" />,
  },
  {
    title: "Entwicklung",
    description: "Hochperformante Webanwendungen mit modernsten Technologien. Von React bis Next.js - wir bauen Ihre Zukunft.",
    icon: <IconCode className="h-8 w-8" />,
  },
  {
    title: "Branding",
    description: "Starke Markenidentität für einen bleibenden Eindruck. Logo, Farben und Typografie aus einer Hand.",
    icon: <IconBrandFigma className="h-8 w-8" />,
  },
  {
    title: "UI/UX Design",
    description: "Nutzerzentrierte Designs für optimale Usability. Wir gestalten Erlebnisse, die begeistern.",
    icon: <IconSparkles className="h-8 w-8" />,
  },
  {
    title: "Strategie",
    description: "Digitale Strategien, die Ihr Business voranbringen. Von der Analyse bis zur Umsetzung.",
    icon: <IconBulb className="h-8 w-8" />,
  },
  {
    title: "Analytics",
    description: "Datenbasierte Entscheidungen für messbaren Erfolg. Tracking, Reporting und Optimierung.",
    icon: <IconChartBar className="h-8 w-8" />,
  },
];

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Moderner Online-Shop mit Headless CMS und Stripe Integration.",
    image: "/project1.jpg",
    category: "Web Development",
  },
  {
    title: "Startup Landing Page",
    description: "Conversion-optimierte Landing Page für ein Tech-Startup.",
    image: "/project2.jpg",
    category: "Web Design",
  },
  {
    title: "Corporate Website",
    description: "Unternehmenswebsite mit CMS und mehrsprachiger Unterstützung.",
    image: "/project3.jpg",
    category: "Branding",
  },
];

const testimonials = [
  {
    quote: "Die Zusammenarbeit war fantastisch. Das Team hat unsere Vision perfekt umgesetzt und dabei alle Erwartungen übertroffen.",
    name: "Max Mustermann",
    title: "CEO, TechStart GmbH",
  },
  {
    quote: "Professionell, kreativ und zuverlässig. Unsere neue Website hat unsere Conversion-Rate verdoppelt.",
    name: "Anna Schmidt",
    title: "Marketing Director, InnovateCo",
  },
  {
    quote: "Ein Team, das wirklich zuhört und liefert. Die beste Investition in unser digitales Marketing.",
    name: "Thomas Weber",
    title: "Gründer, WebFlow Studio",
  },
  {
    quote: "Herausragende Arbeit! Die Reaktionszeiten und die Qualität sind unübertroffen.",
    name: "Lisa Müller",
    title: "Head of Digital, MediaMax",
  },
];

const bentoItems = [
  {
    title: "Responsive Design",
    description: "Perfekte Darstellung auf allen Geräten - vom Smartphone bis zum Desktop.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 items-center justify-center">
        <IconDeviceDesktop className="h-12 w-12 text-neutral-400" />
      </div>
    ),
    icon: <IconDeviceDesktop className="h-4 w-4 text-neutral-500" />,
    className: "md:col-span-2",
  },
  {
    title: "Schnelle Ladezeiten",
    description: "Optimierte Performance für beste Nutzererfahrung und SEO.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 items-center justify-center">
        <IconRocket className="h-12 w-12 text-neutral-400" />
      </div>
    ),
    icon: <IconRocket className="h-4 w-4 text-neutral-500" />,
    className: "md:col-span-1",
  },
  {
    title: "SEO Optimiert",
    description: "Besser gefunden werden mit technischer SEO und Content-Strategie.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 items-center justify-center">
        <IconChartBar className="h-12 w-12 text-neutral-400" />
      </div>
    ),
    icon: <IconChartBar className="h-4 w-4 text-neutral-500" />,
    className: "md:col-span-1",
  },
  {
    title: "Individuelle Lösungen",
    description: "Maßgeschneiderte Entwicklung für Ihre speziellen Anforderungen.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 items-center justify-center">
        <IconSparkles className="h-12 w-12 text-neutral-400" />
      </div>
    ),
    icon: <IconSparkles className="h-4 w-4 text-neutral-500" />,
    className: "md:col-span-2",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-hidden">
      <FloatingNav navItems={navItems} />
      
      {/* Hero Section */}
      <section id="home" className="h-screen w-full flex items-center justify-center relative overflow-hidden">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-6">
              Digitale Erlebnisse,
              <br />
              die beeindrucken.
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <TextGenerateEffect
              words="Wir sind eine kreative Webdesign-Agentur, die außergewöhnliche digitale Erlebnisse schafft. Von der Strategie über das Design bis zur Entwicklung."
              className="text-neutral-400 max-w-2xl mx-auto text-base md:text-xl"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              as="a"
              href="#contact"
              borderRadius="1.75rem"
              className="bg-black text-white border-slate-800 px-8 py-3"
            >
              Projekt starten
              <IconArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <a
              href="#projects"
              className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2"
            >
              Projekte ansehen
              <IconArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-neutral-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
              />
            </svg>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Unsere Leistungen
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Alles, was Sie für einen erfolgreichen digitalen Auftritt brauchen - aus einer Hand.
            </p>
          </motion.div>
          
          <HoverEffect items={services} />
        </div>
      </section>

      {/* Features Bento Grid */}
      <section className="py-20 px-4 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Warum wir?
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Qualität, Innovation und Zuverlässigkeit - das macht uns aus.
            </p>
          </motion.div>
          
          <BentoGrid className="max-w-4xl mx-auto">
            {bentoItems.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                icon={item.icon}
                className={item.className}
              />
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Ausgewählte Projekte
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Ein Blick auf unsere neuesten Arbeiten und Erfolgsgeschichten.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <CardContainer key={index} className="inter-var">
                <CardBody className="bg-neutral-900 relative group/card hover:shadow-2xl hover:shadow-blue-500/[0.1] border-white/[0.1] w-full h-auto rounded-xl p-6 border">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-white"
                  >
                    {project.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-400 text-sm max-w-sm mt-2"
                  >
                    {project.description}
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <div className="h-48 w-full rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center">
                      <span className="text-neutral-500">{project.category}</span>
                    </div>
                  </CardItem>
                  <div className="flex justify-between items-center mt-6">
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl text-xs font-normal text-white"
                    >
                      Details ansehen →
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold"
                    >
                      Live Demo
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-neutral-950">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 px-4"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Was Kunden sagen
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Erfahrungen und Feedback von unseren geschätzten Partnern.
          </p>
        </motion.div>
        
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Über uns
              </h2>
              <p className="text-neutral-400 mb-6 text-lg">
                Wir sind ein Team aus leidenschaftlichen Designern und Entwicklern,
                die es lieben, außergewöhnliche digitale Erlebnisse zu schaffen.
              </p>
              <p className="text-neutral-400 mb-6">
                Mit über 5 Jahren Erfahrung haben wir mehr als 100 Projekte
                erfolgreich umgesetzt - von kleinen Startups bis zu großen
                Unternehmen.
              </p>
              <p className="text-neutral-400 mb-8">
                Unser Ansatz verbindet Kreativität mit technischer Exzellenz.
                Wir hören zu, verstehen Ihre Bedürfnisse und liefern Lösungen,
                die Ihre Erwartungen übertreffen.
              </p>
              <div className="flex gap-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white">100+</div>
                  <div className="text-neutral-400 text-sm">Projekte</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white">50+</div>
                  <div className="text-neutral-400 text-sm">Kunden</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white">5+</div>
                  <div className="text-neutral-400 text-sm">Jahre</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center">
                <div className="text-center">
                  <IconUsers className="h-24 w-24 text-neutral-600 mx-auto mb-4" />
                  <p className="text-neutral-500">Unser Team</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-neutral-950">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Projekt starten?
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam Ihre Vision zum Leben erwecken.
              Kontaktieren Sie uns für ein unverbindliches Gespräch.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-neutral-900 rounded-2xl p-8 border border-neutral-800"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-400 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Ihr Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-400 mb-2">
                    E-Mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="ihre@email.de"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-400 mb-2">
                  Nachricht
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="Erzählen Sie uns von Ihrem Projekt..."
                />
              </div>
              <Button
                as="button"
                type="submit"
                borderRadius="1rem"
                className="w-full bg-black text-white border-slate-800 py-4"
              >
                Nachricht senden
                <IconMail className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-2xl font-bold text-white">
              AGNOS
            </div>
            
            <div className="flex gap-6">
              <a href="#home" className="text-neutral-400 hover:text-white transition-colors">
                Home
              </a>
              <a href="#services" className="text-neutral-400 hover:text-white transition-colors">
                Leistungen
              </a>
              <a href="#projects" className="text-neutral-400 hover:text-white transition-colors">
                Projekte
              </a>
              <a href="#about" className="text-neutral-400 hover:text-white transition-colors">
                Über uns
              </a>
              <a href="#contact" className="text-neutral-400 hover:text-white transition-colors">
                Kontakt
              </a>
            </div>
            
            <div className="flex gap-4">
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-700 transition-colors"
                aria-label="GitHub"
              >
                <IconBrandGithub className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-700 transition-colors"
                aria-label="LinkedIn"
              >
                <IconBrandLinkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-700 transition-colors"
                aria-label="Email"
              >
                <IconMail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-neutral-800 text-center text-neutral-500 text-sm">
            © {new Date().getFullYear()} AGNOS. Alle Rechte vorbehalten.
          </div>
        </div>
      </footer>
    </main>
  );
}
