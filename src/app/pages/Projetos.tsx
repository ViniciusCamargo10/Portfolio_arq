import { useState } from 'react';
import { motion } from 'motion/react';
import { Search } from 'lucide-react';
import { CardProjeto } from '../components/CardProjeto';
import { FiltroChips } from '../components/FiltroChips';
import { projects } from '../../data/projects';

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

  const filteredProjects = projects.filter(project => {
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
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore meu portfólio de projetos residenciais e comerciais que transformam espaços
            em experiências memoráveis
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-50 rounded-lg p-6 mb-12"
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
                className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-(--color-primary)"
              />
            </div>
          </div>

          {/* Type Filters */}
          <div className="mb-4">
            <h3 className="text-sm font-medium mb-3 text-gray-700">Tipologia</h3>
            <FiltroChips
              filters={typeFilters}
              activeFilters={activeTypeFilters}
              onFilterToggle={handleTypeToggle}
            />
          </div>

          {/* Year Filters */}
          <div className="mb-4">
            <h3 className="text-sm font-medium mb-3 text-gray-700">Ano</h3>
            <FiltroChips
              filters={yearFilters}
              activeFilters={activeYearFilters}
              onFilterToggle={handleYearToggle}
            />
          </div>

          {/* Style Filters */}
          <div>
            <h3 className="text-sm font-medium mb-3 text-gray-700">Estilo</h3>
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
          className="mb-6 text-gray-600"
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
            <p className="text-xl text-gray-600 mb-4">
              Nenhum projeto encontrado com os filtros selecionados
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setActiveTypeFilters(['Todos']);
                setActiveYearFilters([]);
                setActiveStyleFilters([]);
              }}
              className="px-6 py-3 bg-(--color-primary) text-white rounded-lg hover:bg-(--color-primary-dark) transition-colors"
            >
              Limpar Filtros
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
