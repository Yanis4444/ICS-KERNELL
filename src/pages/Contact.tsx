import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ContactComponent from '../components/Contact';

export default function ContactPage() {
  return (
    <>
      <section className="pt-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link to="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8 group">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Retour à l'accueil
          </Link>

          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Nous Contacter
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Avez-vous un projet en tête ? Notre équipe est à votre disposition pour discuter de vos besoins et vous proposer les meilleures solutions.
          </p>
        </div>
      </section>

      <ContactComponent />
    </>
  );
}
