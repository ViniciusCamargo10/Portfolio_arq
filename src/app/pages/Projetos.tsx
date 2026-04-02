import { useState } from 'react';
import { motion } from 'motion/react';
import { Search } from 'lucide-react';
import { CardProjeto } from '../components/CardProjeto';
import { FiltroChips } from '../components/FiltroChips';

const allProjects = [
  {
    id: '1',
    title: 'Apartamento Jardins',
    image: 'https://images.unsplash.com/photo-1758974782657-e5ada4b01c3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwc2NhbmRpbmF2aWFuJTIwYXBhcnRtZW50fGVufDF8fHx8MTc3Mzg0NDgzMnww&ixlib=rb-4.1.0&q=80&w=1080',
    type: 'Residencial',
    location: 'São Paulo, SP',
    year: 2025,
    area: 180,
    style: 'Minimalista',
  },
  {
    id: '2',
    title: 'Cozinha Contemporânea',
    image: 'https://images.unsplash.com/photo-1639405069836-f82aa6dcb900?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBraXRjaGVuJTIwZGVzaWdufGVufDF8fHx8MTc3Mzc1MjUzNXww&ixlib=rb-4.1.0&q=80&w=1080',
    type: 'Residencial',
    location: 'Rio de Janeiro, RJ',
    year: 2025,
    area: 85,
    style: 'Contemporâneo',
  },
  {
    id: '3',
    title: 'Escritório Corporativo',
    image: 'https://images.unsplash.com/photo-1603673329776-28248af53fc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwb2ZmaWNlJTIwc3BhY2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzM4NDQ4MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    type: 'Comercial',
    location: 'Belo Horizonte, MG',
    year: 2024,
    area: 450,
    style: 'Corporativo',
  },
  {
    id: '4',
    title: 'Loft Industrial',
    image: 'https://images.unsplash.com/photo-1767706508383-097054618007?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbG9mdCUyMGFwYXJ0bWVudHxlbnwxfHx8fDE3NzM4NDQ4MzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    type: 'Residencial',
    location: 'Porto Alegre, RS',
    year: 2024,
    area: 120,
    style: 'Industrial',
  },
  {
    id: '5',
    title: 'Residência Tropical',
    image: 'https://images.unsplash.com/photo-1771756072878-c085b38e05fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMG1vZGVybiUyMGludGVyaW9yJTIwcGxhbnRzfGVufDF8fHx8MTc3Mzg0NDgzNHww&ixlib=rb-4.1.0&q=80&w=1080',
    type: 'Residencial',
    location: 'Salvador, BA',
    year: 2024,
    area: 250,
    style: 'Tropical',
  },
  {
    id: '6',
    title: 'Restaurante Premium',
    image: 'https://images.unsplash.com/photo-1768697358705-c1b60333da35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcmVzdGF1cmFudCUyMGludGVyaW9yfGVufDF8fHx8MTc3Mzc5Nzg5Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    type: 'Comercial',
    location: 'Curitiba, PR',
    year: 2025,
    area: 320,
    style: 'Contemporâneo',
  },
  {
    id: '7',
    title: 'Quarto Moderno',
    image: 'https://images.unsplash.com/photo-1750420556288-d0e32a6f517b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiZWRyb29tJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzczNzY0Njg2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    type: 'Residencial',
    location: 'Brasília, DF',
    year: 2024,
    area: 65,
    style: 'Moderno',
  },
  {
    id: '8',
    title: 'Banheiro Spa',
    image: 'https://images.unsplash.com/photo-1682888818704-6dc91e9d7532?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBiYXRocm9vbSUyMGRlc2lnbnxlbnwxfHx8fDE3NzM4MTYzNTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    type: 'Residencial',
    location: 'Florianópolis, SC',
    year: 2025,
    area: 45,
    style: 'Contemporâneo',
  },
  {
    id: '9',
    title: 'Casa Moderna',
    image: 'https://images.unsplash.com/photo-1767948693674-e96ae5a755c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGV4dGVyaW9yJTIwZmFjYWRlfGVufDF8fHx8MTc3Mzc1Mzg5Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    type: 'Residencial',
    location: 'Campinas, SP',
    year: 2023,
    area: 380,
    style: 'Moderno',
  },
];

