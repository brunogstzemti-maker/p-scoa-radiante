import AnimateOnScroll from "./AnimateOnScroll";
import trustBadges from "@/assets/trust-badges.png";
import securityBadges from "@/assets/security-badges.png";

const TrustBadges = () => {
  return (
    <section className="py-10 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <AnimateOnScroll>
          <img src={trustBadges} alt="Acesso imediato, Garantia de 7 dias, Acesso vitalício" className="mx-auto w-full max-w-lg mb-6" loading="lazy" />
        </AnimateOnScroll>
        <AnimateOnScroll delay={100}>
          <img src={securityBadges} alt="Checkout Seguro, Satisfação Garantida, Privacidade Protegida" className="mx-auto w-full max-w-md" loading="lazy" />
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default TrustBadges;
