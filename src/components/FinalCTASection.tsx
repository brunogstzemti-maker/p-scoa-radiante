import AnimateOnScroll from "./AnimateOnScroll";
import { Star } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="py-20 bg-gradient-pink">
      <div className="container mx-auto px-4 max-w-3xl">
        <AnimateOnScroll>
          <div className="bg-gradient-gold rounded-[40px] p-8 md:p-14 text-center shadow-gold">
            <div className="inline-block bg-primary-foreground/20 backdrop-blur-sm text-primary-foreground font-body text-xs font-bold px-5 py-1.5 rounded-full mb-4 tracking-wider">
              <Star className="w-3.5 h-3.5 inline mr-1 fill-current" /> O E-BOOK MAIS VENDIDO
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-primary-foreground mb-2 tracking-wide">
              ÚLTIMA CHAMADA!
            </h2>
            <p className="text-primary-foreground/80 font-body font-medium mb-2">100 RECEITAS + BÔNUS EXCLUSIVOS</p>
            <div className="my-6">
              <p className="text-primary-foreground/70 font-body line-through text-lg">de R$ 97,00</p>
              <p className="text-primary-foreground font-body font-normal text-sm">por</p>
              <p className="text-6xl md:text-7xl font-display font-extrabold text-primary-foreground tracking-wide">R$ 27,90</p>
              <p className="text-primary-foreground/80 font-body font-normal text-sm mt-1">Ou 5x R$ 5,58</p>
            </div>
            <a href="https://www.ggcheckout.com/checkout/v2/UYenHHkZyNZiJdEg3nLt" target="_blank" rel="noopener noreferrer" className="inline-block bg-primary-foreground text-btn-dark font-body font-bold text-base px-12 py-4 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg animate-pulse-gold">
              EU QUERO LUCRAR NESTA PÁSCOA!
            </a>
            <p className="mt-6 text-primary-foreground/70 font-body font-normal text-sm">
              Temos garantia, mas tenho certeza que você nem vai precisar dela!
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default FinalCTASection;
