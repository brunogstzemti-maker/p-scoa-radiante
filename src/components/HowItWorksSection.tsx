import AnimateOnScroll from "./AnimateOnScroll";
import badge1 from "@/assets/badge-1.png";
import badge14 from "@/assets/badge-14.png";
import badge12 from "@/assets/badge-12.png";
import canvaIcon from "@/assets/canva-icon.png";

const steps = [
  {
    badge: badge1,
    title: "Acesse pelo Canva",
    desc: "(fácil e gratuito)",
  },
  {
    badge: badge14,
    title: "Altere produtos, preços, fotos e textos",
    desc: "",
  },
  {
    badge: badge12,
    title: "Salve e envie rapidinho",
    desc: "para suas clientes.",
  },
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
                <img src={step.badge} alt={`Passo ${i + 1}`} className="w-16 h-16 mx-auto mb-4" loading="lazy" />
                <p className="font-display font-extrabold text-lg text-foreground mb-1 tracking-wide">{step.title}</p>
                {step.desc && <p className="font-body font-normal text-muted-foreground text-sm">{step.desc}</p>}
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={500}>
          <div className="flex items-center justify-center gap-3 mt-10">
            <img src={canvaIcon} alt="Canva" className="w-8 h-8 rounded-full" loading="lazy" />
            <p className="font-body font-normal text-foreground/70 text-lg">
              Mesmo que você <strong className="font-semibold">não entenda nada de design!</strong>
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default HowItWorksSection;
