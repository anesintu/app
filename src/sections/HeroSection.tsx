import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Gauge, Zap, Truck } from 'lucide-react';

const HeroSection = () => {
  const uspItems = [
    { icon: Clock, text: 'С 2010 года' },
    { icon: Gauge, text: '3600 dpi' },
    { icon: Zap, text: 'От 2 часов' },
    { icon: Truck, text: 'Доставка' },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 grid-pattern overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 items-start">
          {/* Left Column - Content (60%) */}
          <div className="lg:col-span-3 space-y-8">
            {/* H1 */}
            <h1 className="text-charcoal leading-tight">
              Оперативная полиграфия и высококачественная цифровая печать в Гродно
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-charcoal-85 max-w-2xl leading-relaxed">
              Полный комплекс полиграфических услуг — от разработки макета до готового полиграфического изделия любой сложности. Печать тиражей «сегодня на сегодня».
            </p>

            {/* USP Items */}
            <div className="flex flex-wrap gap-6">
              {uspItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-charcoal-85"
                >
                  <item.icon className="w-5 h-5 text-gold" />
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4 pt-4">
              <Link
                to="/contacts"
                className="btn-primary"
              >
                Получить расчет
              </Link>
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group flex items-center gap-2 text-charcoal font-medium hover:text-gold transition-colors"
              >
                Посмотреть услуги
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column - Graphic Blocks (40%) */}
          <div className="lg:col-span-2 space-y-5">
            {/* Logo */}
            <div className="flex justify-center">
              <img
                src="./images/KONICA.webp"
                alt="Konica Minolta"
                className="h-28 md:h-32 object-contain opacity-90"
              />
            </div>

            {/* Color Machine */}
            <div className="tech-frame bg-white/40 p-5 md:p-6 flex flex-col items-center">
              <img
                src="./images/color-printing.webp"
                alt="Konica Minolta AccurioPress C4080"
                className="w-full h-auto max-h-[200px] object-contain"
              />
              <span className="mt-4 text-xs font-mono text-charcoal/70 text-center tracking-wider uppercase">
                AccurioPress C4080
              </span>
            </div>

            {/* BW Machine */}
            <div className="tech-frame bg-white/40 p-5 md:p-6 flex flex-col items-center">
              <img
                src="./images/bw-printing.webp"
                alt="Konica Minolta AccurioPrint 2100"
                className="w-full h-auto max-h-[200px] object-contain"
              />
              <span className="mt-4 text-xs font-mono text-charcoal/70 text-center tracking-wider uppercase">
                AccurioPrint 2100
              </span>
            </div>
          </div>
        </div>

        {/* Two Machine Specs Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          <div className="bg-white border border-charcoal/10 p-6 flex items-center gap-6">
            <div className="w-16 h-16 flex-shrink-0 bg-gold/10 flex items-center justify-center border border-gold/30">
              <span className="font-mono text-gold text-sm font-bold">C4080</span>
            </div>
            <div className="flex-1">
              <h3 className="text-charcoal text-base font-semibold mb-2">Konica Minolta AccurioPress C4080</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-charcoal/5 text-charcoal/70 text-xs font-mono">80 стр/мин</span>
                <span className="px-3 py-1 bg-charcoal/5 text-charcoal/70 text-xs font-mono">3600×2400 dpi</span>
                <span className="px-3 py-1 bg-charcoal/5 text-charcoal/70 text-xs font-mono">SRA3+</span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-charcoal/10 p-6 flex items-center gap-6">
            <div className="w-16 h-16 flex-shrink-0 bg-charcoal/10 flex items-center justify-center border border-charcoal/30">
              <span className="font-mono text-charcoal text-sm font-bold">2100</span>
            </div>
            <div className="flex-1">
              <h3 className="text-charcoal text-base font-semibold mb-2">Konica Minolta AccurioPrint 2100</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-charcoal/5 text-charcoal/70 text-xs font-mono">100 стр/мин</span>
                <span className="px-3 py-1 bg-charcoal/5 text-charcoal/70 text-xs font-mono">1200×1200 dpi</span>
                <span className="px-3 py-1 bg-charcoal/5 text-charcoal/70 text-xs font-mono">SRA3</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hidden lg:flex flex-col items-center gap-2 mt-16">
          <span className="text-xs text-charcoal/50 uppercase tracking-wider">Листайте вниз</span>
          <div className="w-px h-12 bg-charcoal/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-4 bg-gold animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
