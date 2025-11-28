import { Container } from "@/src/components/shared/Container";
import { Logo } from "@/src/components/shared/Logo";
import { BodyText } from "@/src/components/shared/ui/typography/BodyText";
import Image from "next/image";

export function Footer() {
  return (
    <Container
      as="footer"
      className="relative pt-14 pb-10 bg-brand-primary rounded-xl overflow-hidden"
    >
      <div
        className="absolute top-0 right-0 h-full w-[55%] bg-cover bg-right"
        style={{ backgroundImage: "url('/pattern-bg/footer.webp')" }}
      />

      <div className="relative mx-auto px-5 max-w-7xl z-10">
        <div className="flex justify-between items-start">
          <div>
            <Logo />
            <BodyText className="mt-2.5 mb-8 text-gray-100/40!">
              Din professionelle partner i byggefinansiering
            </BodyText>
            <div className="flex items-center gap-3">
              <Image
                src="/social-media-icons/facebook.svg"
                alt="facebook"
                width={24}
                height={24}
                draggable={false}
                className="cursor-pointer"
              />
              <Image
                src="/social-media-icons/linkedin.svg"
                alt="linkedin"
                width={24}
                height={24}
                draggable={false}
                className="cursor-pointer"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-36">
            <div>
              <BodyText
                variant="18Semibold"
                className="mb-6"
              >
                Om Byggekredit
              </BodyText>

              <ul className="space-y-3">
                <li className="text-gray-100/60">Link</li>
                <li className="text-gray-100/60">Link</li>
                <li className="text-gray-100/60">Link</li>
              </ul>
            </div>

            <div>
              <BodyText
                variant="18Semibold"
                className="mb-6"
              >
                Nyttige links
              </BodyText>

              <ul className="space-y-3">
                <li className="text-gray-100/60">Link</li>
                <li className="text-gray-100/60">Link</li>
                <li className="text-gray-100/60">Link</li>
              </ul>
            </div>

            <div>
              <BodyText
                variant="18Semibold"
                className="mb-6"
              >
                Det Med Småt
              </BodyText>

              <ul className="space-y-3">
                <li className="text-gray-100/60">Terms of Service</li>
                <li className="text-gray-100/60">Link</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-15 pt-8 border-t border-gray-100/10 flex items-center justify-between gap-8">
          <BodyText className="text-gray-100/60!">
            © {new Date().getFullYear()} Byggekredit
          </BodyText>
          <BodyText className="text-gray-100/60! hover:underline">Privary Policy</BodyText>
        </div>
      </div>
    </Container>
  );
}
