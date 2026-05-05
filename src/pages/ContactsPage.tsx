import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Copy, 
  Check,
  ChevronRight,
  MessageCircle
} from 'lucide-react';

const ContactsPage = () => {
  const [copied, setCopied] = useState(false);

  const breadcrumbs = [
    { name: 'Главная', path: '/' },
    { name: 'Контакты', path: '/contacts', current: true },
  ];

  const copyTemplate = () => {
    const template = `Здравствуйте! Прошу рассчитать стоимость:

1. Тип продукции: _____________
2. Количество страниц: ________
3. Формат (размер): ____________
4. Цветность: □ Цветная / □ Черно-белая
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
    <main className="pt-24" id="contacts">
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

          <h1 className="text-eggshell">Контакты</h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-eggshell">
        <div className="container-custom">
          <div className="contacts-grid">
            {/* Left Column - Contact Info */}
            <div className="contacts-info">
              {/* Address */}
              <div className="contact-block">
                <h3 className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-gold" />
                  Адрес
                </h3>
                <p>230025, Гродно, ул. Карла Маркса, 11</p>
                <p className="text-charcoal/60 text-sm">(вход в арку, заезд с ул. Социалистической)</p>
              </div>

              {/* Phones */}
              <div className="contact-block">
                <h3 className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-gold" />
                  Телефоны
                </h3>
                <a href="tel:+375333063068" className="phone-link">
                  +375 (33) 306-30-68 <span>МТС</span>
                </a>
                <a href="tel:+375291103250" className="phone-link">
                  +375 (29) 110-32-50 <span>A1</span>
                </a>
                <a href="tel:+375152320001" className="phone-link">
                  +375 (152) 32-00-01 <span>городской</span>
                </a>
              </div>

              {/* Working Hours */}
              <div className="contact-block">
                <h3 className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-gold" />
                  Режим работы
                </h3>
                <p>Пн–Пт: 10:00–18:00</p>
                <p className="text-charcoal/60">Сб, Вс: выходные</p>
              </div>

              {/* Messengers */}
              <div className="contact-block">
                <h3 className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-gold" />
                  Мессенджеры
                </h3>
                <div className="messenger-buttons">
                  <a href="viber://chat?number=+375333063068" className="msg-btn viber">
                    Viber
                  </a>
                  <a href="https://t.me/+375333063068" className="msg-btn telegram">
                    Telegram
                  </a>
                  <a href="mailto:info@usp.by" className="msg-btn email">
                    <Mail className="w-4 h-4" />
                    Email
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Order Template & QR */}
            <div className="order-template-section">
              <h3>Шаблон заявки на расчет стоимости</h3>
              <p className="template-hint">Скопируйте текст, заполните данные и отправьте в мессенджер:</p>
              
              <div className="copy-block">
                <textarea 
                  readOnly 
                  className="template-text"
                  value={`Здравствуйте! Прошу рассчитать стоимость:

1. Тип продукции: _____________
2. Количество страниц: ________
3. Формат (размер): ____________
4. Цветность: □ Цветная / □ Черно-белая
5. Вид и плотность бумаги: _____
6. Послепечатная обработка: ____
7. Дополнительные требования: __
8. Тираж: _____________ экз.

Контакт для связи: _____________`}
                />
                <button onClick={copyTemplate} className="copy-btn">
                  {copied ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Скопировано!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Скопировать текст</span>
                    </>
                  )}
                </button>
              </div>

              {/* Office Photo */}
              <div className="mt-8">
                <img
                  src="./images/OPOLIG.webp"
                  alt="Офис типографии ЛитАРы"
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>

              {/* QR Codes */}
              <div className="qr-section">
                <h4>Как добраться</h4>
                <div className="qr-grid">
                  <a
                    href="https://yandex.by/maps/org/litary/167602554165/?ll=23.832564%2C53.677439&z=20.67"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="qr-item group"
                  >
                    <img
                      src="./images/YANDEX.webp"
                      alt="QR Яндекс.Карты"
                      className="w-[100px] h-[100px] object-contain rounded-lg bg-white p-1 shadow-sm group-hover:shadow-md transition-shadow"
                    />
                    <span className="group-hover:text-gold transition-colors">Яндекс.Карты</span>
                  </a>
                  <a
                    href="https://maps.app.goo.gl/BibBRddsvd2myQ2p8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="qr-item group"
                  >
                    <img
                      src="./images/GOOGLEMAPS.webp"
                      alt="QR Google Maps"
                      className="w-[100px] h-[100px] object-contain rounded-lg bg-white p-1 shadow-sm group-hover:shadow-md transition-shadow"
                    />
                    <span className="group-hover:text-gold transition-colors">Google Maps</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Requisites */}
          <div className="requisites-section">
            <h3>Наши реквизиты</h3>
            <div className="requisites-card">
              <p><strong>ЧУП "ЛитАРы"</strong></p>
              <p>УНП: 591031265</p>
              <p>Адрес: РБ, 230025, г. Гродно, ул. Карла Маркса, 11, к. 11/2</p>
              <p className="account-number">
                Р/с: BY90ALFA30122B54130010270000
              </p>
              <p>ЗАО "Альфа-Банк", БИК: ALFABY2X</p>
              <p className="payment-methods">Формы расчета: безналичный, ЕРИП, терминал (карта/наличные)</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactsPage;
