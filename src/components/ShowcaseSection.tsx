import AnimateOnScroll from "./AnimateOnScroll";
import mockupCapa from "@/assets/mockup-capa.png";
import mockupInterna from "@/assets/mockup-interna.png";
import mockupPagesRosa from "@/assets/mockup-pages-rosa.png";
import mockupPages from "@/assets/mockup-cardapio-pages.png";

const ShowcaseSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-foreground mb-4 tracking-wide">
              CONHEÇA ALGUMAS PÁGINAS<br />DO NOSSO CARDÁPIO:
            </h2>
            <p className="text-lg font-body font-medium text-muted-foreground">
              Tenha um cardápio lindo e profissional pronto em minutos!
            </p>
          </div>
        </AnimateOnScroll>

        {/* Capa + Interna side by side */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
          <AnimateOnScroll delay={100}>
            <img
              src={mockupCapa}
              alt="Capa do cardápio de Páscoa 2026"
              className="w-52 md:w-64 rounded-2xl shadow-gold hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <img
              src={mockupInterna}
              alt="Página interna do cardápio - Ovo Tablete"
              className="w-52 md:w-64 rounded-2xl shadow-gold hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </AnimateOnScroll>
        </div>

        {/* All pages overview */}
        <AnimateOnScroll delay={300}>
          <div className="text-center mb-6">
            <p className="font-body font-medium text-muted-foreground text-lg mb-4">
              Além dessas, você ainda recebe diversas outras páginas...
            </p>
          </div>
          <img
            src={mockupPages}
            alt="Visão geral de todas as páginas do cardápio"
            className="w-full rounded-2xl shadow-pink mb-6"
            loading="lazy"
          />
          <img
            src={mockupPagesRosa}
            alt="Páginas do cardápio versão Rosa e Dourado"
            className="w-full rounded-2xl shadow-pink"
            loading="lazy"
          />
        </AnimateOnScroll>

        <AnimateOnScroll delay={400}>
          <div className="mt-12 text-center">
            <div className="inline-block glass-pink rounded-[24px] px-8 py-6">
              <p className="font-display font-extrabold text-xl text-foreground mb-1 tracking-wide">CARDÁPIO EDITÁVEL:</p>
              <p className="font-body font-medium text-foreground/80">Rosa e Dourado | Cristão</p>
              <p className="text-gradient-gold font-display font-extrabold text-3xl mt-2 tracking-wide">50 PÁGINAS</p>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default ShowcaseSection;
