import AnimateOnScroll from "./AnimateOnScroll";
import { Check } from "lucide-react";

const forWhoItems = [
  "Confeiteiras iniciantes ou experientes",
  "Quem vende ovos, biscoitos, bolos, kits de Páscoa e outros",
  "Quem quer vender mais gastando pouco",
  "Quem não entende de design",
  "Quem quer praticidade e profissionalismo",
];

const ForWhoSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <p className="font-body font-medium text-muted-foreground text-lg mb-2">este produto?</p>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-foreground tracking-wide">
              PRA QUEM É
            </h2>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-display font-extrabold text-foreground tracking-wide">
              ENCANTE SEUS CLIENTES COM UM<br />
              <span className="text-gradient-gold">CARDÁPIO QUE VENDE POR VOCÊ!</span>
            </h3>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {forWhoItems.map((item, i) => (
            <AnimateOnScroll key={item} delay={150 + i * 80}>
              <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-5 border border-border flex items-start gap-3 hover:shadow-gold transition-shadow duration-300">
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-gold flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-primary-foreground" />
                </div>
                <p className="font-body text-foreground font-medium text-sm">{item}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForWhoSection;
