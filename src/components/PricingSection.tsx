import AnimateOnScroll from "./AnimateOnScroll";
import { Check, Star, AlertTriangle } from "lucide-react";

const completePlan = {
  receitas: [
    "100 Receitas de Ovos de Páscoa",
    "Receitas clássicas e tradicionais",
    "Receitas gourmet e premium",
    "Receitas fitness e saudáveis",
  ],
  extras: [
    "Instruções passo a passo detalhadas",
    "Fotos ilustrativas de cada receita",
    "Dicas de apresentação e embalagem",
    "Dicas de precificação para lucrar",
  ],
  bonus: [
    "Fotos profissionais para divulgação",
    "Planilha de precificação",
    "Dicas de divulgação nas redes sociais",
    "Suporte individual",
    "Bônus surpresa exclusivos",
  ],
};

const PricingSection = () => {
  return (
    <section id="planos" className="py-20 bg-gradient-pink">
      <div className="container mx-auto px-4 max-w-xl">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-foreground mt-2 tracking-wide">
              GARANTA O SEU AGORA:
            </h2>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={200}>
          <div id="plano-completo" className="relative bg-gradient-gold rounded-[32px] p-8 flex flex-col h-full shadow-gold">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
              <div className="bg-foreground text-primary-foreground font-body text-xs font-bold px-5 py-1.5 rounded-full flex items-center gap-1.5 tracking-wider">
                <Star className="w-3.5 h-3.5 fill-current" /> MAIS VENDIDO
              </div>
            </div>

            <h3 className="text-2xl font-display font-extrabold text-primary-foreground mb-4 tracking-wide">PLANO COMPLETO</h3>

            <div className="mb-6">
              <span className="text-primary-foreground/70 font-body line-through text-lg">R$ 67,00</span>
              <span className="text-primary-foreground font-body font-normal text-sm"> por apenas</span>
              <p className="text-5xl font-display font-extrabold text-primary-foreground tracking-wide">R$ 27,90</p>
              <p className="text-primary-foreground/80 font-body font-normal text-sm mt-1">Ou 5x R$ 5,58</p>
            </div>

            <div className="flex-1 space-y-1.5 mb-6">
              <p className="font-body text-primary-foreground/90 text-xs font-semibold uppercase tracking-wider mb-2">Receitas:</p>
              {completePlan.receitas.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary-foreground flex-shrink-0 mt-0.5" />
                  <span className="font-body font-normal text-primary-foreground text-sm">{item}</span>
                </div>
              ))}
              <div className="pt-3" />
              <p className="font-body text-primary-foreground/90 text-xs font-semibold uppercase tracking-wider mb-1">Extras inclusos:</p>
              {completePlan.extras.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary-foreground flex-shrink-0 mt-0.5" />
                  <span className="font-body font-normal text-primary-foreground text-sm">{item}</span>
                </div>
              ))}
              <div className="pt-3" />
              <p className="font-body text-primary-foreground/90 text-xs font-semibold uppercase tracking-wider mb-1">Bônus especiais:</p>
              {completePlan.bonus.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary-foreground flex-shrink-0 mt-0.5" />
                  <span className="font-body font-normal text-primary-foreground text-sm">{item}</span>
                </div>
              ))}
            </div>

            <a href="https://www.ggcheckout.com/checkout/v2/UYenHHkZyNZiJdEg3nLt" target="_blank" rel="noopener noreferrer" className="block text-center bg-gradient-btn text-primary-foreground font-body font-bold py-4 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg">
              SIM, QUERO OFERTA PREMIUM!
            </a>

            <p className="mt-4 text-center text-xs font-body font-medium text-destructive flex items-center justify-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5" />
              Páscoa é em 24 dias — quem comprar hoje ainda tem tempo de lucrar.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PricingSection;
