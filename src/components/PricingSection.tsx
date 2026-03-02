import AnimateOnScroll from "./AnimateOnScroll";
import { Check, X, Star } from "lucide-react";

const basicPlan = {
  items: [
    "Cardápio Editável de Páscoa",
    "Modelo: Rosa e Dourado",
    "Modelo: Cristão",
    "Aulas ensinando como editar o material",
  ],
  notIncluded: [
    
    "Não inclui Posts e Stories editáveis",
    "Não inclui Artes para Embalagens",
    "Não inclui Bloco de pedidos",
    "Não inclui Presentes Extras",
  ],
};

const completePlan = {
  cardapio: [
    "Cardápio Editável de Páscoa",
    "Modelo: Rosa e Dourado",
    "Modelo: Cristão",
    "Modelo: Laranja e Verde",
  ],
  extras: [
    "Cardápios versão FEED",
    "Aulas de edição",
    
    "Posts para Instagram",
    "Stories prontos para divulgação",
  ],
  embalagens: [
    "Cartões de agradecimento",
    "Tags",
    "Cintas para tubolata",
    "Cartões para biscoitos",
    "Cartões para barra de chocolate",
    'Cartão "Ovo Frito"',
    "Tirinhas para biscoitos",
    "Card blister",
    "Artes lapela",
  ],
  materiaisExtras: ["Bloco de pedidos"],
  bonus: [
    "Prompts para fotos realistas",
    "Pacote de fotos sem direitos autorais",
    "Molduras para stories",
    "Planilha de precificação para confeiteiras",
    "Site para link da bio",
    "Bônus surpresa exclusivos",
  ],
};

const PricingSection = () => {
  return (
    <section id="planos" className="py-20 bg-background">
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

              <a href="#" className="block text-center bg-gradient-btn text-primary-foreground font-body font-semibold py-3.5 rounded-full hover:scale-105 transition-transform shadow-btn">
                QUERO ESTE PLANO!
              </a>
            </div>
          </AnimateOnScroll>

          {/* Complete Plan */}
          <AnimateOnScroll delay={200}>
            <div className="relative bg-gradient-gold rounded-[32px] p-8 flex flex-col h-full shadow-gold">
              {/* Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="bg-foreground text-primary-foreground font-body text-xs font-bold px-5 py-1.5 rounded-full flex items-center gap-1.5 tracking-wider">
                  <Star className="w-3.5 h-3.5 fill-current" /> MAIS VENDIDO
                </div>
              </div>

              <h3 className="text-2xl font-display font-extrabold text-primary-foreground mb-2 tracking-wide">PLANO COMPLETO</h3>
              <div className="mb-6">
                <span className="text-primary-foreground/70 font-body line-through text-lg">R$ 97</span>
                <span className="text-primary-foreground font-body font-normal text-sm"> por apenas</span>
                <p className="text-5xl font-display font-extrabold text-primary-foreground tracking-wide">R$ 27,90</p>
                <p className="text-primary-foreground/80 font-body font-normal text-sm mt-1">Ou 6x R$ 5,24</p>
              </div>

              <div className="flex-1 space-y-1.5 mb-6">
                <p className="font-body text-primary-foreground/90 text-xs font-semibold uppercase tracking-wider mb-2">Cardápio:</p>
                {completePlan.cardapio.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary-foreground flex-shrink-0 mt-0.5" />
                    <span className="font-body font-normal text-primary-foreground text-sm">{item}</span>
                  </div>
                ))}
                <div className="pt-3" />
                {completePlan.extras.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary-foreground flex-shrink-0 mt-0.5" />
                    <span className="font-body font-normal text-primary-foreground text-sm">{item}</span>
                  </div>
                ))}
                <div className="pt-3" />
                <p className="font-body text-primary-foreground/90 text-xs font-semibold uppercase tracking-wider mb-1">Artes para embalagens:</p>
                {completePlan.embalagens.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary-foreground flex-shrink-0 mt-0.5" />
                    <span className="font-body font-normal text-primary-foreground text-sm">{item}</span>
                  </div>
                ))}
                <div className="pt-3" />
                <p className="font-body text-primary-foreground/90 text-xs font-semibold uppercase tracking-wider mb-1">Materiais extras:</p>
                {completePlan.materiaisExtras.map((item) => (
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

              <a href="#" className="block text-center bg-primary-foreground text-btn-dark font-body font-bold py-4 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg">
                SIM, QUERO OFERTA PREMIUM!
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