const typeFilters = ['Todos', 'Residencial', 'Comercial'];
const yearFilters = ['2025', '2024', '2023'];
const styleFilters = ['Minimalista', 'Contemporâneo', 'Industrial', 'Tropical', 'Moderno', 'Corporativo'];

export default function Projetos() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTypeFilters, setActiveTypeFilters] = useState<string[]>(['Todos']);
  const [activeYearFilters, setActiveYearFilters] = useState<string[]>([]);
  const [activeStyleFilters, setActiveStyleFilters] = useState<string[]>([]);

  const handleTypeToggle = (filter: string) => {
    if (filter === 'Todos') {
      setActiveTypeFilters(['Todos']);
    } else {
      const newFilters = activeTypeFilters.filter(f => f !== 'Todos');
      if (newFilters.includes(filter)) {
        const filtered = newFilters.filter(f => f !== filter);
        setActiveTypeFilters(filtered.length === 0 ? ['Todos'] : filtered);
      } else {
        setActiveTypeFilters([...newFilters, filter]);
      }
    }
  };

  const handleYearToggle = (filter: string) => {
    setActiveYearFilters(prev =>
      prev.includes(filter) ? prev.filter(f => f !== filter) : [...prev, filter]
    );
  };

  const handleStyleToggle = (filter: string) => {
    setActiveStyleFilters(prev =>
      prev.includes(filter) ? prev.filter(f => f !== filter) : [...prev, filter]
    );
  };

  const filteredProjects = allProjects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = activeTypeFilters.includes('Todos') || 
                       activeTypeFilters.includes(project.type);
    
    const matchesYear = activeYearFilters.length === 0 || 
                       activeYearFilters.includes(project.year.toString());
    
    const matchesStyle = activeStyleFilters.length === 0 || 
                        activeStyleFilters.includes(project.style);

    return matchesSearch && matchesType && matchesYear && matchesStyle;
  });

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-serif mb-6">Projetos</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Explore nosso portfólio de projetos residenciais e comerciais que transformam espaços 
            em experiências memoráveis
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 mb-12"
        >
          {/* Search */}
          <div className="mb-6">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar projetos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
              />
            </div>
          </div>

          {/* Type Filters */}
          <div className="mb-4">
            <h3 className="text-sm font-medium mb-3 text-gray-700 dark:text-gray-300">Tipologia</h3>
            <FiltroChips
              filters={typeFilters}
              activeFilters={activeTypeFilters}
              onFilterToggle={handleTypeToggle}
            />
          </div>

          {/* Year Filters */}
          <div className="mb-4">
            <h3 className="text-sm font-medium mb-3 text-gray-700 dark:text-gray-300">Ano</h3>
            <FiltroChips
              filters={yearFilters}
              activeFilters={activeYearFilters}
              onFilterToggle={handleYearToggle}
            />
          </div>

          {/* Style Filters */}
          <div>
            <h3 className="text-sm font-medium mb-3 text-gray-700 dark:text-gray-300">Estilo</h3>
            <FiltroChips
              filters={styleFilters}
              activeFilters={activeStyleFilters}
              onFilterToggle={handleStyleToggle}
            />
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-6 text-gray-600 dark:text-gray-400"
        >
          {filteredProjects.length} {filteredProjects.length === 1 ? 'projeto encontrado' : 'projetos encontrados'}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: index * 0.05 }}
            >
              <CardProjeto {...project} />
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
              Nenhum projeto encontrado com os filtros selecionados
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setActiveTypeFilters(['Todos']);
                setActiveYearFilters([]);
                setActiveStyleFilters([]);
              }}
              className="px-6 py-3 bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              Limpar Filtros
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
