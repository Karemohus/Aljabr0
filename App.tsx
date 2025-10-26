import React from 'react';

const ContactPage: React.FC = () => {
  const contactFormLink = "https://forms.gle/RJmMyWPVmdzQsrAM9";
  const aljabrLogoUrl = "https://i.ibb.co/LVPRKw8/logo.png";

  return (
    <main className="min-h-screen relative flex items-center justify-center p-4 font-sans bg-gray-100 text-gray-800 overflow-hidden">
      <div className="absolute inset-0 z-0">
          <div className="absolute top-0 -left-12 w-96 h-96 bg-teal-200 rounded-full filter blur-3xl opacity-50 animate-float"></div>
          <div className="absolute top-1/4 -right-12 w-96 h-96 bg-cyan-200 rounded-full filter blur-3xl opacity-50 animate-float animation-delay-2000"></div>
          <div className="absolute -bottom-16 left-1/4 w-96 h-96 bg-green-200 rounded-full filter blur-3xl opacity-60 animate-float animation-delay-4000"></div>
      </div>
      
      <div 
        className="relative z-10 bg-white/70 backdrop-blur-lg border border-gray-200 rounded-3xl shadow-xl p-8 md:p-12 max-w-lg w-full text-center
                   transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10"
      >
        
        <img 
          src={aljabrLogoUrl} 
          alt="شعار شركات الجبر" 
          className="mx-auto mb-8 w-60" 
        />
        
        <h1 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
          مرحباً بكم في شركات الجبر
        </h1>
        
        <p className="text-gray-600 mb-10 leading-relaxed text-base">
          يسعدنا اهتمامكم بالتواصل معنا. يرجى الضغط على الزر أدناه للانتقال إلى نموذج التواصل.
        </p>
        
        <a
          href={contactFormLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-x-3 bg-gradient-to-r from-cyan-500 to-teal-500
                     text-white font-bold py-3 px-10 rounded-lg text-lg
                     transition-all duration-300 ease-in-out
                     transform hover:scale-105 hover:shadow-lg hover:shadow-teal-500/40 ring-2 ring-transparent hover:ring-white/50"
        >
          <span>تواصل معنا</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform -scale-x-100" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </main>
  );
};

const App: React.FC = () => {
  return <ContactPage />;
};

export default App;
