import { useState } from 'react';
import { Send, Paperclip, CheckCircle } from 'lucide-react';

const CTASection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    comment: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', email: '', comment: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="bg-charcoal py-20 md:py-28">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <h2 className="text-eggshell mb-4">
            Нужен расчет стоимости печати?
          </h2>
          <p className="text-eggshell/70 text-lg mb-12">
            Отправьте заявку и получите коммерческое предложение в течение 30 минут
          </p>

          {/* Form */}
          {isSubmitted ? (
            <div className="flex flex-col items-center gap-4 py-12 animate-in fade-in">
              <CheckCircle className="w-16 h-16 text-gold" />
              <h3 className="text-eggshell text-2xl">Спасибо за заявку!</h3>
              <p className="text-eggshell/70">Мы свяжемся с вами в ближайшее время</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Row 1: Name, Phone, Email */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Name Field */}
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    placeholder=" "
                    required
                    className="peer w-full bg-transparent border-b border-eggshell/30 py-3 text-eggshell placeholder-transparent focus:border-gold focus:outline-none transition-colors"
                  />
                  <label
                    htmlFor="name"
                    className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                      focusedField === 'name' || formData.name
                        ? '-top-2 text-xs text-gold'
                        : 'top-3 text-eggshell/50'
                    }`}
                  >
                    Ваше имя
                  </label>
                </div>

                {/* Phone Field */}
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                    placeholder=" "
                    required
                    className="peer w-full bg-transparent border-b border-eggshell/30 py-3 text-eggshell placeholder-transparent focus:border-gold focus:outline-none transition-colors"
                  />
                  <label
                    htmlFor="phone"
                    className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                      focusedField === 'phone' || formData.phone
                        ? '-top-2 text-xs text-gold'
                        : 'top-3 text-eggshell/50'
                    }`}
                  >
                    Телефон
                  </label>
                </div>

                {/* Email Field */}
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    placeholder=" "
                    className="peer w-full bg-transparent border-b border-eggshell/30 py-3 text-eggshell placeholder-transparent focus:border-gold focus:outline-none transition-colors"
                  />
                  <label
                    htmlFor="email"
                    className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                      focusedField === 'email' || formData.email
                        ? '-top-2 text-xs text-gold'
                        : 'top-3 text-eggshell/50'
                    }`}
                  >
                    Email
                  </label>
                </div>
              </div>

              {/* Comment Field */}
              <div className="relative">
                <textarea
                  name="comment"
                  id="comment"
                  value={formData.comment}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('comment')}
                  onBlur={() => setFocusedField(null)}
                  placeholder=" "
                  rows={3}
                  className="peer w-full bg-transparent border-b border-eggshell/30 py-3 text-eggshell placeholder-transparent focus:border-gold focus:outline-none transition-colors resize-none"
                />
                <label
                  htmlFor="comment"
                  className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                    focusedField === 'comment' || formData.comment
                      ? '-top-2 text-xs text-gold'
                      : 'top-3 text-eggshell/50'
                  }`}
                >
                  Комментарий к заказу
                </label>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4">
                {/* File Upload */}
                <label className="flex items-center gap-2 text-eggshell/50 hover:text-gold cursor-pointer transition-colors">
                  <Paperclip className="w-5 h-5" />
                  <span className="text-sm">Прикрепить файл макета</span>
                  <input type="file" className="hidden" accept=".pdf,.ai,.psd,.cdr,.tiff,.jpg,.jpeg" />
                </label>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="btn-primary flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Получить расчет
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
