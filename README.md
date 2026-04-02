# Portfólio de Arquitetura - Ana Ferreira

Site de portfólio completo e interativo para arquiteta, com visual criativo e moderno.

## Características Principais

### 🎨 Sistema de Temas
- **Minimalista Escandinavo**: Cores neutras (#2E7D6F), fontes Sora + Lora
- **Industrial Chic**: Tons terracota (#C46A45), fontes Inter + Playfair Display  
- **Tropical Moderno**: Verde folha (#4A7C59), tons quentes
- Modo Claro/Escuro para todos os temas

### 📱 Páginas
1. **Home**: Hero, processo de trabalho, projetos em destaque, depoimentos
2. **Sobre**: Perfil, diferenciais, valores
3. **Experiência**: Timeline profissional, habilidades e softwares
4. **Projetos**: Grid com filtros (tipo, ano, estilo) e busca
5. **Projeto Individual**: Estudos de caso detalhados com antes/depois
6. **Certificados**: Formação e certificações
7. **Contato**: Formulário completo + contatos diretos

### ✨ Componentes Interativos
- **BeforeAfter**: Comparador com modo slider arrastável e modo lado-a-lado
- **CardProjeto**: Cards com hover effects e parallax
- **DepoimentoCard**: Carrossel automático com pause no hover
- **GaleriaLightbox**: Galeria com navegação por teclado
- **FiltroChips**: Filtros interativos para projetos

### 🎯 Interações & Animações
- Animações suaves com Motion/React
- Scroll reveal para elementos
- Navegação sticky com indicador ativo
- Transitions entre temas
- Hover effects e elevações

### ♿ Acessibilidade
- Navegação por teclado (Tab, Enter, Setas, Esc)
- Estados de foco visíveis
- Contraste adequado
- Labels e aria-labels
- Scroll suave

## Tecnologias

- React 18
- TypeScript
- React Router 7 (Data mode)
- Tailwind CSS 4
- Motion (Framer Motion)
- Lucide React (ícones)
- Unsplash (imagens)

## Estrutura de Arquivos

```
src/
├── app/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── BeforeAfter.tsx
│   │   ├── CardProjeto.tsx
│   │   ├── DepoimentoCard.tsx
│   │   ├── FiltroChips.tsx
│   │   └── GaleriaLightbox.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Sobre.tsx
│   │   ├── Experiencia.tsx
│   │   ├── Projetos.tsx
│   │   ├── Projeto.tsx
│   │   ├── Certificados.tsx
│   │   ├── Contato.tsx
│   │   ├── Layout.tsx
│   │   └── NotFound.tsx
│   ├── context/
│   │   └── ThemeContext.tsx
│   ├── routes.tsx
│   └── App.tsx
└── styles/
    ├── fonts.css
    ├── theme.css
    └── index.css
```

## Navegação

- `/` - Home
- `/sobre` - Sobre
- `/experiencia` - Experiência
- `/projetos` - Lista de projetos
- `/projeto/:id` - Detalhes do projeto
- `/certificados` - Certificados
- `/contato` - Contato

## Temas

Use o seletor de paleta no header para alternar entre os 3 temas visuais. O botão sol/lua alterna entre modo claro e escuro.
