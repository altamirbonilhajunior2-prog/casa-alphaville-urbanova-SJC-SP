const toggle=document.querySelector('.menu-toggle');
const menu=document.querySelector('.menu');
if(toggle){toggle.addEventListener('click',()=>menu.classList.toggle('open'));}
document.querySelectorAll('.menu a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('open')));

function updateCarouselButtons(carousel){
  const prev=document.querySelector(`.carousel-btn.prev[data-carousel="${carousel.id}"]`);
  const next=document.querySelector(`.carousel-btn.next[data-carousel="${carousel.id}"]`);
  if(!prev||!next) return;
  const max=carousel.scrollWidth-carousel.clientWidth-2;
  prev.disabled=carousel.scrollLeft<=2;
  next.disabled=carousel.scrollLeft>=max;
}

document.querySelectorAll('.carousel').forEach(carousel=>{
  updateCarouselButtons(carousel);
  carousel.addEventListener('scroll',()=>updateCarouselButtons(carousel));
});
window.addEventListener('resize',()=>document.querySelectorAll('.carousel').forEach(updateCarouselButtons));

document.querySelectorAll('.carousel-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const carousel=document.getElementById(btn.dataset.carousel);
    if(!carousel) return;
    const card=carousel.querySelector('figure');
    const amount=card ? card.getBoundingClientRect().width+18 : carousel.clientWidth*.8;
    carousel.scrollBy({left:btn.classList.contains('next')?amount:-amount,behavior:'smooth'});
  });
});

function sendWhatsApp(e){
  e.preventDefault();
  const nome=document.getElementById('nome').value.trim();
  const tel=document.getElementById('telefone').value.trim();
  const msg=document.getElementById('mensagem').value.trim();
  const texto=`Olá, meu nome é ${nome}. Meu telefone é ${tel}. ${msg}`;
  window.open(`https://wa.me/5512978140636?text=${encodeURIComponent(texto)}`,'_blank');
}
