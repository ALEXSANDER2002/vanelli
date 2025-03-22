// Este arquivo evita que a página admin cause erro durante o build estático

export default function AdminNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Página Administrativa</h1>
      <p className="text-center mb-6">
        Esta página está disponível apenas no modo dinâmico.
      </p>
    </div>
  )
} 