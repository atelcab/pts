const SUPABASE_URL = 'https://zmaycwdmzvzkurexeytq.supabase.co';
const SUPABASE_KEY = 'sb_publishable_Xsa4Gz-w4eLf3TKy3wtPkA_HJT5PJSg';

// App ATELCAB (instalar no telemóvel)
(function () {
  const add = (tag, attrs) => { const el = document.createElement(tag); for (const k in attrs) el.setAttribute(k, attrs[k]); document.head.appendChild(el); };
  add('link', { rel: 'manifest', href: 'manifest.webmanifest' });
  add('link', { rel: 'apple-touch-icon', href: 'apple-touch-icon.png' });
  add('meta', { name: 'apple-mobile-web-app-capable', content: 'yes' });
  add('meta', { name: 'mobile-web-app-capable', content: 'yes' });
  add('meta', { name: 'apple-mobile-web-app-title', content: 'ATELCAB' });
  add('meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' });
  if ('serviceWorker' in navigator) addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
})();
