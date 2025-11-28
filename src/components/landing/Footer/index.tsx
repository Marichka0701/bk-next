import { Container } from "@/src/components/shared/Container";
import { Logo } from "@/src/components/shared/Logo";
import { BodyText } from "@/src/components/shared/ui/typography/BodyText";
import Image from "next/image";

export function Footer() {
  return (
    <Container
      as="footer"
      className="relative pt-10 md:pt-14 pb-8 md:pb-10 bg-brand-primary md:rounded-xl overflow-hidden"
    >
      {/* mobile pattern bg */}
      <div
        className="absolute inset-y-0 right-0 w-[80%] bg-contain bg-no-repeat bg-top-right md:hidden"
        style={{ backgroundImage: "url('/pattern-bg/footer-mobile.webp')" }}
      />
      {/* desktop pattern bg */}
      <div
        className="absolute inset-y-0 right-0 w-full bg-contain bg-no-repeat bg-right hidden md:block"
        style={{ backgroundImage: "url('/pattern-bg/footer.webp')" }}
      />

      <div className="relative mx-auto px-5 max-w-7xl z-10">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 lg:gap-8">
          <div className="flex flex-col items-center lg:items-start">
            <Logo className="w-60 md:w-fit max-w-70" />
            <BodyText className="mt-2.5 mb-6 lg:mb-8 text-gray-100/40! text-center lg:text-left">
              Din professionelle partner i byggefinansiering
            </BodyText>
            <div className="flex items-center gap-3">
              <Image
                src="/social-media-icons/facebook.svg"
                alt="facebook"
                width={24}
                height={24}
                draggable={false}
                className="cursor-pointer hover:opacity-80 transition-opacity"
              />
              <Image
                src="/social-media-icons/linkedin.svg"
                alt="linkedin"
                width={24}
                height={24}
                draggable={false}
                className="cursor-pointer hover:opacity-80 transition-opacity"
              />
            </div>
          </div>

          <div className="lg:hidden">
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <BodyText
                  variant="18Semibold"
                  className="mb-4"
                >
                  Om Byggekredit
                </BodyText>
                <ul className="space-y-3">
                  <li className="text-gray-100/60 hover:text-gray-100 transition-colors cursor-pointer">
                    Link
                  </li>
                  <li className="text-gray-100/60 hover:text-gray-100 transition-colors cursor-pointer">
                    Link
                  </li>
                  <li className="text-gray-100/60 hover:text-gray-100 transition-colors cursor-pointer">
                    Link
                  </li>
                </ul>
              </div>

              <div>
                <BodyText
                  variant="18Semibold"
                  className="mb-4"
                >
                  Nyttige links
                </BodyText>
                <ul className="space-y-3">
                  <li className="text-gray-100/60 hover:text-gray-100 transition-colors cursor-pointer">
                    Link
                  </li>
                  <li className="text-gray-100/60 hover:text-gray-100 transition-colors cursor-pointer">
                    Link
                  </li>
                  <li className="text-gray-100/60 hover:text-gray-100 transition-colors cursor-pointer">
                    Link
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <BodyText
                variant="18Semibold"
                className="mb-4"
              >
                Det Med Småt
              </BodyText>
              <ul className="space-y-3">
                <li className="text-gray-100/60 hover:text-gray-100 transition-colors cursor-pointer">
                  Terms of Service
                </li>
                <li className="text-gray-100/60 hover:text-gray-100 transition-colors cursor-pointer">
                  Privary Policy
                </li>
              </ul>
            </div>
          </div>

          <div className="hidden lg:grid grid-cols-3 gap-16 xl:gap-36">
            <div>
              <BodyText
                variant="18Semibold"
                className="mb-6"
              >
                Om Byggekredit
              </BodyText>
              <ul className="space-y-3">
                <li className="text-gray-100/60 hover:text-gray-100 transition-colors cursor-pointer">
                  Link
                </li>
                <li className="text-gray-100/60 hover:text-gray-100 transition-colors cursor-pointer">
                  Link
                </li>
                <li className="text-gray-100/60 hover:text-gray-100 transition-colors cursor-pointer">
                  Link
                </li>
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
                <li className="text-gray-100/60 hover:text-gray-100 transition-colors cursor-pointer">
                  Link
                </li>
                <li className="text-gray-100/60 hover:text-gray-100 transition-colors cursor-pointer">
                  Link
                </li>
                <li className="text-gray-100/60 hover:text-gray-100 transition-colors cursor-pointer">
                  Link
                </li>
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
                <li className="text-gray-100/60 hover:text-gray-100 transition-colors cursor-pointer">
                  Terms of Service
                </li>
                <li className="text-gray-100/60 hover:text-gray-100 transition-colors cursor-pointer">
                  Link
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 md:mt-15 pt-6 md:pt-8 border-t border-gray-100/10 flex items-center justify-center md:justify-between gap-12">
          <BodyText className="text-gray-100/60! text-center lg:text-left">
            © {new Date().getFullYear()} Byggekredit
          </BodyText>

          <BodyText className="hidden md:block text-gray-100/60! text-center lg:text-left">Privary Policy</BodyText>
        </div>
      </div>
    </Container>
  );
}
