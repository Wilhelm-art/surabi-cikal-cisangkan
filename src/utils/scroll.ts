export const scrollToSection = (id: string, onDone?: () => void) => {
  onDone?.();
  setTimeout(() => {
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, 10);
};

export const toSectionId = (label: string): string => {
  return label.toLowerCase().replace(/ /g, '-');
};
