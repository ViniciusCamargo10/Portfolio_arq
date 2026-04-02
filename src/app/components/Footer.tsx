import { Instagram, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-serif mb-2">Ana Ferreira</h3>
            <p className="text-gray-600">
              Arquiteta especializada em projetos residenciais e comerciais
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-600 hover:text-[var(--color-primary)] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/sobre" className="text-gray-600 hover:text-[var(--color-primary)] transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="/projetos" className="text-gray-600 hover:text-[var(--color-primary)] transition-colors">
                  Projetos
                </a>
              </li>
              <li>
                <a href="/contato" className="text-gray-600 hover:text-[var(--color-primary)] transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-200 hover:bg-[var(--color-primary)] hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-200 hover:bg-[var(--color-primary)] hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:ana.ferreira@email.com"
                className="p-2 rounded-lg bg-gray-200 hover:bg-[var(--color-primary)] hover:text-white transition-colors"
                aria-label="E-mail"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              ana.ferreira@email.com
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          <p>&copy; 2026 Ana Ferreira Arquitetura. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}