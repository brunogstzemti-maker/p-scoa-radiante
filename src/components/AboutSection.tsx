import AnimateOnScroll from "./AnimateOnScroll";
import confeiteiraImg from "@/assets/confeiteira.jpg";
import instagramIcon from "@/assets/instagram-icon.png";
import mockupWhatsapp from "@/assets/mockup-whatsapp-community.png";
import whatsappIcon from "@/assets/whatsapp-icon.png";

const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
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
                Este cardápio não foi criado apenas por uma designer, mas por alguém que já esteve no seu lugar 💝
              </p>
            </div>
          </AnimateOnScroll>
        </div>

        {/* WhatsApp Community */}
        <AnimateOnScroll delay={300}>
          <div className="flex flex-col md:flex-row items-center gap-8 bg-card rounded-[32px] border border-border p-8">
            <img
              src={mockupWhatsapp}
              alt="Comunidade Doce Criative no WhatsApp"
              className="w-56 md:w-64 rounded-2xl shadow-lg"
              loading="lazy"
            />
            <div className="text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start mb-3">
                <img src={whatsappIcon} alt="WhatsApp" className="w-8 h-8" loading="lazy" />
                <h3 className="font-display font-extrabold text-xl text-foreground tracking-wide">COMUNIDADE EXCLUSIVA</h3>
              </div>
              <p className="font-body font-normal text-foreground/80 leading-relaxed mb-4">
                No plano completo, você recebe suporte individual via WhatsApp e acesso à nossa comunidade exclusiva de confeiteiras com dicas, bônus e muito mais!
              </p>
              <a href="#planos" className="inline-block bg-gradient-btn text-primary-foreground font-body font-bold px-8 py-3 rounded-full shadow-btn hover:scale-105 transition-transform duration-300 text-sm">
                QUERO FAZER PARTE! 💬
              </a>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default AboutSection;
