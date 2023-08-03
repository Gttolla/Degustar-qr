import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import { GoArrowUp } from 'react-icons/go';  

function Msg() {
  const [showMessage, setShowMessage] = useState(false);
  const [dismissButton, setDismissButton] = useState(false);

  const Dismiss = () => {
    setDismissButton(true);
    setShowMessage(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById('footer');
      const footerTop = footer.offsetTop;
      const windowHeight = window.innerHeight;

      if (window.scrollY > 0 && !dismissButton) {
        setShowMessage(true);

        if (window.scrollY + windowHeight >= footerTop) {
          setShowMessage(false)
        } 
      } else {
        setShowMessage(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [dismissButton]);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-0 right-0 z-50">
      {showMessage && (
        <div className="flex items-center m-6 bg-yellow-500 text-white px-4 py-2 rounded-lg" data-aos="fade-left" data-aos-duration="700" id="msg">
          <button onClick={Dismiss}>
            <FaTimes size={15} className="opacity-50" />
          </button>
          <button className="text-sm ml-3 mr-2 font-bold" onClick={handleScrollToTop}>
            Entre em contato
          </button>
          <GoArrowUp size={20} />
        </div>
      )}
    </div>
  );
}

export default Msg;