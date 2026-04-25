import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const PortfolioSection = () => {
  const portfolioItems = [
    {
      title: 'Визитные карточки',
      category: 'Цветная печать',
      size: 'large',
    },
    {
      title: 'Буклеты',
      category: 'Цветная печать',
      size: 'medium',
    },
    {
      title: 'Листовки',
      category: 'Цветная печать',
      size: 'medium',
    },
    {
      title: 'Каталоги',
      category: 'Цветная печать',
      size: 'medium',
    },
    {
      title: 'Календари',
      category: 'Цветная печать',
      size: 'small',
    },
    {
      title: 'Наклейки',
      category: 'Цветная печать',
      size: 'small',
    },
  ];

  return (
    <section className="section-padding bg-eggshell">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold text-sm uppercase tracking-wider font-medium">Наши работы</span>
          <h2 className="mt-4 text-charcoal">Галерея качества</h2>
          <div className="accent-line mx-auto mt-6" />
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden bg-charcoal/5 cursor-pointer ${
                item.size === 'large'
                  ? 'col-span-2 row-span-2 aspect-square'
                  : item.size === 'medium'
                  ? 'aspect-[4/3]'
                  : 'aspect-square'
              }`}
            >
              {/* Placeholder Image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-2 border-2 border-charcoal/20 flex items-center justify-center group-hover:border-gold transition-colors">
                    <span className="text-charcoal/30 text-xs">{item.title[0]}</span>
                  </div>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-charcoal/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center p-4">
                  <span className="text-gold text-xs uppercase tracking-wider">{item.category}</span>
                  <h4 className="text-eggshell text-lg md:text-xl font-semibold mt-2">{item.title}</h4>
                </div>
              </div>

              {/* Scale Effect */}
              <div className="absolute inset-0 transition-transform duration-300 group-hover:scale-105" />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            to="/color-printing"
            className="btn-secondary"
          >
            Смотреть все работы
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
