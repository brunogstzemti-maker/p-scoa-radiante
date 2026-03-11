import AnimateOnScroll from "./AnimateOnScroll";
import noticiaImg from "@/assets/noticia-diario.png";
import { Newspaper } from "lucide-react";

const MediaProofSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <AnimateOnScroll>
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full font-display font-bold text-sm tracking-wider mb-4">
              <Newspaper className="w-4 h-4" />
              SAIU NA MÍDIA
            </div>
            <h2 className="text-2xl md:text-4xl font-display font-extrabold text-foreground tracking-wide leading-tight">
              A Páscoa é o <span className="text-primary">melhor faturamento</span> do ano para confeiteiras
            </h2>
            <p className="mt-3 text-base md:text-lg font-body text-muted-foreground max-w-2xl mx-auto">
              Segundo o <strong>Diário da Região</strong>, confeiteiras autônomas organizadas chegam a aumentar o faturamento em até <strong className="text-primary">+200%</strong> durante a Páscoa.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={200}>
          <div className="relative rounded-2xl overflow-hidden shadow-lg border border-border bg-background">
            <img
              src={noticiaImg}
              alt="Matéria do Diário da Região: Confeiteiras autônomas têm na Páscoa o melhor faturamento do ano"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={300}>
          <div className="mt-8 text-center">
            <blockquote className="glass-pink rounded-2xl px-6 py-5 max-w-2xl mx-auto">
              <p className="font-body italic text-foreground/90 text-base md:text-lg leading-relaxed">
                "O faturamento chega a aumentar 200% nesta época — mas isso só acontece quando você está <strong>organizada</strong>, sabe o custo de cada ovo e consegue atender sem perder o controle."
              </p>
              <footer className="mt-3 font-display font-bold text-sm text-muted-foreground">
                — Diário da Região, Fev. 2026
              </footer>
            </blockquote>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default MediaProofSection;
