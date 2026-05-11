import { useParams, Link, Navigate } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, MapPin, Calendar, Ruler, Target, Lightbulb, CheckCircle, TrendingUp } from 'lucide-react';
import { BeforeAfter } from '../components/BeforeAfter';
import { useState } from 'react';
import { GaleriaLightbox } from '../components/GaleriaLightbox';
import { projectsById } from '../../data/projects';

export default function Projeto() {
  const { id } = useParams<{ id: string }>();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const project = projectsById[id ?? ''];

  if (!project) {
    return <Navigate to="/projetos" replace />;
  }

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen">
      {/* Back Button */}
      <div className="container mx-auto px-4 pt-8">
        <Link
          to="/projetos"
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-(--color-primary) transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Voltar aos projetos
        </Link>
      </div>

      {/* Hero */}
      <section className="relative h-[60vh] mt-8">
        <img
          src={project.hero}
          alt={project.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white"
          >
            <p className="text-lg mb-2 text-white/80">{project.type}</p>
            <h1 className="text-5xl md:text-6xl font-serif mb-6">{project.title}</h1>

            <div className="flex flex-wrap gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>{project.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{project.year}</span>
              </div>
              <div className="flex items-center gap-2">
                <Ruler className="w-5 h-5" />
                <span>{project.area}m²</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="container mx-auto px-4 py-20">
        {/* Desafio */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
          id="desafio"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-(--color-primary) rounded-lg flex items-center justify-center">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif">Desafio</h2>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-4xl">
            {project.challenge}
          </p>
        </motion.section>

        {/* Conceito */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
          id="conceito"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-(--color-primary) rounded-lg flex items-center justify-center">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif">Conceito</h2>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-4xl">
            {project.concept}
          </p>
        </motion.section>

        {/* Soluções */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
          id="solucoes"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-(--color-primary) rounded-lg flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif">Soluções</h2>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-4xl">
            {project.solutions}
          </p>
        </motion.section>

        {/* Antes e Depois */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-serif mb-8 text-center">
            Transformação
          </h2>

          <div className="space-y-12">
            {project.beforeAfter.map((item, index) => (
              <div key={index}>
                <BeforeAfter
                  beforeImage={item.before}
                  afterImage={item.after}
                  mode={item.mode}
                />
                <p className="text-center mt-4 text-gray-600 dark:text-gray-400">
                  {item.caption}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Resultados */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
          id="resultados"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-(--color-primary) rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif">Resultados</h2>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-4xl">
            {project.results}
          </p>
        </motion.section>

        {/* Galeria */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-serif mb-8 text-center">Galeria</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {project.gallery.map((image, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="relative h-64 rounded-lg overflow-hidden cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors" />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Depoimento */}
        {project.testimonial && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-gray-50 dark:bg-gray-900 rounded-lg p-8 md:p-12"
          >
            <p className="text-2xl text-gray-700 dark:text-gray-300 mb-6 italic text-center">
              "{project.testimonial.text}"
            </p>
            <p className="text-center font-semibold">— {project.testimonial.author}</p>
          </motion.section>
        )}
      </div>

      {/* Lightbox */}
      <GaleriaLightbox
        images={project.gallery}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </div>
  );
}
