import AnimateOnScroll from "./AnimateOnScroll";
import mockupImg from "@/assets/mockup-cardapio.jpg";

const ShowcaseSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
              Conheça algumas páginas<br />do nosso cardápio:
            </h2>
            <p className="text-lg font-body text-muted-foreground">
              Tenha um cardápio lindo e profissional pronto em minutos!
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={200}>
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-0 bg-gradient-pink rounded-[48px] rotate-2 scale-105 opacity-50" />
            <img
              src={mockupImg}
              alt="Mockup do cardápio editável de Páscoa em tablet e celular"
              className="relative rounded-[48px] shadow-pink w-full"
              loading="lazy"
            />
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={400}>
          <div className="mt-12 text-center">
            <div className="inline-block glass-pink rounded-[24px] px-8 py-6">
              <p className="font-display font-bold text-xl text-foreground mb-1">CARDÁPIO EDITÁVEL:</p>
              <p className="font-body text-foreground/80">Rosa e Dourado | Cristão</p>
              <p className="text-gradient-gold font-display font-bold text-3xl mt-2">50 páginas</p>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default ShowcaseSection;
