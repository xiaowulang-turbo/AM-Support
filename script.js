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

// AM-411483 xiaowu.ruan 2024.04.19
(function () {
  const script = document.createElement("script");
  script.src =
    "https://data.processwebsitedata.com/cscripts/Ak1cpWKVN9-65ea13a5.js";
  document.body.appendChild(script);
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
// export default {
//   mounted() {
//     let col = document.querySelectorAll(
//       ".md-vendor .vendor-general-base .col"
//     )[0];
//     Util.getAsyncDom({
//       selector: ".md-vendor .vendor-general-base .col .title",
//       all: true,
//     }).then((res) => {
//       let resSym = [];
//       res.forEach((item) => {
//         if (item.firstChild.data.match(/[^A-Z]/g)) resSym.push(item);
//       });
//       if (resSym.length > 0) {
//         for (let i = 0; i < resSym.length; i++) {
//           let currentElement = resSym[i].nextElementSibling;
//           while (!currentElement.classList.contains("title")) {
//             col.insertBefore(currentElement, col.firstChild);
//             currentElement = currentElement.nextElementSibling;
//           }
//           col.insertBefore(resSym[i], col.firstChild);
//         }
//       }
//     });
//   },
// };
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

// AM-411483 xiaowu.ruan 2024.04.19
(function () {
  const script = document.createElement("script");
  script.src =
    "https://data.processwebsitedata.com/cscripts/Ak1cpWKVN9-65ea13a5.js";
  document.body.appendChild(script);
})();

// Code below was inserted by the client before, and I made it wrapped to make it work.
(function () {
  window.vs_account_id = "fwABAVysqPQxiQBS";
  window.Util.addScript("https://rw1.calls.net/euinc/number-changer.js");

  siteAxios.interceptors.response.use(function (res) {
    let a = res && res.listings;
    let b = res && res.searchType;

    if (a) {
      if (b == "sold") {
        console.log(a);
      }
    }
    return res;
  });

  var s;

  let time = setInterval(() => {
    s = document.querySelector(".update-time");
    if (s) {
      var s1 = document.querySelectorAll(".info-title");
      var s2 = document.querySelectorAll(".info-data");
      for (i = 0; i < s1.length; i++) {
        if (s1[i].innerHTML == "Sold Date") {
          console.log(s1[i].innerHTML);
          console.log(s2[i].innerHTML);
          s.innerHTML = "SOLD DATE : " + s2[i].innerHTML;
        }
      }
      clearInterval(time);
    }
  }, 1000);
})();

//

/*
<template v-if="subOwnerInfo">
    <p class="md-footer__agent-info lh">
        <span v-if="
            !!subOwnerInfo.firstName ||
            !!subOwnerInfo.lastName
        " class="info-name" :style="useAgentNameStyle"> {{ subOwnerInfo.firstName || '' }} {{ subOwnerInfo.lastName ||
                '' }} </span>
    </p>
    <p class="md-footer__agent-info lh">
        <span v-if="!!subOwnerInfo.phone" class="info-phone mr-20" :style="useAgentPhoneStyle">
            <a :href="'tel:' + subOwnerInfo.phone" target="_top" rel="noopener noreferrer"> {{ $ft.formatPhone(subOwnerInfo.phone) }} </a>
        </span>
        <span v-if="!!subOwnerInfo.email" class="info-email" :style="useAgentEmailStyle">
            <a :href="'mailto:' + subOwnerInfo.email" rel="noopener noreferrer"> {{ subOwnerInfo.email }} </a>
        </span>
    </p>
</template>
<template v-if="getAddressInfo">
    <!--<div class="co-address lh"
        :style="useBroAddrStyle"
        v-html="getAddressInfo"></div>-->
    <!--
    <div class="co-address lh" :style="useBroAddrStyle">
        <p style="font-weight:600;">Orlando FL Office</p>
        <p>20 N. Orange Ave. Suite 1100 Orlando FL 32801</p>
        <p style="font-weight:600;margin-top:10px;">Plantation FL Office</p>
        <p>150 S. Pine Island Rd, Suite 300 Plantation FL 33324</p>
        <p style="font-weight:600;margin-top:10px;">Viera/Melbourne FL Office</p>
        <p>140 Interlachen Rd Suite A, Melbourne, Florida 32940</p>
    </div>
    -->
</template>
<template v-if="footerAgentCustomContent">
  <div 
      class="custom-content"  
      :style="{ color: fontColor }" 
      v-html="formatFontSize(footerAgentCustomContent)"></div>
</template>
*/

// AM-428953 xiaowu.ruan 2024.04.24
(function () {
  if (window.location.href.indexOf("mothersday") > -1) {
    const style = document.createElement("style");
    style.textContent = `
     body .md-form.column .img-container {
      height: 200px;
     }
    `;
    document.head.appendChild(style);
  }
})();

// AM-428758 xiaowu.ruan 2024.04.24
/* <div class="custom-img-box">
<a href="https://www.homelight.com/agents/james-sharp-tx-0491432?preview=t" target="_blank">
  <img class="myImg" src="https://cdn.chime.me/image/fs/sitebuild/2021310/2/original_3a1d8579-cd43-47c4-8da6-3a8b5da3f89e.png" style="cursor:pointer;"/>
</a>
  <img src="https://static.chimeroi.com/servicetool-temp/DallasHomeSearch.jpeg" style="margin-left:20px;width:200px"/>
<!--taoxueyun-AM340311-2023.06.30
<a href="https://www.sellwhenever.com/agents/james-sharp/?utm_source=clear_channel_ooh&utm_medium=billboards&utm_campaign=sellwhenever_df" target="_blank">
  <img src="https://cdn.chime.me/image/fs/sitebuild/2021829/22/original_c4ecba79-6d74-473c-865f-5c8308c54afb.png" style="cursor:pointer;margin-left:20px;width:200px;height:200px;background:#fff;padding:0 10px;object-fit:contain;" />
  </a>
-->
</div> */

// AM-411483 xiaowu.ruan 2024.04.19
(function () {
  const script = document.createElement("script");
  script.src =
    "https://data.processwebsitedata.com/cscripts/Ak1cpWKVN9-65ea13a5.js";
  document.body.appendChild(script);
})();
(function () {
  window.vs_account_id = "fwABAVysqPQxiQBS";
  window.Util.addScript("https://rw1.calls.net/euinc/number-changer.js");
  Util.addScript("https://cdn.userway.org/widget.js");
  let a = document.getElementsByTagName("script");
  for (let i = 0; i < a.length; i++) {
    if (a[i].src == "https://cdn.userway.org/widget.js") {
      a[i].setAttribute("data-account", "C7KubQfK53");
    }
  }
  if (sitePrepareData().pageKey == "listing-detail-sold") {
    var s;
    let time = setInterval(() => {
      s = document.querySelector(".update-time");
      if (s) {
        var s1 = document.querySelectorAll(".info-title");
        var s2 = document.querySelectorAll(".info-data");
        for (i = 0; i < s1.length; i++) {
          if (s1[i].innerHTML == "Sold Date") {
            console.log(s1[i].innerHTML);
            console.log(s2[i].innerHTML);
            s.innerHTML = "SOLD DATE : " + s2[i].innerHTML;
          }
        }
        clearInterval(time);
      }
    }, 1000);
  }

  const subDomain = {
    "andrewdinuccio.todayrealestate.com":
      "https://pixel.adwerx.com/todayrealestate/andrew@todayrealestate.com/awp.js",
    "michelelejeune.todayrealestate.com":
      "https://pixel.adwerx.com/todayrealestate/michele@todayrealestate.com/awp.js",
    "seanamcaleer.todayrealestate.com":
      "https://pixel.adwerx.com/todayrealestate/sena@todayrealestate.com/awp.js",
  };
  let jsUrl = subDomain[window.location.hostname];
  if (jsUrl && sitePageJSON.page == "home") {
    let res = document.createElement("script");
    res.src = jsUrl;
    res.async = "async";
    document.querySelector("head").appendChild(res);
  }

  console.log(jsUrl, 1);
})();

// AM-423908 xiaowu.ruan 2024.04.26
(function () {
  (function (e) {
    if (!window.pintrk) {
      window.pintrk = function () {
        window.pintrk.queue.push(Array.prototype.slice.call(arguments));
      };
      var n = window.pintrk;
      (n.queue = []), (n.version = "3.0");
      var t = document.createElement("script");
      (t.async = !0), (t.src = e);
      var r = document.getElementsByTagName("script")[0];
      r.parentNode.insertBefore(t, r);
    }
  })("https://s.pinimg.com/ct/core.js");
  pintrk("load", "2614161900789", { em: "<user_email_address>" });
  pintrk("page");
})();

// AM-425741 xiaowu.ruan 2024.04.30
// export default {
//   mounted() {
//     Util.getAsyncDom({
//       selector: "body .info.template5 .desc h2",
//       all: false,
//     }).then((res) => {
//       console.log(res);
//     });
//   },
// };

/*
<link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
<script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
function() { 
Calendly.initBadgeWidget(
{ url: 'https://calendly.com/realtor_dinamorales/45min', text: 'Schedule time with me', color: '#0069ff', textColor: '#ffffff', branding: undefined }
)
}
*/

(function () {
  const link = document.createElement("link");
  link.href = "https://assets.calendly.com/assets/external/widget.css";
  link.rel = "stylesheet";
  document.head.appendChild(link);
  const script = document.createElement("script");
  script.src = "https://assets.calendly.com/assets/external/widget.js";
  document.body.appendChild(script);
  const script2 = document.createElement("script");
  script2.innerHTML = `function() { Calendly.initBadgeWidget( { url: 'https://calendly.com/realtor_dinamorales/45min', text: 'Schedule time with me', color: '#0069ff', textColor: '#ffffff', branding: undefined } ) }`;
  document.body.appendChild(script2);
})();

// AM-430141 xiaowu.ruan 2024.04.30
(function () {
  const link = document.createElement("link");
  link.href = "https://assets.calendly.com/assets/external/widget.css";
  link.rel = "stylesheet";
  document.head.appendChild(link);

  const script = document.createElement("script");
  script.src = "https://assets.calendly.com/assets/external/widget.js";
  script.async = true;
  script.onload = function () {
    // 确保脚本加载完成后再初始化Calendly小部件
    const script2 = document.createElement("script");
    script2.innerHTML = `window.onload = function() { Calendly.initBadgeWidget({ url: 'https://calendly.com/realtor_dinamorales/45min', text: 'Schedule time with me', color: '#0069ff', textColor: '#ffffff', branding: undefined }) }`;
    document.body.appendChild(script2);
  };
  document.body.appendChild(script);
})();

// AM-424377 xiaowu.ruan 2024.05.06
(function () {
  var b = function () {
    window.__AudioEyeSiteHash = "4e359a8c01f702a504f4c84c227c0017";
    var a = document.createElement("script");
    a.src = "https://wsmcdn.audioeye.com/aem.js";
    a.type = "text/javascript";
    a.setAttribute("async", "");
    document.getElementsByTagName("body")[0].appendChild(a);
  };
  "complete" !== document.readyState
    ? window.addEventListener
      ? window.addEventListener("load", b)
      : window.attachEvent && window.attachEvent("onload", b)
    : b();
})();

// AM-430259 xiaowu.ruan 2024.05.08

(function () {
  if (window.location.hash.indexOf("homes-for-sale-in") > -1) {
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=AW-16489748952";
    script.async = true;
    document.body.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "AW-16489748952");
    gtag("config", "AW-16489748952/1fpRCP6ilqoZENiz9rY9", {
      phone_conversion_number: "[+1(916) 302-7655|tel:+19163027655]",
    });
    function gtag_report_conversion(url) {
      var callback = function () {
        if (typeof url != "undefined") {
          window.location = url;
        }
      };
      gtag("event", "conversion", {
        send_to: "AW-16489748952/K8zzCPam_6kZENiz9rY9",
        event_callback: callback,
      });
      return false;
    }
  }
})();

// AM-431687 xiaowu.ruan 2024.05.10
// export default {
//   mounted() {
//     Util.getAsyncDom({
//       selector: "body .md-header.template6 .header-container .logo",
//       all: false,
//     }).then((res) => {
//       const element = document.createElement("div");
//       element.innerHTML = `
//       <div class="custom-container" style="width:160px;margin-left:20px;flex-direction: column;
//     display: flex;">
//           <a
//             href="tel:+1(817) 845-5567"
//             class="phone-container"
//             target="_top"
//             rel="noopener noreferrer"
//             style="font-size:12px !important"
//           >
//             <span class="iconfont icon-call-small"></span>
//             <span class="des" style="font-size:12px !important">
//               +1(817) 845-5567
//             </span>
//           </a>
//           <a
//             href="mailto:sharonyeary@gmail.com"
//             class="email-container"
//             rel="noopener noreferrer"
//             style="display:flex"
//           >
//             <span class="iconfont icon-agent-email"></span>
//             <span class="custom-des" style="font-size:12px !important">
//               sharonyeary@gmail.com
//             </span>
//           </a>
//         </div>`;
//       res.appendChild(element);
//     });
//   },
// };
// (element.name = element.name.slice(0, element.name.length - 9))
document
  .querySelector(".page-editor")
  .__vue__.menuData.menus[2].items[1].items.forEach((element) => {
    Object.assign(element, {
      name: element.name.slice(0, element.name.length - 9),
    });
  });
document.querySelector(".page-editor").__vue__.hiddenMenus;
document.querySelector(".page-editor").__vue__.menuData;

// export default {
//   mounted() {
//     Util.getAsyncDom({
//       selector: ".custom-svg",
//       all: false,
//     }).then((res) => {
//       res.addEventListener('click',function(event){
//         window.location.href = "https://aurhomesgroup.com/our-areas/pearland";
//       })
//     });
//   },
// };

export default {
  mounted() {
    Util.getAsyncDom({
      selector: ".house-provided",
      all: true,
    }).then((res) => {
      console.log(1, res);
      Array.from(res).forEach((element) => {
        element.innerText.includes("CLAIRE THACKRAY")
          ? element
          : (element.innerText = "Courtesy of The Bahamas MLS");
      });
    });
  },
};

// export default {
//   mounted() {
//     Util.getAsyncDom({
//       selector: "body .",
//       all: false,
//     }).then((res) => {
//       console.log(1, res);
//     });
//   },
// };

// export default {
//   mounted() {
//     Util.getAsyncDom({
//       selector: "body .step-description span:nth-child(2)",
//       all: true,
//     }).then((res) => {
//       console.log(1, res);
//       console.log(res[1]);
//       console.log(res[1].innerText);
//       if (res.length > 2) {
//         console.log(res[1].childNodes);
//         //res[1].childNodes[1].textContent = test;
//         res = Array.from(res);
//         console.log(res[1]);
//         //res[1].textContent = 123;
//         console.log(res);
//       }
//     });
//   },
// };
