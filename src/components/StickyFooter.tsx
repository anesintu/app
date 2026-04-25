import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const StickyFooter = () => {
  const navigate = useNavigate();

  const scrollToContacts = () => {
    const contactsSection = document.getElementById('contacts');
    if (contactsSection) {
      contactsSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/contacts');
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
