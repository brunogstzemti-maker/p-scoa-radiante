import AnimateOnScroll from "./AnimateOnScroll";
import badge1 from "@/assets/badge-1.png";
import badge14 from "@/assets/badge-14.png";
import badge12 from "@/assets/badge-12.png";

const steps = [
  {
    badge: badge1,
    title: "Receba o e-book no seu e-mail",
    desc: "Acesso imediato após o pagamento.",
  },
  {
    badge: badge14,
    title: "Escolha suas receitas favoritas",
    desc: "São 100 opções para todos os gostos!",
  },
  {
    badge: badge12,
    title: "Produza e venda muito",
    desc: "Surpreenda seus clientes e lucre!",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <AnimateOnScroll>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-foreground text-center mb-4 tracking-wide">
            COMO FUNCIONA?
          </h2>
          <p className="text-center text-muted-foreground font-body font-medium text-lg mb-12">
            É simples! Em poucos minutos você terá acesso a todas as receitas.
          </p>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <AnimateOnScroll key={i} delay={i * 150}>
              <div className="bg-background/80 backdrop-blur-sm rounded-[24px] p-8 text-center border border-border hover:shadow-gold transition-shadow duration-300">
                <img src={step.badge} alt={`Passo ${i + 1}`} className="w-16 h-16 mx-auto mb-4" loading="lazy" />
                <p className="font-display font-extrabold text-lg text-foreground mb-1 tracking-wide">{step.title}</p>
                {step.desc && <p className="font-body font-normal text-muted-foreground text-sm">{step.desc}</p>}
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={500}>
          <div className="flex items-center justify-center gap-3 mt-10">
            <p className="font-body font-normal text-foreground/70 text-lg">
              Receitas <strong className="font-semibold">fáceis de seguir</strong>, mesmo para iniciantes!
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default HowItWorksSection;
