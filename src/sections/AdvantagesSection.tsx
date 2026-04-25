import { 
  Clock, 
  Award, 
  Calendar, 
  Scissors, 
  Truck, 
  CreditCard 
} from 'lucide-react';

const AdvantagesSection = () => {
  const advantages = [
    {
      icon: Clock,
      number: '2',
      unit: 'часа',
      title: 'Оперативность',
      description: 'Срочное изготовление заказов от 2 часов',
    },
    {
      icon: Award,
      number: '3600',
      unit: 'dpi',
      title: 'Качество',
      description: 'Профессиональное оборудование премиум-класса',
    },
    {
      icon: Calendar,
      number: '2010',
      unit: 'год',
      title: 'Опыт',
      description: 'Более 15 лет на рынке полиграфии',
    },
    {
      icon: Scissors,
      number: '',
      unit: '',
      title: 'Послепечатная обработка',
      description: 'Широкий спектр послепечатной обработки',
    },
    {
      icon: Truck,
      number: '',
      unit: '',
      title: 'Доставка',
      description: 'По Гродно и Гродненской области',
    },
    {
      icon: CreditCard,
      number: '',
      unit: '',
      title: 'Безналичный расчет',
      description: 'Работаем с юридическими лицами',
    },
  ];

  return (
    <section className="section-padding bg-eggshell">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold text-sm uppercase tracking-wider font-medium">Почему мы</span>
          <h2 className="mt-4 text-charcoal">Решения полиграфии для ваших задач</h2>
          <div className="accent-line mx-auto mt-6" />
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-charcoal/10">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="bg-eggshell p-8 md:p-10 text-center group hover:bg-charcoal/5 transition-colors"
            >
              {/* Icon Circle */}
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center border-2 border-gold rounded-full group-hover:bg-gold/10 transition-colors">
                <advantage.icon className="w-8 h-8 text-gold" strokeWidth={1.5} />
              </div>

              {/* Number */}
              {advantage.number && (
                <div className="mb-2">
                  <span className="font-heading text-gold text-4xl font-bold">
                    {advantage.number}
                  </span>
                  {advantage.unit && (
                    <span className="text-gold text-lg ml-1">{advantage.unit}</span>
                  )}
                </div>
              )}

              {/* Title */}
              <h3 className="text-charcoal text-lg font-semibold mb-3">
                {advantage.title}
              </h3>

              {/* Description */}
              <p className="text-charcoal/70 text-sm leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
