import { Link } from 'react-router-dom';
import { ArrowLeft, Award, Users, Zap, TrendingUp } from 'lucide-react';
import AboutComponent from '../components/About';

export default function AboutPage() {
  const timeline = [
    {
      year: '2008',
      title: 'Création de AutoTech',
      description: 'Fondation de l\'entreprise avec une équipe de 3 ingénieurs passionnés par l\'automatisation.',
    },
    {
      year: '2012',
      title: 'Expansion régionale',
      description: 'Ouverture d\'une deuxième agence pour mieux servir nos clients dans toute la région.',
    },
    {
      year: '2017',
      title: 'Innovation technologique',
      description: 'Investissement dans les nouvelles technologies : IoT, cloud, et intelligence artificielle.',
    },
    {
      year: '2023',
      title: 'Leadership du marché',
      description: 'Reconnaissance en tant que leader incontesté de l\'automatisme industriel en France.',
    },
  ];

  return (
    <>
      <section className="pt-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link to="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8 group">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Retour à l'accueil
          </Link>

          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            À Propos de AutoTech
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Découvrez l'histoire, les valeurs et la vision de notre entreprise pionnière en automatisation industrielle.
          </p>
        </div>
      </section>

      <AboutComponent />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">
            Notre Parcours
          </h2>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-blue-400"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className="relative">
                  <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className="w-1/2 px-8">
                      <div className={`text-right ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                        <div className="text-3xl font-bold text-blue-600 mb-2">{item.year}</div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>

                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-600 border-4 border-white rounded-full shadow-lg"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">
            Nos Valeurs Fondamentales
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur p-8 rounded-xl">
              <Award className="text-white mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-2">Excellence</h3>
              <p className="text-blue-100">Nous visons l'excellence dans chaque projet, sans compromis sur la qualité.</p>
            </div>

            <div className="bg-white/10 backdrop-blur p-8 rounded-xl">
              <Users className="text-white mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-2">Partenariat</h3>
              <p className="text-blue-100">Vos succès sont nos succès. Nous travaillons main dans la main avec nos clients.</p>
            </div>

            <div className="bg-white/10 backdrop-blur p-8 rounded-xl">
              <Zap className="text-white mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-2">Innovation</h3>
              <p className="text-blue-100">Nous embrassons les nouvelles technologies pour offrir des solutions futures.</p>
            </div>

            <div className="bg-white/10 backdrop-blur p-8 rounded-xl">
              <TrendingUp className="text-white mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-2">Croissance</h3>
              <p className="text-blue-100">Nous vous aidons à grandir et à développer votre productivité.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
