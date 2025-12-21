window.onload = function () {
  window.scrollTo(0, 0);
};
const foto = document.querySelector('.sectionUmFoto');
const sobre = document.querySelector('.sectionUmTexto h2');
const textos = document.querySelector('.sectionUmTexto');
const stack = document.querySelector('.sectionUmTexto h3');
const nome = document.querySelector('.nome');
const mim = document.querySelector('.sectionDoisTexto');
const experiencia = document.querySelector('.experiencia');
const formacao = document.querySelector('.formacao');
const projetos = document.querySelector('.projetos');

gsap.fromTo(foto, { opacity: 0, x: -100 }, { opacity: 1, x: 0, duration: 1 });
gsap.fromTo(textos, { opacity: 0, y: -100 }, { opacity: 1, y: 0, duration: 2 });
gsap.fromTo(
  stack,
  { opacity: 0, y: -100 },
  { opacity: 1, y: 0, duration: 2, delay: 2 },
);
const tl = gsap.timeline(),
  split = new SplitText([sobre, nome], { type: 'chars, words' }),
  chars = split.chars;
tl.set(chars, {}, 1);
tl.from(chars, {
  opacity: 0,
  duration: 0.1,
  stagger: 0.07,
});
tl.to(chars, {
  duration: 0.1,
  opacity: 1,
  stagger: 0.05,
  ease: 'none',
});
gsap.registerPlugin(ScrollTrigger);
gsap.from(mim, {
  scrollTrigger: {
    trigger: mim,
    start: ' 500px ',
    toggleActions: 'play none none none',
  },
  x: -100,
  opacity: 0,
  duration: 0.5,
});

gsap.registerPlugin(ScrollTrigger);
gsap.from(experiencia, {
  scrollTrigger: {
    trigger: experiencia,
    start: ' 500px ',
    toggleActions: 'play none none none',
  },
  x: -100,
  opacity: 0,
  duration: 0.5,
});

gsap.registerPlugin(ScrollTrigger);
gsap.from(formacao, {
  scrollTrigger: {
    trigger: formacao,
    start: ' 500px ',
    toggleActions: 'play none none none',
  },
  x: -100,
  opacity: 0,
  duration: 0.5,
});

gsap.registerPlugin(ScrollTrigger);
gsap.from(projetos, {
  scrollTrigger: {
    trigger: projetos,
    start: ' 500px ',
    toggleActions: 'play none none none',
  },
  x: -100,
  opacity: 0,
  duration: 0.5,
});

function Menu() {
  const menu = document.querySelector('.botao');
  const escolha = document.querySelector('.menu-hamburguer');
  menu.addEventListener('click', () => {
    escolha.classList.toggle('toggle');
  });

   window.addEventListener('scroll', () => {
    escolha.classList.remove('toggle');
  });

}

document.addEventListener('DOMContentLoaded', Menu);
