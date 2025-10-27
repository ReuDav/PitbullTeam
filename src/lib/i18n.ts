import {
  register,
  init,
  getLocaleFromNavigator,
  waitLocale,
  locale as $locale
} from 'svelte-i18n';

register('hu', () => import('./locales/hu.json'));
register('en', () => import('./locales/en.json'));

const STORAGE_KEY = 'user-locale';

export async function setupI18n() {
  console.log('[i18n] setupI18n() called');

  if (typeof window === 'undefined') {
    console.log('[i18n] Not running in browser, skipping init');
    return;
  }

  console.log('[i18n] Environment is browser');

  // Try to load from localStorage
  let savedLocale = localStorage.getItem(STORAGE_KEY);
  console.log('[i18n] localStorage.getItem:', savedLocale);

  if (!savedLocale) {
    const navigatorLocale = getLocaleFromNavigator();
    console.log('[i18n] getLocaleFromNavigator():', navigatorLocale);

    // Only accept 'en' or 'hu', default to 'hu'
    savedLocale = ['en', 'hu'].includes(navigatorLocale) ? navigatorLocale : 'hu';
  }

  console.log('[i18n] Initial locale resolved to:', savedLocale);

  init({
    fallbackLocale: 'hu',
    initialLocale: savedLocale,
  });

  console.log('[i18n] i18n initialized');

  // Persist on change
  $locale.subscribe((value) => {
    console.log('[i18n] Locale changed to:', value);
    if (value) {
      localStorage.setItem(STORAGE_KEY, value);
      console.log('[i18n] Locale saved to localStorage:', value);
    }
  });

  console.log('[i18n] Waiting for locale to load...');
  await waitLocale();
  console.log('[i18n] Locale loaded');
}
