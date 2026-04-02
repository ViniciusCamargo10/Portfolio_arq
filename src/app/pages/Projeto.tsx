import { useParams, Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, MapPin, Calendar, Ruler, Target, Lightbulb, CheckCircle, TrendingUp } from 'lucide-react';
import { BeforeAfter } from '../components/BeforeAfter';
import { useState } from 'react';
import { GaleriaLightbox } from '../components/GaleriaLightbox';

// Mock data for projects
const projectsData: Record<string, any> = {
  '1': {
    title: 'Apartamento Jardins',
    type: 'Residencial',
    location: 'São Paulo, SP',
    year: 2025,
    area: 180,
    client: 'Família Silva',
    hero: 'https://images.unsplash.com/photo-1758974782657-e5ada4b01c3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwc2NhbmRpbmF2aWFuJTIwYXBhcnRtZW50fGVufDF8fHx8MTc3Mzg0NDgzMnww&ixlib=rb-4.1.0&q=80&w=1080',
    challenge: 'Transformar um apartamento de 180m² com layout tradicional em um espaço moderno e funcional que atendesse às necessidades de uma família jovem. O principal desafio era integrar os ambientes sociais sem perder a privacidade das áreas íntimas.',
    concept: 'Desenvolvemos um conceito minimalista escandinavo, priorizando linhas limpas, paleta neutra e materiais naturais. A integração dos espaços foi pensada para criar fluidez visual mantendo zonas bem definidas através de elementos sutis como mudanças de piso e iluminação estratégica.',
    solutions: 'Removemos paredes não estruturais para criar um living amplo e integrado. Implementamos marcenaria planejada em toda a área social para maximizar o armazenamento. O uso de portas de correr permitiu flexibilidade entre integração e privacidade quando necessário.',
    results: 'O projeto resultou em um aumento de 40% na sensação de amplitude. A família ganhou 30% mais espaço de armazenamento através das soluções em marcenaria. A iluminação natural foi otimizada, reduzindo o consumo de energia em 25%.',
    beforeAfter: [
      {
        before: 'https://images.unsplash.com/photo-1704040686413-2c607dbd2f06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzczODQ0ODMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
        after: 'https://images.unsplash.com/photo-1758974782657-e5ada4b01c3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwc2NhbmRpbmF2aWFuJTIwYXBhcnRtZW50fGVufDF8fHx8MTc3Mzg0NDgzMnww&ixlib=rb-4.1.0&q=80&w=1080',
        caption: 'Sala de estar integrada com cozinha',
        mode: 'slider' as const,
      },
      {
        before: 'https://images.unsplash.com/photo-1639405069836-f82aa6dcb900?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBraXRjaGVuJTIwZGVzaWdufGVufDF8fHx8MTc3Mzc1MjUzNXww&ixlib=rb-4.1.0&q=80&w=1080',
        after: 'https://images.unsplash.com/photo-1750420556288-d0e32a6f517b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiZWRyb29tJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzczNzY0Njg2fDA&ixlib=rb-4.1.0&q=80&w=1080',
        caption: 'Cozinha gourmet completa',
        mode: 'side-by-side' as const,
      },
    ],
    gallery: [
      { src: 'https://images.unsplash.com/photo-1758974782657-e5ada4b01c3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwc2NhbmRpbmF2aWFuJTIwYXBhcnRtZW50fGVufDF8fHx8MTc3Mzg0NDgzMnww&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Sala de estar' },
      { src: 'https://images.unsplash.com/photo-1639405069836-f82aa6dcb900?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBraXRjaGVuJTIwZGVzaWdufGVufDF8fHx8MTc3Mzc1MjUzNXww&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Cozinha' },
      { src: 'https://images.unsplash.com/photo-1750420556288-d0e32a6f517b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiZWRyb29tJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzczNzY0Njg2fDA&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Quarto' },
    ],
    testimonial: {
      text: 'Ana transformou completamente nosso apartamento. O resultado superou todas as expectativas. Seu olhar atento aos detalhes e capacidade de entender nossas necessidades foi excepcional.',
      author: 'Mariana Silva',
    },
  },
  '2': {
    title: 'Cozinha Contemporânea',
    type: 'Residencial',
    location: 'Rio de Janeiro, RJ',
    year: 2025,
    area: 85,
    hero: 'https://images.unsplash.com/photo-1639405069836-f82aa6dcb900?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBraXRjaGVuJTIwZGVzaWdufGVufDF8fHx8MTc3Mzc1MjUzNXww&ixlib=rb-4.1.0&q=80&w=1080',
    challenge: 'Reformar uma cozinha de 85m² maximizando funcionalidade e criando um ambiente gourmet que integrasse preparação, refeições e convivência social.',
    concept: 'Conceito de cozinha aberta com ilha central multifuncional, combinando funcionalidade profissional com design sofisticado e acolhedor.',
    solutions: 'Ilha com cooktop, bancada em quartzo, iluminação em trilhos, armários até o teto e eletrodomésticos de alta eficiência energética.',
    results: 'Criamos um espaço que se tornou o coração da casa, aumentando em 60% a área útil de trabalho e duplicando a capacidade de armazenamento.',
    beforeAfter: [
      {
        before: 'https://images.unsplash.com/photo-1704040686413-2c607dbd2f06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzczODQ0ODMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
        after: 'https://images.unsplash.com/photo-1639405069836-f82aa6dcb900?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBraXRjaGVuJTIwZGVzaWdufGVufDF8fHx8MTc3Mzc1MjUzNXww&ixlib=rb-4.1.0&q=80&w=1080',
        caption: 'Transformação completa da cozinha',
        mode: 'slider' as const,
      },
    ],
    gallery: [
      { src: 'https://images.unsplash.com/photo-1639405069836-f82aa6dcb900?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBraXRjaGVuJTIwZGVzaWdufGVufDF8fHx8MTc3Mzc1MjUzNXww&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Cozinha gourmet' },
    ],
    testimonial: {
      text: 'A cozinha ficou espetacular! Ana conseguiu criar um ambiente funcional e lindo ao mesmo tempo.',
      author: 'Roberto Costa',
    },
  },
  '3': {
    title: 'Escritório Corporativo',
    type: 'Comercial',
    location: 'Belo Horizonte, MG',
    year: 2024,
    area: 450,
    hero: 'https://images.unsplash.com/photo-1603673329776-28248af53fc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwb2ZmaWNlJTIwc3BhY2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzM4NDQ4MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    challenge: 'Criar um ambiente corporativo moderno que promovesse colaboração, produtividade e bem-estar dos funcionários.',
    concept: 'Design corporativo com áreas abertas, salas privativas, espaços de descompressão e ambientes flexíveis para diferentes tipos de trabalho.',
    solutions: 'Layout aberto com workstations ergonômicas, salas de reunião com tecnologia integrada, phone booths para privacidade e área de convivência.',
    results: 'Ambiente que aumentou a satisfação dos funcionários em 45% e a produtividade em 30%, segundo pesquisas internas.',
    beforeAfter: [
      {
        before: 'https://images.unsplash.com/photo-1704040686413-2c607dbd2f06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzczODQ0ODMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
        after: 'https://images.unsplash.com/photo-1603673329776-28248af53fc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwb2ZmaWNlJTIwc3BhY2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzM4NDQ4MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
        caption: 'Escritório moderno e colaborativo',
        mode: 'slider' as const,
      },
    ],
    gallery: [
      { src: 'https://images.unsplash.com/photo-1603673329776-28248af53fc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwb2ZmaWNlJTIwc3BhY2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzM4NDQ4MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Escritório' },
    ],
    testimonial: {
      text: 'Trabalhar com a Ana foi uma experiência maravilhosa. Ela soube equilibrar perfeitamente funcionalidade e estética.',
      author: 'Carolina Mendes',
    },
  },
};

export default function Projeto() {
  const { id } = useParams<{ id: string }>();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  
  const project = projectsData[id || '1'] || projectsData['1'];

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
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-[var(--color-primary)] transition-colors"
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
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        
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
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {project.area}m²
                </motion.span>
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
            <div className="w-12 h-12 bg-[var(--color-primary)] rounded-lg flex items-center justify-center">
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
            <div className="w-12 h-12 bg-[var(--color-primary)] rounded-lg flex items-center justify-center">
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
            <div className="w-12 h-12 bg-[var(--color-primary)] rounded-lg flex items-center justify-center">
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
            {project.beforeAfter.map((item: any, index: number) => (
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
            <div className="w-12 h-12 bg-[var(--color-primary)] rounded-lg flex items-center justify-center">
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
            {project.gallery.map((image: any, index: number) => (
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