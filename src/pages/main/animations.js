window.addEventListener('DOMContentLoaded', function () {
  const tl = gsap.timeline();
  tl.from('.header-logo', { y: -50, opacity: 0, duration: 1 }, 0.5)
    .from('.video-block .menu__item', { y: -50, opacity: 0, duration: 1 }, 0.5)
    .from(
      '.video-block .menu__phone > div > *',
      {
        y: -50,
        opacity: 0,
        duration: 1,
      },
      0.5
    )
    .from(
      '.video-block__content .text-logo',
      {
        x: -100,
        opacity: 0,
        duration: 1,
        stagger: 0.25,
      },
      2
    )
    .from(
      '.video-block__content .button-container',
      {
        x: -100,
        opacity: 0,
        duration: 1,
      },
      2.3
    );

  gsap.to('.video-block__content', {
    scrollTrigger: {
      trigger: '.video-block',
      start: 'top top',
      scrub: true,
    },
    opacity: 0.8,
    scale: 0.9,
    y: -300,
  });

  gsap.to('.video-block video', {
    scrollTrigger: {
      trigger: '.video-block',
      start: 'top top',
      scrub: true,
    },
    scale: 1.4,
  });

  gsap.from('.main-fourth-section .main-fourth-section__text > *', {
    scrollTrigger: {
      trigger: '.main-fourth-section',
      start: 'top bottom',
      end: 'top center',
      scrub: true,
    },
    x: -600,
    // stagger: 0.25,
  });

  gsap.from('.main-fourth-section_advanteges > *', {
    scrollTrigger: {
      trigger: '.main-fourth-section_advanteges',
      start: 'top bottom',
      end: 'top 70%',
      scrub: true,
    },
    y: 150,
    stagger: 0.25,
  });

  gsap.from('.main-fourth-section .main-fourth-section__blue-strip', {
    scrollTrigger: {
      trigger: '.main-fourth-section',
      start: 'top bottom',
      end: 'top center',
      scrub: true,
    },
    x: 600,
    width: '120px',
    opacity: 0.5,
  });
  gsap.from('.main-fourth-section .text-logo', {
    scrollTrigger: {
      trigger: '.main-fourth-section',
      start: 'top bottom',
      end: 'top center',
      scrub: true,
    },
    x: 300,
    scale: 0.7,
    opacity: 0.5,
  });

  gsap.from('.main-third-section__content .container', {
    scrollTrigger: {
      trigger: '.main-third-section__content',
      start: 'top bottom',
      end: 'top 90%',
      scrub: true,
    },
    x: '-300',
    opacity: 0,
  });

  gsap.from('.sng-china-block .sng-china-block__planet-container', {
    scrollTrigger: {
      trigger: '.sng-china-block',
      start: 'top bottom',
      end: 'top center',
      scrub: true,
    },
    scale: 1.4,
    opacity: 0,
  });
  gsap.from('.sng-china-block .sng-china-block__title', {
    scrollTrigger: {
      trigger: '.sng-china-block',
      start: 'top 90%',
      end: 'top center',
      scrub: true,
      duration: 1,
    },
    y: -40,
    opacity: 0,
    stagger: 0.25,
  });
  gsap.from('.sng-china-block .sng-china-block__subtitle', {
    scrollTrigger: {
      trigger: '.sng-china-block',
      start: 'top 50%',
      end: 'top 40%',
      scrub: true,
      duration: 1,
    },
    opacity: 0,
  });

  gsap.from('.autopark-block h1:first-of-type', {
    scrollTrigger: {
      trigger: '.autopark-block',
      start: 'top bottom',
      end: 'top 80%',
      scrub: true,
      duration: 1,
    },
    y: 300,
    opacity: 0,
  });
  gsap.from('.autopark-block img', {
    scrollTrigger: {
      trigger: '.autopark-block',
      start: 'top 90%',
      end: 'top 33%',
      scrub: true,
      duration: 1,
    },
    y: 300,
  });
  gsap.from('.autopark-block .col-12:nth-child(1)', {
    scrollTrigger: {
      trigger: '.autopark-block a',
      start: 'top bottom',
      end: 'top 33%',
      scrub: true,
      duration: 1,
    },
    x: -300,
    opacity: 0.5,
  });
  gsap.from('.autopark-block .col-12:nth-child(even)', {
    scrollTrigger: {
      trigger: '.autopark-block a',
      start: 'top bottom',
      end: 'top 33%',
      scrub: true,
      duration: 1,
    },
    x: 300,
    opacity: 0.5,
  });
});
