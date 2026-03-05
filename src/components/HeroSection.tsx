import AnimateOnScroll from "./AnimateOnScroll";
import trustBadges from "@/assets/trust-badges.png";
import mockupReceitas from "@/assets/mockup-receitas.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-background overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full opacity-40 blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold-light rounded-full opacity-20 blur-3xl translate-y-1/3 -translate-x-1/4" />

      <div className="container mx-auto px-4 pt-8 pb-20 relative z-10">
        <div className="flex flex-col items-center max-w-3xl mx-auto text-center">
          <AnimateOnScroll delay={100}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.2] mb-8 uppercase tracking-tight">
              Lucre mais de <span className="text-gradient-gold">R$ 5MIL</span> nessa páscoa com as <span className="text-gradient-gold italic" style={{ fontFamily: "'Dancing Script', cursive", textTransform: 'none' }}>melhores receitas</span> de ovos de páscoa
            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <p className="text-lg md:text-xl text-foreground/80 font-body font-normal leading-relaxed mb-8 max-w-lg">
              <span className="underline decoration-primary decoration-[3px] underline-offset-4">Transforme sua Páscoa em lucro</span> com receitas testadas que{" "}
              <strong className="text-foreground font-semibold">seus clientes vão amar.</strong>
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={300}>
            <div className="relative mx-auto max-w-md mb-6">
              <img src={mockupReceitas} alt="50 receitas incríveis de Páscoa 2026" className="w-full max-w-sm mx-auto rounded-2xl" loading="eager" />
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={400}>
            <a href="#planos" className="inline-block bg-gradient-btn text-primary-foreground font-body font-bold text-lg px-10 py-4 rounded-full shadow-btn hover:scale-105 transition-transform duration-300">
              QUERO MINHAS RECEITAS!
            </a>
            <img src={trustBadges} alt="Acesso imediato, Garantia de 7 dias, Acesso vitalício" className="mt-6 w-full max-w-sm mx-auto" loading="eager" />
          </AnimateOnScroll>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 52.5C480 45 600 60 720 67.5C840 75 960 75 1080 67.5C1200 60 1320 45 1380 37.5L1440 30V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
