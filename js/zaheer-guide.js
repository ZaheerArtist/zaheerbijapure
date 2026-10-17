/* Paper-cut guide "The First Frame" (Zaheer Bijapure). Art: Zaheer's own character sheets. */
window.ZG_DATA={"frames": {"walk1": {"w": 116, "h": 230, "cx": 59.9, "src": "images/guide/walk1.webp"}, "walk2": {"w": 116, "h": 187, "cx": 50.4, "src": "images/guide/walk2.webp"}, "walk3": {"w": 129, "h": 219, "cx": 59.2, "src": "images/guide/walk3.webp"}, "walk4": {"w": 122, "h": 215, "cx": 59.9, "src": "images/guide/walk4.webp"}, "run1": {"w": 143, "h": 179, "cx": 58.4, "src": "images/guide/run1.webp"}, "run2": {"w": 144, "h": 187, "cx": 54.2, "src": "images/guide/run2.webp"}, "run3": {"w": 143, "h": 171, "cx": 63.9, "src": "images/guide/run3.webp"}, "run4": {"w": 114, "h": 176, "cx": 51.5, "src": "images/guide/run4.webp"}, "sit": {"w": 197, "h": 218, "cx": 93.2, "src": "images/guide/sit.webp"}, "jump": {"w": 130, "h": 200, "cx": 63.4, "src": "images/guide/jump.webp"}, "wave": {"w": 131, "h": 223, "cx": 57.0, "src": "images/guide/wave.webp"}, "sad": {"w": 138, "h": 209, "cx": 55.9, "src": "images/guide/sad.webp"}, "point": {"w": 148, "h": 219, "cx": 65.1, "src": "images/guide/point.webp"}, "look": {"w": 129, "h": 218, "cx": 62.1, "src": "images/guide/look.webp"}, "think": {"w": 98, "h": 216, "cx": 49.0, "src": "images/guide/think.webp"}, "hjump1": {"w": 137, "h": 191, "cx": 63.6, "src": "images/guide/hjump1.webp"}, "hjump2": {"w": 200, "h": 229, "cx": 110.4, "src": "images/guide/hjump2.webp"}, "hjump3": {"w": 173, "h": 204, "cx": 94.7, "src": "images/guide/hjump3.webp"}, "celebrate1": {"w": 149, "h": 264, "cx": 82.6, "src": "images/guide/celebrate1.webp"}, "celebrate2": {"w": 135, "h": 204, "cx": 73.0, "src": "images/guide/celebrate2.webp"}, "dance1": {"w": 143, "h": 210, "cx": 80.8, "src": "images/guide/dance1.webp"}, "dance2": {"w": 170, "h": 214, "cx": 93.0, "src": "images/guide/dance2.webp"}, "thumbs": {"w": 148, "h": 234, "cx": 74.8, "src": "images/guide/thumbs.webp"}, "fist": {"w": 125, "h": 215, "cx": 67.3, "src": "images/guide/fist.webp"}, "laugh": {"w": 143, "h": 199, "cx": 72.0, "src": "images/guide/laugh.webp"}, "stand": {"w": 132, "h": 223, "cx": 79.9, "src": "images/guide/stand.webp"}}, "faces": {"neutral": "images/guide/face-neutral.webp", "happy": "images/guide/face-happy.webp", "sad": "images/guide/face-sad.webp", "surprised": "images/guide/face-surprised.webp", "wink": "images/guide/face-wink.webp", "think": "images/guide/face-think.webp", "excited": "images/guide/face-excited.webp", "sleepy": "images/guide/face-sleepy.webp"}};
Object.keys(window.ZG_DATA.frames).forEach(function(k){var i=new Image();i.src=window.ZG_DATA.frames[k].src;});
(function(){
  var D=window.ZG_DATA, F=D.frames, FACE=D.faces;
  var root=document.getElementById('zg'), stage=document.getElementById('zg-stage'), img=document.getElementById('zg-img'),
      bub=document.getElementById('zg-bub'), txt=document.getElementById('zg-t'), face=document.getElementById('zg-face'), chap=document.getElementById('zg-ch'), fx=document.getElementById('zg-fx'),
      tog=document.getElementById('zg-tog');
  var still=false; try{still=matchMedia('(prefers-reduced-motion: reduce)').matches;}catch(e){}
  function store(k,v){ try{ if(v===undefined) return localStorage.getItem(k); localStorage.setItem(k,v);}catch(e){ return null; } }
  var phone=function(){ return innerWidth<700; };
  var returning=store('zg_seen')==='1'; store('zg_seen','1');
  var pref=store('zg_on'); var on = pref===null ? true : pref==='1';
  var SCALE=function(){ return phone()?0.3:0.4; };
  var A={
    stand:{f:['stand'],fps:1,loop:true}, look:{f:['look'],fps:1,loop:true},
    walk:{f:['walk1','walk2','walk3','walk4'],fps:8,loop:true}, run:{f:['run1','run2','run3','run4'],fps:12,loop:true},
    wave:{f:['wave','stand','wave','stand','wave'],fps:4}, point:{f:['point'],fps:1,loop:true}, thumbs:{f:['thumbs'],fps:1,loop:true},
    sad:{f:['sad'],fps:1,loop:true}, sit:{f:['sit'],fps:1,loop:true},
    jump:{f:['hjump1','hjump2','hjump2','hjump3'],fps:6,air:[1,2]},
    celebrate:{f:['celebrate1','celebrate2','celebrate1','celebrate2','fist'],fps:4},
    dance:{f:['dance1','dance2','dance1','dance2'],fps:4}, laugh:{f:['laugh'],fps:1}
  };
  var LINES={
    hero:["Long before cameras, someone painted the first frame on a cave wall.",'wave','happy','Chapter 1 · The cave'],
    work:["I'm still chasing that feeling. These are my films.",'point','excited','Chapter 2 · The big screen'],
    campaigns:["Now the cave walls are billboards, screens and phones.",'thumbs','wink','Chapter 3 · New walls'],
    poem:["One pixel. Infinite possibilities.",'sit','think','Chapter 4 · The idea'],
    craft:["I learned to move cameras through Hollywood worlds at DNEG and MPC.",'look','neutral','Chapter 5 · The craft'],
    about:["Tools changed. Spear to software. The craft stayed.",'wave','happy','Chapter 6 · The tools'],
    contact:["Every story starts with a single frame. Let's make yours.",'dance','excited','Chapter 7 · Your frame']
  };
  var FUN=[["My first render took 40,000 years.",'laugh','happy'],["Made of paper, powered by VFX.",'thumbs','wink'],["From rocks to renders!",'celebrate','excited'],["Ha! Careful, I'm only paper.",'laugh','happy']], fi2=0;
  var x=0, dir=-1, cur=null, fi=0, acc=0, last=performance.now(), busyUntil=0, afterBusy=null, bubTimer=0, raf=0;
  var lastScroll=scrollY, scrollVel=0, lastScrollT=0, section='hero', lastSection=null, settled=null, ended=false, away=false, mode='live';
  function bounds(){
    var w=(img.width||50), gut=(innerWidth-1120)/2;
    if(!phone() && gut>=110) return [innerWidth-gut+w*0.5+10, innerWidth-w*0.5-12];   // stay in the empty right margin
    if(phone()) return [innerWidth-w*0.5-12, innerWidth-w*0.5-12];                 // phones: fixed corner
    return [innerWidth-170, innerWidth-w*0.5-12];                                   // narrow desktop: small corner strip
  }
  function setFrame(name){ var fr=F[name], k=SCALE(); img.src=fr.src; img.width=Math.round(fr.w*k); img.height=Math.round(fr.h*k); img.style.left=(-fr.cx*k)+'px'; }
  function play(n,force){ if(cur===n&&!force)return; cur=n; fi=0; acc=0; setFrame(A[n].f[0]); }
  function once(n,then){ play(n,true); busyUntil=performance.now()+A[n].f.length/A[n].fps*1000; afterBusy=then||null; }
  function hideBub(){ bub.classList.remove('show'); }
  function say(t,f,ch,ms){ face.src=FACE[f||'neutral']; chap.textContent=ch||''; chap.hidden=!ch; txt.textContent=t; bub.hidden=false; bub.classList.add('show'); placeBubble(); clearTimeout(bubTimer); bubTimer=setTimeout(hideBub, ms||5000); }
  function confetti(){ if(still)return; var cols=['#ff7a2f','#f2e8d5','#5b7fa6','#c9873e','#8a5a33']; for(var i=0;i<14;i++){ var p=document.createElement('i'); p.className='zg-c'; p.style.background=cols[i%cols.length]; p.style.left=(Math.random()*70-35)+'px'; p.style.setProperty('--dx',(Math.random()*100-50)+'px'); p.style.setProperty('--r',(Math.random()*540-270)+'deg'); fx.appendChild(p); setTimeout(function(el){return function(){el.remove();};}(p),1500);} }
  function react(sec,talk){ var L=LINES[sec]; if(!L)return;
    if(talk) say(L[0],L[2],L[3]);
    if(L[1]==='sit'||L[1]==='look'||L[1]==='point'||L[1]==='thumbs'){ play(L[1]); busyUntil=performance.now()+2500; afterBusy=null; }
    else once(L[1],function(){play('stand');}); }
  function talkative(){ return on && !returning && !phone(); }
  // sections
  var map=[['hero',document.querySelector('.hero')]]; ['work','campaigns','poem','craft','about','contact'].forEach(function(id){var el=document.getElementById(id); if(el)map.push([id,el]);});
  if('IntersectionObserver' in window){ var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)section=e.target.dataset.zg;});},{rootMargin:'-45% 0px -45% 0px'}); map.forEach(function(m){if(m[1]){m[1].dataset.zg=m[0]; io.observe(m[1]);}}); }
  // get out of the way: while typing in the form, and while a film plays
  function setAway(v){ away=v; root.classList.toggle('away',v); if(v) hideBub(); }
  document.addEventListener('focusin',function(e){ if(e.target.closest&&e.target.closest('form')) setAway(true); });
  document.addEventListener('focusout',function(e){ if(e.target.closest&&e.target.closest('form')) setTimeout(function(){ if(!document.activeElement||!document.activeElement.closest||!document.activeElement.closest('form')) setAway(false); },50); });
  document.addEventListener('click',function(e){ if(e.target.closest&&e.target.closest('.player')){ setAway(true); filmSection=section; } });
  var filmSection=null;
  addEventListener('scroll',function(){ var now=performance.now(); scrollVel=scrollY-lastScroll; lastScroll=scrollY; lastScrollT=now;
    if(filmSection&&section!==filmSection){ filmSection=null; setAway(false); }
    if(on&&!ended&&innerHeight+scrollY>=document.documentElement.scrollHeight-4){ ended=true; setTimeout(function(){ if(away)return; say("You made it to the last frame! Thanks for watching.",'excited','The end',6000); confetti(); once('jump',function(){ once('celebrate',function(){play('stand');}); }); },700); }
  },{passive:true});
  function tick(now){
    var dt=Math.min(64,now-last); last=now;
    var b=bounds(), busy=now<busyUntil, scrolling=now-lastScrollT<160;
    if(!busy&&afterBusy){ var f=afterBusy; afterBusy=null; f(); }
    if(mode==='intro'){ play('run'); dir=-1; x+=dir*dt*0.3; if(x<=b[1]){ x=b[1]; mode='live'; once('jump',function(){ lastSection='hero'; react('hero',talkative()); }); } }
    else {
      if(scrolling&&Math.abs(scrollVel)>2){
        settled=null;
        if(!busy){ var fast=Math.abs(scrollVel)>18; dir=scrollVel>0?1:-1; play(fast?'run':'walk'); x+=dir*dt*(fast?0.3:0.12); }
      } else {
        if(settled===null) settled=now;
        if(section!==lastSection&&now-settled>500){ busyUntil=0; afterBusy=null; lastSection=section; react(section,talkative()); }
        else if(!busy&&(cur==='walk'||cur==='run')) play('stand');   // still while reading
      }
    }
    if(x>b[1]){ x=b[1]; dir=-1; } if(x<b[0]){ x=b[0]; dir=1; }
    var a=A[cur]; if(a&&a.f.length>1){ acc+=dt; var step=1000/a.fps; while(acc>=step){ acc-=step; fi++; if(fi>=a.f.length){ fi=a.loop?0:a.f.length-1; } setFrame(a.f[fi]); } }
    var lift=(cur==='jump'&&a.air&&a.air.indexOf(fi)>=0)?-30*SCALE()*2:0;
    stage.style.transform='translate('+Math.round(x)+'px,'+lift+'px) scaleX('+(dir<0?-1:1)+')';
    placeBubble();
    raf=requestAnimationFrame(tick);
  }
  function placeBubble(){ if(bub.hidden)return; var bw=bub.offsetWidth, h=(img.height||80); var left=Math.max(8,Math.min(innerWidth-bw-8,x-bw/2));
    bub.style.transform='translate('+Math.round(left)+'px,'+(-h-bub.offsetHeight-6)+'px)'; bub.style.setProperty('--tail',Math.max(14,Math.min(bw-14,x-left))+'px'); fx.style.transform='translate('+Math.round(x)+'px,'+(-h)+'px)'; }
  img.addEventListener('click',function(){ var L; if(phone()&&LINES[section]&&!img.dataset.told){ img.dataset.told=section; L=LINES[section]; say(L[0],L[2],L[3],6000); once('jump',function(){play('stand');}); return; }
    img.dataset.told=''; L=FUN[fi2++%FUN.length]; say(L[0],L[2]); confetti(); once('jump',function(){ once(L[1],function(){play('stand');}); }); });
  img.addEventListener('keydown',function(e){ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); img.click(); } });
  document.getElementById('zg-x').addEventListener('click',hideBub);
  function apply(){ root.hidden=!on; tog.textContent=on?'Guide: on':'Guide: off'; tog.setAttribute('aria-pressed',on?'true':'false');
    cancelAnimationFrame(raf);
    if(on){ last=performance.now(); x=bounds()[1]; if(!cur) play('stand'); if(still){ play('stand'); placeBubble(); stage.style.transform='translate('+Math.round(x)+'px,0) scaleX(-1)'; } else raf=requestAnimationFrame(tick); } }
  tog.addEventListener('click',function(){ on=!on; store('zg_on',on?'1':'0'); apply(); if(on) say("I'm back! Scroll and I'll tell you the story.",'happy',null,3500); });
  addEventListener('resize',function(){ if(cur) setFrame(A[cur].f[fi]); });
  document.addEventListener('visibilitychange',function(){ if(document.hidden) cancelAnimationFrame(raf); else if(on&&!still){ last=performance.now(); raf=requestAnimationFrame(tick);} });
  // start: full story with a run-in on the first desktop visit, quiet otherwise
  if(on&&!still&&!returning&&!phone()){ mode='intro'; x=innerWidth+60; play('run'); }
  apply();
})();
