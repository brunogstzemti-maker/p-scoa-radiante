import AnimateOnScroll from "./AnimateOnScroll";
import bonusImg from "@/assets/bonus-section.jpg";

const bonusItems = [
  { title: "Prompts para fotos realistas", desc: "Textos prontos para gerar imagens profissionais e realistas dos seus produtos, mesmo sem estúdio." },
  { title: "Pacote de fotos livres de direitos autorais", desc: "Imagens selecionadas para você divulgar sem medo e com aparência profissional." },
  { title: "Molduras para stories", desc: "Layouts que deixam seus stories mais bonitos, organizados e com identidade visual." },
  { title: "Planilha de Precificação", desc: "Ferramenta prática para calcular preços corretamente e garantir lucro em cada venda." },
  { title: "Site para Link da Bio", desc: "Página simples e profissional para centralizar seus links e facilitar os pedidos." },
  { title: "Planner financeiro", desc: "Modelo prático para controle financeiro e planejamento do negócio." },
];

const completeItems = [
  { name: "+40 Posts para Instagram", oldPrice: "R$ 19,90" },
  { name: "+50 Stories para Instagram", oldPrice: "R$ 19,90" },
  { name: "Tags retangulares", oldPrice: "R$ 9,90" },
  { name: "Cartões de agradecimento", oldPrice: "R$ 9,90" },
  { name: "12 Artes Tubolata", oldPrice: "R$ 7,90" },
  { name: "Cartões para biscoito", oldPrice: "R$ 5,90" },
  { name: "Artes para Card Blister", oldPrice: "R$ 5,90" },
  { name: "Artes para Barras de Chocolate", oldPrice: "R$ 5,90" },
  { name: 'TAGs "Ovo Frito"', oldPrice: "R$ 5,90" },
  { name: "Bloco de pedidos", oldPrice: "R$ 5,90" },
  { name: "Tirinhas para Biscoitos", oldPrice: "R$ 5,90" },
];

const BonusSection = () => {
  return (
    <section className="py-20 bg-gradient-pink">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Complete plan benefits */}
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-2">
              Veja tudo que você vai <span className="text-gradient-gold">receber</span>
            </h2>
            <p className="font-body text-muted-foreground text-lg">No Plano Completo de R$ 27,90:</p>
          </div>
        </AnimateOnScroll>

        {/* Included items grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {completeItems.map((item, i) => (
            <AnimateOnScroll key={item.name} delay={i * 60}>
              <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-5 border border-border text-center hover:shadow-gold transition-shadow">
                <p className="font-display font-bold text-foreground text-base mb-1">{item.name}</p>
                <p className="font-body text-muted-foreground text-sm">
                  De: <span className="line-through">{item.oldPrice}</span>{" "}
                  <span className="text-gold font-bold">GRATUITO</span>
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Bonus section */}
        <AnimateOnScroll>
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-4xl font-display font-bold text-foreground">
              Calma, ainda não acabou.
            </h3>
            <p className="text-xl font-body text-foreground/80 mt-2">
              Adquirindo <strong>HOJE</strong>, você ainda ganha:
            </p>
            <p className="text-gradient-gold font-display font-bold text-3xl mt-2">+7 presentes extras</p>
          </div>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {bonusItems.map((item, i) => (
            <AnimateOnScroll key={item.title} delay={i * 80}>
              <div className="glass-gold rounded-2xl p-6 hover:shadow-gold transition-shadow">
                <p className="font-display font-bold text-foreground text-base mb-2">🎁 {item.title}</p>
                <p className="font-body text-foreground/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={500}>
          <div className="relative max-w-sm mx-auto">
            <div className="absolute inset-0 bg-gradient-gold rounded-[40px] rotate-2 scale-105 opacity-20" />
            <img src={bonusImg} alt="Bônus exclusivos de Páscoa" className="relative rounded-[40px] shadow-gold w-full" loading="lazy" />
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={600}>
          <div className="text-center mt-12">
            <a href="#planos" className="inline-block bg-gradient-btn text-primary-foreground font-body font-bold text-lg px-12 py-4 rounded-full shadow-btn hover:scale-105 transition-transform duration-300">
              SIM, QUERO O PLANO COMPLETO! 🐣
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default BonusSection;
