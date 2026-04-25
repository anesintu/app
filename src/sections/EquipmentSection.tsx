import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';

const EquipmentSection = () => {
  const [activeTab, setActiveTab] = useState<'color' | 'bw'>('color');

  const equipment = {
    color: [
      {
        name: 'Konica Minolta AccurioPrint C3070L',
        type: 'Цветной цифровой принтер',
        image: null,
        specs: {
          format: 'до 330 × 762 мм',
          weight: '62-350 г/м²',
          speed: '71 стр/мин',
          resolution: '3600 dpi',
        },
        features: ['Дуплекс', 'Непревзойденное качество цветопередачи', 'Процессор Intel Core i5'],
      },
    ],
    bw: [
      {
        name: 'Konica Minolta AccurioPrint 2100',
        type: 'Черно-белый цифровой принтер',
        image: null,
        specs: {
          format: 'до SRA3',
          weight: '40-300 г/м²',
          speed: '100 стр/мин',
          resolution: '1200×1200 dpi',
        },
        features: ['Высокая производительность', 'Идеален для тиражирования документации'],
      },
    ],
  };

  const postPress = [
    {
      name: 'Гидравлический резак BW-R5209',
      specs: {
        width: '520 мм',
        height: '880 листов',
        accuracy: '0.1 мм',
      },
    },
    {
      name: 'Рулонный ламинатор Sky Lam 380 Super',
      specs: {
        width: '350 мм',
        speed: '6 м/мин',
        thickness: '13 мм',
      },
    },
  ];

  return (
    <section className="section-padding bg-charcoal">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold text-sm uppercase tracking-wider font-medium">Технические спецификации</span>
          <h2 className="mt-4 text-eggshell">Профессиональное оборудование</h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mt-6" />
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('color')}
            className={`px-6 py-3 text-sm font-medium uppercase tracking-wider transition-all ${
              activeTab === 'color'
                ? 'bg-gold text-charcoal'
                : 'bg-transparent border border-eggshell/30 text-eggshell hover:border-gold hover:text-gold'
            }`}
          >
            Цветная печать
          </button>
          <button
            onClick={() => setActiveTab('bw')}
            className={`px-6 py-3 text-sm font-medium uppercase tracking-wider transition-all ${
              activeTab === 'bw'
                ? 'bg-gold text-charcoal'
                : 'bg-transparent border border-eggshell/30 text-eggshell hover:border-gold hover:text-gold'
            }`}
          >
            Ч/Б печать
          </button>
        </div>

        {/* Equipment Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Image */}
          <div className="tech-frame">
            <div className="aspect-[4/3] bg-eggshell/5 flex items-center justify-center">
              <div className="text-center">
                <div className="w-64 h-40 bg-eggshell/10 mx-auto mb-4 flex items-center justify-center border border-eggshell/20">
                  <span className="text-eggshell/30 text-sm">{equipment[activeTab][0].name}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Specs */}
          <div className="space-y-6">
            <div>
              <span className="text-gold text-xs uppercase tracking-wider">{equipment[activeTab][0].type}</span>
              <h3 className="text-eggshell mt-2">{equipment[activeTab][0].name}</h3>
            </div>

            {/* Key Numbers */}
            <div className="grid grid-cols-2 gap-4">
              <div className="border border-gold/30 p-4">
                <span className="font-mono text-gold text-2xl font-semibold">
                  {equipment[activeTab][0].specs.speed}
                </span>
                <p className="text-eggshell/60 text-xs mt-1">Скорость печати</p>
              </div>
              <div className="border border-gold/30 p-4">
                <span className="font-mono text-gold text-2xl font-semibold">
                  {equipment[activeTab][0].specs.resolution}
                </span>
                <p className="text-eggshell/60 text-xs mt-1">Разрешение</p>
              </div>
            </div>

            {/* Detailed Specs */}
            <div className="space-y-2">
              {Object.entries(equipment[activeTab][0].specs).map(([key, value]) => (
                <div key={key} className="flex justify-between py-2 border-b border-eggshell/10">
                  <span className="text-eggshell/60 text-sm capitalize">
                    {key === 'format' && 'Формат'}
                    {key === 'weight' && 'Плотность бумаги'}
                    {key === 'speed' && 'Скорость'}
                    {key === 'resolution' && 'Разрешение'}
                  </span>
                  <span className="font-mono text-eggshell text-sm">{value}</span>
                </div>
              ))}
            </div>

            {/* Features */}
            <div className="space-y-2">
              {equipment[activeTab][0].features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-eggshell/70 text-sm">
                  <Check className="w-4 h-4 text-gold" />
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Post-Press Equipment */}
        <div className="border-t border-eggshell/10 pt-12">
          <h3 className="text-eggshell text-xl mb-8 text-center">Постпечатное оборудование</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {postPress.map((item, index) => (
              <div key={index} className="bg-eggshell/5 p-6 border border-eggshell/10">
                <h4 className="text-eggshell font-medium mb-4">{item.name}</h4>
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(item.specs).map(([key, value]) => (
                    <div key={key}>
                      <span className="font-mono text-gold text-sm">{value}</span>
                      <p className="text-eggshell/50 text-xs mt-1">
                        {key === 'width' && 'Ширина'}
                        {key === 'height' && 'Высота стопы'}
                        {key === 'accuracy' && 'Точность'}
                        {key === 'speed' && 'Скорость'}
                        {key === 'thickness' && 'Толщина'}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/equipment"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gold text-gold font-medium uppercase tracking-wider text-sm hover:bg-gold hover:text-charcoal transition-all"
          >
            Подробнее об оборудовании
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EquipmentSection;
