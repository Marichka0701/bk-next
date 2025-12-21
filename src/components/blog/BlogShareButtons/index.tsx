"use client";

import { AnimatedContainer } from "@/src/components/shared/AnimatedContainer";
import { BodyText } from "@/src/components/shared/ui/typography/BodyText";
import Image from "next/image";
import { useEffect, useState } from "react";

export function BlogShareButtons() {
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  const share = (platform: string) => {
    const links: Record<string, string> = {
      fb: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      li: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
    };
    window.open(links[platform], "_blank");
  };

  return (
    <AnimatedContainer
      preset="fadeUp"
      delay={0.4}
      duration={0.6}
    >
      <div className="mt-16 pt-8 border-t border-border">
        <div className="flex items-center gap-4">
          <BodyText
            variant="18Semibold"
            className="text-secondary-foreground"
          >
            Del artikel:
          </BodyText>
          <div className="flex items-center gap-3">
            <button
              onClick={() => share("fb")}
              className="rounded-xs bg-brand-primary cursor-pointer"
            >
              <Image
                src="/social-media-icons/facebook.svg"
                alt="facebook"
                width={24}
                height={24}
                draggable={false}
              />
            </button>
            <button
              onClick={() => share("li")}
              className="rounded-xs bg-brand-primary cursor-pointer"
            >
              <Image
                src="/social-media-icons/linkedin.svg"
                alt="linkedin"
                width={24}
                height={24}
                draggable={false}
              />
            </button>
          </div>
        </div>
      </div>
    </AnimatedContainer>
  );
}
