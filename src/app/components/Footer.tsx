import { Link } from 'react-router';
import { Instagram, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-serif mb-2">Marcelo Mascia</h3>
            <p className="text-gray-600">
              Arquiteto especializado em projetos residenciais e comerciais
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-(--color-primary) transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-gray-600 hover:text-(--color-primary) transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link to="/projetos" className="text-gray-600 hover:text-(--color-primary) transition-colors">
                  Projetos
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-600 hover:text-(--color-primary) transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/masciamarcelo"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-200 hover:bg-(--color-primary) hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/masciamarcelo"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-200 hover:bg-(--color-primary) hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:contato@masciaarquitetura.com.br"
                className="p-2 rounded-lg bg-gray-200 hover:bg-(--color-primary) hover:text-white transition-colors"
                aria-label="E-mail"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              contato@masciaarquitetura.com.br
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Marcelo Mascia Arquitetura. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
