import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronDown, Copy, Check } from 'lucide-react';

const ColorPrintingPage = () => {
  const [openAccordion, setOpenAccordion] = useState<string | null>('marketing');
  const [copied, setCopied] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

  const breadcrumbs = [
    { name: 'Главная', path: '/' },
    { name: 'Цветная печать', path: '/color-printing', current: true },
  ];

  const serviceGroups = [
    {
      id: 'marketing',
      title: 'Рекламная полиграфия',
      items: ['Листовки', 'Флаеры', 'Буклеты', 'Брошюры', 'Плакаты'],
    },
    {
      id: 'corporate',
      title: 'Корпоративная полиграфия',
      items: ['Визитки', 'Сертификаты', 'Дипломы', 'Грамоты', 'Блокноты', 'Этикетки'],
    },
    {
      id: 'image',
      title: 'Имиджевая полиграфия',
      items: ['Календари', 'Каталоги', 'Пригласительные', 'Открытки', 'Цветные журналы', 'Меню для кафе и ресторанов'],
    },
    {
      id: 'editions',
      title: 'Печать книг и брошюр',
      items: ['Книги в мягком переплёте', 'Книги в твёрдом переплёте', 'Брошюры'],
    },
    {
      id: 'special',
      title: 'Цветная распечатка',
      items: ['Печать на дизайнерской бумаге', 'Печать на самоклейке', 'Распечатка цветных многостраничных документов (от 50 страниц)'],
    },
  ];

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const copyTemplate = () => {
    const template = `Здравствуйте! Прошу рассчитать стоимость:

1. Тип продукции: _____________
2. Количество страниц: ________
3. Формат (размер): ____________
4. Цветность: Цветная
5. Вид и плотность бумаги: _____
6. Послепечатная обработка: ____
7. Дополнительные требования: __
8. Тираж: _____________ экз.

Контакт для связи: _____________`;
    navigator.clipboard.writeText(template);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-charcoal">
        <div className="container-custom">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm mb-8">
            {breadcrumbs.map((crumb, index) => (
              <div key={index} className="flex items-center gap-2">
                {index > 0 && <ChevronRight className="w-4 h-4 text-gold" />}
                {crumb.current ? (
                  <span className="text-gold">{crumb.name}</span>
                ) : (
                  <Link to={crumb.path} className="text-eggshell/70 hover:text-gold transition-colors">
                    {crumb.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-eggshell mb-6">Цветная печать</h1>
            <p className="text-eggshell/70 text-lg md:text-xl leading-relaxed">
              Оперативная и качественная печать широкого ассортимента полиграфической продукции на профессиональном оборудовании Konica Minolta.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="section-padding bg-eggshell">
        <div className="container-custom">
          <div className="print-grid">
            {/* Left Column - Content */}
            <div className="print-content">
              <h2 className="text-charcoal mb-8">Виды продукции</h2>
              
              {/* Accordion Groups */}
              <div className="service-groups">
                {serviceGroups.map((group) => (
                  <div key={group.id} className="service-group">
                    <button
                      onClick={() => toggleAccordion(group.id)}
                      className="service-group__header"
                    >
                      <span>{group.title}</span>
                      <ChevronDown 
                        className={`w-5 h-5 transition-transform ${openAccordion === group.id ? 'rotate-180' : ''}`} 
                      />
                    </button>
                    {openAccordion === group.id && (
                      <div className="service-group__content">
                        <div className="service-list">
                          {group.items.map((item, index) => (
                            <span key={index} className="service-tag">{item}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Highlight Box */}
              <div className="highlight-box">
                <p>Печать больших тиражей «сегодня на сегодня»</p>
              </div>

              {/* Copy Template */}
              <div className="template-section">
                <h3 className="text-charcoal text-lg mb-2">Шаблон заявки</h3>
                <p className="text-charcoal/60 text-sm mb-4">Скопируйте текст, заполните данные и отправьте в мессенджер:</p>
                <div className="flex flex-wrap gap-3 mb-4">
                  <button onClick={copyTemplate} className="copy-btn">
                    {copied ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Скопировано!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Скопировать шаблон</span>
                      </>
                    )}
                  </button>
                  <a href="viber://chat?number=+375333063068" className="msg-btn viber">
                    Viber
                  </a>
                  <a href="https://t.me/+375333063068" className="msg-btn telegram">
                    Telegram
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Equipment */}
            <div className="print-equipment">
              <div className="bg-white border border-charcoal/10 text-charcoal p-8">
                <div className="flex justify-center mb-4">
                  <img
                    src="./images/KONICA.webp"
                    alt="Konica Minolta"
                    className="h-32 object-contain opacity-95"
                  />
                </div>
                <div className="bg-white rounded-lg overflow-hidden p-2 mb-6">
                  <img
                    src="./images/color-printing.webp"
                    alt="Konica Minolta AccurioPress C4080"
                    className="w-full h-auto object-contain rounded"
                  />
                </div>
                <div className="equipment-specs">
                  <div className="spec-item">
                    <strong>80 стр/мин</strong>
                    <span>Скорость печати</span>
                  </div>
                  <div className="spec-item">
                    <strong>3600×2400 dpi</strong>
                    <span>Разрешение</span>
                  </div>
                  <div className="spec-item">
                    <strong>SRA3+</strong>
                    <span>Макс. формат</span>
                  </div>
                </div>
                <button
                  onClick={() => setShowDescription(!showDescription)}
                  className="mt-6 w-full py-3 border border-charcoal/30 text-charcoal font-medium hover:bg-charcoal/10 transition-colors"
                >
                  {showDescription ? 'Скрыть описание' : 'Описание'}
                </button>
                {showDescription && (
                  <p className="mt-4 text-sm leading-relaxed text-charcoal/90">
                    В нашей типографии установлена лучшая цифровая печатная машина в городе Гродно — Konica Minolta AccurioPress C4080, которая обеспечивает печать до 80 страниц в минуту с разрешением 3600x2400 dpi, автоматическое управление цветом и печать на широком спектре бумаг (мелованная, каландрированная, офсетная, дизайнерская, самоклеющаяся, прозрачная цифровая пленка) размером SRA3+ (330х480 мм), плотностью от 60 до 360 гр.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ColorPrintingPage;
