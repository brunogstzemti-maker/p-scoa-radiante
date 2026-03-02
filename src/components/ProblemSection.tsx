import AnimateOnScroll from "./AnimateOnScroll";

const ProblemSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-foreground mb-4 tracking-wide">
              A PÁSCOA ESTÁ CHEGANDO...
            </h2>
            <p className="text-xl text-muted-foreground font-body font-medium">
              Acelere suas vendas com o nosso cardápio
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <div className="glass-pink rounded-[32px] p-8 md:p-12 mb-12">
            <h3 className="text-2xl md:text-3xl font-display font-extrabold text-foreground mb-4 text-center tracking-wide">
              CONFEITEIRA, VOCÊ PODE VENDER <span className="text-gradient-gold">MUITO MAIS</span> NESTA PÁSCOA...
            </h3>
            <p className="text-center text-lg font-body font-normal text-foreground/80 mb-2">
              com organização e <strong className="font-semibold">sem improvisos.</strong>
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={200}>
          <p className="text-center text-lg font-body font-normal text-foreground/80 mb-8 leading-relaxed">
            A Páscoa é uma das épocas mais lucrativas para quem trabalha com doces.
            Muitas confeiteiras chegam nesse período cheias de vontade… mas acabam travando no caminho.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={300}>
          <div className="text-center mb-8">
            <p className="text-xl font-display font-extrabold text-foreground mb-6 tracking-wide">E O RESULTADO?</p>
            <div className="flex flex-col gap-3 items-center">
              {[
                "Cardápio feito às pressas",
                "Divulgação confusa",
                "Apresentação amadora"
              ].map((item) => (
                <div key={item} className="bg-destructive/10 text-destructive px-6 py-3 rounded-full font-body font-medium text-lg">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={400}>
          <div className="bg-card rounded-[32px] p-8 md:p-10 border border-border text-center">
            <p className="text-foreground/70 font-body font-normal text-lg mb-6 leading-relaxed">
              O problema não é falta de talento. Nem falta de produtos bons...
            </p>
            <p className="text-xl font-body font-semibold text-foreground mb-6">
              O problema é tentar dar conta de tudo sozinha, sem uma estrutura pronta.
            </p>
            <p className="text-foreground/70 font-body font-normal leading-relaxed mb-8">
              A maioria das confeiteiras perde vendas porque gasta tempo demais criando artes, ajustando detalhes e tentando parecer profissional, quando poderia estar focada no que realmente importa: <strong className="font-semibold">produzir, vender e lucrar.</strong>
            </p>
            <div className="flex justify-center gap-6 text-2xl font-display font-extrabold tracking-wide">
              <span className="text-destructive">+ BAGUNÇA</span>
              <span className="text-gold-dark">- VENDAS</span>
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={500}>
          <div className="text-center mt-12">
            <h3 className="text-3xl md:text-4xl font-display font-extrabold text-foreground mb-4 tracking-wide">
              MAS SAIBA QUE ISSO PODE<br /><span className="text-gradient-gold">MUDAR AGORA!</span>
            </h3>
            <p className="text-lg font-body font-normal text-foreground/80 max-w-2xl mx-auto">
              O Cardápio de Páscoa 2026 foi criado para te entregar tudo pronto e organizado para valorizar seus produtos e aumentar suas vendas.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default ProblemSection;
