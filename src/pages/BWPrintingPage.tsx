import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronDown, Copy, Check } from 'lucide-react';

const BWPrintingPage = () => {
  const [openAccordion, setOpenAccordion] = useState<string | null>('registers');
  const [copied, setCopied] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

  const breadcrumbs = [
    { name: 'Главная', path: '/' },
    { name: 'Черно-белая печать', path: '/bw-printing', current: true },
  ];

  const serviceGroups = [
    {
      id: 'registers',
      title: 'Журналы и книги учета',
      items: ['Журналы регистрации', 'Книги учета', 'Бухгалтерские журналы', 'Индивидуальные заказы по Вашему образцу'],
    },
    {
      id: 'forms',
      title: 'Бланочная продукция',
      items: ['Накладные', 'Счета-фактуры', 'Товарные чеки', 'Индивидуальные заказы по Вашему образцу'],
    },
    {
      id: 'docs',
      title: 'Распечатка многостраничных чёрно-белых документов от 50 страниц',
      items: ['Инструкции', 'Методички', 'Рефераты', 'Дипломные работы'],
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
4. Цветность: Черно-белая
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
            <h1 className="text-eggshell mb-6">Черно-белая печать</h1>
            <p className="text-eggshell/70 text-lg md:text-xl leading-relaxed">
              Высокоскоростная и качественная чёрно-белая печать больших тиражей на профессиональном оборудовании Konica Minolta.
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
                <p>Оперативная печать чёрно-белой бланочной продукции, журналов учёта</p>
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
                    src="./images/bw-printing.webp"
                    alt="Konica Minolta AccurioPrint 2100"
                    className="w-full h-auto object-contain rounded"
                  />
                </div>
                <div className="equipment-specs">
                  <div className="spec-item">
                    <strong>100 стр/мин</strong>
                    <span>Скорость печати</span>
                  </div>
                  <div className="spec-item">
                    <strong>1200×1200 dpi</strong>
                    <span>Разрешение</span>
                  </div>
                  <div className="spec-item">
                    <strong>SRA3</strong>
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
                    Мы печатаем на профессиональном черно-белом принтере Konica Minolta AccurioPrint 2100. Высокоскоростной, высокопроизводительный, высококачественный принтер формата SRA3, печатает со скоростью 100 стр/мин с непревзойденным качеством печати.
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

export default BWPrintingPage;
