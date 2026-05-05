import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Instagram, Send } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const serviceLinks = [
    { name: 'Цветная печать', path: '/color-printing' },
    { name: 'Черно-белая печать', path: '/bw-printing' },
  ];

  const infoLinks = [
    { name: 'Требования к макетам', path: '/requirements' },
    { name: 'Контакты', path: '/contacts' },
  ];

  return (
    <footer className="bg-charcoal text-eggshell">
      {/* Main Footer */}
      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1: Logo & Description */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <span className="font-heading font-bold text-2xl text-eggshell">ЛитАРы</span>
            </Link>
            <p className="text-eggshell/70 text-sm leading-relaxed mb-6">
              Полный комплекс полиграфических услуг — от разработки макета до готового изделия. 
              Работаем в Гродно с 2010 года.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/jursaprint"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-eggshell/30 text-eggshell/70 hover:border-gold hover:text-gold hover:bg-gold/10 transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://t.me/+375333063068"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-eggshell/30 text-eggshell/70 hover:border-gold hover:text-gold hover:bg-gold/10 transition-all"
              >
                <Send className="w-5 h-5" />
              </a>
              <a
                href="mailto:info@usp.by"
                className="w-10 h-10 flex items-center justify-center border border-eggshell/30 text-eggshell/70 hover:border-gold hover:text-gold hover:bg-gold/10 transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 text-gold">Услуги</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-eggshell/70 text-sm hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Information */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 text-gold">Информация</h4>
            <ul className="space-y-3">
              {infoLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-eggshell/70 text-sm hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contacts */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 text-gold">Контакты</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+375152320001"
                  className="flex items-center gap-3 text-gold hover:underline"
                >
                  <Phone className="w-4 h-4" />
                  +375 (152) 32 00 01
                </a>
              </li>
              <li>
                <a
                  href="tel:+375333063068"
                  className="flex items-center gap-3 text-eggshell/70 text-sm hover:text-gold transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +375 (33) 306 30 68
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@usp.by"
                  className="flex items-center gap-3 text-eggshell/70 text-sm hover:text-gold transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  info@usp.by
                </a>
              </li>
              <li className="flex items-start gap-3 text-eggshell/70 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>
                  г. Гродно, ул. Карла Маркса, д. 11, к. 11/2
                  <br />
                  <span className="text-eggshell/50">(вход в арку)</span>
                </span>
              </li>
              <li className="flex items-start gap-3 text-eggshell/70 text-sm">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>
                  Пн–Пт: 10:00–18:00
                  <br />
                  <span className="text-eggshell/50">Сб, Вс: выходные</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-eggshell/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-eggshell/50">
            <p>© 2010–{currentYear} ЧИП «ЛитАРы». Все права защищены.</p>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="hover:text-gold transition-colors">
                Политика конфиденциальности
              </Link>
              <span>УНП: 591031265</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
