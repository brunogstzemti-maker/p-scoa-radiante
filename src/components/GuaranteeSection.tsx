import AnimateOnScroll from "./AnimateOnScroll";
import seloGarantia from "@/assets/selo-garantia.png";

const GuaranteeSection = () => {
    return (
        <section className="py-16 bg-background">
            <div className="container mx-auto px-4 max-w-4xl text-center">
                <AnimateOnScroll>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 bg-gradient-pink p-8 md:p-12 rounded-[40px] border border-gold/20 shadow-pink">
                        <div className="flex-shrink-0 w-48 h-48 md:w-56 md:h-56">
                            <img
                                src={seloGarantia}
                                alt="Selo de 7 dias de Garantia Incondicional"
                                className="w-full h-full object-contain"
                                loading="lazy"
                            />
                        </div>

                        <div className="text-left">
                            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-foreground mb-4 tracking-wide uppercase">
                                GARANTIA INCONDICIONAL DE <span className="text-gradient-gold">7 DIAS!</span>
                            </h2>
                            <div className="space-y-4">
                                <p className="font-body text-foreground/80 text-lg leading-relaxed">
                                    Eu tenho tanta confiança na qualidade destas receitas que te dou uma <strong className="font-bold">GARANTIA TOTAL</strong> de 7 dias.
                                </p>
                                <p className="font-body text-foreground/80 text-lg leading-relaxed">
                                    Se por qualquer motivo você achar que o e-book não é para você, basta me enviar um único e-mail e eu devolvo <strong className="font-bold">100% do seu dinheiro.</strong> Sem perguntas e sem complicações.
                                </p>
                                <p className="font-body font-bold text-lg text-primary">
                                    O seu RISCO é ZERO!
                                </p>
                            </div>
                        </div>
                    </div>
                </AnimateOnScroll>
            </div>
        </section>
    );
};

export default GuaranteeSection;
