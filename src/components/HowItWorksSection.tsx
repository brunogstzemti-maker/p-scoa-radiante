import AnimateOnScroll from "./AnimateOnScroll";

const steps = [
  { emoji: "1️⃣", title: "Acesse pelo Canva", desc: "(fácil e gratuito)" },
  { emoji: "2️⃣", title: "Altere produtos, preços, fotos e textos", desc: "" },
  { emoji: "3️⃣", title: "Salve e envie rapidinho", desc: "para suas clientes." },
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-gradient-pink">
      <div className="container mx-auto px-4 max-w-4xl">
        <AnimateOnScroll>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-foreground text-center mb-4 tracking-wide">
            COMO FUNCIONA?
          </h2>
          <p className="text-center text-muted-foreground font-body font-medium text-lg mb-12">
            É só isso! Em poucos minutos seu cardápio estará lindo, profissional e pronto.
          </p>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <AnimateOnScroll key={i} delay={i * 150}>
              <div className="bg-background/80 backdrop-blur-sm rounded-[24px] p-8 text-center border border-border hover:shadow-gold transition-shadow duration-300">
                <div className="text-4xl mb-4">{step.emoji}</div>
                <p className="font-display font-extrabold text-lg text-foreground mb-1 tracking-wide">{step.title}</p>
                {step.desc && <p className="font-body font-normal text-muted-foreground text-sm">{step.desc}</p>}
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={500}>
          <p className="text-center mt-10 font-body font-normal text-foreground/70 text-lg">
            Mesmo que você <strong className="font-semibold">não entenda nada de design!</strong>
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default HowItWorksSection;
