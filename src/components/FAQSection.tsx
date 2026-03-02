import AnimateOnScroll from "./AnimateOnScroll";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Como vou acessar o e-book?",
    a: "Após a confirmação do pagamento, você receberá no e-mail da compra um link para acessar o e-book em PDF. O acesso pode ser feito tanto pelo computador quanto pelo celular, de onde você estiver.",
  },
  {
    q: "Em quanto tempo eu irei receber?",
    a: "Imediatamente. Logo após a aprovação do seu pagamento, você irá receber no seu e-mail de compra o link para download do e-book.",
  },
  {
    q: "Terei acesso ao produto por quanto tempo?",
    a: "O acesso é vitalício! Você poderá baixar e utilizar o e-book sempre que precisar, sem limite de tempo.",
  },
  {
    q: "As receitas são difíceis de fazer?",
    a: "Não! Todas as receitas possuem instruções passo a passo, com ingredientes acessíveis. São receitas pensadas para confeiteiras de todos os níveis.",
  },
  {
    q: "Posso vender os ovos feitos com essas receitas?",
    a: "Sim! As receitas são suas para usar como quiser. Você pode produzir e vender todos os ovos que fizer com as nossas receitas.",
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <AnimateOnScroll>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-foreground text-center mb-12 tracking-wide">
            DÚVIDAS FREQUENTES
          </h2>
        </AnimateOnScroll>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <AnimateOnScroll key={i} delay={i * 100}>
              <div className="bg-background/80 backdrop-blur-sm rounded-2xl border border-border overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-display font-extrabold text-foreground text-lg pr-4 tracking-wide">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-gold flex-shrink-0 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${open === i ? "max-h-60 pb-5 px-5" : "max-h-0"}`}>
                  <p className="font-body font-normal text-foreground/70 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
