import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ServicesComponent from '../components/Services';

export default function ServicesPage() {
  return (
    <>
      <section className="pt-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link to="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8 group">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Retour à l'accueil
          </Link>

          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Nos Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Découvrez l'ensemble de nos solutions d'automatisation et d'électrotechnique industrielle conçues pour transformer vos processus de production.
          </p>
        </div>
      </section>

      <ServicesComponent />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Pourquoi nous choisir ?
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Expertise Reconnue
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Notre équipe d'ingénieurs dispose de plus de 15 ans d'expérience dans le secteur industriel. Nous maîtrisons les dernières technologies et normes en automatisation et électrotechnique.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span className="text-gray-700">Ingénieurs certifiés et qualifiés</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span className="text-gray-700">Maîtrise des standards industriels</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span className="text-gray-700">Formation continue des équipes</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Accompagnement Complet
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                De la conception à la mise en service et au-delà, nous vous accompagnons à chaque étape de votre projet pour assurer son succès et votre satisfaction.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span className="text-gray-700">Étude personnalisée de vos besoins</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span className="text-gray-700">Suivi de projet rigoureux</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span className="text-gray-700">Support technique continu</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
