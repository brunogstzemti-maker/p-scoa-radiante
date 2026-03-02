import AnimateOnScroll from "./AnimateOnScroll";
import bonusPlanilha from "@/assets/bonus-planilha.png";
import bonusPlanner from "@/assets/bonus-planner.png";
import bonusPrompts from "@/assets/bonus-prompts.png";
import bonusFotos from "@/assets/bonus-fotos.png";
import bonusFotosDrive from "@/assets/bonus-fotos-drive.png";
import bonusMoldura from "@/assets/bonus-moldura.png";
import bonusLinkbio from "@/assets/bonus-linkbio.png";

const bonusItems = [
  { title: "Dicas de apresentação e embalagem", desc: "Aprenda a embalar seus ovos de forma profissional e encantadora.", img: bonusPrompts },
  { title: "Fotos profissionais para divulgação", desc: "Imagens de alta qualidade para usar nas suas redes sociais.", img: bonusFotos },
  { title: "Fotos extras no Google Drive", desc: "Acesso a fotos exclusivas via Drive para usar quando quiser.", img: bonusFotosDrive },
  { title: "Dicas para stories e redes sociais", desc: "Estratégias para divulgar suas receitas e atrair mais clientes.", img: bonusMoldura },
  { title: "Planilha de Precificação", desc: "Ferramenta prática para calcular preços e garantir lucro em cada ovo.", img: bonusPlanilha },
  { title: "Lista de fornecedores", desc: "Fornecedores selecionados para você comprar ingredientes com melhor custo.", img: bonusLinkbio },
  { title: "Planner financeiro", desc: "Modelo prático para controle financeiro do negócio.", img: bonusPlanner },
];

const BonusSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <AnimateOnScroll>
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-4xl font-display font-extrabold text-foreground tracking-wide">
              CALMA, AINDA NÃO ACABOU.
            </h3>
            <p className="text-xl font-body font-medium text-foreground/80 mt-2">
              Adquirindo <strong className="font-semibold">HOJE</strong>, você ainda ganha:
            </p>
            <p className="text-gradient-gold font-display font-extrabold text-3xl mt-2 tracking-wide">+7 PRESENTES EXTRAS</p>
          </div>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {bonusItems.map((item, i) => (
            <AnimateOnScroll key={item.title} delay={i * 80}>
              <div className="glass-gold rounded-2xl p-5 hover:shadow-gold transition-shadow overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-40 object-cover rounded-xl mb-4" loading="lazy" />
                <p className="font-display font-extrabold text-foreground text-base mb-2 tracking-wide">{item.title}</p>
                <p className="font-body font-normal text-foreground/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={600}>
          <div className="text-center mt-12">
            <a href="#planos" className="inline-block bg-gradient-btn text-primary-foreground font-body font-bold text-lg px-12 py-4 rounded-full shadow-btn hover:scale-105 transition-transform duration-300">
              SIM, QUERO O PLANO COMPLETO!
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default BonusSection;
