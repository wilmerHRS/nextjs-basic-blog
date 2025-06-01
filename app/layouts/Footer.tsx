import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h4 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              DevBlog
            </h4>
            <p className="text-gray-400 mb-4">
              Tu fuente de conocimiento sobre desarrollo web moderno. Artículos,
              tutoriales y las últimas tendencias en tecnología.
            </p>
          </div>
          <div>
            <h5 className="font-semibold mb-4">Enlaces</h5>
            <div className="space-y-2 text-gray-400">
              <a href="#" className="block hover:text-white transition-colors">
                Sobre nosotros
              </a>
              <a href="#" className="block hover:text-white transition-colors">
                Contacto
              </a>
              <a href="#" className="block hover:text-white transition-colors">
                Política de privacidad
              </a>
            </div>
          </div>
          <div>
            <h5 className="font-semibold mb-4">Síguenos</h5>
            <div className="space-y-2 text-gray-400">
              <a href="#" className="block hover:text-white transition-colors">
                Twitter
              </a>
              <a href="#" className="block hover:text-white transition-colors">
                LinkedIn
              </a>
              <a href="#" className="block hover:text-white transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 DevBlog. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
