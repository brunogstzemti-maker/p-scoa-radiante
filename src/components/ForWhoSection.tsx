import AnimateOnScroll from "./AnimateOnScroll";
import { Check } from "lucide-react";

const forWhoItems = [
  "Anota pedido no papel e vive esquecendo alguma coisa na hora de produzir",
  "Sempre faz as mesmas receitas e não sabe mais o que oferecer para os clientes",
  "Quer cobrar mais pelos seus ovos mas não sabe como justificar o preço",
  "Já perdeu venda por não ter uma receita diferente na hora que o cliente pediu",
  "Quer surpreender seus clientes nessa Páscoa e sair na frente da concorrência",
  "Busca receitas testadas que realmente funcionam — sem desperdício e sem erro",
];

const ForWhoSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-foreground tracking-wide">
              ESTE E-BOOK É PRA VOCÊ QUE...
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="flex flex-col gap-4 max-w-2xl mx-auto">
          {forWhoItems.map((item, i) => (
            <AnimateOnScroll key={i} delay={100 + i * 80}>
              <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-5 border border-border flex items-start gap-3 hover:shadow-gold transition-shadow duration-300">
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-gold flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-primary-foreground" />
                </div>
                <p className="font-body text-foreground font-medium text-sm leading-relaxed">{item}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForWhoSection;
