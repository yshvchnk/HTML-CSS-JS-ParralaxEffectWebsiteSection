const m1 = document.querySelector("#m1");
const m2 = document.querySelector("#m2");
const t1 = document.querySelector("#t1");
const t2 = document.querySelector("#t2");
const man = document.querySelector("#man");
const plants = document.querySelector("#plants");
const text = document.querySelector("#text");

gsap.from(m1, {
    scrollTrigger: {
        scrub: true,
    },
    y: 100,
});
gsap.from(m2, {
    scrollTrigger: {
        scrub: true,
    },
    x: 50,
});
gsap.from(t2, {
    scrollTrigger: {
        scrub: true,
    },
    x: 100,
});
gsap.from(t1, {
    scrollTrigger: {
        scrub: true,
    },
    x: 100,
});
gsap.from(man, {
    scrollTrigger: {
        scrub: true,
    },
    x: -100,
});
gsap.from(plants, {
    scrollTrigger: {
        scrub: true,
    },
    x: -100,
});
gsap.from(text, {
    scrollTrigger: {
        scrub: true,
    },
    x: 600,
});
