import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const PrivacyPage = () => {
  const breadcrumbs = [
    { name: 'Главная', path: '/' },
    { name: 'Политика конфиденциальности', path: '/privacy', current: true },
  ];

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

          <h1 className="text-eggshell">Политика обработки персональных данных</h1>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-eggshell">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-lg max-w-none">

            {/* 1. Общие положения */}
            <h2 className="text-charcoal text-2xl font-heading font-bold mt-12 mb-6">
              1. Общие положения
            </h2>
            <p className="text-charcoal/70 leading-relaxed mb-4">
              1.1. Настоящая Политика обработки персональных данных (далее — Политика) разработана в соответствии с требованиями Закона Республики Беларусь от 07.05.2021 № 99-З «О персональных данных» (далее — Закон о ПДн) и определяет порядок обработки персональных данных и меры по обеспечению безопасности персональных данных, применяемые Оператором.
            </p>
            <p className="text-charcoal/70 leading-relaxed mb-4">
              1.2. Настоящая Политика применяется ко всей информации, которую Оператор может получить о посетителях веб-сайта <Link to="/" className="text-gold hover:underline">usp.by</Link> (далее — Сайт).
            </p>
            <p className="text-charcoal/70 leading-relaxed mb-4">
              1.3. Использование Сайта означает безоговорочное согласие Пользователя с настоящей Политикой и указанными в ней условиями обработки его персональных данных. В случае несогласия с условиями Политики Пользователь должен немедленно прекратить использование Сайта.
            </p>

            {/* 2. Сведения об операторе */}
            <h2 className="text-charcoal text-2xl font-heading font-bold mt-12 mb-6">
              2. Сведения об операторе персональных данных
            </h2>
            <div className="bg-white border border-charcoal/10 p-6 mb-4">
              <ul className="text-charcoal/70 leading-relaxed space-y-2">
                <li><strong>Полное наименование:</strong> Частное унитарное предприятие «ЛитАРы»</li>
                <li><strong>Сокращённое наименование:</strong> ЧУП «ЛитАРы»</li>
                <li><strong>УНП:</strong> 591031265</li>
                <li><strong>Юридический адрес:</strong> 230025, Республика Беларусь, г. Гродно, ул. Карла Маркса, 11, к. 11/2</li>
                <li><strong>Телефон:</strong> +375 (152) 32-00-01</li>
                <li><strong>E-mail:</strong> <a href="mailto:info@usp.by" className="text-gold hover:underline">info@usp.by</a></li>
                <li><strong>Должность ответственного за обработку ПДн:</strong> руководитель Оператора (директор)</li>
              </ul>
            </div>

            {/* 3. Цели обработки */}
            <h2 className="text-charcoal text-2xl font-heading font-bold mt-12 mb-6">
              3. Цели обработки персональных данных
            </h2>
            <p className="text-charcoal/70 leading-relaxed mb-4">
              3.1. Оператор обрабатывает персональные данные в следующих целях:
            </p>
            <table className="w-full text-sm text-left text-charcoal/70 border border-charcoal/10 mb-4">
              <thead className="bg-charcoal/5 text-charcoal font-semibold">
                <tr>
                  <th className="px-4 py-3 border-b border-charcoal/10">Цель обработки</th>
                  <th className="px-4 py-3 border-b border-charcoal/10">Правовое основание</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-charcoal/10">
                  <td className="px-4 py-3">Оформление, исполнение и документальное сопровождение договоров на оказание полиграфических услуг</td>
                  <td className="px-4 py-3">Абзац 15 статьи 6 Закона о ПДн (договор)</td>
                </tr>
                <tr className="border-b border-charcoal/10">
                  <td className="px-4 py-3">Обратная связь с Пользователем, консультирование по услугам, направление коммерческих предложений</td>
                  <td className="px-4 py-3">Абзац 2 пункта 1 статьи 9 Закона о ПДн (согласие субъекта)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Ведение бухгалтерского и налогового учёта, исполнение обязанностей по законодательству РБ</td>
                  <td className="px-4 py-3">Абзац 20 статьи 6 Закона о ПДн (выполнение обязанностей, предусмотренных законодательными актами)</td>
                </tr>
              </tbody>
            </table>

            {/* 4. Перечень ПДн */}
            <h2 className="text-charcoal text-2xl font-heading font-bold mt-12 mb-6">
              4. Перечень обрабатываемых персональных данных
            </h2>
            <p className="text-charcoal/70 leading-relaxed mb-4">
              4.1. Оператор может обрабатывать следующие персональные данные:
            </p>
            <ul className="list-disc list-inside text-charcoal/70 leading-relaxed mb-4 space-y-2">
              <li>фамилия, имя, отчество;</li>
              <li>контактный номер телефона;</li>
              <li>адрес электронной почты (e-mail);</li>
              <li>адрес доставки готовой продукции;</li>
              <li>реквизиты организации (для юридических лиц и ИП);</li>
              <li>IP-адрес, данные cookie, сведения о браузере и операционной системе;</li>
              <li>иные данные, необходимые для оказания услуг и предоставленные Пользователем добровольно.</li>
            </ul>
            <p className="text-charcoal/70 leading-relaxed mb-4">
              4.2. Оператор не обрабатывает специальные и биометрические персональные данные.
            </p>

            {/* 5. Категории субъектов */}
            <h2 className="text-charcoal text-2xl font-heading font-bold mt-12 mb-6">
              5. Категории субъектов персональных данных
            </h2>
            <ul className="list-disc list-inside text-charcoal/70 leading-relaxed mb-4 space-y-2">
              <li>физические лица — потенциальные и действующие заказчики услуг типографии;</li>
              <li>представители (работники) юридических лиц и индивидуальных предпринимателей — заказчиков услуг.</li>
            </ul>

            {/* 6. Сроки хранения */}
            <h2 className="text-charcoal text-2xl font-heading font-bold mt-12 mb-6">
              6. Сроки хранения персональных данных
            </h2>
            <table className="w-full text-sm text-left text-charcoal/70 border border-charcoal/10 mb-4">
              <thead className="bg-charcoal/5 text-charcoal font-semibold">
                <tr>
                  <th className="px-4 py-3 border-b border-charcoal/10">Категория данных</th>
                  <th className="px-4 py-3 border-b border-charcoal/10">Срок хранения</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-charcoal/10">
                  <td className="px-4 py-3">Данные, необходимые для исполнения договора и бухгалтерского учёта</td>
                  <td className="px-4 py-3">5 лет с даты окончания договора (в соответствии с требованиями налогового законодательства РБ)</td>
                </tr>
                <tr className="border-b border-charcoal/10">
                  <td className="px-4 py-3">Данные, обрабатываемые на основании согласия (обратная связь, маркетинг)</td>
                  <td className="px-4 py-3">До момента отзыва согласия, но не более 3 лет</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Технические данные (IP-адрес, cookie, логи)</td>
                  <td className="px-4 py-3">До 1 года</td>
                </tr>
              </tbody>
            </table>
            <p className="text-charcoal/70 leading-relaxed mb-4">
              6.1. По истечении указанных сроков персональные данные подлежат уничтожению или обезличиванию, если иное не предусмотрено законодательством РБ.
            </p>

            {/* 7. Права субъектов */}
            <h2 className="text-charcoal text-2xl font-heading font-bold mt-12 mb-6">
              7. Права субъекта персональных данных
            </h2>
            <p className="text-charcoal/70 leading-relaxed mb-4">
              7.1. Субъект персональных данных имеет право:
            </p>
            <ul className="list-disc list-inside text-charcoal/70 leading-relaxed mb-4 space-y-2">
              <li>получать информацию об обработке своих персональных данных, включая сведения об операторе, целях обработки, источниках получения данных, сроках хранения;</li>
              <li>требовать уточнения, блокирования или уничтожения своих персональных данных в случае, если они являются неполными, устаревшими, неточными, незаконно полученными или не являются необходимыми для заявленной цели обработки;</li>
              <li>отзывать согласие на обработку персональных данных путём направления письменного уведомления Оператору;</li>
              <li>обжаловать действия (бездействие) Оператора в Национальный центр защиты персональных данных.</li>
            </ul>
            <p className="text-charcoal/70 leading-relaxed mb-4">
              7.2. Для реализации своих прав субъект персональных данных может направить запрос Оператору по адресу электронной почты <a href="mailto:info@usp.by" className="text-gold hover:underline">info@usp.by</a> или по почте по юридическому адресу. Запрос рассматривается в течение 15 рабочих дней с момента получения.
            </p>

            {/* 8. Трансграничная передача */}
            <h2 className="text-charcoal text-2xl font-heading font-bold mt-12 mb-6">
              8. Трансграничная передача персональных данных
            </h2>
            <p className="text-charcoal/70 leading-relaxed mb-4">
              8.1. Оператор может осуществлять передачу персональных данных за пределы Республики Беларусь при использовании сервисов обратной связи:
            </p>
            <ul className="list-disc list-inside text-charcoal/70 leading-relaxed mb-4 space-y-2">
              <li><strong>Viber</strong> (Rakuten Viber, Люксембург / Япония) — при обращении через мессенджер Viber;</li>
              <li><strong>Telegram</strong> (Telegram FZ-LLC, ОАЭ) — при обращении через мессенджер Telegram.</li>
            </ul>
            <p className="text-charcoal/70 leading-relaxed mb-4">
              8.2. Передача осуществляется только с согласия субъекта персональных данных и в объёме, необходимом для обработки запроса.
            </p>

            {/* 9. Cookies и IP-адреса */}
            <h2 className="text-charcoal text-2xl font-heading font-bold mt-12 mb-6">
              9. Cookies и автоматически собираемые данные
            </h2>
            <p className="text-charcoal/70 leading-relaxed mb-4">
              9.1. При посещении Сайта Оператор может автоматически получать и записывать:
            </p>
            <ul className="list-disc list-inside text-charcoal/70 leading-relaxed mb-4 space-y-2">
              <li>IP-адрес устройства Пользователя;</li>
              <li>тип браузера и операционной системы;</li>
              <li>дату и время посещения, запрашиваемые страницы;</li>
              <li>информацию из файлов cookie (для обеспечения корректной работы Сайта).</li>
            </ul>
            <p className="text-charcoal/70 leading-relaxed mb-4">
              9.2. Пользователь может отключить использование cookie в настройках своего браузера, однако это может повлиять на функциональность Сайта.
            </p>

            {/* 10. Меры защиты */}
            <h2 className="text-charcoal text-2xl font-heading font-bold mt-12 mb-6">
              10. Меры по обеспечению безопасности персональных данных
            </h2>
            <p className="text-charcoal/70 leading-relaxed mb-4">
              10.1. Оператор принимает необходимые и достаточные организационные и технические меры для защиты персональных данных от неправомерного или случайного доступа, уничтожения, изменения, блокирования, копирования, предоставления, распространения, а также от иных неправомерных действий в отношении персональных данных.
            </p>
            <p className="text-charcoal/70 leading-relaxed mb-4">
              10.2. К мерам защиты относятся: ограничение доступа к персональным данным, использование парольной защиты, регулярное обновление программного обеспечения, резервное копирование данных.
            </p>

            {/* 11. Ответственный */}
            <h2 className="text-charcoal text-2xl font-heading font-bold mt-12 mb-6">
              11. Контактная информация для вопросов по обработке ПДн
            </h2>
            <div className="bg-white border border-charcoal/10 p-6 mb-4">
              <p className="text-charcoal/70 leading-relaxed mb-2">
                По всем вопросам, связанным с обработкой персональных данных, Пользователь может обратиться к Оператору:
              </p>
              <ul className="text-charcoal/70 leading-relaxed space-y-2 mt-4">
                <li><strong>E-mail:</strong> <a href="mailto:info@usp.by" className="text-gold hover:underline">info@usp.by</a></li>
                <li><strong>Телефон:</strong> +375 (152) 32-00-01</li>
                <li><strong>Адрес:</strong> 230025, г. Гродно, ул. Карла Маркса, 11, к. 11/2</li>
              </ul>
            </div>

            {/* 12. НЦЗПД */}
            <h2 className="text-charcoal text-2xl font-heading font-bold mt-12 mb-6">
              12. Уполномоченный орган по защите персональных данных
            </h2>
            <p className="text-charcoal/70 leading-relaxed mb-4">
              В случае нарушения прав субъект персональных данных вправе обратиться в уполномоченный орган — Национальный центр защиты персональных данных Республики Беларусь (НЦЗПД):
            </p>
            <ul className="list-disc list-inside text-charcoal/70 leading-relaxed mb-4 space-y-2">
              <li><strong>Сайт:</strong> <a href="https://center.gov.by" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">center.gov.by</a></li>
              <li><strong>Адрес:</strong> г. Минск, пр-т Победителей, 7</li>
            </ul>

            {/* 13. Изменения */}
            <h2 className="text-charcoal text-2xl font-heading font-bold mt-12 mb-6">
              13. Изменение Политики
            </h2>
            <p className="text-charcoal/70 leading-relaxed mb-4">
              13.1. Оператор вправе вносить изменения в настоящую Политику без предварительного уведомления Пользователя. Новая редакция Политики вступает в силу с момента её размещения на Сайте.
            </p>
            <p className="text-charcoal/70 leading-relaxed mb-4">
              13.2. Пользователь обязуется самостоятельно отслеживать изменения Политики путём периодического ознакомления с актуальной редакцией.
            </p>

            <div className="mt-12 pt-8 border-t border-charcoal/10">
              <p className="text-charcoal/50 text-sm">
                Дата последнего обновления: 15 апреля 2026 г.
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPage;
