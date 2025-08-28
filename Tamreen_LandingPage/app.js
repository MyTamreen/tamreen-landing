(function(){
  // Language
  const T={
  ar:{toggle:"English",soon:"🚀 قريباً",
    title:"منصّة <em>تمرين</em> — نوصلّك بأفضل المدربين، أخصائيي التغذية، وأخصائيي العلاج الطبيعي.",
    lead:"سجّل اهتمامك الآن لتحصل على خصم الإطلاق.",cta:"سجّل اهتمامك",
    uspLine:"منصة واحدة، نتائج بلا حدود",
    f1:"للمدربين",f2:"للتغذية",f3:"للعلاج الطبيعي",
    f1p:"نمِّ عملاءك وقدّم برامجك بسهولة.",f2p:"خطط غذائية عملية ومتابعة مريحة.",f3p:"تعافي مدروس وطريق واضح للعودة.",
    formTitle:"سجّل لتصلك أخبار الإطلاق + كود الخصم",
    name:"الاسم",email:"الإيميل",find:"أبحث عن:",iam:"أنا:",
    u1:"مدرب",u2:"أخصائي تغذية",u3:"أخصائي علاج طبيعي",
    p1:"مدرب",p2:"أخصائي تغذية",p3:"أخصائي علاج طبيعي",
    notes:"ملاحظات (اختياري)",submit:"تأكيد التسجيل",
    privacy:"بالضغط على تأكيد، توافق على استلام تحديثات الإطلاق. نلتزم بحماية خصوصيتك.",
    sTitle:"تم تسجيل اهتمامك ✅",sDesc:"شكراً لك! خصمك محفوظ. سنرسل التفاصيل وقت الإطلاق.",
    foot:"© 2025 Tamreen. جميع الحقوق محفوظة.",
    abTitle:"من هم المستفيدون من تمرين؟",
    abUHead:"المستخدمون",
    abUText:"تمرين يسهّل عليك الوصول للمدربين وأخصائيي التغذية والعلاج الطبيعي. كل ما تحتاجه في مكان واحد، مع خصومات خاصة عند الإطلاق.",
    abPHead:"مقدّمو الخدمة",
    abPText:"فرصة لتوسيع عملك والوصول لعملاء جدد. أنشئ ملفك، قدّم برامجك، وكبّر دخلك مع دعم تسويقي كامل.",
    socialProof:"انضم إلى أكثر من 1000 مشترك مبكر"
  ,"abPText":"إذا كنت مدرب، أخصائي تغذية، أو أخصائي علاج طبيعي، تمرين يعطيك الأدوات لتوسيع عملك. أنشئ بروفايلك، قدم برامجك، ووصل لعملاء جدد — وافتح لك فرص دخل ثابتة.","abUText":"سواء تبي تتمرن بالنادي أو بالبيت، تمرين يسهل عليك. تلاقي برامج تدريبية مصممة لك، تتابع تقدمك، وتتواصل مع مختصين موثوقين بالتغذية والعلاج الطبيعي — الكل بتطبيق واحد."},
  en:{toggle:"العربية",soon:"🚀 Coming Soon",
    title:"<em>Tamreen</em> — your hub for Coaches, Nutrition & Physiotherapy.",
    lead:"Sign up now and get an exclusive launch discount.",cta:"Sign up",
    uspLine:"One platform. Endless results.",
    f1:"For Coaches",f2:"For Nutrition",f3:"For Physiotherapy",
    f1p:"Grow your clients and deliver programs seamlessly.",f2p:"Practical meal plans with effortless follow-ups.",f3p:"Thoughtful recovery with a clear path back.",
    formTitle:"Sign up to receive launch updates + your discount code",
    name:"Name",email:"Email",find:"I'm looking for:",iam:"I am:",
    u1:"Coach",u2:"Nutritionist",u3:"Physiotherapist",
    p1:"Coach",p2:"Nutritionist",p3:"Physiotherapist",
    notes:"Notes (optional)",submit:"Confirm signup",
    privacy:"By confirming, you agree to receive launch updates. We respect your privacy.",
    sTitle:"You’re in ✅",sDesc:"Thanks! Your discount is saved. We’ll email details at launch.",
    foot:"© 2025 Tamreen. All rights reserved.",
    abTitle:"Who Benefits from Tamreen?",
    abUHead:"Users",
    abUText:"Tamreen makes it easy to connect with trusted coaches, nutritionists, and physiotherapists—all in one place. Get tailored programs and launch discounts.",
    abPHead:"Providers",
    abPText:"A platform to grow your business and reach new clients. Build your profile, showcase your expertise, and increase revenue with full marketing support.",
    socialProof:"Join 1,000+ early subscribers"
  ,"abPText":"If you are a coach, nutritionist, or physiotherapist, Tamreen gives you the tools to grow your business. Build your profile, share your programs, and reach new clients — while unlocking steady income opportunities.","abUText":"Whether you want to get fit at the gym or stay active at home, Tamreen makes it easy. Discover tailored workout programs, track your progress, and connect with trusted professionals in nutrition and physiotherapy — all in one app."}
};
  const $=id=>document.getElementById(id);
  const btn=$('langBtn');
  function apply(lang){
    const L=T[lang], ar=lang==='ar';
    document.documentElement.lang=ar?'ar':'en';
    document.documentElement.dir =ar?'rtl':'ltr';
    btn.textContent=L.toggle;
    $('txSoon').textContent=L.soon;
    $('txTitle').innerHTML=L.title;
    $('txLead').textContent=L.lead;
    $('txCTA').textContent=L.cta;
    $('f1').textContent=L.f1; $('f2').textContent=L.f2; $('f3').textContent=L.f3;
    $('f1p').textContent=L.f1p; $('f2p').textContent=L.f2p; $('f3p').textContent=L.f3p;
    $('formTitle').textContent=L.formTitle;
    $('lblName').textContent=L.name; $('lblEmail').textContent=L.email;
    $('lblFind').textContent=L.find; $('lblIam').textContent=L.iam;
    $('u1').textContent=L.u1; $('u2').textContent=L.u2; $('u3').textContent=L.u3;
    $('p1').textContent=L.p1; $('p2').textContent=L.p2; $('p3').textContent=L.p3;
    $('lblNotes').textContent=L.notes; $('btnSend').textContent=L.submit;
    $('txPrivacy').textContent=L.privacy;
    $('sTitle').textContent=L.sTitle; $('sDesc').textContent=L.sDesc;
    $('footCopy').textContent=L.foot;

    // Placeholders update
    if($('abCTA')) document.querySelector('#abCTA').textContent = L.abCTA || '';
    // bullets
    if($('abU1')) $('abU1').textContent = L.abU1 || $('abU1').textContent;
    if($('abU2')) $('abU2').textContent = L.abU2 || $('abU2').textContent;
    if($('abU3')) $('abU3').textContent = L.abU3 || $('abU3').textContent;
    if($('abP1')) $('abP1').textContent = L.abP1 || $('abP1').textContent;
    if($('abP2')) $('abP2').textContent = L.abP2 || $('abP2').textContent;
    if($('abP3')) $('abP3').textContent = L.abP3 || $('abP3').textContent;

    if($('abLead')) $('abLead').textContent = L.abLead || '';
    if($('abU1')) $('abU1').textContent = L.abU1 || '';
    if($('abU2')) $('abU2').textContent = L.abU2 || '';
    if($('abU3')) $('abU3').textContent = L.abU3 || '';
    if($('abP1')) $('abP1').textContent = L.abP1 || '';
    if($('abP2')) $('abP2').textContent = L.abP2 || '';
    if($('abP3')) $('abP3').textContent = L.abP3 || '';

    if($('name')) $('name').placeholder = L.phName || '';
    if($('email')) $('email').placeholder = L.phEmail || '';
    if($('notes')) $('notes').placeholder = L.phNotes || '';
    // About update
    if($('abTitle')) $('abTitle').textContent = L.abTitle;
    if($('abUHead')) $('abUHead').textContent = L.abUHead;
    if($('abUText')) $('abUText').textContent = L.abUText;
    if($('abPHead')) $('abPHead').textContent = L.abPHead;
    if($('abPText')) $('abPText').textContent = L.abPText;


    // placeholders (always update)
    if($('name')) $('name').placeholder = L.phName || $('name').placeholder;
    if($('email')) $('email').placeholder = L.phEmail || $('email').placeholder;
    if($('notes')) $('notes').placeholder = L.phNotes || $('notes').placeholder;

    // ABOUT – support both list items and paragraph versions
    if($('abTitle')) $('abTitle').textContent = L.abTitle;
    if($('abUHead')) $('abUHead').textContent = L.abUHead;
    if($('abPHead')) $('abPHead').textContent = L.abPHead;

    if($('abUText')) $('abUText').textContent = L.abUText;
    if($('abPText')) $('abPText').textContent = L.abPText;

    if($('abU1')) $('abU1').textContent = L.abU1 || $('abU1').textContent;
    if($('abU2')) $('abU2').textContent = L.abU2 || $('abU2').textContent;
    if($('abU3')) $('abU3').textContent = L.abU3 || $('abU3').textContent;
    if($('abP1')) $('abP1').textContent = L.abP1 || $('abP1').textContent;
    if($('abP2')) $('abP2').textContent = L.abP2 || $('abP2').textContent;
    if($('abP3')) $('abP3').textContent = L.abP3 || $('abP3').textContent;


    // placeholders
    if($('name')) $('name').placeholder = L.phName || $('name').placeholder;
    if($('email')) $('email').placeholder = L.phEmail || $('email').placeholder;
    if($('notes')) $('notes').placeholder = L.phNotes || $('notes').placeholder;
    // About fields
    if($('abTitle')) $('abTitle').textContent = L.abTitle;
    if($('abUHead')) $('abUHead').textContent = L.abUHead;
    if($('abUText')) $('abUText').textContent = L.abUText;
    if($('abPHead')) $('abPHead').textContent = L.abPHead;
    if($('abPText')) $('abPText').textContent = L.abPText;

    localStorage.setItem('tam_soft_lang', lang);
  }
  apply(localStorage.getItem('tam_soft_lang') || 'ar');
  btn.addEventListener('click', ()=>apply(document.documentElement.lang==='ar'?'en':'ar'));

  // reveal
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')}),{threshold:.1});
  document.querySelectorAll('.reveal').forEach(n=>io.observe(n));

  // tagging
  const tagField=$('tags');
  function rebuild(){
    const map={Coach:'Coach', Nutrition:'Nutrition', Physio:'Physio'};
    const u=[...document.querySelectorAll('input[name="u"]:checked')].map(i=>`User-${map[i.value]}`);
    const p=[...document.querySelectorAll('input[name="p"]:checked')].map(i=>`Provider-${map[i.value]}`);
    tagField.value=[...new Set([...u,...p])].join(',');
  }
  document.querySelectorAll('input[name="u"],input[name="p"]').forEach(cb=>cb.addEventListener('change',rebuild));
  rebuild();

  // submit
  const form=$('leadForm'), ok=$('okBox');
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name=form.name.value.trim();
    const email=form.email.value.trim();
    const any=document.querySelector('input[name="u"]:checked, input[name="p"]:checked');
    const emailOk=/^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$/.test(email);
    const ar=document.documentElement.lang==='ar';
    if(!name || !email || !emailOk || !any){
      alert(ar?'تأكد من تعبئة الاسم والإيميل واختر اهتمام واحد على الأقل':'Please fill name, email, and select at least one interest');
      return;
    }
    const payload={
      name,email,
      persona:[document.querySelector('input[name="u"]:checked')?'User':null, document.querySelector('input[name="p"]:checked')?'Provider':null].filter(Boolean),
      interests:[...document.querySelectorAll('input[name="u"]:checked, input[name="p"]:checked')].map(i=>i.value),
      tags:tagField.value, notes:(document.getElementById('notes')||{value:''}).value.trim(),
      ts:new Date().toISOString()
    };
    console.log('Lead payload', payload);
    form.classList.add('hide'); ok.classList.remove('hide');
  });
})();

