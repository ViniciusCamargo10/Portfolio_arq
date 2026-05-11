export interface BeforeAfterItem {
  before: string;
  after: string;
  caption: string;
  mode: 'slider' | 'side-by-side';
}

export interface GalleryItem {
  src: string;
  alt: string;
}

export interface Project {
  id: string;
  title: string;
  image: string;
  type: string;
  location: string;
  year: number;
  area: number;
  style: string;
  size?: 'sm' | 'md' | 'lg';
  hero: string;
  client?: string;
  challenge: string;
  concept: string;
  solutions: string;
  results: string;
  beforeAfter: BeforeAfterItem[];
  gallery: GalleryItem[];
  testimonial: {
    text: string;
    author: string;
  };
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Apartamento Jardins',
    image: 'https://images.unsplash.com/photo-1758974782657-e5ada4b01c3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwc2NhbmRpbmF2aWFuJTIwYXBhcnRtZW50fGVufDF8fHx8MTc3Mzg0NDgzMnww&ixlib=rb-4.1.0&q=80&w=1080',
    type: 'Residencial',
    location: 'São Paulo, SP',
    year: 2025,
    area: 180,
    style: 'Minimalista',
    size: 'lg',
    hero: 'https://images.unsplash.com/photo-1758974782657-e5ada4b01c3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwc2NhbmRpbmF2aWFuJTIwYXBhcnRtZW50fGVufDF8fHx8MTc3Mzg0NDgzMnww&ixlib=rb-4.1.0&q=80&w=1080',
    client: 'Família Silva',
    challenge: 'Transformar um apartamento de 180m² com layout tradicional em um espaço moderno e funcional que atendesse às necessidades de uma família jovem. O principal desafio era integrar os ambientes sociais sem perder a privacidade das áreas íntimas.',
    concept: 'Desenvolvi um conceito minimalista escandinavo, priorizando linhas limpas, paleta neutra e materiais naturais. A integração dos espaços foi pensada para criar fluidez visual mantendo zonas bem definidas através de elementos sutis como mudanças de piso e iluminação estratégica.',
    solutions: 'Removi paredes não estruturais para criar um living amplo e integrado. Implementei marcenaria planejada em toda a área social para maximizar o armazenamento. O uso de portas de correr permitiu flexibilidade entre integração e privacidade quando necessário.',
    results: 'O projeto resultou em um aumento de 40% na sensação de amplitude. A família ganhou 30% mais espaço de armazenamento através das soluções em marcenaria. A iluminação natural foi otimizada, reduzindo o consumo de energia em 25%.',
    beforeAfter: [
      {
        before: 'https://images.unsplash.com/photo-1704040686413-2c607dbd2f06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzczODQ0ODMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
        after: 'https://images.unsplash.com/photo-1758974782657-e5ada4b01c3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwc2NhbmRpbmF2aWFuJTIwYXBhcnRtZW50fGVufDF8fHx8MTc3Mzg0NDgzMnww&ixlib=rb-4.1.0&q=80&w=1080',
        caption: 'Sala de estar integrada com cozinha',
        mode: 'slider',
      },
      {
        before: 'https://images.unsplash.com/photo-1639405069836-f82aa6dcb900?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBraXRjaGVuJTIwZGVzaWdufGVufDF8fHx8MTc3Mzc1MjUzNXww&ixlib=rb-4.1.0&q=80&w=1080',
        after: 'https://images.unsplash.com/photo-1750420556288-d0e32a6f517b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiZWRyb29tJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzczNzY0Njg2fDA&ixlib=rb-4.1.0&q=80&w=1080',
        caption: 'Cozinha gourmet completa',
        mode: 'side-by-side',
      },
    ],
    gallery: [
      { src: 'https://images.unsplash.com/photo-1758974782657-e5ada4b01c3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwc2NhbmRpbmF2aWFuJTIwYXBhcnRtZW50fGVufDF8fHx8MTc3Mzg0NDgzMnww&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Sala de estar' },
      { src: 'https://images.unsplash.com/photo-1639405069836-f82aa6dcb900?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBraXRjaGVuJTIwZGVzaWdufGVufDF8fHx8MTc3Mzc1MjUzNXww&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Cozinha' },
      { src: 'https://images.unsplash.com/photo-1750420556288-d0e32a6f517b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiZWRyb29tJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzczNzY0Njg2fDA&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Quarto' },
    ],
    testimonial: {
      text: 'Marcelo transformou completamente nosso apartamento. O resultado superou todas as expectativas. Seu olhar atento aos detalhes e capacidade de entender nossas necessidades foi excepcional.',
      author: 'Mariana Silva',
    },
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
    hero: 'https://images.unsplash.com/photo-1639405069836-f82aa6dcb900?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBraXRjaGVuJTIwZGVzaWdufGVufDF8fHx8MTc3Mzc1MjUzNXww&ixlib=rb-4.1.0&q=80&w=1080',
    challenge: 'Reformar uma cozinha de 85m² maximizando funcionalidade e criando um ambiente gourmet que integrasse preparação, refeições e convivência social.',
    concept: 'Conceito de cozinha aberta com ilha central multifuncional, combinando funcionalidade profissional com design sofisticado e acolhedor.',
    solutions: 'Ilha com cooktop, bancada em quartzo, iluminação em trilhos, armários até o teto e eletrodomésticos de alta eficiência energética.',
    results: 'Criei um espaço que se tornou o coração da casa, aumentando em 60% a área útil de trabalho e duplicando a capacidade de armazenamento.',
    beforeAfter: [
      {
        before: 'https://images.unsplash.com/photo-1704040686413-2c607dbd2f06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzczODQ0ODMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
        after: 'https://images.unsplash.com/photo-1639405069836-f82aa6dcb900?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBraXRjaGVuJTIwZGVzaWdufGVufDF8fHx8MTc3Mzc1MjUzNXww&ixlib=rb-4.1.0&q=80&w=1080',
        caption: 'Transformação completa da cozinha',
        mode: 'slider',
      },
    ],
    gallery: [
      { src: 'https://images.unsplash.com/photo-1639405069836-f82aa6dcb900?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBraXRjaGVuJTIwZGVzaWdufGVufDF8fHx8MTc3Mzc1MjUzNXww&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Cozinha gourmet' },
      { src: 'https://images.unsplash.com/photo-1758974782657-e5ada4b01c3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwc2NhbmRpbmF2aWFuJTIwYXBhcnRtZW50fGVufDF8fHx8MTc3Mzg0NDgzMnww&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Área de estar integrada' },
    ],
    testimonial: {
      text: 'A cozinha ficou espetacular! Marcelo conseguiu criar um ambiente funcional e lindo ao mesmo tempo. Superou tudo o que imaginávamos.',
      author: 'Roberto Costa',
    },
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
    hero: 'https://images.unsplash.com/photo-1603673329776-28248af53fc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwb2ZmaWNlJTIwc3BhY2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzM4NDQ4MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    challenge: 'Criar um ambiente corporativo moderno que promovesse colaboração, produtividade e bem-estar dos funcionários em um espaço de 450m².',
    concept: 'Design corporativo com áreas abertas, salas privativas, espaços de descompressão e ambientes flexíveis para diferentes tipos de trabalho.',
    solutions: 'Layout aberto com workstations ergonômicas, salas de reunião com tecnologia integrada, phone booths para privacidade e área de convivência com cozinha coletiva.',
    results: 'O ambiente aumentou a satisfação dos funcionários em 45% e a produtividade em 30%, segundo pesquisas internas realizadas seis meses após a entrega.',
    beforeAfter: [
      {
        before: 'https://images.unsplash.com/photo-1704040686413-2c607dbd2f06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzczODQ0ODMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
        after: 'https://images.unsplash.com/photo-1603673329776-28248af53fc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwb2ZmaWNlJTIwc3BhY2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzM4NDQ4MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
        caption: 'Escritório moderno e colaborativo',
        mode: 'slider',
      },
    ],
    gallery: [
      { src: 'https://images.unsplash.com/photo-1603673329776-28248af53fc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwb2ZmaWNlJTIwc3BhY2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzM4NDQ4MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Área de trabalho colaborativa' },
      { src: 'https://images.unsplash.com/photo-1758974782657-e5ada4b01c3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwc2NhbmRpbmF2aWFuJTIwYXBhcnRtZW50fGVufDF8fHx8MTc3Mzg0NDgzMnww&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Sala de reuniões' },
    ],
    testimonial: {
      text: 'Trabalhar com o Marcelo foi uma experiência excepcional. Ele soube equilibrar perfeitamente funcionalidade e estética, criando um escritório que inspira nossa equipe diariamente.',
      author: 'Carolina Mendes',
    },
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
    hero: 'https://images.unsplash.com/photo-1767706508383-097054618007?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbG9mdCUyMGFwYXJ0bWVudHxlbnwxfHx8fDE3NzM4NDQ4MzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    client: 'Paulo Henrique',
    challenge: 'Converter um antigo galpão industrial de 120m² em um loft residencial moderno, preservando a identidade industrial do espaço enquanto garantia conforto e habitabilidade.',
    concept: 'Explorei ao máximo a estética industrial: vigas de aço aparentes, tijolos à vista, concreto polido e pé-direito duplo. A proposta foi valorizar a história do espaço sem abrir mão do conforto contemporâneo.',
    solutions: 'Mantive as estruturas metálicas originais e o tijolo aparente. Instalei mezanino em estrutura de aço corten para criar o dormitório, aproveitando o pé-direito alto. Iluminação industrial com trilhos e pendentes de metal escuro.',
    results: 'O loft se tornou referência de projeto industrial em Porto Alegre, com cobertura em revistas especializadas de design. O cliente valorizou o imóvel em 35% após a reforma.',
    beforeAfter: [
      {
        before: 'https://images.unsplash.com/photo-1704040686413-2c607dbd2f06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzczODQ0ODMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
        after: 'https://images.unsplash.com/photo-1767706508383-097054618007?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbG9mdCUyMGFwYXJ0bWVudHxlbnwxfHx8fDE3NzM4NDQ4MzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
        caption: 'Transformação do galpão em loft',
        mode: 'slider',
      },
    ],
    gallery: [
      { src: 'https://images.unsplash.com/photo-1767706508383-097054618007?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbG9mdCUyMGFwYXJ0bWVudHxlbnwxfHx8fDE3NzM4NDQ4MzR8MA&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Área social do loft' },
      { src: 'https://images.unsplash.com/photo-1603673329776-28248af53fc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwb2ZmaWNlJTIwc3BhY2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzM4NDQ4MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Mezanino' },
    ],
    testimonial: {
      text: 'Marcelo transformou um galpão abandonado no lar dos meus sonhos. Ele entendeu exatamente o que eu queria e foi além. O projeto é único.',
      author: 'Paulo Henrique',
    },
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
    hero: 'https://images.unsplash.com/photo-1771756072878-c085b38e05fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMG1vZGVybiUyMGludGVyaW9yJTIwcGxhbnRzfGVufDF8fHx8MTc3Mzg0NDgzNHww&ixlib=rb-4.1.0&q=80&w=1080',
    client: 'Família Souza',
    challenge: 'Projetar uma residência de 250m² que dialogasse com o clima e a cultura baiana, integrando ambientes internos e externos de forma fluida e valorizando a vegetação nativa.',
    concept: 'Arquitetura tropical contemporânea com grandes aberturas, varandas generosas e materiais locais como madeira de reflorestamento e pedra natural. O jardim foi parte central do projeto, não complemento.',
    solutions: 'Pavimentos em pedra portuguesa, esquadrias de madeira com venezianas, teto jardim na área social, piscina de borda infinita integrada à sala de estar e jardim vertical com espécies da Mata Atlântica.',
    results: 'A residência obteve a certificação Casa Azul da Caixa pelo uso de técnicas sustentáveis. A integração com o jardim reduziu em 40% o uso de ar condicionado, aproveitando a ventilação cruzada natural.',
    beforeAfter: [
      {
        before: 'https://images.unsplash.com/photo-1704040686413-2c607dbd2f06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzczODQ0ODMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
        after: 'https://images.unsplash.com/photo-1771756072878-c085b38e05fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMG1vZGVybiUyMGludGVyaW9yJTIwcGxhbnRzfGVufDF8fHx8MTc3Mzg0NDgzNHww&ixlib=rb-4.1.0&q=80&w=1080',
        caption: 'Sala integrada ao jardim tropical',
        mode: 'slider',
      },
    ],
    gallery: [
      { src: 'https://images.unsplash.com/photo-1771756072878-c085b38e05fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMG1vZGVybiUyMGludGVyaW9yJTIwcGxhbnRzfGVufDF8fHx8MTc3Mzg0NDgzNHww&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Sala tropical' },
      { src: 'https://images.unsplash.com/photo-1639405069836-f82aa6dcb900?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBraXRjaGVuJTIwZGVzaWdufGVufDF8fHx8MTc3Mzc1MjUzNXww&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Varanda e jardim' },
    ],
    testimonial: {
      text: 'O Marcelo criou uma casa que respira Salvador. Cada detalhe foi pensado para o nosso clima e estilo de vida. Nos sentimos em férias todos os dias.',
      author: 'Lúcia Souza',
    },
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
    hero: 'https://images.unsplash.com/photo-1768697358705-c1b60333da35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcmVzdGF1cmFudCUyMGludGVyaW9yfGVufDF8fHx8MTc3Mzc5Nzg5Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    client: 'Grupo Gastronômico Madeira',
    challenge: 'Projetar um restaurante de alta gastronomia em 320m² que transmitisse exclusividade e sofisticação, ao mesmo tempo em que otimizava o fluxo operacional da cozinha e da equipe de serviço.',
    concept: 'Ambiente gastronômico com identidade forte: madeira nogueira, iluminação cênica sobre as mesas, paleta em tons de carvão e dourado. A cozinha aberta foi incorporada ao conceito como espetáculo para os clientes.',
    solutions: 'Zoneamento preciso entre área de serviço e salão. Cozinha aberta com vidro panorâmico, acústica trabalhada para manter intimidade nas conversas, sistema de iluminação cênica regulável por mesa.',
    results: 'O restaurante alcançou nota máxima no TripAdvisor na categoria ambiente em Curitiba e figura nas principais guias gastronômicas do sul do Brasil desde a inauguração.',
    beforeAfter: [
      {
        before: 'https://images.unsplash.com/photo-1704040686413-2c607dbd2f06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzczODQ0ODMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
        after: 'https://images.unsplash.com/photo-1768697358705-c1b60333da35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcmVzdGF1cmFudCUyMGludGVyaW9yfGVufDF8fHx8MTc3Mzc5Nzg5Mnww&ixlib=rb-4.1.0&q=80&w=1080',
        caption: 'Salão principal do restaurante',
        mode: 'slider',
      },
    ],
    gallery: [
      { src: 'https://images.unsplash.com/photo-1768697358705-c1b60333da35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcmVzdGF1cmFudCUyMGludGVyaW9yfGVufDF8fHx8MTc3Mzc5Nzg5Mnww&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Salão principal' },
      { src: 'https://images.unsplash.com/photo-1603673329776-28248af53fc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwb2ZmaWNlJTIwc3BhY2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzM4NDQ4MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Cozinha aberta' },
    ],
    testimonial: {
      text: 'O Marcelo entendeu que num restaurante fine dining o ambiente é parte do cardápio. O projeto elevou nossa experiência a outro nível. Nossos clientes elogiam o espaço tanto quanto a comida.',
      author: 'Chef Ricardo Madeira',
    },
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
    hero: 'https://images.unsplash.com/photo-1750420556288-d0e32a6f517b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiZWRyb29tJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzczNzY0Njg2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    challenge: 'Redesenhar um quarto de casal de 65m² para criar um refúgio particular com qualidade de hotel boutique, integrando closet, home office e banheiro em um espaço coeso.',
    concept: 'Suite master com conceito de "refúgio urbano": paleta neutra com texturas ricas, iluminação em camadas para diferentes momentos do dia, e integração fluida entre o quarto, o closet e o banheiro.',
    solutions: 'Parede de cabeceira revestida em linho, iluminação indireta em sancas e nichos, closet integrado sem portas com iluminação própria, home office embutido na marcenaria com painel deslizante que esconde o espaço de trabalho.',
    results: 'O casal relatou melhora significativa na qualidade do sono e no relaxamento. O projeto foi publicado na revista Casa Vogue Brasil como referência de suite master contemporânea.',
    beforeAfter: [
      {
        before: 'https://images.unsplash.com/photo-1704040686413-2c607dbd2f06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzczODQ0ODMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
        after: 'https://images.unsplash.com/photo-1750420556288-d0e32a6f517b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiZWRyb29tJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzczNzY0Njg2fDA&ixlib=rb-4.1.0&q=80&w=1080',
        caption: 'Suite master após reforma',
        mode: 'slider',
      },
    ],
    gallery: [
      { src: 'https://images.unsplash.com/photo-1750420556288-d0e32a6f517b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiZWRyb29tJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzczNzY0Njg2fDA&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Suite master' },
      { src: 'https://images.unsplash.com/photo-1682888818704-6dc91e9d7532?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBiYXRocm9vbSUyMGRlc2lnbnxlbnwxfHx8fDE3NzM4MTYzNTF8MA&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Banheiro integrado' },
    ],
    testimonial: {
      text: 'Nossa suite ficou melhor do que qualquer hotel em que já ficamos. O Marcelo transformou um quarto comum em um espaço de verdadeiro descanso e sofisticação.',
      author: 'Fernanda e André Lima',
    },
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
    hero: 'https://images.unsplash.com/photo-1682888818704-6dc91e9d7532?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBiYXRocm9vbSUyMGRlc2lnbnxlbnwxfHx8fDE3NzM4MTYzNTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    challenge: 'Transformar um banheiro simples de 45m² em um espaço spa de alto padrão, incorporando banheira de imersão, ducha de experiência e sauna seca sem comprometer a circulação.',
    concept: 'Banheiro-spa com atmosfera de resort: pedra natural, madeira tratada para ambientes úmidos, iluminação cênica e cromoterapia. O espaço foi projetado para ser tanto funcional quanto um lugar de ritual de autocuidado.',
    solutions: 'Banheira de imersão autônoma em pedra reconstituída, box amplo com ducha de teto e lateral, parede de pedra natural com cascata d\'água, sauna seca embutida com vista para o jardim externo através de vidro temperado.',
    results: 'O banheiro tornou-se o cômodo favorito da família, com uso diário da sauna. O projeto recebeu menção honrosa no Prêmio Design de Interiores do Sul 2025.',
    beforeAfter: [
      {
        before: 'https://images.unsplash.com/photo-1704040686413-2c607dbd2f06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzczODQ0ODMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
        after: 'https://images.unsplash.com/photo-1682888818704-6dc91e9d7532?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBiYXRocm9vbSUyMGRlc2lnbnxlbnwxfHx8fDE3NzM4MTYzNTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
        caption: 'Banheiro transformado em spa',
        mode: 'slider',
      },
    ],
    gallery: [
      { src: 'https://images.unsplash.com/photo-1682888818704-6dc91e9d7532?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBiYXRocm9vbSUyMGRlc2lnbnxlbnwxfHx8fDE3NzM4MTYzNTF8MA&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Banheiro spa' },
      { src: 'https://images.unsplash.com/photo-1750420556288-d0e32a6f517b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiZWRyb29tJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzczNzY0Njg2fDA&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Área de relaxamento' },
    ],
    testimonial: {
      text: 'Nunca imaginei que um banheiro pudesse me fazer sentir assim. O Marcelo criou um espaço que vai muito além da função. É pura experiência sensorial.',
      author: 'Isabela Rocha',
    },
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
    hero: 'https://images.unsplash.com/photo-1767948693674-e96ae5a755c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGV4dGVyaW9yJTIwZmFjYWRlfGVufDF8fHx8MTc3Mzc1Mzg5Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    client: 'Família Andrade',
    challenge: 'Projetar uma residência de 380m² do zero para uma família de quatro pessoas, equilibrando os espaços de convivência coletiva com áreas de privacidade individual, em um terreno com declive acentuado.',
    concept: 'Arquitetura contemporânea que dialoga com a topografia: a casa se desenvolve em dois pavimentos que acompanham o terreno, criando terraços e visuais privilegiados. Volume limpo, grandes planos de vidro e concreto aparente.',
    solutions: 'Implantação aproveitando o desnível para criar garagem semi-enterrada e terraço sobre ela. Piscina no nível superior com deck de madeira que integra a área de lazer. Fachada com brise-soleil em alumínio para controle solar.',
    results: 'A residência ganhou o Prêmio Arquitetura Interior SP 2023 na categoria residências. O projeto foi concluído no prazo e dentro do orçamento previsto, referência rara em obras de grande porte.',
    beforeAfter: [
      {
        before: 'https://images.unsplash.com/photo-1704040686413-2c607dbd2f06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzczODQ0ODMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
        after: 'https://images.unsplash.com/photo-1767948693674-e96ae5a755c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGV4dGVyaW9yJTIwZmFjYWRlfGVufDF8fHx8MTc3Mzc1Mzg5Mnww&ixlib=rb-4.1.0&q=80&w=1080',
        caption: 'Fachada e área de lazer',
        mode: 'side-by-side',
      },
    ],
    gallery: [
      { src: 'https://images.unsplash.com/photo-1767948693674-e96ae5a755c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGV4dGVyaW9yJTIwZmFjYWRlfGVufDF8fHx8MTc3Mzc1Mzg5Mnww&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Fachada da casa' },
      { src: 'https://images.unsplash.com/photo-1758974782657-e5ada4b01c3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwc2NhbmRpbmF2aWFuJTIwYXBhcnRtZW50fGVufDF8fHx8MTc3Mzg0NDgzMnww&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Área social interna' },
      { src: 'https://images.unsplash.com/photo-1771756072878-c085b38e05fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMG1vZGVybiUyMGludGVyaW9yJTIwcGxhbnRzfGVufDF8fHx8MTc3Mzg0NDgzNHww&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Área de lazer com piscina' },
    ],
    testimonial: {
      text: 'O Marcelo realizou o sonho da nossa vida. A casa é exatamente o que imaginamos — e muito mais. Sua capacidade de ouvir e traduzir desejos em espaços é extraordinária.',
      author: 'Família Andrade',
    },
  },
];

export const projectsById = Object.fromEntries(projects.map(p => [p.id, p]));
