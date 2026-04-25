import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const RequirementsPage = () => {
  const breadcrumbs = [
    { name: 'Главная', path: '/' },
    { name: 'Требования к макетам', path: '/requirements', current: true },
  ];

  const fileFormats = [
    { name: 'PDF', recommended: true },
    { name: 'EPS', recommended: false },
    { name: 'TIFF', recommended: false },
    { name: 'CDR', recommended: false },
    { name: 'PSD', recommended: false },
  ];

  const techRequirements = [
    { title: 'Цветовая модель', value: 'CMYK (не RGB, не Pantone)' },
    { title: 'Разрешение', value: 'Не менее 300 dpi' },
    { title: 'Текст', value: 'В кривых или с приложением шрифтов' },
    { title: 'Вылеты', value: 'Минимум 2 мм со всех сторон' },
    { title: 'Безопасная зона', value: 'Минимум 3 мм от края' },
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

          <div className="max-w-3xl">
            <h1 className="text-eggshell mb-6">Требования к макетам</h1>
            <p className="text-eggshell/70 text-lg md:text-xl leading-relaxed">
              Правильно подготовленный макет — залог качественной печати.
              Следуйте нашим рекомендациям для получения лучшего результата.
            </p>
          </div>
        </div>
      </section>

      {/* Paper Sizes Visualization */}
      <section className="section-padding bg-eggshell">
        <div className="container-custom">
          <h2 className="text-charcoal mb-8">Размеры используемой бумаги (ISO 216)</h2>

          <div className="w-full max-w-xl mx-auto" style={{ aspectRatio: '420 / 580' }}>
            <div className="grid w-full h-full" style={{
              gridTemplateColumns: 'repeat(12, 1fr)',
              gridTemplateRows: 'repeat(12, 1fr)'
            }}>
              {/* A3 */}
              <div className="bg-[#1e3a8a] text-white p-2 md:p-4 flex flex-col justify-start" style={{ gridColumn: '1 / 13', gridRow: '1 / 6' }}>
                <span className="text-2xl md:text-4xl font-bold leading-tight">A3</span>
                <span className="text-sm md:text-lg mt-1">297×420 мм</span>
              </div>

              {/* A4 */}
              <div className="bg-[#fbbf24] text-charcoal p-2 md:p-3 flex flex-col justify-start" style={{ gridColumn: '1 / 7', gridRow: '6 / 13' }}>
                <span className="text-xl md:text-3xl font-bold leading-tight">A4</span>
                <span className="text-xs md:text-base mt-1">210×297 мм</span>
              </div>

              {/* A5 */}
              <div className="bg-[#dc2626] text-charcoal p-2 md:p-3 flex flex-col justify-start" style={{ gridColumn: '7 / 13', gridRow: '6 / 9' }}>
                <span className="text-lg md:text-2xl font-bold leading-tight">A5</span>
                <span className="text-xs md:text-sm mt-1">148×210 мм</span>
              </div>

              {/* A6 */}
              <div className="bg-[#16a34a] text-white p-1 md:p-2 flex flex-col justify-start" style={{ gridColumn: '7 / 10', gridRow: '9 / 13' }}>
                <span className="text-base md:text-xl font-bold leading-tight">A6</span>
                <span className="text-[10px] md:text-xs mt-1">105×148 мм</span>
              </div>

              {/* A7 */}
              <div className="bg-black text-white p-1 md:p-2 flex flex-col justify-start" style={{ gridColumn: '10 / 13', gridRow: '9 / 11' }}>
                <span className="text-sm md:text-lg font-bold leading-tight">A7</span>
                <span className="text-[10px] md:text-xs mt-0.5">74×105 мм</span>
              </div>

              {/* A8 */}
              <div className="bg-[#0891b2] text-white p-1 md:p-2 flex flex-col justify-start" style={{ gridColumn: '10 / 13', gridRow: '11 / 13' }}>
                <span className="text-sm md:text-base font-bold leading-tight">A8</span>
                <span className="text-[10px] md:text-xs mt-0.5">52×74 мм</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bleed/Trim Diagram */}
      <section className="section-padding bg-charcoal">
        <div className="container-custom">
          <h2 className="text-eggshell mb-8">Технические требования к макету</h2>
          
          <div className="bleed-diagram-container">
            <div className="bleed-zone">
              <div className="bleed-label">Вылет (мин. 2 мм)</div>
              <div className="trim-zone">
                <div className="trim-label">Обрезной формат</div>
                <div className="safe-zone">
                  <div className="safe-label">Текст и значимые элементы</div>
                  <div className="safe-content">
                    <div className="mock-text-line short"></div>
                    <div className="mock-text-line"></div>
                    <div className="mock-text-line"></div>
                    <div className="mock-text-line medium"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Requirements Cards */}
          <div className="tech-requirements-grid">
            {techRequirements.map((req, index) => (
              <div key={index} className="tech-req-card">
                <h4>{req.title}</h4>
                <p>{req.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* File Formats */}
      <section className="section-padding bg-eggshell">
        <div className="container-custom">
          <h2 className="text-charcoal mb-8">Форматы файлов</h2>
          
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

          {/* Important Notes */}
          <div className="important-notes">
            <h3 className="text-charcoal mb-4">Важные замечания</h3>
            <ul className="notes-list">
              <li>Все шрифты должны быть переведены в кривые или приложены к макету</li>
              <li>Растровые изображения должны иметь разрешение не менее 300 dpi при реальном размере</li>
              <li>Вылеты должны быть одинаковыми со всех сторон макета</li>
              <li>Важные элементы (текст, логотипы) должны находиться в безопасной зоне</li>
              <li>Для многостраничной продукции страницы должны быть расположены в правильном порядке</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RequirementsPage;
