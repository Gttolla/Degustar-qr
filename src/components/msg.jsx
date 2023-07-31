import React, { useState, useEffect } from 'react';

function WarningMessage () {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowMessage(true);
      } else {
        setShowMessage(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {showMessage && (
        <div className="w-full p-4">
          <div className="container mx-auto flex justify-between items-center">
            <div>Entre em contato conosco</div>
            <button
              className="text-sm font-bold underline"
              onClick={handleScrollToTop}
            >
              Ir para o topo
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default WarningMessage;