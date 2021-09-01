const a = document.querySelectorAll('.a');
const content = document.querySelectorAll('.content');
const p = document.querySelectorAll('.p');
/* const img = document.querySelectorAll('.img'); */

a.forEach((cadaA, i)=> {
    a[i].addEventListener('click', () => {
        content.forEach((cadaContent, i) => {
            content[i].classList.remove('activo');
            p[i].classList.remove('activo');
            a[i].classList.remove('activo');
            /* img[i].classList.remove('activo'); */
        });
        content[i].classList.add('activo');
        p[i].classList.add('activo');
        a[i].classList.add('activo');
        /* img[i].classList.add('activo'); */
    });
});
/* a.forEach((cadaA, i)=> {
    a[i].addEventListener('click', () => {
        p.forEach((cadaP, i) => {
            p[i].classList.remove('activo')
        });
        p[i].classList.add('activo');
    });
}); */