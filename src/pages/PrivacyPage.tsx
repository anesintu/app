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

          <h1 className="text-eggshell">Политика конфиденциальности</h1>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-eggshell">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-charcoal/70 leading-relaxed">
              Настоящая Политика конфиденциальности персональных данных (далее — Политика конфиденциальности) 
              действует в отношении всей информации, которую типография «ЛитАРы» может получить о Пользователе 
              во время использования сайта.
            </p>

            <h2 className="text-charcoal text-2xl font-heading font-bold mt-12 mb-6">
              1. Общие положения
            </h2>
            <p className="text-charcoal/70 leading-relaxed mb-4">
              1.1. Использование Пользователем сайта означает согласие с настоящей Политикой конфиденциальности 
              и условиями обработки персональных данных Пользователя.
            </p>
            <p className="text-charcoal/70 leading-relaxed mb-4">
              1.2. В случае несогласия с условиями Политики конфиденциальности Пользователь должен прекратить 
              использование сайта.
            </p>
            <p className="text-charcoal/70 leading-relaxed mb-4">
              1.3. Настоящая Политика конфиденциальности применяется только к сайту типографии «ЛитАРы». 
              Типография не контролирует и не несет ответственность за сайты третьих лиц, на которые 
              Пользователь может перейти по ссылкам, доступным на сайте.
            </p>

            <h2 className="text-charcoal text-2xl font-heading font-bold mt-12 mb-6">
              2. Предмет политики конфиденциальности
            </h2>
            <p className="text-charcoal/70 leading-relaxed mb-4">
              2.1. Настоящая Политика конфиденциальности устанавливает обязательства Администрации сайта 
              по неразглашению и обеспечению режима защиты конфиденциальности персональных данных, 
              которые Пользователь предоставляет по запросу Администрации сайта при регистрации на сайте 
              или при оформлении заказа.
            </p>
            <p className="text-charcoal/70 leading-relaxed mb-4">
              2.2. Персональные данные, разрешённые к обработке в рамках настоящей Политики конфиденциальности, 
              предоставляются Пользователем путём заполнения регистрационной формы на сайте и включают в себя 
              следующую информацию:
            </p>
            <ul className="list-disc list-inside text-charcoal/70 leading-relaxed mb-4 space-y-2">
              <li>фамилию, имя, отчество Пользователя;</li>
              <li>контактный телефон Пользователя;</li>
              <li>адрес электронной почты (e-mail);</li>
              <li>место жительство Пользователя.</li>
            </ul>

            <h2 className="text-charcoal text-2xl font-heading font-bold mt-12 mb-6">
              3. Цели сбора персональной информации пользователя
            </h2>
            <p className="text-charcoal/70 leading-relaxed mb-4">
              3.1. Персональные данные Пользователя Администрация сайта может использовать в целях:
            </p>
            <ul className="list-disc list-inside text-charcoal/70 leading-relaxed mb-4 space-y-2">
              <li>Идентификации Пользователя, зарегистрированного на сайте, для оформления заказа;</li>
              <li>Предоставления Пользователю доступа к персонализированным ресурсам сайта;</li>
              <li>Установления с Пользователем обратной связи, включая направление уведомлений, 
                  запросов, касающихся использования сайта, оказания услуг, обработка запросов и заявок от Пользователя;</li>
              <li>Определения места нахождения Пользователя для обеспечения безопасности, предотвращения мошенничества;</li>
              <li>Подтверждения достоверности и полноты персональных данных, предоставленных Пользователем;</li>
              <li>Создания учетной записи для совершения покупок, если Пользователь дал согласие на создание учетной записи;</li>
              <li>Уведомления Пользователя сайта о состоянии Заказа;</li>
              <li>Обработки и получения платежей, подтверждения налога или налоговых льгот, оспаривания платежа.</li>
            </ul>

            <h2 className="text-charcoal text-2xl font-heading font-bold mt-12 mb-6">
              4. Обязательства сторон
            </h2>
            <p className="text-charcoal/70 leading-relaxed mb-4">
              4.1. Пользователь обязан:
            </p>
            <ul className="list-disc list-inside text-charcoal/70 leading-relaxed mb-4 space-y-2">
              <li>Предоставить информацию о персональных данных, необходимую для пользования сайтом;</li>
              <li>Обновить, дополнить предоставленную информацию о персональных данных в случае изменения данной информации.</li>
            </ul>
            <p className="text-charcoal/70 leading-relaxed mb-4">
              4.2. Администрация сайта обязана:
            </p>
            <ul className="list-disc list-inside text-charcoal/70 leading-relaxed mb-4 space-y-2">
              <li>Использовать полученную информацию исключительно для целей, указанных в п. 3 настоящей Политики конфиденциальности;</li>
              <li>Обеспечить хранение конфиденциальной информации в тайне, не разглашать без предварительного письменного разрешения Пользователя;</li>
              <li>Принимать меры предосторожности для защиты конфиденциальности персональных данных Пользователя.</li>
            </ul>

            <h2 className="text-charcoal text-2xl font-heading font-bold mt-12 mb-6">
              5. Ответственность сторон
            </h2>
            <p className="text-charcoal/70 leading-relaxed mb-4">
              5.1. Администрация сайта, не исполнившая свои обязательства, несёт ответственность за убытки, 
              понесённые Пользователем в связи с неправомерным использованием персональных данных, 
              в соответствии с законодательством Республики Беларусь.
            </p>
            <p className="text-charcoal/70 leading-relaxed mb-4">
              5.2. В случае утраты или разглашения конфиденциальной информации Администрация сайта 
              не несёт ответственность, если данная конфиденциальная информация:
            </p>
            <ul className="list-disc list-inside text-charcoal/70 leading-relaxed mb-4 space-y-2">
              <li>Стала публичным достоянием до её утраты или разглашения;</li>
              <li>Была получена от третьей стороны до момента её получения Администрацией сайта;</li>
              <li>Была разглашена с согласия Пользователя.</li>
            </ul>

            <h2 className="text-charcoal text-2xl font-heading font-bold mt-12 mb-6">
              6. Разрешение споров
            </h2>
            <p className="text-charcoal/70 leading-relaxed mb-4">
              6.1. До обращения в суд с иском по спорам, возникающим из отношений между Пользователем 
              сайта и Администрацией сайта, обязательным является предъявление претензии 
              (письменного предложения о добровольном урегулировании спора).
            </p>
            <p className="text-charcoal/70 leading-relaxed mb-4">
              6.2. Получатель претензии в течение 30 календарных дней со дня получения претензии 
              письменно уведомляет заявителя претензии о результатах рассмотрения претензии.
            </p>

            <h2 className="text-charcoal text-2xl font-heading font-bold mt-12 mb-6">
              7. Дополнительные условия
            </h2>
            <p className="text-charcoal/70 leading-relaxed mb-4">
              7.1. Администрация сайта вправе вносить изменения в настоящую Политику конфиденциальности 
              без согласия Пользователя.
            </p>
            <p className="text-charcoal/70 leading-relaxed mb-4">
              7.2. Новая Политика конфиденциальности вступает в силу с момента ее размещения на сайте, 
              если иное не предусмотрено новой редакцией Политики конфиденциальности.
            </p>
            <p className="text-charcoal/70 leading-relaxed mb-4">
              7.3. Действующая Политика конфиденциальности размещена на странице по адресу: 
              <Link to="/privacy" className="text-gold hover:underline"> usp.by/privacy</Link>
            </p>

            <div className="mt-12 pt-8 border-t border-charcoal/10">
              <p className="text-charcoal/50 text-sm">
                Обновлено: 11 апреля 2026 г.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPage;
