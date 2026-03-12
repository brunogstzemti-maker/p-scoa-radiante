import AnimateOnScroll from "./AnimateOnScroll";

const ProblemSection = () => {
  return (
    <section className="py-20 bg-gradient-pink">
      <div className="container mx-auto px-4 max-w-4xl">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-foreground mb-4 tracking-wide">
              A PÁSCOA ESTÁ CHEGANDO...
            </h2>
            <p className="text-xl text-muted-foreground font-body font-medium">
              E com ela, a maior oportunidade de lucrar do ano!
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <div className="glass-pink rounded-[32px] p-8 md:p-12 mb-12">
            <h3 className="text-2xl md:text-3xl font-display font-extrabold text-foreground mb-4 text-center tracking-wide">
              CONFEITEIRA, VOCÊ PODE LUCRAR <span className="text-gradient-gold">MUITO MAIS</span> NESTA PÁSCOA...
            </h3>
            <p className="text-center text-lg font-body font-normal text-foreground/80 mb-2">
              com as receitas certas e <strong className="font-semibold">sem complicação.</strong>
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={200}>
          <p className="text-center text-lg font-body font-normal text-foreground/80 mb-8 leading-relaxed">
            A Páscoa é uma das épocas mais lucrativas para quem trabalha com doces.
            Muitas confeiteiras chegam nesse período cheias de vontade… mas acabam sem saber quais receitas fazer.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={300}>
          <div className="text-center mb-8">
            <p className="text-xl font-display font-extrabold text-foreground mb-6 tracking-wide">E O RESULTADO?</p>
            <div className="flex flex-col gap-3 items-center">
              {[
                "Sempre as mesmas receitas de sempre",
                "Produtos sem diferencial",
                "Vendas abaixo do esperado"
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
              O problema não é falta de talento. Nem falta de vontade...
            </p>
            <p className="text-xl font-body font-semibold text-foreground mb-6">
              O problema é não ter receitas testadas e variadas que realmente vendem.
            </p>
            <p className="text-foreground/70 font-body font-normal leading-relaxed mb-8">
              A maioria das confeiteiras perde vendas porque oferece poucos sabores, repete as mesmas receitas todo ano e não consegue inovar. Enquanto poderia estar focada no que realmente importa: <strong className="font-semibold">produzir, vender e lucrar.</strong>
            </p>
            <div className="flex justify-center gap-6 text-2xl font-display font-extrabold tracking-wide">
              <span className="text-destructive">- VARIEDADE</span>
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
              O e-book 100 Receitas de Ovos de Páscoa foi criado para te entregar receitas testadas e aprovadas para você surpreender seus clientes e vender muito mais.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default ProblemSection;
