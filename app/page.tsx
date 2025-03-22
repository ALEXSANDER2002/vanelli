import Image from "next/image"
import Link from "next/link"
import { ShoppingBag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ProductCarousel } from "@/components/product-carousel"
import { CategoryGrid } from "@/components/category-grid"
import { FeaturedProducts } from "@/components/featured-products"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Conteúdo principal */}
      <main className="flex-1">
        {/* Hero Banner */}
        <section className="relative">
          <div className="relative h-[500px] w-full overflow-hidden bg-gradient-to-r from-teal-50 to-teal-100">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/30 via-transparent to-teal-500/10"></div>
            </div>
            <div className="relative z-10 flex h-full items-center">
              <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                  <div className="flex flex-col justify-center space-y-4 fade-in">
                    <div className="space-y-2">
                      <h1 className="text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl">
                        Papelaria Vanelli
                      </h1>
                      <p className="max-w-[600px] text-teal-700 md:text-xl">
                        Encontre tudo para seu escritório, escola e artesanato com os melhores preços e entrega rápida.
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 min-[400px]:flex-row">
                      <Button size="lg" className="primary-action-button">Ver Ofertas</Button>
                      <Button size="lg" variant="outline" className="border-2 hover:bg-muted/50">
                        Catálogo Completo
                      </Button>
                    </div>
                  </div>
                  <div className="hidden lg:flex lg:justify-end fade-in stagger-2">
                    <div className="relative overflow-hidden rounded-lg shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.01]">
                      <Image
                        src="https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3"
                        alt="Produtos de papelaria coloridos"
                        width={400}
                        height={400}
                        className="rounded-lg object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-60"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Formas decorativas */}
            <div className="absolute -bottom-6 right-8 w-20 h-20 rounded-full bg-accent/20 blur-2xl"></div>
            <div className="absolute -top-6 left-1/4 w-16 h-16 rounded-full bg-primary/10 blur-xl"></div>
            <div className="absolute top-1/3 right-1/4 w-10 h-10 rounded-full bg-lime-300/20 blur-lg"></div>
          </div>
        </section>

        {/* Benefícios */}
        <section className="py-8 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              <div className="flex flex-col items-center text-center p-4 fade-in stagger-1">
                <div className="h-12 w-12 mb-3 bg-muted flex items-center justify-center rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M5 12.55a11 11 0 0 1 14.08 0" /><path d="M1.42 9a15.91 15.91 0 0 1 21.16 0" /><path d="M8.53 16.11a6 6 0 0 1 6.95 0" /><path d="M12 20h.01" /></svg>
                </div>
                <h3 className="text-sm font-medium text-primary">Entrega Rápida</h3>
              </div>
              <div className="flex flex-col items-center text-center p-4 fade-in stagger-2">
                <div className="h-12 w-12 mb-3 bg-muted flex items-center justify-center rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
                </div>
                <h3 className="text-sm font-medium text-primary">Qualidade Garantida</h3>
              </div>
              <div className="flex flex-col items-center text-center p-4 fade-in stagger-3">
                <div className="h-12 w-12 mb-3 bg-muted flex items-center justify-center rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M20.91 8.84 8.56 2.23a1.93 1.93 0 0 0-1.81 0L3.1 4.13a2.12 2.12 0 0 0-.05 3.69l12.22 6.93a2 2 0 0 0 1.94 0L21 12.51a2.12 2.12 0 0 0-.09-3.67Z" /><path d="m3.09 8.84 12.35-6.61a1.93 1.93 0 0 1 1.81 0l3.65 1.9a2.12 2.12 0 0 1 .1 3.69L8.73 14.75a2 2 0 0 1-1.94 0L3 12.51a2.12 2.12 0 0 1 .09-3.67Z" /><line x1="12" y1="22" x2="12" y2="13" /><path d="M20 13.5v3.37a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13.5" /></svg>
                </div>
                <h3 className="text-sm font-medium text-primary">Frete Grátis*</h3>
              </div>
              <div className="flex flex-col items-center text-center p-4 fade-in stagger-4">
                <div className="h-12 w-12 mb-3 bg-muted flex items-center justify-center rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect width="20" height="14" x="2" y="5" rx="2" /><line x1="2" x2="22" y1="10" y2="10" /></svg>
                </div>
                <h3 className="text-sm font-medium text-primary">Pagamento Seguro</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Categorias */}
        <section className="py-12 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center mb-8 fade-in">
              <div className="inline-block rounded-full bg-muted px-3 py-1 text-sm text-primary mb-3">
                Encontre o que precisa
              </div>
              <h2 className="text-3xl font-bold text-center text-primary">Categorias</h2>
              <div className="w-24 h-1 bg-accent mt-3 rounded-full"></div>
            </div>
            <CategoryGrid />
          </div>
        </section>

        {/* Produtos em destaque */}
        <section className="py-12 bg-gradient-to-b from-white to-teal-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center mb-8 fade-in">
              <div className="inline-block rounded-full bg-muted px-3 py-1 text-sm text-primary mb-3">
                Os mais vendidos
              </div>
              <h2 className="text-3xl font-bold text-center text-primary">Produtos em Destaque</h2>
              <div className="w-24 h-1 bg-accent mt-3 rounded-full"></div>
            </div>
            <FeaturedProducts />
          </div>
        </section>

        {/* Carrossel de produtos */}
        <section className="py-12 bg-teal-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center mb-8 fade-in">
              <div className="inline-block rounded-full bg-white px-3 py-1 text-sm text-primary mb-3">
                Acabou de chegar
              </div>
              <h2 className="text-3xl font-bold text-center text-primary">Novidades</h2>
              <div className="w-24 h-1 bg-accent mt-3 rounded-full"></div>
            </div>
            <ProductCarousel />
          </div>
        </section>

        {/* Informações de entrega e pagamento */}
        <section className="py-12 bg-gradient-to-t from-white to-teal-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center mb-8 fade-in">
              <div className="inline-block rounded-full bg-white px-3 py-1 text-sm text-primary mb-3">
                Como funciona
              </div>
              <h2 className="text-3xl font-bold text-center text-primary">Formas de Pagamento e Entrega</h2>
              <div className="w-24 h-1 bg-accent mt-3 rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center card-hover-effect fade-in stagger-1">
                <div className="mx-auto mb-4 h-14 w-14 rounded-full bg-teal-100 flex items-center justify-center">
                  <ShoppingBag className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">Frete Grátis</h3>
                <p className="text-teal-700">Para compras acima de R$ 150,00 para todo o Brasil</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center card-hover-effect fade-in stagger-2">
                <div className="mx-auto mb-4 h-14 w-14 rounded-full bg-teal-100 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-7 w-7 text-primary"
                  >
                    <rect width="20" height="14" x="2" y="5" rx="2" />
                    <line x1="2" x2="22" y1="10" y2="10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">Pagamento Seguro</h3>
                <p className="text-teal-700">Cartões de crédito, boleto, Pix e muito mais</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center card-hover-effect fade-in stagger-3">
                <div className="mx-auto mb-4 h-14 w-14 rounded-full bg-teal-100 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-7 w-7 text-primary"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">Compra Protegida</h3>
                <p className="text-teal-700">Seus dados sempre protegidos em todas as compras</p>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-12 bg-primary text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -bottom-6 right-8 w-36 h-36 rounded-full bg-accent blur-3xl"></div>
            <div className="absolute -top-10 left-1/4 w-32 h-32 rounded-full bg-white blur-3xl"></div>
            <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-lime-300 blur-3xl"></div>
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2 fade-in">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Receba Nossas Novidades</h2>
                <p className="mx-auto max-w-[700px] text-white/90 md:text-xl">
                  Cadastre-se para receber ofertas exclusivas e novidades em primeira mão.
                </p>
              </div>
              <div className="w-full max-w-md space-y-2 fade-in stagger-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1 bg-white/90 text-primary border-0 focus:ring-2 focus:ring-white"
                    placeholder="Seu melhor e-mail"
                    type="email"
                  />
                  <Button type="submit" variant="accent" className="font-medium">
                    Inscrever
                  </Button>
                </form>
                <p className="text-sm text-white/80 text-center">Não se preocupe, não enviamos spam.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

