import AnimateOnScroll from "./AnimateOnScroll";
import testimonial1 from "@/assets/testimonial-1.png";
import testimonial2 from "@/assets/testimonial-2.png";
import testimonial3 from "@/assets/testimonial-3.png";
import testimonial4 from "@/assets/testimonial-4.png";
import testimonial5 from "@/assets/testimonial-5.png";
import testimonial6 from "@/assets/testimonial-6.png";
import testimonial7 from "@/assets/testimonial-7.png";
import starsImg from "@/assets/stars-rating.png";

const testimonials = [testimonial1, testimonial2, testimonial3, testimonial4, testimonial5, testimonial6, testimonial7];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-pink">
      <div className="container mx-auto px-4 max-w-5xl">
        <AnimateOnScroll>
          <div className="text-center mb-4">
            <img src={starsImg} alt="5 estrelas" className="mx-auto w-40 md:w-52 mb-4" loading="lazy" />
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-foreground tracking-wide mb-2">
              VEJA O QUE CONFEITEIRAS DO<br />BRASIL INTEIRO ESTÃO FALANDO
            </h2>
            <p className="font-body font-medium text-muted-foreground text-lg">
              sobre nossos cardápios:
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {testimonials.map((img, i) => (
            <AnimateOnScroll key={i} delay={i * 100}>
              <img
                src={img}
                alt={`Depoimento de cliente ${i + 1}`}
                className="w-full rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-300"
                loading="lazy"
              />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
