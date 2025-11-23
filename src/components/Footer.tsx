import { Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white text-xl font-bold mb-4">
              <span className="text-blue-500">AUTO</span>TECH
            </h3>
            <p className="text-sm leading-relaxed mb-4">
              Votre partenaire de confiance en automatisme industriel et électrotechnique depuis plus de 15 ans.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Mail size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-500 transition-colors">Automatisme Industriel</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Supervision SCADA</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Électrotechnique</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Maintenance</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Optimisation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Secteurs</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-500 transition-colors">Agroalimentaire</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Pharmaceutique</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Automobile</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Métallurgie</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Énergie</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="flex-shrink-0 mt-1" />
                <span>123 Avenue de l'Industrie<br />75001 Paris, France</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="flex-shrink-0" />
                <span>+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="flex-shrink-0" />
                <span>contact@autotech.fr</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>&copy; {currentYear} AutoTech. Tous droits réservés.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-blue-500 transition-colors">Mentions légales</a>
              <a href="#" className="hover:text-blue-500 transition-colors">Politique de confidentialité</a>
              <a href="#" className="hover:text-blue-500 transition-colors">CGV</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
