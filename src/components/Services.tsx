import { Settings, Cpu, Zap, Wrench, LineChart, Shield } from 'lucide-react';

const services = [
  {
    icon: Settings,
    title: 'Automatisme Industriel',
    description: 'Conception et programmation d\'automates (PLC) pour optimiser vos lignes de production et automatiser vos processus.',
  },
  {
    icon: Cpu,
    title: 'Supervision & SCADA',
    description: 'Développement de systèmes de supervision pour le contrôle et la surveillance en temps réel de vos installations.',
  },
  {
    icon: Zap,
    title: 'Électrotechnique',
    description: 'Études électriques, dimensionnement, conception d\'armoires et câblage pour installations industrielles.',
  },
  {
    icon: Wrench,
    title: 'Maintenance Préventive',
    description: 'Services de maintenance pour garantir la fiabilité et la durabilité de vos équipements industriels.',
  },
  {
    icon: LineChart,
    title: 'Optimisation de Process',
    description: 'Analyse et amélioration de vos processus industriels pour augmenter la productivité et réduire les coûts.',
  },
  {
    icon: Shield,
    title: 'Sécurité Machines',
    description: 'Mise en conformité et intégration de systèmes de sécurité selon les normes en vigueur.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nos Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des solutions complètes pour répondre à tous vos besoins en automatisation et électrotechnique industrielle
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-gray-50 rounded-xl hover:bg-blue-50 transition-all duration-300 hover:shadow-xl border border-transparent hover:border-blue-200"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <service.icon className="text-blue-600 group-hover:text-white transition-colors" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
