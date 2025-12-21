import { useCallback } from "react";

export const useContactFormScroll = () => {
  const scrollToForm = useCallback(() => {
    const formSection = document.getElementById("contact-us-form");
    const firstNameInput = document.getElementById("first-name-input") as HTMLInputElement;

    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth", block: "start" });

      if (firstNameInput) {
        setTimeout(() => {
          firstNameInput.focus({ preventScroll: true });
        }, 800);
      }
    }
  }, []);

  return scrollToForm;
};
