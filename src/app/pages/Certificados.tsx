import { motion } from 'motion/react';
import { Award } from 'lucide-react';
import { Link } from 'react-router';

interface Certificate {
  title: string;
  issuer: string;
  year: number;
  description: string;
  image: string;
}

export default function Certificados() {
  const certificates: Certificate[] = [
    {
      title: 'Certificação LEED Green Associate',
      issuer: 'U.S. Green Building Council',
      year: 2022,
      description: 'Certificação em práticas de construção sustentável e design verde',
      image: 'https://images.unsplash.com/photo-1721244653757-b76cc4679dfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwYmx1ZXByaW50JTIwZHJhd2luZ3xlbnwxfHx8fDE3NzM3ODYzMDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Pós-Graduação em Design de Interiores',
      issuer: 'Escola São Paulo',
      year: 2021,
      description: 'Especialização em projetos de interiores residenciais e comerciais',
      image: 'https://images.unsplash.com/photo-1639405069836-f82aa6dcb900?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBraXRjaGVuJTIwZGVzaWdufGVufDF8fHx8MTc3Mzc1MjUzNXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Certificado em BIM — Revit Architecture',
      issuer: 'Autodesk Education',
      year: 2020,
      description: 'Domínio avançado em modelagem de informação da construção',
      image: 'https://images.unsplash.com/photo-1767948693674-e96ae5a755c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGV4dGVyaW9yJTIwZmFjYWRlfGVufDF8fHx8MTc3Mzc1Mzg5Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Gestão de Projetos em Arquitetura',
      issuer: 'Project Management Institute',
      year: 2019,
      description: 'Capacitação em gerenciamento e coordenação de projetos complexos',
      image: 'https://images.unsplash.com/photo-1603673329776-28248af53fc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwb2ZmaWNlJTIwc3BhY2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzM4NDQ4MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Arquitetura e Urbanismo',
      issuer: 'Universidade de São Paulo (USP)',
      year: 2013,
      description: 'Graduação com ênfase em projeto arquitetônico e urbanismo',
      image: 'https://images.unsplash.com/photo-1704040686413-2c607dbd2f06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzczODQ0ODMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
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
          <div className="inline-flex items-center justify-center w-16 h-16 bg-(--color-primary) rounded-full mb-6">
            <Award className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-serif mb-6">Certificados</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Formação acadêmica e certificações que fundamentam minha prática profissional
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
            >
              {/* Certificate Image Preview */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm">
                    {cert.year}
                  </span>
                </div>
              </div>

              {/* Certificate Info */}
              <div className="p-6">
                <h3 className="text-xl font-serif mb-2 group-hover:text-(--color-primary) transition-colors">
                  {cert.title}
                </h3>
                <p className="text-(--color-primary) font-medium mb-3">
                  {cert.issuer}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {cert.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center bg-gray-50 dark:bg-gray-900 rounded-lg p-12"
        >
          <h2 className="text-3xl font-serif mb-4">
            Educação Continuada
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Acredito no aprendizado contínuo e sempre busco me atualizar com as últimas
            tendências e tecnologias em arquitetura e design.
          </p>
          <Link
            to="/contato"
            className="inline-block px-8 py-4 bg-(--color-primary) text-white rounded-lg hover:bg-(--color-primary-dark) transition-colors"
          >
            Entre em Contato
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
