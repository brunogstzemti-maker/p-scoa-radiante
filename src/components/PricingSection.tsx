import AnimateOnScroll from "./AnimateOnScroll";
import { Check, X, Star } from "lucide-react";
import mockupOferta from "@/assets/mockup-oferta-completa.jpg";

const basicPlan = {
  items: [
    "50 Receitas de Ovos de Páscoa",
    "Receitas clássicas e tradicionais",
    "Instruções passo a passo",
  ],
  notIncluded: [
    "Não inclui receitas gourmet",
    "Não inclui receitas fitness",
    "Não inclui dicas de precificação",
    "Não inclui bônus extras",
  ],
};

const completePlan = {
  items: [
    "Ebook completo passo a passo",
    "Receitas testadas",
    "Lista dos recheios mais vendidos",
    "Método de cálculo de lucro",
    "Estratégia simples de vendas",
    "Organização da produção",
  ],
};

const PricingSection = () => {
  return (
    <section id="planos" className="py-20 bg-gradient-pink">
      <div className="container mx-auto px-4 max-w-6xl">
        <AnimateOnScroll>
          <div className="text-center mb-4">
            <p className="font-body font-medium text-muted-foreground text-lg">Preparei 2 PLANOS pra você.</p>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-foreground mt-2 tracking-wide">
              ESCOLHA O IDEAL PARA<br />O SEU NEGÓCIO:
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* Basic Plan */}
          <AnimateOnScroll delay={100}>
            <div className="bg-card rounded-[32px] border border-border p-8 flex flex-col h-full">
              <h3 className="text-2xl font-display font-extrabold text-foreground mb-2 tracking-wide">PLANO BÁSICO</h3>
              <div className="mb-6">
                <span className="text-muted-foreground font-body line-through text-lg">R$ 27,90</span>
                <span className="text-foreground font-body font-normal text-sm"> por apenas</span>
                <p className="text-5xl font-display font-extrabold text-gradient-gold tracking-wide">R$ 10,00</p>
              </div>

              <div className="flex-1 space-y-3 mb-6">
                {basicPlan.items.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span className="font-body font-normal text-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-border pt-4 space-y-2 mb-6">
                <p className="font-body text-muted-foreground text-xs font-semibold uppercase tracking-wider mb-2">Lembre-se que:</p>
                {basicPlan.notIncluded.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <X className="w-4 h-4 text-muted-foreground/50 flex-shrink-0 mt-0.5" />
                    <span className="font-body font-normal text-muted-foreground text-xs">{item}</span>
                  </div>
                ))}
              </div>

              <a href="https://www.ggcheckout.com/checkout/v2/juuSov89FzBKk3sEim7N" target="_blank" rel="noopener noreferrer" className="block text-center bg-gradient-btn text-primary-foreground font-body font-semibold py-3.5 rounded-full hover:scale-105 transition-transform shadow-btn">
                QUERO ESTE PLANO!
              </a>
            </div>
          </AnimateOnScroll>

          {/* Complete Plan */}
          <AnimateOnScroll delay={200}>
            <div className="relative bg-card rounded-[32px] border border-border flex flex-col h-full shadow-gold overflow-hidden">
              <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20">
                <div className="bg-gold text-primary-foreground font-body text-xs font-bold px-5 py-1.5 rounded-full flex items-center gap-1.5 tracking-wider">
                  <Star className="w-3.5 h-3.5 fill-current" /> MAIS VENDIDO
                </div>
              </div>

              <div className="relative w-full aspect-[4/3] bg-white pt-10">
                <img src={mockupOferta} alt="Oferta Completa" className="w-full h-full object-contain" />
              </div>

              <div className="p-8 pt-6 flex flex-col flex-1">
                <div className="text-center mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#D4145A] mb-2" style={{ fontFamily: "'Dancing Script', cursive" }}>
                    Veja tudo o que você recebe hoje:
                  </h3>
                  <p className="font-body text-muted-foreground font-normal">Ao adquirir hoje o ebook, você recebe:</p>
                </div>

                <div className="flex-1 space-y-0 text-foreground mb-6">
                  {completePlan.items.map((item) => (
                    <div key={item} className="flex items-center gap-3 py-2.5 border-b border-border last:border-0 text-left">
                      <div className="bg-[#2EB85C] rounded-md p-1">
                        <Check className="w-3.5 h-3.5 text-white stroke-[4]" />
                      </div>
                      <span className="font-body font-medium text-foreground">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mb-6 text-center">
                  <span className="text-muted-foreground font-body line-through text-lg">R$ 97</span>
                  <span className="text-foreground font-body font-normal text-sm"> por apenas</span>
                  <p className="text-5xl font-display font-extrabold text-gradient-gold tracking-wide">R$ 27,90</p>
                  <p className="text-muted-foreground font-body font-normal text-sm mt-1">Ou 5x R$ 5,58</p>
                </div>

                <a href="https://www.ggcheckout.com/checkout/v2/UYenHHkZyNZiJdEg3nLt" target="_blank" rel="noopener noreferrer" className="block text-center bg-gradient-btn text-primary-foreground font-body font-bold py-4 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg">
                  SIM, QUERO OFERTA PREMIUM!
                </a>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
