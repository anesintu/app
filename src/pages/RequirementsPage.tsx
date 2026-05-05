import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const RequirementsPage = () => {
  const breadcrumbs = [
    { name: 'Главная', path: '/' },
    { name: 'Требования к макетам', path: '/requirements', current: true },
  ];

  const fileFormats = [
    { name: 'PDF', recommended: true },
    { name: 'JPEG', recommended: false },
    { name: 'EPS', recommended: false },
    { name: 'TIFF', recommended: false },
    { name: 'CDR', recommended: false },
    { name: 'PSD', recommended: false },
  ];

  const generalNotes = [
    'Желательно предоставить макет в CMYK-модели. RGB и другие модели цвета приведут к искажению оттенков при печати',
    'Размер в макете должен соответствовать печатному оттиску (1:1) + выпуск за обрез по 3 мм с каждой стороны. Например, если это формат А4 (210×297 мм), то размер файла до обреза должен быть 216×303 мм',
    'Помните о безопасной зоне — не располагайте важный текст или логотипы ближе 3–4 мм от края реза / биговки',
    'Каждое изделие должно быть в отдельном файле',
    'Разрешение графических объектов не менее 300 dpi',
    'Многополосные изделия (книги, брошюры, буклеты и проч.) вне зависимости от сборки предоставляются постранично в формате PDF. Не принимаются макеты в развороте или спуском полос',
    'Все используемые в оригинал-макете шрифты должны быть конвертированы в кривые, либо все используемые шрифты должны быть предоставлены вместе с оригинал-макетом',
    'Не рекомендуется использовать рамку по периметру макета или линии, параллельные сторонам макета, находящиеся близко к краю. В случае использования таковых — не гарантируем, что эта рамка или её отступы от краев изделия будут равномерными',
    'Не рекомендуется использовать большое поле сплошной заливки, т.к. она может получиться неоднородной. Если они необходимы, накладывайте поверх легкую текстуру или полупрозрачное изображение',
    'В случае сборки на пружину, отступ значимых элементов макета от края должен быть не менее 7 мм',
    'Типография не гарантирует 100% совпадения цветовых оттенков экранного изображения оригинал-макета и печатного оттиска из-за разницы охватов моделей цветопередачи, используемых монитором (RGB) и в печатном процессе (CMYK)',
    'Макеты, передаваемые в Word, Excel и других программах не являются готовыми макетами и требуют дополнительной обработки и согласования',
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

          <h1 className="text-eggshell">Требования к макетам</h1>
        </div>
      </section>

      {/* File Formats */}
      <section className="section-padding bg-eggshell">
        <div className="container-custom">
          <h2 className="text-charcoal mb-8">Макеты принимаются в форматах:</h2>

          <div className="file-formats-grid">
            {fileFormats.map((format, index) => (
              <div
                key={index}
                className={`file-format-card ${format.recommended ? 'recommended' : ''}`}
              >
                <span className="format-name">{format.name}</span>
                {format.recommended && (
                  <span className="format-badge">Рекомендуем</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* General Notes */}
      <section className="section-padding bg-charcoal">
        <div className="container-custom">
          <h2 className="text-eggshell mb-8">Общие пожелания к макетам</h2>

          <div className="max-w-4xl">
            <ul className="space-y-0">
              {generalNotes.map((note, index) => (
                <li
                  key={index}
                  className="py-4 pl-8 relative border-b border-eggshell/10 text-eggshell/80 text-sm md:text-base leading-relaxed"
                >
                  <span className="absolute left-0 top-4 text-gold font-bold">✓</span>
                  {note}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RequirementsPage;
