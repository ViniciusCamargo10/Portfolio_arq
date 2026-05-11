import { motion } from 'motion/react';
import { Award, Heart, Users } from 'lucide-react';

export default function Sobre() {
  const values = [
    {
      icon: Award,
      title: 'Excelência',
      description: 'Comprometimento com a qualidade em cada detalhe do projeto',
    },
    {
      icon: Heart,
      title: 'Paixão',
      description: 'Amor pelo que faço refletido em cada criação',
    },
    {
      icon: Users,
      title: 'Colaboração',
      description: 'Trabalho próximo e transparente com cada cliente',
    },
  ];

  const differentials = [
    'Mais de 10 anos de experiência em projetos residenciais e comerciais',
    'Abordagem sustentável e consciente em todos os projetos',
    'Acompanhamento personalizado do início ao fim da obra',
    'Equipe multidisciplinar com expertise técnica e criativa',
    'Portfólio diversificado com mais de 150 projetos executados',
    'Certificações em Design Sustentável e Gestão de Projetos',
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-serif mb-6">Sobre Mim</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transformando sonhos em realidade através da arquitetura
          </p>
        </motion.div>

        {/* Profile Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <img
              src="/foto_nova.jpeg"
              alt="Marcelo Mascia - Arquiteto"
              className="w-full h-[520px] object-cover object-top rounded-lg shadow-xl"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-serif">Marcelo Mascia</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Arquiteto e urbanista formado pela Universidade de São Paulo, com pós-graduação em
              Design de Interiores e especialização em Arquitetura Sustentável. Há mais de uma década,
              dedico-me a criar espaços que harmonizam funcionalidade, estética e bem-estar.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Minha abordagem é colaborativa e personalizada, acreditando que cada projeto é único e
              deve refletir a personalidade e necessidades de quem irá vivenciá-lo. Busco sempre
              soluções inovadoras que respeitem o meio ambiente e valorizem a qualidade de vida.
            </p>

            <div className="flex gap-4 pt-4">
              <a
                href="https://instagram.com/masciamarcelo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-(--color-primary) text-white rounded-lg hover:bg-(--color-primary-dark) transition-colors"
              >
                @masciamarcelo
              </a>
            </div>
          </motion.div>
        </div>

        {/* Diferenciais */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-serif mb-8 text-center">Diferenciais</h2>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {differentials.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg"
              >
                <div className="w-2 h-2 bg-(--color-primary) rounded-full mt-2 shrink-0" />
                <p className="text-gray-700">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Valores */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-serif mb-8 text-center">Valores</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center p-8 bg-gray-50 rounded-lg"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-(--color-primary) text-white rounded-full mb-4">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-serif mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
