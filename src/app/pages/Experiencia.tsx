import { motion } from 'motion/react';
import { Briefcase, GraduationCap } from 'lucide-react';

interface TimelineItem {
  period: string;
  role: string;
  company: string;
  description: string;
}

export default function Experiencia() {
  const timeline: TimelineItem[] = [
    {
      period: '2020 - Presente',
      role: 'Arquiteta Autônoma',
      company: 'Ana Ferreira Arquitetura',
      description: 'Fundação do escritório próprio, especializando-se em projetos residenciais de alto padrão e comerciais. Gestão completa de mais de 50 projetos.',
    },
    {
      period: '2017 - 2020',
      role: 'Arquiteta Sênior',
      company: 'Studio Forma Arquitetura',
      description: 'Liderança de equipe multidisciplinar em projetos residenciais e corporativos. Desenvolvimento de conceitos inovadores e sustentáveis.',
    },
    {
      period: '2015 - 2017',
      role: 'Arquiteta Plena',
      company: 'Espaço Design Interiores',
      description: 'Responsável por projetos de interiores residenciais e comerciais, coordenação de obras e relacionamento com clientes.',
    },
    {
      period: '2013 - 2015',
      role: 'Arquiteta Júnior',
      company: 'Construtora Horizonte',
      description: 'Desenvolvimento de projetos arquitetônicos, acompanhamento de obras e elaboração de documentação técnica.',
    },
  ];

  const skills = {
    softwares: [
      'AutoCAD',
      'Revit',
      'SketchUp',
      'V-Ray',
      'Lumion',
      'Photoshop',
      'Illustrator',
      'InDesign',
    ],
    expertise: [
      'Arquitetura Residencial',
      'Design de Interiores',
      'Arquitetura Comercial',
      'Arquitetura Corporativa',
      'Projetos Sustentáveis',
      'Gestão de Obras',
      'Paisagismo',
      'Retrofit',
    ],
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-serif mb-6">Experiência</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Uma trajetória dedicada à criação de espaços excepcionais
          </p>
        </motion.div>

        {/* Timeline */}
        <section className="mb-20 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-12"
          >
            <Briefcase className="w-8 h-8 text-[var(--color-primary)]" />
            <h2 className="text-3xl md:text-4xl font-serif">Trajetória Profissional</h2>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform md:-translate-x-1/2" />

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative mb-12 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:ml-auto md:pl-12'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-auto top-0 w-4 h-4 bg-[var(--color-primary)] rounded-full transform md:translate-x-1/2" 
                  style={index % 2 === 0 ? { right: '-2.125rem' } : { left: '-2.125rem' }} 
                />

                <div className="ml-8 md:ml-0 bg-white p-6 rounded-lg shadow-lg">
                  <span className="inline-block px-3 py-1 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-full text-sm mb-3">
                    {item.period}
                  </span>
                  <h3 className="text-xl font-serif mb-1">{item.role}</h3>
                  <p className="text-gray-600 mb-3 font-medium">
                    {item.company}
                  </p>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-12 justify-center"
          >
            <GraduationCap className="w-8 h-8 text-[var(--color-primary)]" />
            <h2 className="text-3xl md:text-4xl font-serif">Habilidades & Expertise</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Softwares */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <h3 className="text-2xl font-serif mb-6 text-center">Softwares</h3>
              <div className="grid grid-cols-2 gap-3">
                {skills.softwares.map((software, index) => (
                  <motion.div
                    key={software}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-white px-4 py-3 rounded-lg text-center hover:bg-[var(--color-primary)] hover:text-white transition-colors"
                  >
                    {software}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Expertise */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <h3 className="text-2xl font-serif mb-6 text-center">Áreas de Atuação</h3>
              <div className="grid grid-cols-2 gap-3">
                {skills.expertise.map((area, index) => (
                  <motion.div
                    key={area}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-white px-4 py-3 rounded-lg text-center hover:bg-[var(--color-primary)] hover:text-white transition-colors"
                  >
                    {area}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
