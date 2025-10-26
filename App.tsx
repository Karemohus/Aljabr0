import React from 'react';

const ContactPage: React.FC = () => {
  const contactFormLink = "https://forms.gle/RJmMyWPVmdzQsrAM9";
  const aljabrLogoUrl = "/logo.png"; // Changed to use the user-provided logo

  return (
    <main className="min-h-screen flex items-center justify-center p-4 animated-gradient">
      <div className="bg-bubbles">
        {/* Create 10 bubble elements */}
        {[...Array(10)].map((_, i) => <span key={i}></span>)}
      </div>
      <div className="bg-white/10 backdrop-blur-2xl rounded-2xl shadow-lg p-10 md:p-14 max-w-lg w-full text-center relative z-10 border border-white/10">
        <img src={aljabrLogoUrl} alt="ALJABR Logo" className="mx-auto mb-8 w-56" />
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
          مرحباً بكم في شركات الجبر
        </h1>
        <h2 className="text-xl font-light text-gray-100 mb-6">
            للتواصل والاستفسار
        </h2>
        <p className="text-gray-200 mb-8 leading-relaxed">
          يسعدنا اهتمامكم بالتواصل معنا. يرجى الضغط على الزر أدناه للانتقال إلى نموذج التواصل.
        </p>
        <a
          href={contactFormLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 bg-gradient-to-br from-cyan-500 to-blue-600 text-white font-bold py-3 px-10 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl hover:from-cyan-400 hover:to-blue-500"
        >
          <span>تواصل معنا</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
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
