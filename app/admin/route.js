// Este arquivo impede a pré-renderização estática da rota /admin
// durante o processo de build do Next.js

import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'
export const dynamicParams = true
export const revalidate = 0

// Redireciona para a página de administração
export async function GET() {
  return NextResponse.redirect(new URL('/admin', process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'))
} 