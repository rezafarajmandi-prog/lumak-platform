// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // زبان پیش‌فرض را از کوکی بخوانید، اگر نبود از 'en' استفاده کنید
  const locale = request.cookies.get('NEXT_LOCALE')?.value || 'en';

  const response = NextResponse.next();

  // کوکی را تمدید کنید (مهم برای SSR بعدی)
  response.cookies.set('NEXT_LOCALE', locale, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365, // 1 سال
  });

  return response;
}

// (اختیاری) middleware را فقط برای مسیرهای خاص فعال کنید:
export const config = {
  matcher: ['/((?!_next|api|favicon.ico).*)'],
};