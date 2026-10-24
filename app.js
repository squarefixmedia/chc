window.__DCS={"Nav.dc.html":{"tpl":"\n\u003cheader style=\"font-family: 'Satoshi', 'Poppins', system-ui, sans-serif; font-weight: 500; color: #0D1410; background: rgba(255,255,255,.96); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); position: sticky; top: 0; z-index: 50; letter-spacing: -0.02em; border-bottom: 1px solid #EEF2ED\">\n\u003cdiv style=\"background: #4E2F78; color: #FFFFFF; font-size: 14px\">\n\u003cdiv style=\"max-width: 1200px; margin: 0 auto; padding: 8px 25px; box-sizing: border-box; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 4px 20px\">\n\u003cspan class=\"bar1\" style=\"color: #E9E1F5\">Bethesda Hospital Society · A unit of Emmanuel Hospital Association, New Delhi\u003c/span>\n\u003cspan style=\"display: flex; flex-wrap: wrap; align-items: center; gap: 4px 18px\">\n\u003cspan class=\"optxt\" style=\"display: inline-flex; align-items: center; gap: 8px; color: #E9E1F5\">\u003cspan style=\"{{opdDot}}\">\u003c/span>{{opdText}}\u003c/span>\n\u003ca href=\"tel:07682244311\" style=\"color: #FFFFFF; text-decoration: none; display: inline-flex; align-items: center; gap: 8px\">\u003cspan style=\"width: 7px; height: 7px; border-radius: 50%; background: #FF8A80\">\u003c/span>24-hour Emergency: 07682-244311\u003c/a>\n\u003ca class=\"lang\" href=\"{{langHref}}\" lang=\"{{langCode}}\">{{langLabel}}\u003c/a>\n\u003c/span>\n\u003c/div>\n\u003c/div>\n\u003cdiv class=\"hrow\" style=\"max-width: 1200px; margin: 0 auto; padding: 14px 25px; box-sizing: border-box; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 12px 16px\">\n\u003ca href=\"index.html\" style=\"display: flex; align-items: center; gap: 12px; text-decoration: none; color: #0D1410\">\n\u003cimg src=\"assets/logo-cch.webp\" alt=\"Christian Hospital Chhatarpur logo\" style=\"width: 34px; height: 42px; border-radius: 6px; object-fit: cover\">\n\u003cspan style=\"display: flex; flex-direction: column; gap: 3px; line-height: 1.1\">\u003cspan class=\"bname\" style=\"font-size: 18px; letter-spacing: -0.03em\">Christian Hospital Chhatarpur\u003c/span>\u003cspan class=\"bsub\" style=\"font-size: 13px; color: #5E5E5E\">Whole person care · since 1930\u003c/span>\u003c/span>\n\u003c/a>\n\u003cnav class=\"navlinks\" aria-label=\"Main\" style=\"display: flex; flex-wrap: wrap; align-items: center; font-size: 16px\">\n\u003ca class=\"nl\" href=\"about.html\" aria-current=\"{{a.about}}\">About\u003c/a>\n\u003ca class=\"nl\" href=\"services.html\" aria-current=\"{{a.services}}\">Services\u003c/a>\n\u003cdiv data-dd=\"\" style=\"position: relative\">\n\u003cbutton type=\"button\" class=\"{{cls.patients}}\" aria-expanded=\"{{exp.patients}}\" onClick=\"{{tog.patients}}\">Patients \u003csvg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" aria-hidden=\"true\">\u003cpath d=\"M6 9l6 6 6-6\">\u003c/path>\u003c/svg>\u003c/button>\n\u003csc-if value=\"{{is.patients}}\" hint-placeholder-val=\"{{ false }}\">\n\u003cdiv class=\"dd\" style=\"position: absolute; top: 100%; left: 0; margin-top: 10px; background: #FFFFFF; border-radius: 20px; box-shadow: 0 1px 18px rgba(0,0,0,.05), 0 24px 48px rgba(13,20,16,.10); padding: 8px; min-width: 280px; display: flex; flex-direction: column; z-index: 30\">\n\u003ca href=\"doctors.html\" style=\"padding: 14px 16px; border-radius: 14px; text-decoration: none; color: #0D1410; display: flex; flex-direction: column; gap: 3px\">\u003cspan style=\"font-size: 16px\">Doctors & OPD schedule\u003c/span>\u003cspan style=\"font-size: 14px; color: #5E5E5E\">Find a doctor by department\u003c/span>\u003c/a>\u003ca href=\"patients.html\" style=\"padding: 14px 16px; border-radius: 14px; text-decoration: none; color: #0D1410; display: flex; flex-direction: column; gap: 3px\">\u003cspan style=\"font-size: 16px\">Patient & visitor guide\u003c/span>\u003cspan style=\"font-size: 14px; color: #5E5E5E\">Timings, costs, what to bring\u003c/span>\u003c/a>\u003ca href=\"news.html\" style=\"padding: 14px 16px; border-radius: 14px; text-decoration: none; color: #0D1410; display: flex; flex-direction: column; gap: 3px\">\u003cspan style=\"font-size: 16px\">News & notices\u003c/span>\u003cspan style=\"font-size: 14px; color: #5E5E5E\">Camps, admissions, OPD closures\u003c/span>\u003c/a>\n\u003c/div>\n\u003c/sc-if>\n\u003c/div>\u003cdiv data-dd=\"\" style=\"position: relative\">\n\u003cbutton type=\"button\" class=\"{{cls.nursing}}\" aria-expanded=\"{{exp.nursing}}\" onClick=\"{{tog.nursing}}\">Nursing \u003csvg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" aria-hidden=\"true\">\u003cpath d=\"M6 9l6 6 6-6\">\u003c/path>\u003c/svg>\u003c/button>\n\u003csc-if value=\"{{is.nursing}}\" hint-placeholder-val=\"{{ false }}\">\n\u003cdiv class=\"dd\" style=\"position: absolute; top: 100%; left: 0; margin-top: 10px; background: #FFFFFF; border-radius: 20px; box-shadow: 0 1px 18px rgba(0,0,0,.05), 0 24px 48px rgba(13,20,16,.10); padding: 8px; min-width: 280px; display: flex; flex-direction: column; z-index: 30\">\n\u003ca href=\"nursing-services.html\" style=\"padding: 14px 16px; border-radius: 14px; text-decoration: none; color: #0D1410; display: flex; flex-direction: column; gap: 3px\">\u003cspan style=\"font-size: 16px\">Nursing Services\u003c/span>\u003cspan style=\"font-size: 14px; color: #5E5E5E\">75 nurses across every ward\u003c/span>\u003c/a>\u003ca href=\"school-of-nursing.html\" style=\"padding: 14px 16px; border-radius: 14px; text-decoration: none; color: #0D1410; display: flex; flex-direction: column; gap: 3px\">\u003cspan style=\"font-size: 16px\">School of Nursing\u003c/span>\u003cspan style=\"font-size: 14px; color: #5E5E5E\">GNM programme · admissions\u003c/span>\u003c/a>\n\u003c/div>\n\u003c/sc-if>\n\u003c/div>\u003cdiv data-dd=\"\" style=\"position: relative\">\n\u003cbutton type=\"button\" class=\"{{cls.more}}\" aria-expanded=\"{{exp.more}}\" onClick=\"{{tog.more}}\">More \u003csvg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" aria-hidden=\"true\">\u003cpath d=\"M6 9l6 6 6-6\">\u003c/path>\u003c/svg>\u003c/button>\n\u003csc-if value=\"{{is.more}}\" hint-placeholder-val=\"{{ false }}\">\n\u003cdiv class=\"dd\" style=\"position: absolute; top: 100%; left: 0; margin-top: 10px; background: #FFFFFF; border-radius: 20px; box-shadow: 0 1px 18px rgba(0,0,0,.05), 0 24px 48px rgba(13,20,16,.10); padding: 8px; min-width: 280px; display: flex; flex-direction: column; z-index: 30\">\n\u003ca href=\"community.html\" style=\"padding: 14px 16px; border-radius: 14px; text-decoration: none; color: #0D1410; display: flex; flex-direction: column; gap: 3px\">\u003cspan style=\"font-size: 16px\">Community health\u003c/span>\u003cspan style=\"font-size: 14px; color: #5E5E5E\">Outreach and development\u003c/span>\u003c/a>\u003ca href=\"research.html\" style=\"padding: 14px 16px; border-radius: 14px; text-decoration: none; color: #0D1410; display: flex; flex-direction: column; gap: 3px\">\u003cspan style=\"font-size: 16px\">Research\u003c/span>\u003cspan style=\"font-size: 14px; color: #5E5E5E\">Studies and partnerships\u003c/span>\u003c/a>\u003ca href=\"get-involved.html\" style=\"padding: 14px 16px; border-radius: 14px; text-decoration: none; color: #0D1410; display: flex; flex-direction: column; gap: 3px\">\u003cspan style=\"font-size: 16px\">Donate & volunteer\u003c/span>\u003cspan style=\"font-size: 14px; color: #5E5E5E\">Support our work\u003c/span>\u003c/a>\u003ca href=\"careers.html\" style=\"padding: 14px 16px; border-radius: 14px; text-decoration: none; color: #0D1410; display: flex; flex-direction: column; gap: 3px\">\u003cspan style=\"font-size: 16px\">Careers\u003c/span>\u003cspan style=\"font-size: 14px; color: #5E5E5E\">Work with us\u003c/span>\u003c/a>\n\u003c/div>\n\u003c/sc-if>\n\u003c/div>\n\u003ca class=\"nl\" href=\"contact.html\" aria-current=\"{{a.contact}}\">Contact\u003c/a>\n\u003c/nav>\n\u003ca class=\"cta\" href=\"patients.html\" style=\"display: inline-flex; align-items: center; min-height: 44px; padding: 10px 22px; box-sizing: border-box; border-radius: 80px; background: #1D7A3E; color: #FFFFFF; text-decoration: none; font-size: 16px\">Plan your visit\u003c/a>\n\u003cbutton type=\"button\" class=\"mbtn\" aria-expanded=\"{{menuStr}}\" onClick=\"{{toggleMenu}}\" style=\"flex: 0 0 auto; align-items: center; gap: 8px; min-height: 44px; padding: 10px 18px; border-radius: 80px; border: 0; background: #F3F8F2; color: #0D1410; font: inherit; font-size: 16px; cursor: pointer\">{{menuLabel}}\u003c/button>\n\u003c/div>\n\u003csc-if value=\"{{menu}}\" hint-placeholder-val=\"{{ false }}\">\n\u003cdiv class=\"mp\" style=\"padding: 0 25px 24px; max-height: 70vh; overflow-y: auto\">\n\u003ca href=\"about.html\">About\u003c/a>\u003ca href=\"services.html\">Services\u003c/a>\u003ca href=\"doctors.html\">Doctors & OPD schedule\u003c/a>\u003ca href=\"patients.html\">Patient & visitor guide\u003c/a>\u003ca href=\"nursing-services.html\">Nursing Services\u003c/a>\u003ca href=\"school-of-nursing.html\">School of Nursing\u003c/a>\u003ca href=\"community.html\">Community\u003c/a>\u003ca href=\"research.html\">Research\u003c/a>\u003ca href=\"news.html\">News & notices\u003c/a>\u003ca href=\"get-involved.html\">Donate & volunteer\u003c/a>\u003ca href=\"careers.html\">Careers\u003c/a>\u003ca href=\"contact.html\">Contact\u003c/a>\u003ca href=\"hi.html\">हिंदी में देखें\u003c/a>\n\u003ca href=\"patients.html\" style=\"margin-top: 16px; border: 0; background: #1D7A3E; color: #FFFFFF; border-radius: 80px; text-align: center; font-size: 16px\">Plan your visit\u003c/a>\n\u003c/div>\n\u003c/sc-if>\n\u003c/header>\n\u003csc-if value=\"{{hasWa}}\" hint-placeholder-val=\"{{ false }}\">\n\u003ca href=\"{{waHref}}\" aria-label=\"Chat with the hospital on WhatsApp\" style=\"position: fixed; right: 20px; bottom: 20px; z-index: 60; display: inline-flex; align-items: center; gap: 10px; min-height: 52px; padding: 0 20px; border-radius: 80px; background: #1FA855; color: #FFFFFF; text-decoration: none; font-family: 'Satoshi', system-ui, sans-serif; font-size: 16px; box-shadow: 0 12px 30px rgba(13,20,16,.2)\">\u003csvg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\">\u003cpath d=\"M3 21l1.7-5A8.5 8.5 0 1 1 8 19.3z\">\u003c/path>\u003cpath d=\"M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-1 .8a4 4 0 0 1-2.3-2.3l.8-1-1-2z\">\u003c/path>\u003c/svg>WhatsApp\u003c/a>\n\u003c/sc-if>\n","script":"\nclass Component extends DCLogic {\n  constructor(props) { super(props); this.state = { open: null, menu: false }; }\n  componentDidMount() {\n    this._t = setInterval(() => this.forceUpdate(), 60000);\n    this._c = (e) => { if (this.state.open && !(e.target.closest && e.target.closest('[data-dd]'))) this.setState({ open: null }); };\n    document.addEventListener('click', this._c);\n  }\n  componentWillUnmount() { clearInterval(this._t); document.removeEventListener('click', this._c); }\n  opd() {\n    // OPD closed on Sundays and on these holidays (emergency stays open). Edit as the hospital announces closures.\n    // 'MM-DD' repeats every year; 'YYYY-MM-DD' is a one-off date.\n    const HOLIDAYS = ['01-26', '08-15', '10-02', '12-25'];\n    const now = new Date();\n    const ist = new Date(now.getTime() + (330 + now.getTimezoneOffset()) * 60000);\n    const p2 = (n) => String(n).padStart(2, '0');\n    const md = (dt) => p2(dt.getMonth() + 1) + '-' + p2(dt.getDate());\n    const isHol = (dt) => HOLIDAYS.includes(md(dt)) || HOLIDAYS.includes(dt.getFullYear() + '-' + md(dt));\n    const hours = (dt) => (dt.getDay() === 0 || isHol(dt)) ? null : (dt.getDay() === 6 ? [8, 11.5, '11:30 am'] : [8, 14.5, '2:30 pm']);\n    const h = ist.getHours() + ist.getMinutes() / 60;\n    const today = hours(ist);\n    if (today && h >= today[0] && h \u003c today[1]) return { open: true, t: 'OPD open now', s: 'Until ' + today[2] + ' today', nav: 'OPD open now · until ' + today[2], line: 'OPD open now · Emergency open 24 hours' };\n    if (today && h \u003c today[0]) return { open: false, t: 'OPD opens at 8:00 am', s: 'Emergency is open now', nav: 'OPD opens today at 8:00 am', line: 'OPD opens at 8:00 am · Emergency open 24 hours' };\n    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];\n    let next = 'soon';\n    for (let i = 1; i \u003c 14; i++) { const dt = new Date(ist.getTime() + i * 86400000); if (hours(dt)) { next = i === 1 ? 'tomorrow' : days[dt.getDay()]; break; } }\n    const hol = isHol(ist);\n    return {\n      open: false,\n      t: hol ? 'OPD closed today · holiday' : 'OPD opens ' + next,\n      s: hol ? 'Opens ' + next + ' · Emergency open' : 'Emergency is open now',\n      nav: (hol ? 'OPD closed today (holiday) · opens ' : 'OPD opens ') + next + ' at 8:00 am',\n      line: (hol ? 'OPD closed today (holiday) · opens ' : 'OPD opens ') + next + ' 8:00 am · Emergency open 24 hours'\n    };\n  }\n\n  renderVals() {\n    // WhatsApp: put the hospital's WhatsApp number here (country code, no + or spaces, e.g. '91XXXXXXXXXX') to show the button on every page.\n    const WHATSAPP = '';\n    const cur = this.props.current ?? 'home';\n    const open = this.state.open;\n    const o = this.opd();\n    const a = {};\n    ['about', 'services', 'contact'].forEach((k) => { a[k] = cur === k ? 'page' : 'false'; });\n    const cls = {}, exp = {}, tog = {}, is = {};\n    ['patients', 'nursing', 'more'].forEach((k) => {\n      cls[k] = 'nl' + (cur === k || open === k ? ' on' : '');\n      exp[k] = open === k ? 'true' : 'false';\n      is[k] = open === k;\n      tog[k] = () => this.setState({ open: open === k ? null : k });\n    });\n    const hi = cur === 'hindi';\n    return {\n      a, cls, exp, tog, is,\n      opdText: o.nav,\n      opdDot: 'width:7px;height:7px;border-radius:50%;background:' + (o.open ? '#7BE08A' : '#F2C94C'),\n      langHref: hi ? 'index.html' : 'hi.html',\n      langLabel: hi ? 'English' : 'हिंदी',\n      langCode: hi ? 'en' : 'hi',\n      hasWa: !!WHATSAPP,\n      waHref: 'https://wa.me/' + WHATSAPP,\n      menu: this.state.menu,\n      menuStr: this.state.menu ? 'true' : 'false',\n      menuLabel: this.state.menu ? 'Close' : 'Menu',\n      toggleMenu: () => this.setState({ menu: !this.state.menu })\n    };\n  }\n}\n","props":{"current":{"editor":"enum","options":["home","about","services","patients","nursing","more","contact","hindi"],"default":"home"},"$preview":{"width":1440,"height":112}}},"Footer.dc.html":{"tpl":"\n\u003cfooter style=\"font-family: 'Satoshi', 'Poppins', system-ui, sans-serif; font-weight: 500; color: #0D1410; background: #FFFFFF; letter-spacing: -0.02em; border-top: 1px solid #EEF2ED\">\n\u003cdiv style=\"max-width: 1200px; margin: 0 auto; padding: 72px 25px 32px; box-sizing: border-box; display: flex; flex-direction: column; gap: 56px\">\n\u003cdiv style=\"display: flex; flex-wrap: wrap; justify-content: space-between; gap: 48px 56px\">\n\u003cdiv style=\"flex: 1 1 280px; max-width: 330px; display: flex; flex-direction: column; gap: 20px\">\n\u003ca href=\"index.html\" style=\"display: flex; align-items: center; gap: 12px; text-decoration: none; color: #0D1410\">\n\u003cimg src=\"assets/logo-cch.webp\" alt=\"Christian Hospital Chhatarpur logo\" style=\"width: 34px; height: 42px; border-radius: 6px; object-fit: cover\">\n\u003cspan style=\"font-size: 18px; letter-spacing: -0.03em\">Christian Hospital Chhatarpur\u003c/span>\n\u003c/a>\n\u003cp style=\"margin: 0; font-size: 17px; line-height: 1.55; color: #5E5E5E\">Whole person care, training and development since 1930. A unit of Emmanuel Hospital Association, New Delhi.\u003c/p>\n\u003ca href=\"tel:07682244311\" style=\"align-self: flex-start; display: inline-flex; align-items: center; gap: 10px; min-height: 44px; padding: 10px 22px; box-sizing: border-box; border-radius: 80px; background: #B71C1C; color: #FFFFFF; text-decoration: none; font-size: 16px\">\u003cspan style=\"width: 7px; height: 7px; border-radius: 50%; background: #FFD2D2\">\u003c/span>Emergency 07682-244311\u003c/a>\n\u003c/div>\n\u003cdiv style=\"flex: 2 1 660px; display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 28px; font-size: 16px; line-height: 1.5\">\n\u003cdiv style=\"display: flex; flex-direction: column; gap: 14px\">\u003cspan class=\"ft\">Patients\u003c/span>\u003ca class=\"fl\" href=\"doctors.html\">Doctors &amp; OPD\u003c/a>\u003ca class=\"fl\" href=\"patients.html\">Patient &amp; visitor guide\u003c/a>\u003ca class=\"fl\" href=\"services.html\">Services\u003c/a>\u003ca class=\"fl\" href=\"news.html\">News &amp; notices\u003c/a>\u003c/div>\n\u003cdiv style=\"display: flex; flex-direction: column; gap: 14px\">\u003cspan class=\"ft\">Hospital\u003c/span>\u003ca class=\"fl\" href=\"about.html\">About us\u003c/a>\u003ca class=\"fl\" href=\"nursing-services.html\">Nursing Services\u003c/a>\u003ca class=\"fl\" href=\"school-of-nursing.html\">School of Nursing\u003c/a>\u003ca class=\"fl\" href=\"community.html\">Community\u003c/a>\u003ca class=\"fl\" href=\"research.html\">Research\u003c/a>\u003c/div>\n\u003cdiv style=\"display: flex; flex-direction: column; gap: 14px\">\u003cspan class=\"ft\">Get involved\u003c/span>\u003ca class=\"fl\" href=\"get-involved.html\">Donate\u003c/a>\u003ca class=\"fl\" href=\"get-involved.html#volunteer\">Volunteer\u003c/a>\u003ca class=\"fl\" href=\"careers.html\">Careers\u003c/a>\u003ca class=\"fl\" href=\"contact.html\">Contact\u003c/a>\u003c/div>\n\u003cdiv style=\"display: flex; flex-direction: column; gap: 14px\">\u003cspan class=\"ft\">Visit\u003c/span>\u003cspan style=\"color: #5E5E5E\">Mahoba Road, Dist: Chhatarpur, Madhya Pradesh 471 001\u003c/span>\u003cspan style=\"color: #5E5E5E\">OPD Mon–Fri 8:00–2:30\u003cbr>Sat 8:00–11:30\u003c/span>\u003ca class=\"fl\" href=\"https://www.google.com/maps/search/?api=1&amp;query=Christian%20Hospital%20Chhatarpur%20Mahoba%20Road%20Chhatarpur%20Madhya%20Pradesh%20471001\" style=\"color: #1D7A3E\">Get directions ↗\u003c/a>\u003c/div>\n\u003c/div>\n\u003c/div>\n\u003cdiv style=\"border-top: 1px solid #E6EBE5; padding-top: 24px; display: flex; flex-wrap: wrap; justify-content: space-between; gap: 12px 24px; font-size: 14px; color: #5E5E5E\">\u003cspan>© 2026 Christian Hospital Chhatarpur · Bethesda Hospital Society\u003c/span>\u003cspan style=\"display: flex; flex-wrap: wrap; gap: 8px 20px\">\u003ca class=\"fl\" href=\"privacy.html\">Privacy policy\u003c/a>\u003ca class=\"fl\" href=\"patient-rights.html\">Patient rights &amp; grievances\u003c/a>\u003ca class=\"fl\" href=\"mailto:chhatarpur@eha-health.org\">chhatarpur@eha-health.org\u003c/a>\u003ca class=\"fl\" href=\"hi.html\" lang=\"hi\">हिंदी\u003c/a>\u003ca class=\"fl\" href=\"https://www.ehahealth.org/\">EHA ↗\u003c/a>\u003c/span>\u003c/div>\n\u003c/div>\n\u003c/footer>\n","script":"\nclass Component extends DCLogic {\n  renderVals() { return {}; }\n}\n","props":{"$preview":{"width":1440,"height":460}}}};
/* Tiny runtime for the CCH site: renders the page templates, wires events, keeps state. */
(function () {
  var SVG = 'http://www.w3.org/2000/svg';
  var D = window.__DC;
  if (window.__DCS) for (var sk in window.__DCS) D.files[sk] = window.__DCS[sk];
  var instances = {};
  var handlers = {};
  var hid = 0;
  var app = null;
  var queued = false;

  function DCLogic(props) { this.props = props || {}; this.state = {}; }
  DCLogic.prototype.setState = function (s) { for (var k in s) this.state[k] = s[k]; schedule(); };
  DCLogic.prototype.forceUpdate = function () { schedule(); };
  window.DCLogic = DCLogic;

  var classes = {};
  function cls(name) {
    if (!classes[name]) classes[name] = new Function('DCLogic', D.files[name].script + '\n;return Component;')(DCLogic);
    return classes[name];
  }
  function defaults(name) {
    var p = {}, dp = D.files[name].props || {};
    for (var k in dp) if (k.charAt(0) !== '$' && dp[k] && 'default' in dp[k]) p[k] = dp[k]['default'];
    return p;
  }
  function inst(key, name, attrs) {
    var c = instances[key];
    var props = defaults(name);
    for (var a in attrs) props[a] = attrs[a];
    if (!c) {
      var C = cls(name);
      c = new C(props);
      c.props = props;
      if (!c.state) c.state = {};
      instances[key] = c;
    } else c.props = props;
    return c;
  }
  function get(scope, p) {
    p = p.trim();
    if (p === 'true') return true;
    if (p === 'false') return false;
    var parts = p.split('.'), o = scope;
    for (var i = 0; i < parts.length; i++) { if (o == null) return undefined; o = o[parts[i]]; }
    return o;
  }
  var HOLE = /\{\{\s*([^}]+?)\s*\}\}/g;
  function fill(s, scope) {
    return s.replace(HOLE, function (_, p) { var v = get(scope, p); return v == null || typeof v === 'function' ? '' : String(v); });
  }
  var tplCache = {};
  function tpl(name) {
    if (!tplCache[name]) { var t = document.createElement('template'); t.innerHTML = D.files[name].tpl; tplCache[name] = t.content; }
    return tplCache[name];
  }

  function render(node, scope, out, key) {
    var kids = node.childNodes, n = 0;
    for (var i = 0; i < kids.length; i++) {
      var c = kids[i];
      if (c.nodeType === 3) { out.appendChild(document.createTextNode(fill(c.textContent, scope))); continue; }
      if (c.nodeType !== 1) continue;
      var tag = c.localName;
      if (tag === 'helmet') continue;
      if (tag === 'sc-for') {
        var m = c.getAttribute('list').match(/\{\{\s*(.+?)\s*\}\}/);
        var list = (m && get(scope, m[1])) || [];
        var as = c.getAttribute('as');
        for (var j = 0; j < list.length; j++) {
          var s2 = Object.create(scope); s2[as] = list[j]; s2.$index = j;
          render(c, s2, out, key + '/f' + i + '.' + j);
        }
        continue;
      }
      if (tag === 'sc-if') {
        var m2 = c.getAttribute('value').match(/\{\{\s*(.+?)\s*\}\}/);
        if (m2 && get(scope, m2[1])) render(c, scope, out, key + '/i' + i);
        continue;
      }
      if (tag === 'dc-import') {
        var nm = c.getAttribute('name') + '.dc.html', attrs = {};
        for (var a = 0; a < c.attributes.length; a++) {
          var at = c.attributes[a];
          if (at.name === 'name' || at.name.indexOf('hint-') === 0) continue;
          attrs[at.name.replace(/-([a-z])/g, function (_, x) { return x.toUpperCase(); })] = fill(at.value, scope);
        }
        var k2 = key + '/' + nm + '#' + (n++);
        var ci = inst(k2, nm, attrs);
        render(tpl(nm), ci.renderVals(), out, k2);
        continue;
      }
      var inSvg = tag === 'svg' || out.namespaceURI === SVG;
      var el = inSvg ? document.createElementNS(SVG, c.localName) : document.createElement(tag);
      for (var b = 0; b < c.attributes.length; b++) {
        var att = c.attributes[b];
        var ev = att.name.match(/^on([a-z]+)$/i);
        if (ev) {
          var mm = att.value.match(/^\{\{\s*(.+?)\s*\}\}$/);
          var fn = mm && get(scope, mm[1]);
          if (typeof fn === 'function') { var id = 'h' + (hid++); handlers[id] = fn; el.setAttribute('data-on-' + ev[1].toLowerCase(), id); }
          continue;
        }
        el.setAttribute(att.name, fill(att.value, scope));
      }
      render(c.content || c, scope, el, key);
      out.appendChild(el);
    }
  }

  function build() {
    handlers = {}; hid = 0;
    var root = inst('root', D.entry, {});
    var box = document.createElement('div');
    render(tpl(D.entry), root.renderVals(), box, 'root');
    return box;
  }

  var KEEP = { 'data-a': 1, 'data-in': 1 };
  function morph(a, b) {
    var ak = a.childNodes, bk = b.childNodes, i;
    for (i = 0; i < bk.length; i++) {
      var x = ak[i], y = bk[i];
      if (!x) { a.appendChild(y.cloneNode(true)); continue; }
      if (x.nodeType !== y.nodeType || (x.nodeType === 1 && x.localName !== y.localName)) { a.replaceChild(y.cloneNode(true), x); continue; }
      if (x.nodeType === 3) { if (x.textContent !== y.textContent) x.textContent = y.textContent; continue; }
      if (x.nodeType !== 1) continue;
      var j, at;
      for (j = x.attributes.length - 1; j >= 0; j--) {
        at = x.attributes[j].name;
        if (KEEP[at] || (at === 'open' && x.localName === 'details') || (at === 'style' && x.hasAttribute('data-a'))) continue;
        if (!y.hasAttribute(at)) x.removeAttribute(at);
      }
      for (j = 0; j < y.attributes.length; j++) {
        at = y.attributes[j];
        if (at.name === 'style' && x.hasAttribute('data-a')) continue;
        if (x.getAttribute(at.name) !== at.value) x.setAttribute(at.name, at.value);
      }
      morph(x, y);
    }
    while (ak.length > bk.length) a.removeChild(a.lastChild);
  }

  function schedule() {
    if (queued || !app) return;
    queued = true;
    requestAnimationFrame(function () { queued = false; morph(app, build()); });
  }

  ['click', 'change', 'input', 'submit'].forEach(function (type) {
    document.addEventListener(type, function (e) {
      var t = e.target && e.target.closest ? e.target.closest('[data-on-' + type + ']') : null;
      if (!t) return;
      var fn = handlers[t.getAttribute('data-on-' + type)];
      if (fn) { if (type === 'submit') e.preventDefault(); fn(e); }
    });
  });

  window.__DC_prerender = function () { return build().innerHTML; };
  window.__DC_start = function () {
    app = document.getElementById('app');
    morph(app, build());
    for (var k in instances) { var c = instances[k]; if (c.componentDidMount) { try { c.componentDidMount(); } catch (e) {} } }
  };
  if (!window.__DC_NO_AUTOSTART) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', window.__DC_start);
    else window.__DC_start();
  }
})();
