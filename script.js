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

//

// let a = [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 2, 2, 2, 7];

// let b = [];
// a.forEach((arr) => {
//   if (arr !== b[b.length - 1]) {
//     b.push(arr);
//   }
// });

// console.log(b);

//AM-405132 xiaowu.ruan 2024.03.06
/*
(function (w, i, d, g, e, t) {
  w["WidgetTrackerObject"] = g;
  (w[g] =
    w[g] ||
    function () {
      (w[g].q = w[g].q || []).push(arguments);
    }),
    (w[g].ds = 1 * new Date());
  (e = "script"), (t = d.createElement(e)), (e = d.getElementsByTagName(e)[0]);
  t.async = 1;
  t.src = i;
  e.parentNode.insertBefore(t, e);
})(window, "https://widgetbe.com/agent", document, "widgetTracker");
window.widgetTracker("create", "WT-HABWHLKG");
window.widgetTracker("send", "pageview");
*/

const object1 = {
  name: "John",
  lastname: "Doe",
};

console.log(object1);
console.log(object1.name);
console.log(object1["name"]);
const object2 = new Object();
object2.name = "John";
object2.lastname = "Doe";
console.log(object2);

const logoSvg = document.querySelector(".logo-svg");
let rotationAngle = 90;

logoSvg.addEventListener("click", () => {
  console.log("click");
  logoSvg.style.transform = `rotate(${rotationAngle}deg)`;
  rotationAngle += 90;
  rotationAngle %= 360;
});

// AM-410242 xiaowu.ruan 2024.04.16
export default {
  mounted() {
    let col = document.querySelectorAll(
      ".md-vendor .vendor-general-base .col"
    )[0];
    Util.getAsyncDom({
      selector: ".md-vendor .vendor-general-base .col .title",
      all: true,
    }).then((res) => {
      let resSym = [];
      res.forEach((item) => {
        if (item.firstChild.data.match(/[^A-Z]/g)) resSym.push(item);
      });
      if (resSym.length > 0) {
        for (let i = 0; i < resSym.length; i++) {
          let currentElement = resSym[i].nextElementSibling;
          while (!currentElement.classList.contains("title")) {
            col.insertBefore(currentElement, col.firstChild);
            currentElement = currentElement.nextElementSibling;
          }
          col.insertBefore(resSym[i], col.firstChild);
        }
      }
    });
  },
};
// AM-411193 xiaowu.ruan 2024.03.26
(function () {
  function loadScript(a) {
    var b = document.getElementsByTagName("head")[0],
      c = document.createElement("script");
    (c.type = "text/javascript"),
      (c.src = "https://tracker.metricool.com/resources/be.js"),
      (c.onreadystatechange = a),
      (c.onload = a),
      b.appendChild(c);
  }

  loadScript(function () {
    beTracker.t({
      hash: "267b35d0dd1e104d3144c0cc24becbc0",
    });
  });
})();

// AM-411193 xiaowu.ruan 2024.04.16
(function () {
  function loadScript(a) {
    var b = document.getElementsByTagName("head")[0],
      c = document.createElement("script");
    (c.type = "text/javascript"),
      (c.src = "https://tracker.metricool.com/resources/be.js"),
      (c.onreadystatechange = a),
      (c.onload = a),
      b.appendChild(c);
  }
  loadScript(function () {
    beTracker.t({
      hash: "267b35d0dd1e104d3144c0cc24becbc0",
    });
  });
})();

// AM-423221 xiaowu.ruan 2024.04.16
(function () {
  if (window.location.href.indexOf("melissawatson") > 0) {
    const style = document.createElement("style");
    style.textContent = `
        body .md-team-desc.template6 .team-desc-content { width: 1200px; }
        body .md-team-desc.template6 .team-desc-content .description { width: 45%; }
        body .md-team-desc.template6 .team-desc-content .description .view-more-container {
            overflow: visible;
        }
    `;
    document.body.appendChild(style);
  }
})();

// AM-427043 xiaowu.ruan 2024.04.16
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
  window.widgetTracker("create", "WT-LRQLGYPK");
  window.widgetTracker("send", "pageview");
})();

/*
(function() {
gtag('config', 'AW-11064546780');
gtag('event', 'conversion',
{ "vars": { "gtag_id": "AW-10832171189", "config": { "AW-10832171189":
{ "groups": "default" }
} }, "triggers": { } }
"AW-11064546780":
{ "groups": "default" }
"C_DGot3NIvLPA": { "on": "visible", "vars":

{ "event_name": "conversion", "send_to": ["AW-11064546780/BlrECOHQ9qIZENyr_psp"] }
}
{ "on": "visible", "vars":

{ "event_name": "conversion", "send_to": ["AW-11064546780/BlrECOHQ9qIZENyr_psp"] }
}
})();
*/

// AM-423675 xiaowu.ruan 2024.04.17
(function () {
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "https://stats.egumball.com/?key=pjmrsmdxm324fju4u5thz2we";
  document.head.appendChild(script);
});
