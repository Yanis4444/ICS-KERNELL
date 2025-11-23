import { Link } from 'react-router-dom';
import { ArrowLeft, Star } from 'lucide-react';
import ProjectsComponent from '../components/Projects';

export default function ProjectsPage() {
  const testimonials = [
    {
      name: 'Jean Dupont',
      company: 'Groupe Alimentaire France',
      text: 'AutoTech a transformé notre ligne de production. Leur expertise et leur réactivité ont dépassé nos attentes.',
      rating: 5,
    },
    {
      name: 'Marie Martin',
      company: 'Pharma Solutions',
      text: 'Un accompagnement professionnel du début à la fin. Nous avons gagné 30% en productivité grâce à leur système SCADA.',
      rating: 5,
    },
    {
      name: 'Pierre Bernard',
      company: 'Industries Métallurgiques',
      text: 'L\'équipe d\'AutoTech a su nous écouter et proposer une solution vraiment adaptée à nos besoins spécifiques.',
      rating: 5,
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
            Nos Réalisations
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Explorez nos projets réussis dans divers secteurs industriels et découvrez comment nous avons transformé les défis en succès.
          </p>
        </div>
      </section>

      <ProjectsComponent />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">
            Témoignages de nos Clients
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-xl transition-shadow">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>

                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour discuter de votre projet et découvrir comment nous pouvons vous aider à atteindre vos objectifs industriels.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-bold hover:bg-blue-50 transition-all"
          >
            Demander un devis
          </Link>
        </div>
      </section>
    </>
  );
}
