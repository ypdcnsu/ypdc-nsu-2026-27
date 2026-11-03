/* =====================  EDIT ONLY THIS BLOCK  =====================
   SOCIETY: name, handle, logo (image link or "" for initials), links.
            type must be: instagram, linkedin, facebook, tiktok, x, youtube, web
   MEMBERS: theme = a name from THEMES below OR a hex colour like "#0a7a3d".
            photo   = transparent PNG cut-out of the person (stands in front).
            bgPhoto = the same photo WITH its background (shows in the diagonal panel; optional).
            logoText  = small colour-gradient text at top-left ("" = first name)
            ghostText = big grey text behind the photo ("" = first name)
            role    = text before "/" is light, after "/" is bold. Keep bio under ~230 characters.
   TEAMS:   add/remove/reorder freely. Fill in lead, about and join link. */
const SOCIETY = {
  name: "YPDC NSU Chapter 2026–27",
  handle: "@ypdc_nsu",
  logo: "assets/photos/logo.jpg",
  autoplaySeconds: 6,            // 0 = auto-play off
  footer: "YPDC NSU Chapter 2026–27",
  links: [
    { type: "instagram", label: "Instagram", url: "https://www.instagram.com/ypdc_nsu?rpxt=eGhmeTFldTY2aWR3" },
    { type: "linkedin",  label: "LinkedIn", url: "https://www.linkedin.com/company/ypdc-nsu-chapter/" },  // ← paste exact LinkedIn link
    { type: "facebook",  label: "Facebook", url: "https://www.facebook.com/share/1Drzu5NQ91/" }
  ]
};
const THEMES = { green:"#0b7a4b", blue:"#1e40af", red:"#e4002b", bluepurple:"#5b3fd4", tealgreen:"#0d9488", purple:"#6d28d9", orange:"#d9480f", teal:"#0e7490" };
const MEMBERS = [
  { name:"M. Zain Malik", role:"DCET/President", theme:"green", photo:"assets/photos/member1.png", logoText:"PRESIDENT", ghostText:"ZAIN", bgPhoto:"assets/photos/member1-bg.jpg",
    bio:"Leading with vision, fostering innovation & inspiring change.",
    socials:{ facebook:"", instagram:"", x:"", youtube:"" } },
  { name:"Maaz Ahmed", role:"CET/Vice President", theme:"blue", photo:"assets/photos/member2.png", logoText:"V. PRESIDENT", ghostText:"MAAZ", bgPhoto:"assets/photos/member2-bg.jpg",
    bio:"Empowering Youth, Promoting Peace & Driving Positive Change.",
    socials:{ facebook:"", instagram:"", x:"", youtube:"" } },
  { name:"Noor Ul Eman", role:"HST/General Secretary", theme:"red", photo:"assets/photos/member3.png", logoText:"GEN. SECRETARY", ghostText:"NOOR", bgPhoto:"assets/photos/member3-bg.jpg",
    bio:"Driving youth-led initiatives & meaningful community impact.",
    socials:{ facebook:"", instagram:"", x:"", youtube:"" } },
  { name:"Syed M. Taqi Sanwal Bukhari", role:"EET/Coordinator", theme:"bluepurple", photo:"assets/photos/member4.png", logoText:"COORDINATOR", ghostText:"TAQI", bgPhoto:"assets/photos/member4-bg.jpg",
    bio:"Leadership ,Teamwork & Empowerment.",
    socials:{ facebook:"", instagram:"", x:"", youtube:"" } },
  { name:"Tayyba Zahoor", role:"DMS/Media Relations Officer", theme:"tealgreen", photo:"assets/photos/member5.png", logoText:"MR. OFFICER", ghostText:"TAYYBA", bgPhoto:"assets/photos/member5-bg.jpg",
    bio:"Advocating change through strategic media presence.",
    socials:{ facebook:"", instagram:"", x:"", youtube:"" } }
];
const TEAMS = [
  { short:"SBMD (BANO SHAHEEN)", name:"Semester Based Membership Drive (BANO SHAHEEN)", lead:"Team lead name", about:"The Bano Shaheen Team promotes women’s empowerment, leadership, and active participation in community development. It encourages young women to build confidence, develop skills, and create positive change.", join:"" },
  { short:"MCT",    name:"Media & Creative Team",               lead:"Team lead name", about:"The Media & Creative Team brings ideas to life through innovative designs, creative content, and visual storytelling. It helps present YPDC’s vision and activities in an engaging way.", join:"" },
  { short:"COT",    name:"Community Outreach Team",             lead:"Team lead name", about:"Builds connections, engages with communities, and promotes YPDC initiatives. It focuses on communication, networking, and encouraging youth participation.", join:"" },
  { short:"ELT",    name:"Event & Logistic Team",               lead:"Team lead name", about:"The Event Management and Logistics Team handles event planning, coordination, and logistical arrangements. It ensures that resources, venues, schedules, and essential requirements are managed efficiently for successful events.", join:"" },
  { short:"YPDC DF",name:"YPDC Debating Forum",                 lead:"Team lead name", about:"The Debating Team promotes critical thinking, public speaking, and constructive dialogue. It empowers members to express ideas confidently, build strong arguments, and discuss important social issues.", join:"" },
  { short:"SM",     name:"Stage Management Team",                    lead:"Team lead name", about:"The Stage Management Team ensures the smooth execution of programs, ceremonies, and stage activities. It oversees stage operations, hosts and coordinates stage proceedings, manages speakers and program transitions, and maintains discipline and professionalism throughout events.", join:"" }
];
/* =====================  END OF EDITABLE BLOCK  ===================== */

