import { CheckCircle2, Target, Award, Users } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Notre Mission',
    description: 'Accompagner les industriels dans leur transformation digitale en proposant des solutions d\'automatisation innovantes et performantes.',
  },
  {
    icon: Award,
    title: 'Expertise Reconnue',
    description: 'Une équipe d\'ingénieurs qualifiés et certifiés, maîtrisant les dernières technologies en automatisme et électrotechnique.',
  },
  {
    icon: Users,
    title: 'Approche Collaborative',
    description: 'Un partenariat à long terme basé sur l\'écoute, le conseil et un accompagnement personnalisé à chaque étape.',
  },
];

const stats = [
  { value: '200+', label: 'Projets réalisés' },
  { value: '50+', label: 'Clients satisfaits' },
  { value: '15+', label: 'Années d\'expérience' },
  { value: '98%', label: 'Taux de satisfaction' },
];

export default function About() {
  return (
    <section id="apropos" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Une expertise au service de l'industrie
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Depuis plus de 15 ans, nous accompagnons les entreprises industrielles dans leurs projets d'automatisation et d'électrotechnique. Notre engagement : fournir des solutions fiables, performantes et adaptées à vos besoins spécifiques.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Notre approche combine expertise technique, innovation et proximité pour garantir le succès de vos projets, de la conception à la mise en service.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                <p className="text-gray-700">Solutions sur mesure adaptées à votre secteur d'activité</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                <p className="text-gray-700">Respect des délais et des budgets convenus</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                <p className="text-gray-700">Support technique et maintenance réactive</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-80"></div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-blue-600 rounded-2xl p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-blue-100 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
