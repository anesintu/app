import { Link } from 'react-router-dom';
import { 
  Palette, 
  Printer, 
  ArrowRight 
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Palette,
      title: 'Цветная печать',
      description: 'Визитки, листовки, буклеты, каталоги и другая полиграфическая продукция премиум-качества',
      features: ['3600 dpi', 'до SRA3', '62-350 г/м²'],
      path: '/color-printing',
      featured: true,
    },
    {
      icon: Printer,
      title: 'Черно-белая печать',
      description: 'Журналы, книги учета, бланки, документация',
      features: ['100 стр/мин', 'SRA3', '40-300 г/м²'],
      path: '/bw-printing',
      featured: false,
    },
  ];

  return (
    <section id="services" className="section-padding bg-eggshell">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold text-sm uppercase tracking-wider font-medium">Наши услуги</span>
          <h2 className="mt-4 text-charcoal">Полный комплекс полиграфических услуг</h2>
          <div className="accent-line mx-auto mt-6" />
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.path}
              className={`group relative bg-eggshell border border-charcoal/10 p-8 transition-all duration-300 hover:shadow-lift hover:-translate-y-1 ${
                service.featured ? 'md:row-span-1' : ''
              }`}
            >
              {/* Left Border Accent on Hover */}
              <div className="absolute left-0 top-0 w-0 h-full bg-gold transition-all duration-300 group-hover:w-1" />

              <div className="relative">
                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center border-2 border-charcoal/20 text-charcoal group-hover:border-gold group-hover:text-gold transition-colors mb-6">
                  <service.icon className="w-7 h-7" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3 className="text-charcoal mb-3 group-hover:text-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-charcoal-70 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature, fIndex) => (
                    <span
                      key={fIndex}
                      className="px-3 py-1 bg-charcoal/5 text-charcoal/70 text-xs font-mono"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <span className="inline-flex items-center gap-2 text-sm font-medium text-charcoal group-hover:text-gold transition-colors">
                  Подробнее
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
