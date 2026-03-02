import AnimateOnScroll from "./AnimateOnScroll";
import { Heart } from "lucide-react";

const testimonials = [
  {
    username: "cakerosadocesfinos",
    time: "1 sem",
    avatar: "CR",
    likes: 2,
    text: "Voltei com meu feedback!\nQuero te parabenizar pelo belíssimo trabalho, que perfeição... Impermeável.\nEstou encantada com tanta lindeza.\nFácil de acessar, tudo bem explicadinho (tenho dificuldade com tecnologia e super consegui)\nAmando cada detalhe, sem dúvidas meus clientes vão ficar encantados com tamanha perfeição.\nSuper recomendo!",
  },
  {
    username: "jubrigadeiro_",
    time: "1 d",
    avatar: "JB",
    likes: 1,
    text: "Único cardápio que comprei que valeu o investimento tem tudo que preciso.\nConsigo colocar os meus produtos com muita facilidade",
  },
  {
    username: "_dom_doccie_",
    time: "15 h",
    avatar: "DD",
    likes: 0,
    text: "O cardápio mais lindo da vidaaa!!\nSem contar o suporte e a atenção!\nSuper indicooo!!",
  },
  {
    username: "maisdoceconfeita",
    time: "1 d",
    avatar: "MC",
    likes: 1,
    text: "Que catálogo incrível, facilitou muito minha vida, super indico, e não vai doer no seu bolso, te garanto",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-pink">
      <div className="container mx-auto px-4 max-w-2xl">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-foreground tracking-wide mb-2">
              Veja o que confeiteiras do<br />Brasil inteiro estão falando<br />sobre nossos cardápios:
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="flex flex-col gap-4">
          {testimonials.map((t, i) => (
            <AnimateOnScroll key={i} delay={i * 100}>
              <div className="bg-background rounded-2xl border border-border p-5 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center text-primary-foreground font-display font-extrabold text-xs">
                      {t.avatar}
                    </div>
                    <div>
                      <p className="font-body font-semibold text-foreground text-sm">{t.username}</p>
                      <p className="font-body font-normal text-muted-foreground text-xs">{t.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Heart className="w-5 h-5 text-destructive fill-destructive" />
                    {t.likes > 0 && <span className="font-body text-xs text-muted-foreground">{t.likes}</span>}
                  </div>
                </div>
                <p className="font-body font-normal text-foreground/80 text-sm leading-relaxed whitespace-pre-line">
                  {t.text}
                </p>
                <div className="flex gap-4 mt-3">
                  <span className="font-body text-xs text-muted-foreground">Responder</span>
                  <span className="font-body text-xs text-muted-foreground">Ocultar</span>
                  <span className="font-body text-xs text-muted-foreground">Ver tradução</span>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
