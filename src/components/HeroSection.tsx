import heroOvo from "@/assets/hero-ovo.png";
import mockupCapa from "@/assets/mockup-capa-pascoa.png";
import canvaIcon from "@/assets/canva-icon.png";
import AnimateOnScroll from "./AnimateOnScroll";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full opacity-40 blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold-light rounded-full opacity-20 blur-3xl translate-y-1/3 -translate-x-1/4" />

      <div className="container mx-auto px-4 pt-8 pb-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <AnimateOnScroll delay={100}>
              <p className="text-foreground/70 font-body text-2xl md:text-3xl mb-1">
                A <strong className="font-extrabold text-foreground">Páscoa</strong> está chegando...
              </p>
              <p className="text-foreground/70 font-body text-xl md:text-2xl mb-4">
                Acelere suas <strong className="font-extrabold text-foreground">vendas</strong> com o nosso
              </p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gradient-gold leading-[1.1] mb-6" style={{ fontFamily: "'Dancing Script', cursive" }}>
                Cardápio editável
              </h1>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <p className="text-lg md:text-xl text-foreground/80 font-body font-normal leading-relaxed mb-8 max-w-lg">
                Impulsione suas encomendas de Páscoa com um cardápio que{" "}
                <strong className="text-foreground font-semibold">encanta e vende por você.</strong>
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={300}>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
                {["Acesso imediato e vitalício", "Design profissional", "100% editável no Canva gratuito", "Fácil de usar"].map((item) => (
                  <span key={item} className="glass-pink px-4 py-2 rounded-full text-sm font-body font-medium text-foreground">
                    ✨ {item}
                  </span>
                ))}
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={400}>
              <div className="flex items-center gap-3 justify-center lg:justify-start mb-6">
                <img src={canvaIcon} alt="Canva" className="w-10 h-10 rounded-full" loading="lazy" />
                <span className="font-body text-sm text-foreground/70">Edite facilmente no Canva gratuito</span>
              </div>
              <a href="#planos" className="inline-block bg-gradient-btn text-primary-foreground font-body font-bold text-lg px-10 py-4 rounded-full shadow-btn hover:scale-105 transition-transform duration-300">
                QUERO MEU CARDÁPIO! 🐣
              </a>
            </AnimateOnScroll>
          </div>

          {/* Right Image */}
          <AnimateOnScroll className="flex-1 max-w-md lg:max-w-lg" delay={200}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-gold rounded-[60px] rotate-3 opacity-20 scale-105" />
              <img
                src={mockupCapa}
                alt="Capa do Cardápio de Páscoa 2026 com coelhinha e ovos de chocolate"
                className="relative rounded-[40px] shadow-gold w-full object-cover animate-float"
                loading="eager"
              />
            </div>
          </AnimateOnScroll>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 52.5C480 45 600 60 720 67.5C840 75 960 75 1080 67.5C1200 60 1320 45 1380 37.5L1440 30V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
