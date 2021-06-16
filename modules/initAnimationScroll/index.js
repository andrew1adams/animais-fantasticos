export function initAnimationScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  let halfWindow

  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const visibleSection = sectionTop - halfWindow < 0;

      if (visibleSection) {
        section.classList.add('ativo');
      } else if (section.classList.contains('ativo')) {
        section.classList.remove('ativo');
      }
    });
  }

  if (sections.length) {
    halfWindow = window.innerHeight * 0.7;

    animaScroll();
    window.addEventListener('scroll', animaScroll);
  }
}
