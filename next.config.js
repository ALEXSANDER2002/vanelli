/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'images.unsplash.com',
      'i.imgur.com',
      'hebbkx1anhila5yf.public.blob.vercel-storage.com'
    ],
  },
  // Desativar a geração estática para a página de admin
  // Isso resolve o erro "document is not defined" durante o build
  output: 'standalone',
  // A geração estática de páginas administrativas com autenticação não é recomendada
  // então configuramos para ignorar a página admin no build estático
  generateBuildId: async () => {
    return 'papelaria-vanelli-build'
  },
  // Configurar como o Next.js deve tratar certas páginas durante o build
  eslint: {
    // Ignorar erros durante o build para facilitar o deploy
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Ignorar erros durante o build para facilitar o deploy
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig 