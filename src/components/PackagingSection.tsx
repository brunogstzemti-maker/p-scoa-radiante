import AnimateOnScroll from "./AnimateOnScroll";
import embalagemRosa from "@/assets/embalagem-rosa.png";
import embalagemLaranja from "@/assets/embalagem-laranja.png";
import embalagemRosaCartao from "@/assets/embalagem-rosa-cartao.png";
import embalagemRosaCartao2 from "@/assets/embalagem-rosa-cartao-2.png";
import embalagemLaranjaCartao from "@/assets/embalagem-laranja-cartao.png";
import embalagemTubolata from "@/assets/embalagem-tubolata.png";
import embalagemTubolataLaranja from "@/assets/embalagem-tubolata-laranja.png";
import embalagemCristao1 from "@/assets/embalagem-cristao-1.png";
import embalagemCristao2 from "@/assets/embalagem-cristao-2.png";
import embalagemCristao3 from "@/assets/embalagem-cristao-3.png";
import tagRosa from "@/assets/tag-rosa.png";
import tagLaranja from "@/assets/tag-laranja.png";
import cartaoRosa from "@/assets/cartao-agradecimento-rosa.png";
import cartaoLaranja from "@/assets/cartao-agradecimento-laranja.png";

const embalagens = [
  { img: embalagemRosa, alt: "Embalagem Rosa" },
  { img: embalagemLaranja, alt: "Embalagem Laranja" },
  { img: embalagemRosaCartao, alt: "Embalagem Rosa com Cartão" },
  { img: embalagemRosaCartao2, alt: "Embalagem Rosa Cartão 2" },
  { img: embalagemLaranjaCartao, alt: "Embalagem Laranja com Cartão" },
  { img: embalagemTubolata, alt: "Tubolata Rosa" },
  { img: embalagemTubolataLaranja, alt: "Tubolata Laranja" },
  { img: embalagemCristao1, alt: "Embalagem Cristã 1" },
  { img: embalagemCristao2, alt: "Embalagem Cristã 2" },
  { img: embalagemCristao3, alt: "Embalagem Cristã 3" },
  { img: tagRosa, alt: "Tag Rosa" },
  { img: tagLaranja, alt: "Tag Laranja" },
  { img: cartaoRosa, alt: "Cartão de Agradecimento Rosa" },
  { img: cartaoLaranja, alt: "Cartão de Agradecimento Laranja" },
];

const PackagingSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-foreground mb-4 tracking-wide">
              ARTES PARA <span className="text-gradient-gold">EMBALAGENS</span>
            </h2>
            <p className="text-lg font-body font-medium text-muted-foreground">
              Tags, cartões de agradecimento, cintas para tubolata e muito mais!
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {embalagens.map((item, i) => (
            <AnimateOnScroll key={item.alt} delay={i * 60}>
              <img
                src={item.img}
                alt={item.alt}
                className="w-full rounded-xl shadow-pink hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagingSection;