const ICON = {
  instagram:'<path d="M12 7a5 5 0 100 10 5 5 0 000-10zm0 8.2a3.2 3.2 0 110-6.4 3.2 3.2 0 010 6.4zM17.3 5.6a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4zM7.5 2h9A5.5 5.5 0 0122 7.5v9a5.5 5.5 0 01-5.5 5.5h-9A5.5 5.5 0 012 16.5v-9A5.5 5.5 0 017.5 2zm0 1.8A3.7 3.7 0 003.8 7.5v9a3.7 3.7 0 003.7 3.7h9a3.7 3.7 0 003.7-3.7v-9a3.7 3.7 0 00-3.7-3.7z"/>',
  linkedin:'<path d="M4.5 9h3.8v12H4.5zM6.4 3a2.2 2.2 0 110 4.4 2.2 2.2 0 010-4.4zM10.5 9h3.6v1.7c.5-1 1.8-2 3.7-2 3.9 0 4.6 2.5 4.6 5.8V21h-3.8v-5.7c0-1.4 0-3.100-1.900-3.100s-2.200 1.500-2.200 3V21h-3.800z"/>',
  facebook:'<path d="M22 12a10 10 0 10-11.600 9.900v-7H7.900V12h2.500V9.800c0-2.500 1.500-3.900 3.800-3.900 1.100 0 2.200.2 2.200.2v2.500h-1.300c-1.200 0-1.600.8-1.600 1.600V12h2.800l-.4 2.900h-2.300v7A10 10 0 0022 12z"/>',
  tiktok:'<path d="M16.600 2h-3.200v13.200a2.800 2.800 0 11-2-2.700V9.200a6 6 0 105.200 5.900V8.800a7.500 7.500 0 004.400 1.400V7a4.500 4.500 0 01-4.400-5z"/>',
  x:'<path d="M17.800 3h3l-6.600 7.500L22 21h-6l-4.800-6.200L5.700 21h-3l7.100-8L2.300 3h6.100l4.300 5.700zm-1 16.200h1.700L7.500 4.700H5.700z"/>',
  youtube:'<path d="M21.600 7.200a2.500 2.500 0 00-1.800-1.800C18.200 5 12 5 12 5s-6.200 0-7.800.4A2.500 2.500 0 002.400 7.200C2 8.800 2 12 2 12s0 3.200.4 4.800a2.500 2.500 0 001.800 1.800C5.800 19 12 19 12 19s6.200 0 7.800-.4a2.500 2.500 0 001.800-1.800c.4-1.600.4-4.800.4-4.800s0-3.200-.4-4.800zM10 15V9l5.200 3z"/>',
  web:'<path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 2c.8 1 1.500 2.500 1.800 4.500h-3.600C10.500 6.500 11.200 5 12 4zM4.300 14a8 8 0 010-4h3.700a16 16 0 000 4zm.9 2h3c.3 1.500.8 2.800 1.400 3.700A8 8 0 015.200 16zm3-8h-3a8 8 0 014.400-3.700C9 5.200 8.500 6.500 8.200 8zM12 20c-.8-1-1.500-2.500-1.800-4h3.600c-.3 1.500-1 3-1.800 4zm2.200-6H9.800a14 14 0 010-4h4.400a14 14 0 010 4zm.2 5.700c.6-.9 1.100-2.200 1.400-3.700h3a8 8 0 01-4.400 3.700zM16 14a16 16 0 000-4h3.700a8 8 0 010 4z"/>'
};
const ICONS = { facebook:"f", instagram:"ig", x:"X", youtube:"▶" };
const $ = id => document.getElementById(id);
const PLACEHOLDER = "data:image/svg+xml," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300"><circle cx="100" cy="90" r="50" fill="#ffffff55"/><path d="M20 300c0-90 40-130 80-130s80 40 80 130z" fill="#ffffff55"/></svg>');
const svg = t => `<svg viewBox="0 0 24 24" aria-hidden="true">${ICON[t] || ICON.web}</svg>`;
let i = 0, timer;

