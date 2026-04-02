import { motion } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router';
import { CardProjeto } from '../components/CardProjeto';
import { DepoimentoCard } from '../components/DepoimentoCard';

const featuredProjects = [
  {
    id: '1',
    title: 'Apartamento Jardins',
    image: 'https://images.unsplash.com/photo-1758974782657-e5ada4b01c3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwc2NhbmRpbmF2aWFuJTIwYXBhcnRtZW50fGVufDF8fHx8MTc3Mzg0NDgzMnww&ixlib=rb-4.1.0&q=80&w=1080',
    type: 'Residencial',
    location: 'São Paulo, SP',
    year: 2025,
    size: 'lg',
  },
  {
    id: '2',
    title: 'Cozinha Contemporânea',
    image: 'https://images.unsplash.com/photo-1639405069836-f82aa6dcb900?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBraXRjaGVuJTIwZGVzaWdufGVufDF8fHx8MTc3Mzc1MjUzNXww&ixlib=rb-4.1.0&q=80&w=1080',
    type: 'Residencial',
    location: 'Rio de Janeiro, RJ',
    year: 2025,
  },
  {
    id: '3',
    title: 'Escritório Corporativo',
    image: 'https://images.unsplash.com/photo-1603673329776-28248af53fc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwb2ZmaWNlJTIwc3BhY2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzM4NDQ4MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    type: 'Comercial',
    location: 'Belo Horizonte, MG',
    year: 2024,
  },
  {
    id: '4',
    title: 'Loft Industrial',
    image: 'https://images.unsplash.com/photo-1767706508383-097054618007?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbG9mdCUyMGFwYXJ0bWVudHxlbnwxfHx8fDE3NzM4NDQ4MzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    type: 'Residencial',
    location: 'Porto Alegre, RS',
    year: 2024,
  },
  {
    id: '5',
    title: 'Residência Tropical',
    image: 'https://images.unsplash.com/photo-1771756072878-c085b38e05fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMG1vZGVybiUyMGludGVyaW9yJTIwcGxhbnRzfGVufDF8fHx8MTc3Mzg0NDgzNHww&ixlib=rb-4.1.0&q=80&w=1080',
    type: 'Residencial',
    location: 'Salvador, BA',
    year: 2024,
  },
  {
    id: '6',
    title: 'Restaurante Premium',
    image: 'https://images.unsplash.com/photo-1768697358705-c1b60333da35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcmVzdGF1cmFudCUyMGludGVyaW9yfGVufDF8fHx8MTc3Mzc5Nzg5Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    type: 'Comercial',
    location: 'Curitiba, PR',
    year: 2025,
  },
];

const testimonials = [
  {
    text: 'Ana transformou completamente nosso apartamento. O resultado superou todas as expectativas. Seu olhar atento aos detalhes e capacidade de entender nossas necessidades foi excepcional.',
    author: 'Mariana Silva',
    location: 'São Paulo',
    project: 'Apartamento Jardins',
  },
  {
    text: 'Profissionalismo e criatividade em cada detalhe. Ana conseguiu otimizar nosso espaço de forma incrível, criando ambientes funcionais e lindos.',
    author: 'Roberto Costa',
    location: 'Rio de Janeiro',
    project: 'Cobertura Leblon',
  },
  {
    text: 'Trabalhar com a Ana foi uma experiência maravilhosa. Ela soube equilibrar perfeitamente funcionalidade e estética, criando um escritório que inspira nossa equipe diariamente.',
    author: 'Carolina Mendes',
    location: 'Belo Horizonte',
    project: 'Escritório Corporativo',
  },
];

const workProcess = [
  {
    number: '01',
    title: 'Briefing & Conceito',
    description: 'Entendemos suas necessidades, estilo de vida e sonhos para criar um projeto único e personalizado.',
  },
  {
    number: '02',
    title: 'Desenvolvimento',
    description: 'Criamos plantas, renders e especificações técnicas detalhadas, acompanhando cada etapa do processo.',
  },
  {
    number: '03',
    title: 'Execução',
    description: 'Gerenciamos a obra do início ao fim, garantindo qualidade, prazos e fidelidade ao projeto original.',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1704040686413-2c607dbd2f06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzczODQ0ODMxfDA&ixlib=rb-4.1.0&q=80&w=1080')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.h1
            className="text-5xl md:text-7xl font-serif mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transformando Espaços,
            <br />
            Criando Histórias
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-white/90"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Projetos arquitetônicos que refletem sua essência e elevam sua qualidade de vida
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              to="/projetos"
              className="px-8 py-4 bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors inline-flex items-center justify-center gap-2"
            >
              Ver Projetos
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contato"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-colors inline-flex items-center justify-center"
            >
              Fale Comigo
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Como Trabalho */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Como Trabalho</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Um processo colaborativo e transparente, do conceito à realização
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {workProcess.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative bg-white p-8 rounded-lg"
              >
                <div className="text-6xl font-serif text-[var(--color-primary)] opacity-20 mb-4">
                  {step.number}
                </div>
                <h3 className="text-2xl font-serif mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                
                <div className="mt-6 flex items-center gap-2 text-[var(--color-primary)]">
                  <Check className="w-5 h-5" />
                  <span className="text-sm font-medium">Acompanhamento completo</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projetos em Destaque */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-between items-end mb-12"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-serif mb-4">Projetos em Destaque</h2>
              <p className="text-lg text-gray-600">
                Conheça alguns dos nossos trabalhos mais recentes
              </p>
            </div>
            <Link
              to="/projetos"
              className="hidden md:flex items-center gap-2 text-[var(--color-primary)] hover:gap-3 transition-all"
            >
              Ver todos
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <CardProjeto {...project} />
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link
              to="/projetos"
              className="inline-flex items-center gap-2 text-[var(--color-primary)] hover:gap-3 transition-all"
            >
              Ver todos os projetos
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-4">O Que Dizem Nossos Clientes</h2>
            <p className="text-lg text-gray-600">
              Depoimentos de quem confiou em nosso trabalho
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <DepoimentoCard testimonials={testimonials} />
          </motion.div>
        </div>
      </section>
    </div>
  );
}