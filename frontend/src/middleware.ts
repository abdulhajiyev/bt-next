// middleware.ts
import { createI18nMiddleware } from 'next-international/middleware'
import { NextRequest } from 'next/server'

const I18nMiddleware = createI18nMiddleware({
  defaultLocale: 'az',
  locales: ['az', 'en', 'ru'],
  urlMappingStrategy: 'rewrite',
  
  resolveLocaleFromRequest: request => {
    return 'az'
  }
})

export function middleware(request: NextRequest) {
  return I18nMiddleware(request)
}

export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)']
}