/* Header + Linktree-style section */
$("brand").textContent = SOCIETY.name;
$("handle").textContent = SOCIETY.handle;
$("foot").textContent = SOCIETY.footer;
$("avatar").innerHTML = SOCIETY.logo ? `<img src="${SOCIETY.logo}" alt="${SOCIETY.name}">` : SOCIETY.name.split(" ").map(w => w[0]).join("").slice(0, 4);
$("icons").innerHTML = SOCIETY.links.map(l => `<a href="${l.url}" target="_blank" rel="noopener" aria-label="${l.label}">${svg(l.type)}</a>`).join("");
$("btns").innerHTML = SOCIETY.links.map(l => `<a class="lbtn" href="${l.url}" target="_blank" rel="noopener">${l.label}</a>`).join("");
$("teams").innerHTML = TEAMS.map(t => `
  <details class="team"><summary><span>${t.name}<span class="ab">→ ${t.short}</span></span><span class="arr">▸</span></summary>
  <div class="det"><p><b>Team lead:</b> ${t.lead}</p><p>${t.about}</p>${t.join ? `<a href="${t.join}" target="_blank" rel="noopener">Join / contact</a>` : ""}</div></details>`).join("");
document.querySelectorAll(".team").forEach(d => d.addEventListener("toggle", () => {
  if (d.open) document.querySelectorAll(".team").forEach(o => { if (o !== d) o.open = false; });
}));

/* Slideshow */
const STACKED = matchMedia("(max-width:900px) and (orientation:portrait), (max-width:900px) and (min-height:501px), (max-width:599px)");
function fit(){
  const st=$("stage"), g=document.querySelector(".ghost"); if(!g) return;
  const W=st.clientWidth, target=(STACKED.matches?.92:.54)*W;
  g.style.fontSize="100px";
  const w=g.offsetWidth||1;
  g.style.fontSize=Math.max(W*.05,Math.min(W*.17,100*target/w))+"px";
}
const ARROW=d=>`<svg viewBox="0 0 40 14"><path d="${d}"/></svg>`;
function show(n) {
  i = (n + MEMBERS.length) % MEMBERS.length;
  const m = MEMBERS[i];
  document.documentElement.style.setProperty("--accent", THEMES[m.theme] || m.theme);
  const first = m.name.replace(/^M\.\s*/, "").split(" ")[0].toUpperCase();
  const logoT = (m.logoText || first).toUpperCase(), ghostT = (m.ghostText || first).toUpperCase();
  const parts = m.role.split("/");
  const role = parts.length > 1 ? `${parts[0]}/<b>${parts.slice(1).join("/")}</b>` : `<b>${m.role}</b>`;
  const soc = Object.entries(m.socials || {}).filter(([, u]) => u).map(([k, u]) => `<a href="${u}" target="_blank" rel="noopener" title="${k}">${ICONS[k] || k[0]}</a>`).join("");
  $("stage").innerHTML = `
    <div class="art">
      <div class="ghostw"><div class="ghost">${ghostT}</div></div>
      <div class="bgp">${m.bgPhoto ? `<img src="${m.bgPhoto}" alt="">` : ""}</div>
      <div class="band"></div>
      <img class="cut" src="${m.photo || PLACEHOLDER}" alt="${m.name}">
      <div class="logo">${logoT}</div>
      <div class="dots">${MEMBERS.map((_, k) => `<i class="${k === i ? "on" : ""}" data-k="${k}"></i>`).join("")}</div>
    </div>
    <div class="info"><div class="role">${role}</div><h1>${m.name}</h1><p>${m.bio}</p></div>
    <div class="soc">${soc}</div>
    <div class="nav"><button id="prev" aria-label="Previous">${ARROW("M39 7H2M8 1L2 7l6 6")}</button><button id="next" aria-label="Next">${ARROW("M1 7h37M32 1l6 6-6 6")}</button></div>`;
  $("prev").onclick = () => go(-1);
  $("next").onclick = () => go(1);
  document.querySelectorAll(".dots i").forEach(d => d.onclick = () => { show(+d.dataset.k); restart(); });
  fit();
}
function go(d) { show(i + d); restart(); }
function restart() {
  clearInterval(timer);
  if (SOCIETY.autoplaySeconds > 0) timer = setInterval(() => show(i + 1), SOCIETY.autoplaySeconds * 1000);
}
function showQR() {
  $("qr").innerHTML = "";
  new QRCode($("qr"), { text: location.href.split("#")[0], width: 220, height: 220 });
  $("dlg").showModal();
}
document.addEventListener("keydown", e => { if (e.key === "ArrowRight") go(1); if (e.key === "ArrowLeft") go(-1); });
let sx = 0;
$("stage").addEventListener("touchstart", e => sx = e.touches[0].clientX, { passive: true });
$("stage").addEventListener("touchend", e => { const d = e.changedTouches[0].clientX - sx; if (Math.abs(d) > 50) go(d < 0 ? 1 : -1); });
show(0); restart();
if (document.fonts) document.fonts.ready.then(fit);
addEventListener("resize", fit);
