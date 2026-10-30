(() => {
  const D = window.PORTFOLIO;
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const motion = !!(window.gsap && window.ScrollTrigger) && !reduced;
  if (motion) document.documentElement.classList.add("motion");

  /* ---------- content ---------- */

  $("#status-text").textContent = D.status;
  $("#hero-name").innerHTML = [...D.name.toUpperCase()].map((c) => `<span class="l"><span class="li">${esc(c)}</span></span>`).join("");
  $("#hero-intro").textContent = D.intro;

  const VIS = {
    code: () => `<div class="vis vis-code">${[78, 54, 66, 40, 72, 48].map((w) => `<i style="width:${w}%"></i>`).join("")}<i class="caret"></i></div>`,
    flow: () => `<div class="vis vis-flow"><span class="wire"></span><span class="pulse"></span><span class="pulse"></span><span class="node">Mail</span><span class="node ai">AI</span><span class="node">CRM</span></div>`,
    chart: () => `<div class="vis vis-chart">${[34, 48, 42, 60, 72, 94].map((h) => `<i style="height:${h}%"></i>`).join("")}</div>`
  };
  $("#crafts-pin").innerHTML = D.crafts.map((c) => `
    <article class="craft" style="--panel:${c.color}${c.accent ? `;--accent:${c.accent}` : ""}">
      <div class="craft-word" aria-hidden="true">${esc(c.word)}.</div>
      <div class="craft-body">
        <h2 class="craft-verb">I <em>${esc(c.verb)}</em></h2>
        ${VIS[c.visual] ? VIS[c.visual]() : ""}
        <p class="craft-line">${esc(c.line)}</p>
      </div>
    </article>`).join("");

  $("#beliefs-pin").innerHTML = D.beliefs.map((b) => `
    <div class="belief"><p>${b.split(" ").map((w) => `<span class="w">${esc(w)}</span>`).join(" ")}</p></div>`).join("");

  const CARD = {
    chat: () => `<div class="cv cv-chat"><span class="b">Hi, we need help automating our sales follow-ups.</span><span class="b me">Thanks! Two quick questions so I can send the right proposal…</span><span class="score">Lead score <i></i> 82</span></div>`,
    doc: () => `<div class="cv cv-doc"><div class="sheet"><i></i><i class="hl"></i><i></i><i></i><i class="hl"></i><i></i><i></i><i class="hl"></i></div></div>`,
    chart: () => `<div class="cv cv-chart"><div class="row"><span class="kpi"><small>Orders</small>1,284</span><span class="kpi"><small>Margin</small>31%</span><span class="kpi"><small>Late</small>3</span></div><div class="bars">${[40, 52, 47, 63, 70, 58, 74, 81, 77, 92].map((h) => `<i style="height:${h}%"></i>`).join("")}</div></div>`
  };
  $("#work-track").insertAdjacentHTML("beforeend", D.projects.map((p) => `
    <a class="card" href="${esc(p.href || "#")}">
      <div class="card-screen">${p.sample ? `<span class="sample">Sample</span>` : ""}${CARD[p.visual] ? CARD[p.visual]() : ""}</div>
      <div class="card-meta"><h3>${esc(p.title)}</h3><span class="card-year">${esc(p.year)}</span></div>
      <p>${esc(p.summary)}</p>
      <div class="tags">${p.tags.map((t) => `<span>${esc(t)}</span>`).join("")}</div>
    </a>`).join("") + `<p class="work-end">More on the way. Ask me about the rest.</p>`);

  $("#about-lead").textContent = "Code, AI and business sense, in the same person.";
  $("#about-text").innerHTML = D.about.map((p) => `<p>${esc(p)}</p>`).join("");
  $("#services").innerHTML = D.services.map((s) => `<li><b>${esc(s.name)}</b><span>${esc(s.desc)}</span></li>`).join("");
  $("#skills").innerHTML = D.skills.map((g) => `<div><h3>${esc(g.group)}</h3><ul>${g.items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul></div>`).join("");

  const email = $("#email");
  email.textContent = D.email;
  email.href = "mailto:" + D.email;
  $("#links").innerHTML = D.links.map((l) => `<a href="${esc(l.href)}" target="_blank" rel="noopener">${esc(l.label)}</a>`).join("");
  $("#copy").addEventListener("click", async (e) => {
    try { await navigator.clipboard.writeText(D.email); e.target.textContent = "Copied"; }
    catch { e.target.textContent = "Select it above"; }
    setTimeout(() => (e.target.textContent = "Copy"), 1800);
  });

  // The contact chapter gets its own copy of the character (with unique ids).
  const twin = $("#avatar").cloneNode(true);
  twin.removeAttribute("id");
  $$("[id]", twin).forEach((el) => el.removeAttribute("id"));
  twin.querySelector("clipPath").id = "lens-clip-2";
  twin.querySelector("[clip-path]").setAttribute("clip-path", "url(#lens-clip-2)");
  $("#contact-avatar").appendChild(twin);

  // Both characters turn their head towards the pointer.
  const heads = $$(".a-head");
  window.addEventListener("pointermove", (e) => {
    const r = (e.clientX / window.innerWidth - 0.5) * 10;
    heads.forEach((h) => (h.style.transform = `rotate(${r.toFixed(2)}deg)`));
  }, { passive: true });

  /* ---------- the automation line ---------- */

  const RAW = [
    `<rect x="4" y="12" width="46" height="32" rx="5" fill="#f3e9d6" stroke="#15120e" stroke-width="3"/><path d="M6 15 27 31 48 15" fill="none" stroke="#15120e" stroke-width="3" stroke-linejoin="round"/>`,
    `<path d="M12 4h22l10 10v36H12z" fill="#f3e9d6" stroke="#15120e" stroke-width="3" stroke-linejoin="round"/><path d="M18 22h18M18 30h18M18 38h12" stroke="#15120e" stroke-width="3" stroke-linecap="round"/>`,
    `<rect x="5" y="8" width="44" height="38" rx="4" fill="#f3e9d6" stroke="#15120e" stroke-width="3"/><path d="M5 20h44M5 33h44M20 8v38M35 8v38" stroke="#15120e" stroke-width="2.5"/>`
  ];
  const DONE = `<rect x="5" y="5" width="44" height="44" rx="12" fill="#f0a531" stroke="#15120e" stroke-width="3"/><path d="M16 28l8 8 15-17" fill="none" stroke="#15120e" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>`;
  const N = 14, GAP = 0.085;
  const itemsEl = $("#items");
  itemsEl.innerHTML = Array.from({ length: N }, (_, i) =>
    `<div class="item"><svg class="raw" viewBox="0 0 54 54">${RAW[i % 3]}</svg><svg class="done" viewBox="0 0 54 54">${DONE}</svg></div>`).join("");
  const items = $$(".item", itemsEl).map((el, i) => ({ el, tilt: ((i * 37) % 36) - 18 }));
  const line = $("#line"), box = $("#box"), gear = $(".gear"), stripes = $(".belt span"), tally = $("#tally");

  function runLine(p) {
    const w = line.clientWidth;
    let done = 0, busy = false;
    items.forEach((it, i) => {
      const pos = p * (1 + (N - 1) * GAP) - i * GAP;
      const isDone = pos >= 0.5;
      if (isDone) done++;
      if (Math.abs(pos - 0.5) < 0.07) busy = true;
      const x = -70 + pos * (w + 140);
      const hop = isDone ? -Math.abs(Math.sin(pos * 40)) * 6 : 0;
      it.el.style.transform = `translate(${x}px, ${hop}px) rotate(${isDone ? 0 : it.tilt}deg)`;
      it.el.classList.toggle("is-done", isDone);
    });
    box.classList.toggle("busy", busy);
    gear.style.transform = `rotate(${p * 900}deg)`;
    stripes.style.transform = `translateX(${(p * 3000) % 40}px)`;
    tally.textContent = done;
  }

  /* ---------- no animation library, or reduced motion: a plain long page ---------- */

  const chapters = $$(".chapter");
  if (!motion) {
    chapters.forEach((c) => (c.style.background = c.dataset.bg));
    $$(".craft").forEach((c) => (c.style.background = c.style.getPropertyValue("--panel")));
    runLine(0.5);
    window.addEventListener("resize", () => runLine(0.5));
    return;
  }

  /* ---------- scroll story ---------- */

  gsap.registerPlugin(ScrollTrigger);
  const bg = $("#bg");
  const setBg = (c) => (bg.style.backgroundColor = c);
  $$(".craft").forEach((c) => (c.style.background = c.style.getPropertyValue("--panel")));

  // Smooth, weighted scrolling. Lenis drives the native scroll position, so ScrollTrigger keeps working.
  const lenis = window.Lenis ? new Lenis({ lerp: .085, wheelMultiplier: .9 }) : null;
  if (lenis) {
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((t) => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
  }

  // Opening shot: a line of light, the letterbox opens, then the title card plays.
  lenis?.stop();
  const intro = gsap.timeline({ defaults: { ease: "expo.out" }, onComplete: () => lenis?.start() });
  intro
    .to("#shutter b", { scaleX: 1, duration: .7, ease: "power3.inOut" })
    .to("#shutter i", { scaleY: 0, duration: 1.2, ease: "expo.inOut" }, "+=.05")
    .to("#shutter b", { opacity: 0, duration: .3 }, "<")
    .from("#hero-stage", { scale: 1.12, duration: 2.4, ease: "power2.out" }, "<")
    .from(".hero-hi", { y: 24, opacity: 0, duration: 1 }, "-=1.9")
    .from(".li", { yPercent: 110, filter: "blur(14px)", duration: 1.5, stagger: .09 }, "<.1")
    .from("#avatar-wrap", { yPercent: 75, duration: 1.8 }, "<.25")
    .from(["#hero-intro", "#scroll-hint"], { opacity: 0, y: 16, duration: 1, stagger: .12 }, "-=1.1")
    .set("#shutter", { display: "none" });

  // 1. Hello: scrolling dives into the left lens.

  const flash = document.createElement("div");
  flash.className = "hero-flash";
  flash.style.background = D.crafts[0].color;
  $("#hello").appendChild(flash);

  gsap.timeline({
    scrollTrigger: { trigger: "#hello", start: "top top", end: "+=140%", pin: true, scrub: .6, invalidateOnRefresh: true }
  })
    .fromTo([".hero-hi", "#hero-intro", "#scroll-hint"], { opacity: 1, y: 0 }, { opacity: 0, y: -20, duration: .15, immediateRender: false }, 0)
    .to(".l", {
      x: (i, el, all) => (i - (all.length - 1) / 2) * window.innerWidth * 0.45,
      y: (i) => (i % 2 ? -1 : 1) * window.innerHeight * 0.2,
      rotate: (i) => (i % 2 ? 24 : -24), opacity: 0, duration: .5, ease: "power2.in"
    }, 0)
    // lens centre is at (162, 213) in the 400x480 drawing
    .to("#avatar", { scale: 34, transformOrigin: "40.5% 44.4%", duration: 1, ease: "power2.in" }, .05)
    .to(flash, { opacity: 1, duration: .2, ease: "none" }, .9);

  // 2. Crafts: each panel opens out of a circle in its own colour.
  const panels = $$(".craft");
  const craftsTl = gsap.timeline({
    scrollTrigger: { trigger: "#crafts-pin", start: "top top", end: () => "+=" + window.innerHeight * panels.length * 1.2, pin: true, scrub: .6 }
  });
  panels.forEach((panel, i) => {
    const t = i * 2;
    if (i > 0) {
      craftsTl.fromTo(panel, { clipPath: "circle(0% at 50% 55%)" }, { clipPath: "circle(75% at 50% 55%)", duration: 1, ease: "power2.inOut" }, t);
      craftsTl.to($(".craft-body", panels[i - 1]), { scale: .85, opacity: 0, duration: .8 }, t);
    }
    craftsTl.fromTo($(".craft-word", panel), { xPercent: 8 }, { xPercent: -48, duration: 3, ease: "none" }, Math.max(0, t - .5));
    // the first panel builds right away, the others once their circle has opened
    const o = i ? t + .35 : 0;
    craftsTl.from($(".craft-verb", panel), { yPercent: 60, opacity: 0, duration: .4 }, o);
    const bits = $$(".vis-code i:not(.caret)", panel);
    if (bits.length) craftsTl.from(bits, { scaleX: 0, duration: .2, stagger: .06 }, o + .1);
    const bars = $$(".vis-chart i", panel);
    if (bars.length) craftsTl.from(bars, { scaleY: 0, duration: .25, stagger: .06, ease: "back.out(2)" }, o + .1);
    const nodes = $$(".vis-flow .node", panel);
    if (nodes.length) craftsTl.from(nodes, { scale: 0, duration: .25, stagger: .1, ease: "back.out(2.5)" }, o + .1);
    craftsTl.from($(".craft-line", panel), { y: 20, opacity: 0, duration: .3 }, o + .3);
  });
  craftsTl.to({}, { duration: .6 });

  // 3. Beliefs: words light up one by one, then the next sentence takes over.
  const beliefs = $$(".belief");
  const beliefsTl = gsap.timeline({
    scrollTrigger: { trigger: "#beliefs-pin", start: "top top", end: () => "+=" + window.innerHeight * beliefs.length * 1.1, pin: true, scrub: .5 }
  });
  beliefs.forEach((b, i) => {
    if (i > 0) beliefsTl.fromTo(b, { autoAlpha: 0, y: 70 }, { autoAlpha: 1, y: 0, duration: .5 });
    beliefsTl.fromTo($$(".w", b), { opacity: .12, filter: "blur(6px)" }, { opacity: 1, filter: "blur(0px)", duration: .3, stagger: .09, ease: "none" });
    beliefsTl.to({}, { duration: .4 });
    if (i < beliefs.length - 1) beliefsTl.to(b, { autoAlpha: 0, y: -70, duration: .5 });
  });
  gsap.set(beliefs.slice(1), { autoAlpha: 0 });

  // 4. The machine runs as fast as you scroll.
  runLine(0);
  ScrollTrigger.create({
    trigger: ".machine-pin", start: "top top", end: "+=220%", pin: true,
    onUpdate: (st) => runLine(st.progress)
  });
  window.addEventListener("resize", () => runLine(ScrollTrigger.getAll().find((s) => s.trigger === $(".machine-pin"))?.progress || 0));

  // 5. Work slides sideways.
  const track = $("#work-track");
  const distance = () => Math.max(0, track.scrollWidth - window.innerWidth);
  gsap.to(track, {
    x: () => -distance(), ease: "none",
    scrollTrigger: { trigger: ".work-pin", start: "top top", end: () => "+=" + distance(), pin: true, scrub: .6, invalidateOnRefresh: true }
  });

  // 7. The character pops back up to say goodbye.
  gsap.from("#contact-avatar", { yPercent: 60, ease: "none", scrollTrigger: { trigger: "#contact", start: "top 80%", end: "top 10%", scrub: .6 } });
  gsap.from(".contact-inner > *", { y: 40, opacity: 0, stagger: .12, duration: .8, ease: "power3.out", scrollTrigger: { trigger: "#contact", start: "top 55%" } });

  // Headlines rise out of a mask, word by word.
  [".machine-copy h2", ".work-intro h2", "#about-lead", ".contact h2"].forEach((sel) => {
    const el = $(sel);
    el.innerHTML = el.textContent.split(" ").map((w) => `<span class="m"><span class="mi">${esc(w)}</span></span>`).join(" ");
    gsap.from($$(".mi", el), {
      yPercent: 115, duration: 1.2, ease: "expo.out", stagger: .06,
      scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none reverse" }
    });
  });

  /* ---------- drifting stars ---------- */

  const sky = $("#stars"), ctx = sky.getContext("2d");
  let stars = [];
  function sizeSky() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    sky.width = innerWidth * dpr;
    sky.height = innerHeight * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = Math.round((innerWidth * innerHeight) / 11000);
    stars = Array.from({ length: n }, () => ({
      x: Math.random() * innerWidth, y: Math.random() * innerHeight,
      r: Math.random() * 1.3 + .3, depth: Math.random() * .5 + .1, phase: Math.random() * 6.3
    }));
  }
  sizeSky();
  window.addEventListener("resize", sizeSky);
  gsap.ticker.add((time) => {
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    const sy = window.scrollY;
    for (const st of stars) {
      const y = (((st.y - sy * st.depth * .25) % innerHeight) + innerHeight) % innerHeight;
      ctx.globalAlpha = .25 + .45 * (.5 + .5 * Math.sin(time * 1.6 + st.phase));
      ctx.fillStyle = "#f3e9d6";
      ctx.beginPath();
      ctx.arc(st.x, y, st.r, 0, 6.283);
      ctx.fill();
    }
  });

  /* ---------- soft cursor ---------- */

  if (window.matchMedia("(pointer: fine)").matches) {
    const cursor = $("#cursor"), ring = $("b", cursor), dot = $("i", cursor);
    const ringX = gsap.quickTo(ring, "x", { duration: .5, ease: "power3" }), ringY = gsap.quickTo(ring, "y", { duration: .5, ease: "power3" });
    const dotX = gsap.quickTo(dot, "x", { duration: .1 }), dotY = gsap.quickTo(dot, "y", { duration: .1 });
    window.addEventListener("pointermove", (e) => {
      ringX(e.clientX); ringY(e.clientY); dotX(e.clientX); dotY(e.clientY);
      cursor.classList.toggle("hover", !!e.target.closest("a, button"));
      cursor.classList.add("live");
    }, { passive: true });
    document.documentElement.addEventListener("pointerleave", () => cursor.classList.remove("live"));
  }

  /* ---------- page colour + chapter timeline ---------- */

  chapters.forEach((el) => ScrollTrigger.create({
    trigger: el, start: "top 50%", end: "bottom 50%",
    onToggle: (st) => st.isActive && setBg(el.dataset.bg)
  }));
  setBg(chapters[0].dataset.bg);
  const marks = chapters.map((el) => ScrollTrigger.create({ trigger: el, start: "top top" }));

  const timeline = $("#timeline"), needle = $("#needle");
  const buttons = chapters.map((el) => {
    const b = document.createElement("button");
    b.type = "button";
    b.textContent = el.dataset.chapter;
    timeline.appendChild(b);
    return b;
  });
  // The hello chapter is itself pinned, so its marker would land after its own pin.
  const starts = () => marks.map((m, i) => (i === 0 ? 0 : Math.max(0, m.start)));
  const jump = (i) => lenis ? lenis.scrollTo(starts()[i] + 2, { duration: 1.8 }) : window.scrollTo({ top: starts()[i] + 2, behavior: "smooth" });
  buttons.forEach((b, i) => b.addEventListener("click", () => jump(i)));
  $$("[data-jump]").forEach((a) => a.addEventListener("click", (e) => {
    e.preventDefault();
    jump(chapters.findIndex((c) => c.id === a.dataset.jump));
  }));
  $(".logo").addEventListener("click", (e) => { e.preventDefault(); jump(0); });

  function placeButtons() {
    const max = ScrollTrigger.maxScroll(window) || 1;
    starts().forEach((s, i) => (buttons[i].style.left = (s / max) * 100 + "%"));
    updateNeedle();
  }
  function updateNeedle() {
    const max = ScrollTrigger.maxScroll(window) || 1;
    const y = window.scrollY;
    needle.style.transform = `translateX(${(y / max) * timeline.clientWidth}px)`;
    const s = starts();
    let on = 0;
    s.forEach((v, i) => { if (y >= v - 4) on = i; });
    buttons.forEach((b, i) => b.classList.toggle("on", i === on));
  }
  ScrollTrigger.addEventListener("refresh", placeButtons);
  window.addEventListener("scroll", updateNeedle, { passive: true });
  document.fonts?.ready.then(() => ScrollTrigger.refresh());
  placeButtons();
})();
