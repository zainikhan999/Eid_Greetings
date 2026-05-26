document.addEventListener("DOMContentLoaded", () => {
    // === STATE ===
    const state = { toName:"", fromName:"", lang:"en", theme:"emerald", cardStyle:"royal-arch", message:"", currentStep:1 };
    const TOTAL_STEPS = 4;

    // === TEMPLATES with Bakra Eid icons ===
    const T = {
        en: [
            { icon:"🐑", text:"May the spirit of Qurbani fill your heart with devotion. May Allah accept all your sacrifices. Eid-ul-Adha Mubarak!" },
            { icon:"🌙", text:"Wishing you a blessed Bakra Eid filled with Hajj blessings, peace, and beautiful moments of sharing." },
            { icon:"🐐", text:"Eid Mubarak! May the faith of Prophet Ibrahim inspire your heart with peace and conviction always." },
            { icon:"🕌", text:"May the blessings of Hajj, the joy of Qurbani, and the warmth of family make this Eid deeply memorable!" },
            { icon:"✨", text:"On this day of sacrifice, may Allah answer your deepest prayers, forgive your shortcomings, and guide you always." },
            { icon:"🐑", text:"Wishing you a joyful Bakra Eid! May your days be filled with delicious feasts and spiritual joy." },
            { icon:"🌟", text:"May divine grace shine upon your home and bless you with infinite health, happiness, and peace. Eid Mubarak!" },
            { icon:"🐐", text:"Eid-ul-Adha Mubarak! Sending warm thoughts and heartfelt wishes to you and your beautiful family." },
            { icon:"🎉", text:"Let us celebrate this Eid of sacrifice with gratitude, sharing our blessings with everyone around. Happy Eid!" },
            { icon:"🕋", text:"May this Eid bring you closer to Allah, fill your life with blessings, and grant you eternal happiness." },
            { icon:"🕊️", text:"Eid Mubarak! May the teachings of this holy day bring eternal peace and prosperity to your beautiful family." },
            { icon:"🍖", text:"Happy Bakra Eid! May your day be filled with delicious food, hearty laughs, and endless blessings." },
            { icon:"💖", text:"Sending you warm wishes on Eid-ul-Adha. May your sacrifices be rewarded with immense happiness." },
            { icon:"🤲", text:"May Allah's divine light guide you on the path of righteousness. Have a blessed and joyous Eid-ul-Adha!" },
            { icon:"🎊", text:"Eid Mubarak! Let the joy of sharing and the spirit of sacrifice illuminate your heart today and always." }
        ],
        ur: [
            { icon:"🐑", text:"عید الاضحیٰ مبارک! اللہ پاک آپ کی قربانی اور عبادات کو قبول فرمائے اور آپ کو خوشیوں سے نوازے۔" },
            { icon:"🌙", text:"سنتِ ابراہیمی کا ایثار اور قربانی کی روایت۔ اللہ رب العزت آپ کو حجِ مبرور کی برکات نصیب فرمائے۔" },
            { icon:"🐐", text:"قربانی کی مٹھاس، اپنوں کا ایثار، اور سنتِ ابراہیمی کا جذبہ۔ آپ کو بکرا عید بہت بہت مبارک ہو!" },
            { icon:"🕌", text:"اللہ تعالیٰ آپ کو اور آپ کے خاندان کو صحتِ کاملہ اور عید الاضحیٰ کی سچی مسرتیں عطا فرمائے۔ عید مبارک!" },
            { icon:"✨", text:"اس عیدِ قرباں پر دعا ہے کہ اللہ پاک آپ کی تمام دلی مرادیں پوری کرے اور آپ کو ہمیشہ خوش رکھے۔" },
            { icon:"🐑", text:"بکرا عید کی لذیذ ضیافتیں اور اپنوں کی پیاری محفلیں آپ کے لیے مبارک ہوں۔ عید الاضحیٰ مبارک!" },
            { icon:"🌟", text:"عید مبارک! خدا کرے کہ آپ کی زندگی سنتِ ابراہیمی کے ایثار کی طرح روشن اور بابرکت ہو۔" },
            { icon:"🐐", text:"دل کی گہرائیوں سے آپ کو عیدِ قرباں مبارک! یہ دن آپ کے لیے بے شمار برکات کا باعث بنے۔" },
            { icon:"🕋", text:"قربانی کا سچا جذبہ اور ایثار کی لازوال داستان۔ عید الاضحیٰ کی مبارک گھڑیوں میں دلی مبارکباد!" },
            { icon:"🎉", text:"عید الاضحیٰ کے پرمسرت موقع پر دعا ہے کہ اللہ آپ کی قربانیوں کو قبول فرمائے اور زندگی میں بہار لائے۔" },
            { icon:"🕊️", text:"عید مبارک! اللہ کرے یہ مبارک دن آپ کے گھر میں امن، سکون اور بے شمار خوشیاں لے کر آئے۔" },
            { icon:"🍖", text:"بکرا عید کی خوشیاں مبارک! اللہ آپ کے دسترخوان کو ہمیشہ وسیع رکھے اور خوشیاں عطا فرمائے۔" },
            { icon:"💖", text:"دلی دعاؤں کے ساتھ عید الاضحیٰ مبارک! آپ کی ہر قربانی اللہ کی بارگاہ میں شرفِ قبولیت پائے۔" },
            { icon:"🤲", text:"اللہ کی رحمتوں کا سایہ ہمیشہ آپ پر رہے۔ آپ کو اور آپ کے اہلِ خانہ کو عیدِ قرباں مبارک!" },
            { icon:"🎊", text:"عید کا دن خوشیاں بانٹنے اور محبتیں عام کرنے کا دن ہے۔ آپ سب کو دل کی اتھاہ گہرائیوں سے عید مبارک!" }
        ]
    };

    // Ornaments per style
    const ornaments = {
        "royal-arch":     { top:'<i class="fa-solid fa-mosque" style="font-size:22px;color:var(--accent)"></i>', bottom:'<span class="g-dot"></span><span class="g-line"></span><i class="fa-solid fa-star" style="font-size:8px"></i><span class="g-line"></span><span class="g-dot"></span>' },
        "floral-arabesque":{ top:'<i class="fa-solid fa-seedling" style="font-size:22px;color:var(--accent)"></i>', bottom:'<span class="g-line" style="width:30px"></span><i class="fa-solid fa-spa" style="font-size:10px"></i><span class="g-line" style="width:30px"></span>' },
        "festive-qurbani": { top:'<span style="font-size:28px">🐑</span>', bottom:'<i class="fa-solid fa-star" style="font-size:8px"></i><span class="g-line" style="width:25px"></span><i class="fa-solid fa-moon" style="font-size:10px"></i><span class="g-line" style="width:25px"></span><i class="fa-solid fa-star" style="font-size:8px"></i>' },
        "modern-minimalist":{ top:'<i class="fa-solid fa-diamond" style="font-size:14px;color:var(--accent)"></i>', bottom:'<span class="g-line" style="width:50px;opacity:.6"></span>' }
    };

    // === DOM ===
    const $ = id => document.getElementById(id);
    const creatorView=$("creator-view"), showcaseView=$("showcase-view");
    const toInput=$("to-name"), fromInput=$("from-name"), msgArea=$("card-message"), charsUsed=$("chars-used");
    const tplContainer=$("wishes-templates-container");
    const prevBtn=$("prev-btn"), nextBtn=$("next-btn"), launchBtn=$("launch-card-btn");
    const toast=$("toast-pop");
    const stepDots=document.querySelectorAll(".step-dot");
    const langBtns=document.querySelectorAll(".lang-choice-btn");
    const themeBtns=document.querySelectorAll(".theme-choice-btn");
    const styleBtns=document.querySelectorAll(".style-choice-btn");
    // Preview
    const pFrame=$("live-card-container"), pTo=$("preview-recipient"), pTitle=$("preview-title"), pBody=$("preview-body"), pFrom=$("preview-sender"), pOrnTop=$("preview-ornament-top"), pOrnBot=$("preview-ornament-bottom");
    // Showcase
    const sWrap=$("showcase-card-target"), sTo=$("showcase-recipient"), sTitle=$("showcase-title"), sBody=$("showcase-body"), sFrom=$("showcase-sender"), sOrnTop=$("showcase-ornament-top"), sOrnBot=$("showcase-ornament-bottom");

    // === WIZARD NAV ===
    function goToStep(n) {
        if(n<1||n>TOTAL_STEPS) return;
        state.currentStep = n;
        document.querySelectorAll(".step-panel").forEach(p=>p.classList.remove("active"));
        const panel = $("step-"+n);
        if(panel) panel.classList.add("active");
        // Dots
        stepDots.forEach(d=>{
            const s=+d.dataset.step;
            d.classList.remove("active","done");
            if(s===n) d.classList.add("active");
            else if(s<n) d.classList.add("done");
        });
        // Buttons
        prevBtn.style.visibility = n===1?"hidden":"visible";
        if(n===TOTAL_STEPS){nextBtn.style.display="none";launchBtn.style.display="flex";}
        else{nextBtn.style.display="flex";launchBtn.style.display="none";}
    }
    prevBtn.onclick=()=>goToStep(state.currentStep-1);
    nextBtn.onclick=()=>goToStep(state.currentStep+1);
    stepDots.forEach(d=>d.addEventListener("click",()=>goToStep(+d.dataset.step)));

    // === LANGUAGE ===
    langBtns.forEach(b=>b.addEventListener("click",()=>{
        langBtns.forEach(x=>x.classList.remove("active"));
        b.classList.add("active");
        state.lang=b.dataset.lang;
        // Update labels
        if(state.lang==="ur"){
            $("label-to").textContent="کس کو (وصول کنندہ)";
            $("label-from").textContent="کس کی طرف سے";
            toInput.placeholder="مثلاً زارا";
            fromInput.placeholder="مثلاً احمد";
            toInput.style.direction="rtl"; fromInput.style.direction="rtl"; msgArea.style.direction="rtl";
            toInput.style.fontFamily="'Noto Nastaliq Urdu',serif";
            fromInput.style.fontFamily="'Noto Nastaliq Urdu',serif";
            msgArea.style.fontFamily="'Noto Nastaliq Urdu',serif";
        } else {
            $("label-to").textContent="To (Recipient)";
            $("label-from").textContent="From (Your Name)";
            toInput.placeholder="e.g. Zara";
            fromInput.placeholder="e.g. Ahmed";
            toInput.style.direction="ltr"; fromInput.style.direction="ltr"; msgArea.style.direction="ltr";
            toInput.style.fontFamily="'Outfit',sans-serif";
            fromInput.style.fontFamily="'Outfit',sans-serif";
            msgArea.style.fontFamily="'Outfit',sans-serif";
        }
        msgArea.value=""; renderTemplates(); sync();
    }));

    // === THEMES ===
    themeBtns.forEach(b=>b.addEventListener("click",()=>{
        themeBtns.forEach(x=>x.classList.remove("active"));
        b.classList.add("active");
        state.theme=b.dataset.theme;
        document.body.className="theme-"+state.theme;
        sync();
    }));

    // === STYLES ===
    styleBtns.forEach(b=>b.addEventListener("click",()=>{
        styleBtns.forEach(x=>x.classList.remove("active"));
        b.classList.add("active");
        state.cardStyle=b.dataset.style;
        sync();
    }));

    // === TEMPLATE RENDER ===
    function renderTemplates(){
        const list = T[state.lang]||T.en;
        tplContainer.innerHTML="";
        list.forEach((item,i)=>{
            const btn=document.createElement("button");
            btn.type="button";
            btn.className="tpl-item"+(state.lang==="ur"?" tpl-rtl":"");
            btn.innerHTML=`<span class="tpl-icon">${item.icon}</span><span class="tpl-text">${item.text}</span>`;
            btn.addEventListener("click",()=>{
                tplContainer.querySelectorAll(".tpl-item").forEach(x=>x.classList.remove("active"));
                btn.classList.add("active");
                msgArea.value=item.text; state.message=item.text; updateChars(); sync();
            });
            if(i===0&&!msgArea.value.trim()){btn.classList.add("active");msgArea.value=item.text;state.message=item.text;updateChars();}
            tplContainer.appendChild(btn);
        });
    }

    // === SYNC CARD ===
    function sync(){
        const to=toInput.value.trim(), from=fromInput.value.trim(), msg=msgArea.value.trim()||"...";
        state.toName=to; state.fromName=from; state.message=msg;
        const isUr=state.lang==="ur";
        const titleText=isUr?"عید مبارک":"Eid Mubarak";
        const langClass=isUr?"lang-ur":"";
        const styleClass="style-"+state.cardStyle;
        const orn=ornaments[state.cardStyle]||ornaments["royal-arch"];

        // Preview
        pTo.textContent=to||""; pTo.style.display=to?"block":"none";
        pFrom.textContent=from||""; pFrom.style.display=from?"block":"none";
        pTitle.textContent=titleText; pBody.textContent=msg;
        pFrame.className="card-frame "+langClass+" "+styleClass;
        pOrnTop.innerHTML=orn.top; pOrnBot.innerHTML=orn.bottom;

        // Showcase
        sTo.textContent=to||""; sTo.style.display=to?"block":"none";
        sFrom.textContent=from||""; sFrom.style.display=from?"block":"none";
        sTitle.textContent=titleText; sBody.textContent=msg;
        sWrap.className="showcase-card-wrapper "+langClass+" "+styleClass;
        sOrnTop.innerHTML=orn.top; sOrnBot.innerHTML=orn.bottom;
    }

    function updateChars(){ const l=msgArea.value.length; charsUsed.textContent=l; charsUsed.style.color=l>200?"#ef4444":""; }

    // === INPUT LISTENERS ===
    toInput.addEventListener("input",sync);
    fromInput.addEventListener("input",sync);
    msgArea.addEventListener("input",()=>{state.message=msgArea.value;updateChars();sync();});

    // === VIEW TOGGLE ===
    function showShowcase(){
        creatorView.classList.add("view-hidden"); creatorView.classList.remove("view-active");
        showcaseView.classList.remove("view-hidden"); showcaseView.classList.add("view-active");
        window.scrollTo({top:0,behavior:"smooth"});
    }
    function showCreator(){
        showcaseView.classList.add("view-hidden"); showcaseView.classList.remove("view-active");
        creatorView.classList.remove("view-hidden"); creatorView.classList.add("view-active");
        window.history.pushState({},"",window.location.pathname);
    }

    // === URL ENCODE/DECODE ===
    function encMsg(m){try{return btoa(encodeURIComponent(m).replace(/%([0-9A-F]{2})/g,(_,p)=>String.fromCharCode('0x'+p)))}catch(e){return btoa(m)}}
    function decMsg(s){try{return decodeURIComponent(atob(s).split('').map(c=>'%'+('00'+c.charCodeAt(0).toString(16)).slice(-2)).join(''))}catch(e){return atob(s)}}
    function shareLink(){
        const p=[];
        if(state.toName)p.push("to="+encodeURIComponent(state.toName));
        if(state.fromName)p.push("from="+encodeURIComponent(state.fromName));
        p.push("lang="+state.lang,"theme="+state.theme,"style="+state.cardStyle,"msg="+encMsg(state.message));
        return window.location.origin+window.location.pathname+"?"+p.join("&");
    }
    function showToast(m){toast.textContent=m;toast.classList.add("reveal");setTimeout(()=>toast.classList.remove("reveal"),2200);}

    // === LAUNCH ===
    launchBtn.onclick=()=>{
        if(!msgArea.value.trim()){showToast("Please select or write a message first!");return;}
        window.history.pushState({},"",shareLink());
        sync(); showShowcase();
    };

    // === SHOWCASE ACTIONS ===
    $("edit-card-btn").onclick=showCreator;
    $("copy-link-btn").onclick=e=>{e.stopPropagation();navigator.clipboard.writeText(shareLink()).then(()=>showToast("Link copied! 🔗")).catch(()=>showToast("Copy the URL bar manually"));};
    $("share-whatsapp-btn").onclick=e=>{
        e.stopPropagation();
        const t=state.toName?`🌙 *Eid Mubarak!*\n\nDear *${state.toName}*, here is a special greeting card for you!\n\n${shareLink()}`:`🌙 *Eid Mubarak!*\n\nHere is a beautiful greeting card for you!\n\n${shareLink()}`;
        window.open("https://api.whatsapp.com/send?text="+encodeURIComponent(t),"_blank");
    };
    $("download-card-btn").onclick=e=>{
        e.stopPropagation();showToast("Generating image... 🖼️");
        html2canvas(sWrap.querySelector(".card-paper"),{useCORS:true,scale:2.5,backgroundColor:"#fcfaf6"}).then(c=>{
            const a=document.createElement("a");a.download="Eid_Card"+(state.toName?"_"+state.toName.replace(/\s+/g,"_"):"")+".png";a.href=c.toDataURL("image/png");a.click();showToast("Saved! 📥");
        }).catch(()=>showToast("Failed. Try copying the link instead."));
    };

    // === INIT / DEEP LINK ===
    function init(){
        const u=new URLSearchParams(window.location.search);
        const msg=u.get("msg");
        if(msg){
            state.toName=u.get("to")?decodeURIComponent(u.get("to")):"";
            state.fromName=u.get("from")?decodeURIComponent(u.get("from")):"";
            state.lang=u.get("lang")||"en";
            state.theme=u.get("theme")||"emerald";
            state.cardStyle=u.get("style")||"royal-arch";
            state.message=decMsg(msg);
            toInput.value=state.toName; fromInput.value=state.fromName; msgArea.value=state.message; updateChars();
            // Activate controls
            langBtns.forEach(b=>{if(b.dataset.lang===state.lang){langBtns.forEach(x=>x.classList.remove("active"));b.classList.add("active");b.click();}});
            themeBtns.forEach(b=>{if(b.dataset.theme===state.theme){themeBtns.forEach(x=>x.classList.remove("active"));b.classList.add("active");}});
            styleBtns.forEach(b=>{if(b.dataset.style===state.cardStyle){styleBtns.forEach(x=>x.classList.remove("active"));b.classList.add("active");}});
            document.body.className="theme-"+state.theme;
            renderTemplates(); sync(); showShowcase();
        } else {
            document.body.className="theme-emerald";
            renderTemplates(); sync(); goToStep(1);
        }
    }
    init();
});