// Subtle floating particles (very light)
(function(){
  const c = document.getElementById('particles');
  if(!c) return;
  const ctx = c.getContext('2d');
  let W=0,H=0, pts=[];
  function size(){ W=c.width=window.innerWidth; H=c.height=window.innerHeight; }
  function init(){
    size();
    const count = Math.max(60, Math.floor(W*H/40000)); // scale lightly
    pts = new Array(count).fill(0).map(()=> ({
      x: Math.random()*W,
      y: Math.random()*H,
      r: Math.random()*1.6+0.6,
      v: (Math.random()*0.2+0.05)*(Math.random()<.5?-1:1),
      vx: (Math.random()*0.15-0.075)
    }));
  }
  function step(){
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle = 'rgba(140, 200, 255, 0.10)';
    for(const p of pts){
      ctx.beginPath();
      ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fill();
      p.y += p.v; p.x += p.vx;
      if(p.y<-10) p.y=H+10;
      if(p.y>H+10) p.y=-10;
      if(p.x<-10) p.x=W+10;
      if(p.x>W+10) p.x=-10;
    }
    requestAnimationFrame(step);
  }
  window.addEventListener('resize', init);
  init(); step();
})();

// v4 parallax + ripple
(function(){
  // Parallax on mouse move (very subtle)
  const blobs=document.querySelectorAll('.blob');
  const title=document.querySelector('.hero .title');
  let w=window.innerWidth,h=window.innerHeight;
  function onMove(e){
    const x=(e.clientX - w/2)/w;
    const y=(e.clientY - h/2)/h;
    blobs.forEach(b=>{
      const d=parseFloat(b.getAttribute('data-depth')||0.02);
      b.style.transform=`translate(${x*60*d}px, ${y*60*d}px)`;
    });
    if(title){ title.style.transform=`translate(${x*6}px, ${y*4}px)`; }
  }
  window.addEventListener('mousemove', onMove);
  window.addEventListener('resize', ()=>{ w=innerWidth; h=innerHeight; });

  // Ripple on CTA
  document.querySelectorAll('.cta').forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      const r=document.createElement('span');
      r.className='r';
      const rect=btn.getBoundingClientRect();
      r.style.width=r.style.height=Math.max(rect.width,rect.height)+'px';
      r.style.left=(e.clientX-rect.left - rect.width/2)+'px';
      r.style.top=(e.clientY-rect.top - rect.height/2)+'px';
      btn.appendChild(r);
      setTimeout(()=>r.remove(), 600);
    });
  });
})();
