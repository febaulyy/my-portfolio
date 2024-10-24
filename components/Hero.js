const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-300 to-pink-500 text-white text-center px-4 py-8 sm:py-16 md:py-24">
      <div className="relative mb-6">
        <img
          src="/images/profilee.jpg" // Ganti dengan nama foto kamu
          alt="Your Name"
          className="rounded-full w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 border-4 border-yellow-300 shadow-lg"
        />
      </div>
      <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold font-dancing mb-2 typewriter">
        Sheila Oriza Pramestiyo
      </h1>
      <p className="mt-4 text-base sm:text-lg md:text-xl max-w-xl mx-auto leading-relaxed font-poppins slide-down">
        Saya adalah seorang desainer fashion yang penuh semangat. Saya percaya bahwa setiap desain memiliki 
        cerita, dan saya menciptakan pakaian yang estetis serta nyaman untuk penggunanya. Terinspirasi oleh budaya dan seni, 
        saya suka bermain dengan warna, tekstur, dan bentuk untuk menghasilkan karya yang unik. Fashion adalah ekspresi diri, dan saya ingin 
        setiap orang merasakan keunikan tersebut. Mari bergabung dalam perjalanan kreatif saya di dunia fashion!
      </p>
    </section>
  );
};

export default Hero;