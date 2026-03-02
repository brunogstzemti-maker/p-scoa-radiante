import AnimateOnScroll from "./AnimateOnScroll";
import mockupPost from "@/assets/mockup-post.png";
import mockupPost2 from "@/assets/mockup-post-2.png";
import storyRosa from "@/assets/story-rosa.png";
import storyCristao from "@/assets/story-cristao.png";
import mockupStoriesOverview from "@/assets/mockup-stories-overview.png";
import mockupStoryLembrete from "@/assets/mockup-story-lembrete.png";

const SocialMediaSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-foreground mb-4 tracking-wide">
              POSTS E STORIES PARA<br /><span className="text-gradient-gold">INSTAGRAM</span>
            </h2>
            <p className="text-lg font-body font-medium text-muted-foreground">
              Divulgue seus produtos com artes prontas e profissionais
            </p>
          </div>
        </AnimateOnScroll>

        {/* Posts */}
        <div className="mb-12">
          <AnimateOnScroll>
            <h3 className="text-2xl font-display font-extrabold text-foreground text-center mb-6 tracking-wide">
              POSTS PARA FEED
            </h3>
          </AnimateOnScroll>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <AnimateOnScroll delay={100}>
              <img src={mockupPost} alt="Post para Instagram" className="w-64 md:w-72 rounded-2xl shadow-gold hover:scale-105 transition-transform duration-300" loading="lazy" />
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <img src={mockupPost2} alt="Post para Instagram 2" className="w-64 md:w-72 rounded-2xl shadow-gold hover:scale-105 transition-transform duration-300" loading="lazy" />
            </AnimateOnScroll>
          </div>
        </div>

        {/* Stories */}
        <div>
          <AnimateOnScroll>
            <h3 className="text-2xl font-display font-extrabold text-foreground text-center mb-6 tracking-wide">
              STORIES PRONTOS
            </h3>
          </AnimateOnScroll>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-8">
            <AnimateOnScroll delay={100}>
              <img src={storyRosa} alt="Story Rosa" className="w-36 md:w-44 rounded-2xl shadow-pink hover:scale-105 transition-transform duration-300" loading="lazy" />
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <img src={storyCristao} alt="Story Cristão" className="w-36 md:w-44 rounded-2xl shadow-pink hover:scale-105 transition-transform duration-300" loading="lazy" />
            </AnimateOnScroll>
            <AnimateOnScroll delay={300}>
              <img src={mockupStoryLembrete} alt="Story Lembrete" className="w-36 md:w-44 rounded-2xl shadow-pink hover:scale-105 transition-transform duration-300" loading="lazy" />
            </AnimateOnScroll>
          </div>
          <AnimateOnScroll delay={400}>
            <img
              src={mockupStoriesOverview}
              alt="Visão geral de todos os stories"
              className="w-full max-w-2xl mx-auto rounded-2xl shadow-pink"
              loading="lazy"
            />
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;
