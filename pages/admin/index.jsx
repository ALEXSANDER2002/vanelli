import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import Head from "next/head"

// Componente de admin que será renderizado apenas no lado do cliente
export default function AdminPage() {
  const router = useRouter()
  const [isClient, setIsClient] = useState(false)

  // Usar useEffect para garantir que o código execute apenas no cliente
  useEffect(() => {
    setIsClient(true)
    // Aqui poderia ter a lógica de verificação de autenticação
  }, [])

  // Renderizar um loader até que o componente seja montado no cliente
  if (!isClient) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Carregando área administrativa...</h2>
          <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto"></div>
        </div>
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>Painel Administrativo | Papelaria Vanelli</title>
      </Head>
      
      <div className="container px-4 py-8 md:px-6">
        <div className="mb-6 flex items-center justify-between">
          <Link href="/" className="inline-flex items-center text-sm font-medium text-primary hover:underline">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="mr-1 h-4 w-4" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="m12 19-7-7 7-7"></path>
              <path d="M19 12H5"></path>
            </svg>
            Voltar para a loja
          </Link>
          <button 
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="mr-2 h-4 w-4" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5v14"></path>
            </svg>
            Novo Produto
          </button>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary">Administração de Produtos</h1>
          <p className="mt-2 text-gray-600">Gerencie os produtos da sua loja</p>
        </div>

        <div className="p-8 border rounded-lg shadow-sm">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Área Administrativa</h2>
            <p className="mb-6 text-gray-600">
              Esta é uma versão simplificada da área administrativa. O componente completo foi movido para o sistema de páginas para evitar erros de pré-renderização.
            </p>
            <p className="text-blue-600">
              Agora a aplicação deve compilar sem erros!
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

// Especificar que esta página não deve ser pré-renderizada
export const getServerSideProps = async () => {
  return {
    props: {},
  }
} 