import { Star, Quote } from 'lucide-react';

const TrustSection = () => {
  const testimonials = [
    {
      text: 'Отличная типография! Заказывали визитки для компании — качество на высоте, сроки соблюдены. Рекомендую!',
      author: 'Александр К.',
      company: 'ООО "СтройПроект"',
    },
    {
      text: 'Работаем с ЛитАРы уже несколько лет. Всегда качественно, быстро и по разумным ценам.',
      author: 'Марина П.',
      company: 'ИП Петрова',
    },
    {
      text: 'Заказывали буклеты для выставки. Результат превзошел ожидания! Спасибо за профессионализм.',
      author: 'Дмитрий С.',
      company: 'ООО "ТехноСофт"',
    },
  ];

  const clients = [
    'ООО "ГродноАзот"',
    'ООО "СтройПроект"',
    'ИП Петрова',
    'ООО "ТехноСофт"',
    'ООО "БелТорг"',
  ];

  return (
    <section className="section-padding bg-eggshell border-t border-charcoal/10">
      <div className="container-custom">
        {/* Rating */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 fill-gold text-gold" />
            ))}
          </div>
          <p className="text-charcoal text-lg font-medium">Рейтинг 5.0 на основе 12 отзывов</p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-eggshell border border-charcoal/10 p-8 relative"
            >
              <Quote className="w-8 h-8 text-gold/30 absolute top-6 right-6" />
              <p className="text-charcoal/80 text-sm leading-relaxed mb-6">
                "{testimonial.text}"
              </p>
              <div>
                <p className="text-charcoal font-medium">{testimonial.author}</p>
                <p className="text-charcoal/50 text-sm">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Clients */}
        <div className="text-center">
          <p className="text-charcoal/50 text-sm uppercase tracking-wider mb-6">Нам доверяют</p>
          <div className="flex flex-wrap justify-center gap-8">
            {clients.map((client, index) => (
              <span
                key={index}
                className="text-charcoal/40 font-medium text-sm"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
