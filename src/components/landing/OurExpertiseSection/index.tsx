import { Button } from "@/src/components/shared/Button";
import { Container } from "@/src/components/shared/Container";
import { BodyText } from "@/src/components/shared/ui/typography/BodyText";
import { Headline } from "@/src/components/shared/ui/typography/Headline";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function OurExpertiseSection() {
  return (
    <Container
      as="section"
      className="bg-brand-primary rounded-xl relative overflow-hidden"
    >
      <Container
        variant="inner"
        className="py-18 flex items-center gap-32"
      >
        <Image
          src="/our-expertise-bg.webp"
          alt="our expertise bg"
          width={450}
          height={600}
          draggable={false}
          className="rounded-lg"
        />

        <div>
          <div className="flex flex-col gap-7.5">
            <Headline
              as="h2"
              variant="h2"
            >
              Erfaringen bag vores løsninger
            </Headline>
            <BodyText>Vi har finansieret byggeprojekter i over to årtier.</BodyText>
            <BodyText>
              Vores tilgang er enkel: solide data, grundig vurdering og ærlig rådgivning. Vi ved, at
              hvert projekt er forskelligt – derfor ser vi altid på den reelle værdi og potentiale.
            </BodyText>
            <BodyText>
              Hos Byggekredit får du en partner, der følger dig hele vejen. Fra første vurdering til
              sidste udbetaling. Tryghed, indsigt og erfaring i én løsning.
            </BodyText>
            <div className="flex flex-col gap-2.5">
              <Headline
                as="h3"
                variant="h3"
              >
                Brian Efternavn
              </Headline>
              <BodyText className="text-gray-500">CFO hos Byggekredit</BodyText>
            </div>
          </div>

          <Button
            variant="secondary"
            className="mt-10 max-w-xs flex items-center justify-between"
          >
            {/* empty div for spacing */}
            <div className="size-5 shrink-0" />
            Kom i gang
            <ArrowRight
              size={20}
              className="text-foreground"
            />
          </Button>
        </div>
      </Container>
    </Container>
  );
}
