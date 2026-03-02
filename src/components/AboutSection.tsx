import AnimateOnScroll from "./AnimateOnScroll";
import confeiteiraImg from "@/assets/confeiteira.jpg";
import instagramIcon from "@/assets/instagram-icon.png";
import mockupWhatsapp from "@/assets/mockup-whatsapp-community.png";
import whatsappIcon from "@/assets/whatsapp-icon.png";

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-pink">
      <div className="container mx-auto px-4 max-w-5xl">
        <AnimateOnScroll>
          <div className="flex items-center justify-center gap-3 mb-12">
            <img src={instagramIcon} alt="Instagram" className="w-10 h-10" loading="lazy" />
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-foreground tracking-wide">
              QUEM CRIOU ESSE MATERIAL
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
          <AnimateOnScroll delay={100}>
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-gold rounded-full scale-105 opacity-30" />
              <img
                src={confeiteiraImg}
                alt="Confeiteira criadora do cardápio"
                className="relative w-52 h-52 rounded-full object-cover shadow-gold"
                loading="lazy"
              />
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <div className="text-center md:text-left">
              <p className="font-body font-normal text-foreground/80 leading-relaxed">
                Confeiteira por muitos anos e apaixonada por tudo o que envolve doces. Vivi na prática a rotina intensa da confeitaria: produção puxada, datas comemorativas corridas e a necessidade de vender bem, mesmo com pouco tempo.
              </p>
              <p className="font-body font-normal text-foreground/80 leading-relaxed mt-4">
                Este cardápio não foi criado apenas por uma designer, mas por alguém que já esteve no seu lugar.
              </p>
            </div>
          </AnimateOnScroll>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
