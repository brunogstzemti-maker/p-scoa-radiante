import AnimateOnScroll from "./AnimateOnScroll";
import { Heart } from "lucide-react";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.webp";
import avatar3 from "@/assets/avatar-3.jpg";
import avatar4 from "@/assets/avatar-4.webp";
import testImg1 from "@/assets/testimonial-img-1.jpg";
import testImg2 from "@/assets/testimonial-img-2.jpg";
import testImg3 from "@/assets/testimonial-img-3.jpg";
import testImg4 from "@/assets/testimonial-img-4.jpg";
import testImg5 from "@/assets/testimonial-img-5.jpg";
import testImg6 from "@/assets/testimonial-img-6.jpg";
import testImg7 from "@/assets/testimonial-img-7.jpg";
import testImg8 from "@/assets/testimonial-img-8.jpg";

const testimonials = [
  {
    username: "cakerosadocesfinos",
    time: "1 sem",
    avatarImg: avatar1,
    likes: 2,
    text: "Voltei com meu feedback!\nAs receitas são maravilhosas, testei várias e todas deram super certo!\nMeus clientes amaram os sabores diferentes.\nSuper fácil de seguir, tudo bem explicadinho.\nAmando cada receita, sem dúvidas vou lucrar muito nesta Páscoa.\nSuper recomendo!",
  },
  {
    username: "jubrigadeiro_",
    time: "1 d",
    avatarImg: avatar2,
    likes: 1,
    text: "Melhor investimento que fiz para essa Páscoa! As receitas são incríveis e variadas.\nConsigo inovar nos sabores com muita facilidade.",
  },
  {
    username: "_dom_doccie_",
    time: "15 h",
    avatarImg: avatar3,
    likes: 0,
    text: "As receitas mais lindas e gostosas da vidaaa!!\nVariedade incrível de sabores!\nSuper indicooo!!",
  },
  {
    username: "maisdoceconfeita",
    time: "1 d",
    avatarImg: avatar4,
    likes: 1,
    text: "Que e-book incrível, facilitou muito minha vida, super indico! 50 receitas testadas e aprovadas, e não vai doer no seu bolso!",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-2xl">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-foreground tracking-wide mb-2">
              Veja o que confeiteiras do<br />Brasil inteiro estão falando<br />sobre nossas receitas:
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="flex flex-col gap-4">
          {testimonials.map((t, i) => (
            <AnimateOnScroll key={i} delay={i * 100}>
              <div className="bg-background rounded-2xl border border-border p-5 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <img src={t.avatarImg} alt={t.username} className="w-10 h-10 rounded-full object-cover" loading="lazy" />
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
          <AnimateOnScroll delay={500}>
            <div className="text-center mt-16 mb-8">
              <h3 className="text-2xl md:text-3xl font-display font-extrabold text-foreground tracking-wide">
                MAIS FEEDBACKS POSITIVOS:
              </h3>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 gap-6 max-w-xl mx-auto">
            {[testImg1, testImg2, testImg3, testImg4, testImg5, testImg6, testImg7, testImg8].map((img, i) => (
              <AnimateOnScroll key={i} delay={600 + i * 100}>
                <div className="rounded-2xl overflow-hidden shadow-md border border-border">
                  <img src={img} alt={`Depoimento ${i + 1}`} className="w-full h-auto object-contain" loading="lazy" />
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
