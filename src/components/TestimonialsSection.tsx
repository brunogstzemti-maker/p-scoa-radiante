import AnimateOnScroll from "./AnimateOnScroll";
import testImg1 from "@/assets/testimonial-img-1.jpg";
import testImg2 from "@/assets/testimonial-img-2.jpg";

import testImg4 from "@/assets/testimonial-img-4.jpg";
import testImg5 from "@/assets/testimonial-img-5.jpg";

import testImg7 from "@/assets/testimonial-img-7.jpg";
import testImg9 from "@/assets/testimonial-img-9.jpg";

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

        <div className="grid grid-cols-1 gap-6 max-w-xl mx-auto">
          {[testImg1, testImg2, testImg4, testImg5, testImg6, testImg7, testImg9].map((img, i) => (
            <AnimateOnScroll key={i} delay={200 + i * 100}>
              <div className="rounded-2xl overflow-hidden shadow-md border border-border">
                <img src={img} alt={`Depoimento ${i + 1}`} className="w-full h-auto object-contain" loading="lazy" />
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
