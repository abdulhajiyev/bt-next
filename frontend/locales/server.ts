// locales/server.ts
import { createI18nServer } from 'next-international/server'

export const { getI18n, getScopedI18n, getStaticParams } = createI18nServer({
  az: () => import('./az'),
  ru: () => import('./ru'),
  en: () => import('./en')
})