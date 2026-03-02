import AnimateOnScroll from "./AnimateOnScroll";
import mockupTravessa from "@/assets/mockup-travessa.png";
import mockupTrioColher from "@/assets/mockup-trio-colher.png";
import mockupKitMiniOvos from "@/assets/mockup-kit-mini-ovos.png";
import mockupMiniOvos from "@/assets/mockup-mini-ovos.png";
import mockupBarrinha from "@/assets/mockup-barrinha.png";
import mockupLancamentos from "@/assets/mockup-lancamentos.png";
import mockupCarimbadinho from "@/assets/mockup-carimbadinho.png";
import mockupBiscoitos from "@/assets/mockup-biscoitos.png";
import mockupLembrancinhas from "@/assets/mockup-lembrancinhas.png";
import mockupLinhaKids from "@/assets/mockup-linha-kids.png";
import mockupSobremesas from "@/assets/mockup-sobremesas.png";
import mockupKitConfeiteiro from "@/assets/mockup-kit-confeiteiro.png";

const pages = [
  { img: mockupTravessa, alt: "Ovos na Travessa" },
  { img: mockupTrioColher, alt: "Trio Ovos de Colher" },
  { img: mockupKitMiniOvos, alt: "Kit Mini Ovos" },
  { img: mockupMiniOvos, alt: "Mini Ovos" },
  { img: mockupBarrinha, alt: "Barrinha Recheada" },
  { img: mockupLancamentos, alt: "Lançamentos 2026" },
  { img: mockupCarimbadinho, alt: "Carimbadinho" },
  { img: mockupBiscoitos, alt: "Biscoitos Amanteigados" },
  { img: mockupLembrancinhas, alt: "Lembrancinhas" },
  { img: mockupLinhaKids, alt: "Linha Kids" },
  { img: mockupSobremesas, alt: "Sobremesas" },
  { img: mockupKitConfeiteiro, alt: "Kit Mini Confeiteiro" },
];

const MorePagesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-foreground mb-4 tracking-wide">
              E TEM MUITO <span className="text-gradient-gold">MAIS!</span>
            </h2>
            <p className="text-lg font-body font-medium text-muted-foreground">
              Páginas para todos os tipos de produtos que você vende na Páscoa
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {pages.map((page, i) => (
            <AnimateOnScroll key={page.alt} delay={i * 60}>
              <img
                src={page.img}
                alt={`Página do cardápio - ${page.alt}`}
                className="w-full rounded-2xl shadow-pink hover:scale-[1.03] transition-transform duration-300"
                loading="lazy"
              />
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={400}>
          <div className="text-center mt-12">
            <a href="#planos" className="inline-block bg-gradient-btn text-primary-foreground font-body font-bold text-lg px-12 py-4 rounded-full shadow-btn hover:scale-105 transition-transform duration-300">
              QUERO TODAS ESSAS PÁGINAS!
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default MorePagesSection;
