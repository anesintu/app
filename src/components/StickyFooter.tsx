import { ArrowRight } from 'lucide-react';

const StickyFooter = () => {
  const scrollToContacts = () => {
    const contactsSection = document.getElementById('contacts');
    if (contactsSection) {
      contactsSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/contacts';
    }
  };

  return (
    <div className="sticky-footer">
      <div className="container-custom">
        <button
          onClick={scrollToContacts}
          className="sticky-footer__button"
        >
          <span>Рассчитать стоимость</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default StickyFooter;
