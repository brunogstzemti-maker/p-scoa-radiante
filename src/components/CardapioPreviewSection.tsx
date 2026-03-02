import AnimateOnScroll from "./AnimateOnScroll";
import mockupOvoTablete from "@/assets/mockup-ovo-tablete.png";
import mockupCardapioRosa from "@/assets/mockup-cardapio-rosa.png";
import mockupCardapioDour from "@/assets/mockup-cardapio-dourado.png";
import mockupFerrero from "@/assets/mockup-ferrero.png";
import mockupNinhoNutella from "@/assets/mockup-ninho-nutella.png";
import mockupMorango from "@/assets/mockup-morango.png";
import mockupOvosColher from "@/assets/mockup-ovos-colher.png";
import mockupOvosTrufados from "@/assets/mockup-ovos-trufados-2.png";


const pages = [
  { img: mockupOvoTablete, alt: "Ovo Tablete" },
  { img: mockupCardapioRosa, alt: "Cardápio Rosa" },
  { img: mockupCardapioDour, alt: "Cardápio Dourado" },
  { img: mockupFerrero, alt: "Ovo Ferrero Rocher" },
  { img: mockupNinhoNutella, alt: "Ovo Ninho com Nutella" },
  { img: mockupMorango, alt: "Ovo Delícia de Morango" },
  { img: mockupOvosColher, alt: "Ovos de Colher" },
  { img: mockupOvosTrufados, alt: "Ovos Trufados" },
  
];

const CardapioPreviewSection = () => {
  return (
    <section className="py-20 bg-gradient-pink">
      <div className="container mx-auto px-4 max-w-6xl">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-foreground mb-4 tracking-wide">
              PÁGINAS INTERNAS DO<br /><span className="text-gradient-gold">CARDÁPIO</span>
            </h2>
            <p className="text-lg font-body font-medium text-muted-foreground">
              Cada página é pensada para valorizar seus produtos e facilitar as encomendas
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {pages.map((page, i) => (
            <AnimateOnScroll key={page.alt} delay={i * 80}>
              <img
                src={page.img}
                alt={`Página do cardápio - ${page.alt}`}
                className="w-full rounded-2xl shadow-pink hover:scale-[1.03] transition-transform duration-300"
                loading="lazy"
              />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardapioPreviewSection;
