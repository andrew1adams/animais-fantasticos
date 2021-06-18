export default class AnimationScroll {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.halfWindow = window.innerHeight * 0.7;

    this.animaScroll = this.animaScroll.bind(this)
  }

  animaScroll() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const visibleSection = sectionTop - this.halfWindow < 0;

      if (visibleSection) {
        section.classList.add('ativo');
      } else if (section.classList.contains('ativo')) {
        section.classList.remove('ativo');
      }
    });
  }

  init() {
    this.animaScroll()
    window.addEventListener('scroll', this.animaScroll);
  }
}
