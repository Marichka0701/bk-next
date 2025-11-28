import { CollaborationCompaniesLogo } from "@/src/components/landing/CollaborationCompaniesLogo";
import { ContactUsForm } from "@/src/components/landing/ContactUsForm";
import { Header } from "@/src/components/landing/Header";
import { Container } from "@/src/components/shared/Container";
import { BodyText } from "@/src/components/shared/ui/typography/BodyText";
import { Headline } from "@/src/components/shared/ui/typography/Headline";

export function HeroSection() {
  return (
    <Container
      as="section"
      className="lg:h-screen lg:max-h-[800px] bg-brand-primary md:rounded-xl relative overflow-hidden"
    >
      <div
        className="absolute top-0 right-0 h-full lg:w-[60%] bg-cover bg-right"
        style={{ backgroundImage: "url('/pattern-bg/hero-section.webp')" }}
      />

      <Container
        variant="inner"
        className="py-9 md:py-16 h-full relative z-10"
      >
        <Header />

        <div className="pt-12.5 w-full h-full flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-xl flex flex-col items-start">
            <div className="mb-6 md:mb-7.5 py-3 md:py-4 px-3.5 md:px-6 bg-brand-secondary-100 rounded">
              <BodyText
                variant="14Semibold"
                className="text-secondary-orange-100!"
              >
                Mere end 20 års erfaring
              </BodyText>
            </div>
            <Headline>Din professionelle partner ibyggefinansiering</Headline>
            <BodyText className="mt-6 md:mt-10 md:mb-12.5">
              Vi finansierer projekter i alle størrelser – fra boligbyggeri til større
              investeringer. Byggefinansiering med sikkerhed, indsigt og en effektiv proces.
            </BodyText>

            <CollaborationCompaniesLogo className="hidden lg:block" />
          </div>

          <ContactUsForm />

          <CollaborationCompaniesLogo className="lg:hidden flex flex-col justify-center items-center" />
        </div>
      </Container>
    </Container>
  );
}
