const toast = document.getElementById('toast');
let toastTimer;
function showToast(message){
  toast.textContent = message;
  toast.classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>toast.classList.remove('visible'), 2600);
}
function hearts(count=12){
  const symbols=['♥','♡','💗','💕','✧'];
  for(let i=0;i<count;i++){
    const el=document.createElement('span');
    el.className='heart-particle';
    el.textContent=symbols[Math.floor(Math.random()*symbols.length)];
    el.style.left=(Math.random()*100)+'vw';
    el.style.animationDelay=(Math.random()*.8)+'s';
    el.style.fontSize=(16+Math.random()*22)+'px';
    el.style.color=['#ff5f8f','#ed80a5','#b889d6','#ff9fbc'][Math.floor(Math.random()*4)];
    document.body.appendChild(el);
    setTimeout(()=>el.remove(),4200);
  }
}
document.getElementById('topHeart').addEventListener('click',()=>{hearts(16);showToast('A tiny heart just travelled to you, babyyy. ♥')});
document.getElementById('sprinkleBtn').addEventListener('click',()=>{hearts(30);showToast('Sending you a whole sky full of hearts ✨')});
document.getElementById('secretBtn').addEventListener('click',()=>{
  const note=document.getElementById('secretNote');
  note.hidden=!note.hidden;
  document.getElementById('secretBtn').textContent=note.hidden?'Open one more little note ♡':'Close my little note ♡';
  if(!note.hidden){hearts(10);note.scrollIntoView({behavior:'smooth',block:'nearest'})}
});
document.getElementById('hugBtn').addEventListener('click',()=>{
  const msg=document.getElementById('hugMessage');
  const emoji=document.getElementById('hugEmoji');
  msg.textContent='HUGGGG! 🤗 Imagine me holding you close until you feel all warm and safe. I miss youuu. ♡';
  emoji.textContent='🫂';
  emoji.animate([{transform:'scale(1)'},{transform:'scale(1.25)'},{transform:'scale(1)'}],{duration:650,easing:'ease-out'});
  hearts(24);
  showToast('Virtual hug delivered with extra love 💗');
});
setTimeout(()=>hearts(7),900);
