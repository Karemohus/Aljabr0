import React from 'react';

const ContactPage: React.FC = () => {
  const contactFormLink = "https://forms.gle/RJmMyWPVmdzQsrAM9";
  const aljabrLogoUrl = "https://i.ibb.co/LVPRKw8/logo.png";

  return (
    <main className="min-h-screen relative flex items-center justify-center p-4 font-sans bg-[#0d1117] text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-[#009cde]/30 rounded-full filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-[#007ab8]/30 rounded-full filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[#009cde]/20 rounded-full filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
      
      <div 
        className="relative z-10 bg-gray-900/50 backdrop-blur-md border border-gray-700/50 rounded-3xl shadow-2xl p-8 md:p-12 max-w-lg w-full text-center
                   transform transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,156,222,0.5)] hover:border-[#009cde]/60"
      >
        
        <img 
          src={aljabrLogoUrl} 
          alt="شعار شركات الجبر" 
          className="mx-auto mb-8 w-64" 
        />
        
        <h1 className="text-3xl md:text-4xl font-light text-gray-50 mb-4">
          مرحباً بكم في شركات الجبر
        </h1>
        
        <p className="text-gray-300 mb-10 leading-relaxed text-base">
          يسعدنا اهتمامكم بالتواصل معنا. يرجى الضغط على الزر أدناه للانتقال إلى نموذج التواصل.
        </p>
        
        <a
          href={contactFormLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-x-3 bg-gradient-to-r from-[#009cde] to-[#007ab8]
                     text-white font-bold py-3 px-10 rounded-lg text-lg
                     transition-all duration-300 ease-in-out
                     transform hover:scale-105 hover:shadow-[0_0_25px_rgba(0,156,222,0.7)] ring-2 ring-transparent hover:ring-[#009cde]/50"
        >
          <span>تواصل معنا</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
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