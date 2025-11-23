import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Automatisation Ligne de Production',
    category: 'Agroalimentaire',
    image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Conception et mise en œuvre d\'un système d\'automatisation complet pour une ligne d\'embouteillage.',
  },
  {
    title: 'Système SCADA Industriel',
    category: 'Pharmaceutique',
    image: 'https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Développement d\'une interface de supervision pour le contrôle de production en temps réel.',
  },
  {
    title: 'Rénovation Électrique',
    category: 'Métallurgie',
    image: 'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Refonte complète de l\'installation électrique et mise en conformité sécurité.',
  },
  {
    title: 'Robotisation Chaîne d\'Assemblage',
    category: 'Automobile',
    image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Intégration de robots collaboratifs pour optimiser le processus d\'assemblage.',
  },
  {
    title: 'Supervision Énergétique',
    category: 'Énergie',
    image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Mise en place d\'un système de monitoring énergétique pour optimiser la consommation.',
  },
  {
    title: 'Contrôle Qualité Automatisé',
    category: 'Électronique',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Développement d\'un système de contrôle qualité par vision industrielle.',
  },
];

export default function Projects() {
  return (
    <section id="projets" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nos Réalisations
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez quelques-uns de nos projets réussis dans différents secteurs industriels
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
                  style={{ backgroundImage: `url(${project.image})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <button className="flex items-center gap-2 text-blue-600 font-medium hover:gap-3 transition-all">
                  En savoir plus
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
