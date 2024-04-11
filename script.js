// AM-412090 xiaowu.ruan 2024.04.11
(function () {
  adroll_adv_id = "M7F6MOOGSBH2PMENXITVLK";
  adroll_pix_id = "XSEWG45CWRGVRDLPQXBGZB";
  adroll_version = "2.0";
  (function (w, d, e, o, a) {
    w.__adroll_loaded = true;
    w.adroll = w.adroll || [];
    w.adroll.f = ["setProperties", "identify", "track"];
    var roundtripUrl =
      "https://s.adroll.com/j/" + adroll_adv_id + "/roundtrip.js";
    for (a = 0; a < w.adroll.f.length; a++) {
      w.adroll[w.adroll.f[a]] =
        w.adroll[w.adroll.f[a]] ||
        (function (n) {
          return function () {
            w.adroll.push([n, arguments]);
          };
        })(w.adroll.f[a]);
    }
    e = d.createElement("script");
    o = d.getElementsByTagName("script")[0];
    e.async = 1;
    e.src = roundtripUrl;
    o.parentNode.insertBefore(e, o);
  })(window, document);
  adroll.track("pageView");
})();

// AM-409970 xiaowu.ruan 2024.04.11
(function () {
  adroll_adv_id = "IGJRDSB6MJBLVK4LQDA2FR";
  adroll_pix_id = "WDTDLR4WIVBHROP5JCTBTJ";
  adroll_version = "2.0";
  (function (w, d, e, o, a) {
    w.__adroll_loaded = true;
    w.adroll = w.adroll || [];
    w.adroll.f = ["setProperties", "identify", "track"];
    var roundtripUrl =
      "https://s.adroll.com/j/" + adroll_adv_id + "/roundtrip.js";
    for (a = 0; a < w.adroll.f.length; a++) {
      w.adroll[w.adroll.f[a]] =
        w.adroll[w.adroll.f[a]] ||
        (function () {
          return function () {
            w.adroll.push([n, arguments]);
          };
        })(w.adroll.f[a]);
    }
    e = d.createElement("script");
    o = d.getElementsByTagName("script")[0];
    e.async = 1;
    e.src = roundtripUrl;
    o.parentNode.insertBefore(e, o);
  })(window, document);
  adroll.track("pageView");
})();

// AM-423077 xiaowu.ruan 2024.04.11
(function () {
  (function (w, i, d, g, e, t) {
    w["WidgetTrackerObject"] = g;
    (w[g] =
      w[g] ||
      function () {
        (w[g].q = w[g].q || []).push(arguments);
      }),
      (w[g].ds = 1 * new Date());
    (e = "script"),
      (t = d.createElement(e)),
      (e = d.getElementsByTagName(e)[0]);
    t.async = 1;
    t.src = i;
    e.parentNode.insertBefore(t, e);
  })(window, "https://widgetbe.com/agent", document, "widgetTracker");
  window.widgetTracker("create", "WT-EPKPEPZD");
  window.widgetTracker("send", "pageview");
})();

// AM-409553 xiaowu.ruan 2024.04.11
(function () {
  (function (w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
    var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s),
      dl = l != "dataLayer" ? "&l=" + l : "";
    j.async = true;
    j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
    f.parentNode.insertBefore(j, f);
  })(window, document, "script", "dataLayer", "GTM-WC53LTDG");
  const noscript = document.createElement("noscript");
  noscript.innerHTML = `    
  <iframe
      src="https://www.googletagmanager.com/ns.html?id=GTM-WC53LTDG"
      height="0"
      width="0"
      style="display:none;visibility:hidden"
    ></iframe>`;
  document.body.appendChild(noscript);
})();
