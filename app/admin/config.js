// Configuração para forçar a renderização dinâmica desta página
// Isso resolve o erro de "document is not defined" durante o build

// Forçar que esta página e todas as suas rotas filhas sejam sempre renderizadas dinamicamente
export const dynamic = 'force-dynamic'

// Impedir que o Next.js faça cache da página
export const revalidate = 0

// Permitir parâmetros dinâmicos nas rotas
export const dynamicParams = true

// Export para que seja reconhecido pelo Next.js
export const config = {
  runtime: 'nodejs',
} 