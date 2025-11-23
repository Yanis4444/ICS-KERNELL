import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import About from '../components/About';
import Projects from '../components/Projects';

export default function Home() {
  return (
    <>
      <section id="accueil" className="pt-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  Solutions industrielles innovantes
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Experts en automatisme et électrotechnique
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Nous concevons et réalisons des solutions d'automatisation sur mesure pour optimiser vos processus industriels et améliorer votre productivité.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/services"
                  className="px-8 py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all hover:shadow-lg flex items-center justify-center gap-2 group"
                >
                  Découvrir nos services
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-white text-gray-900 rounded-lg font-medium border-2 border-gray-200 hover:border-blue-600 transition-all"
                >
                  Nous contacter
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-90"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="text-4xl font-bold text-blue-600">15+</div>
                <div className="text-sm text-gray-600 font-medium">Années d'expérience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Services />
      <About />
      <Projects />
    </>
  );
}
