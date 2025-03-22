import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, ArrowRight, Clock, Truck, ShieldCheck, CreditCard } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      {/* Elementos decorativos de fundo */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-white blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-36 h-36 rounded-full bg-accent blur-3xl"></div>
          <div className="absolute -bottom-12 right-1/3 w-24 h-24 rounded-full bg-lime-300 blur-3xl"></div>
        </div>
        
        {/* Banner com diferenciais */}
        <div className="bg-teal-900/50 py-6 relative z-10 backdrop-blur-sm">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Truck className="h-8 w-8 text-accent" />
                <div>
                  <h4 className="font-bold text-sm">Entrega Rápida</h4>
                  <p className="text-xs text-white/80">Para toda Marabá</p>
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <ShieldCheck className="h-8 w-8 text-accent" />
                <div>
                  <h4 className="font-bold text-sm">Compra Segura</h4>
                  <p className="text-xs text-white/80">Seus dados protegidos</p>
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <CreditCard className="h-8 w-8 text-accent" />
                <div>
                  <h4 className="font-bold text-sm">Parcelamento</h4>
                  <p className="text-xs text-white/80">Em até 12x sem juros</p>
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Clock className="h-8 w-8 text-accent" />
                <div>
                  <h4 className="font-bold text-sm">Atendimento</h4>
                  <p className="text-xs text-white/80">Seg a Sáb: 08h - 19h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container px-4 py-16 md:px-6 relative z-10">
          {/* Seção pré-footer com newsletter */}
          <div className="mb-12 pb-10 border-b border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-3">Receba Ofertas Exclusivas</h3>
                <p className="text-white/80">Assine nossa newsletter e fique por dentro das novidades e promoções em Marabá.</p>
              </div>
              <div>
                <form className="flex flex-col sm:flex-row gap-2">
                  <Input 
                    placeholder="Seu e-mail" 
                    className="bg-white/10 border-white/20 placeholder:text-white/50 text-white focus:border-accent" 
                  />
                  <Button className="bg-accent hover:bg-accent/90 text-primary font-medium pulse-on-hover">
                    Assinar <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
          
          {/* Links do footer */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-6">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vanellimag%20%282%29-0pUdczIj2dBkRohUK7qUHNRx5Ptkil.png"
                  alt="Papelaria Vanelli Logo"
                  width={120}
                  height={40}
                  className="h-10 w-auto brightness-150"
                />
              </Link>
              <p className="mb-6 text-white/80">
                Sua papelaria completa em Marabá-PA com os melhores produtos para escritório, escola e artesanato.
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-accent mr-2 mt-0.5" />
                  <span className="text-sm text-white/80">Av. VP-8, Folha 32, Quadra 7, Lote 23<br />Nova Marabá, Marabá-PA</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-accent mr-2" />
                  <span className="text-sm text-white/80">(94) 99123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-accent mr-2" />
                  <span className="text-sm text-white/80">contato@vanelli.com.br</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-accent mr-2" />
                  <span className="text-sm text-white/80">Seg a Sáb: 08h - 19h</span>
                </div>
              </div>
              <div className="mt-6 flex space-x-4">
                <Link href="https://facebook.com" target="_blank" className="bg-white/10 hover:bg-white/20 h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="https://instagram.com" target="_blank" className="bg-white/10 hover:bg-white/20 h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="https://twitter.com" target="_blank" className="bg-white/10 hover:bg-white/20 h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-6 pb-2 border-b border-white/10">Institucional</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/sobre" className="text-white/80 hover:text-white transition-colors duration-300 flex items-center">
                    <ArrowRight className="h-3 w-3 mr-2 text-accent" />
                    Sobre Nós
                  </Link>
                </li>
                <li>
                  <Link href="/privacidade" className="text-white/80 hover:text-white transition-colors duration-300 flex items-center">
                    <ArrowRight className="h-3 w-3 mr-2 text-accent" />
                    Política de Privacidade
                  </Link>
                </li>
                <li>
                  <Link href="/termos" className="text-white/80 hover:text-white transition-colors duration-300 flex items-center">
                    <ArrowRight className="h-3 w-3 mr-2 text-accent" />
                    Termos de Uso
                  </Link>
                </li>
                <li>
                  <Link href="/trabalhe-conosco" className="text-white/80 hover:text-white transition-colors duration-300 flex items-center">
                    <ArrowRight className="h-3 w-3 mr-2 text-accent" />
                    Trabalhe Conosco
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-white/80 hover:text-white transition-colors duration-300 flex items-center">
                    <ArrowRight className="h-3 w-3 mr-2 text-accent" />
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-6 pb-2 border-b border-white/10">Atendimento</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/ajuda" className="text-white/80 hover:text-white transition-colors duration-300 flex items-center">
                    <ArrowRight className="h-3 w-3 mr-2 text-accent" />
                    Central de Ajuda
                  </Link>
                </li>
                <li>
                  <Link href="/contato" className="text-white/80 hover:text-white transition-colors duration-300 flex items-center">
                    <ArrowRight className="h-3 w-3 mr-2 text-accent" />
                    Fale Conosco
                  </Link>
                </li>
                <li>
                  <Link href="/trocas" className="text-white/80 hover:text-white transition-colors duration-300 flex items-center">
                    <ArrowRight className="h-3 w-3 mr-2 text-accent" />
                    Trocas e Devoluções
                  </Link>
                </li>
                <li>
                  <Link href="/rastreio" className="text-white/80 hover:text-white transition-colors duration-300 flex items-center">
                    <ArrowRight className="h-3 w-3 mr-2 text-accent" />
                    Rastreio de Pedidos
                  </Link>
                </li>
                <li>
                  <Link href="/perguntas-frequentes" className="text-white/80 hover:text-white transition-colors duration-300 flex items-center">
                    <ArrowRight className="h-3 w-3 mr-2 text-accent" />
                    Perguntas Frequentes
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-6 pb-2 border-b border-white/10">Pagamento e Envio</h3>
              <div className="grid grid-cols-3 gap-2">
                <div className="h-10 w-16 rounded bg-white/10 hover:bg-white/20 transition-colors duration-300 flex items-center justify-center font-bold text-xs text-white/80">VISA</div>
                <div className="h-10 w-16 rounded bg-white/10 hover:bg-white/20 transition-colors duration-300 flex items-center justify-center font-bold text-xs text-white/80">MASTER</div>
                <div className="h-10 w-16 rounded bg-white/10 hover:bg-white/20 transition-colors duration-300 flex items-center justify-center font-bold text-xs text-white/80">ELO</div>
                <div className="h-10 w-16 rounded bg-white/10 hover:bg-white/20 transition-colors duration-300 flex items-center justify-center font-bold text-xs text-white/80">PIX</div>
                <div className="h-10 w-16 rounded bg-white/10 hover:bg-white/20 transition-colors duration-300 flex items-center justify-center font-bold text-xs text-white/80">BOLETO</div>
                <div className="h-10 w-16 rounded bg-white/10 hover:bg-white/20 transition-colors duration-300 flex items-center justify-center font-bold text-xs text-white/80">PAYPAL</div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2">
                <div className="h-10 w-28 rounded bg-white/10 hover:bg-white/20 transition-colors duration-300 flex items-center justify-center font-bold text-xs text-white/80">CORREIOS</div>
                <div className="h-10 w-28 rounded bg-white/10 hover:bg-white/20 transition-colors duration-300 flex items-center justify-center font-bold text-xs text-white/80">TRANSPORTADORA</div>
              </div>
              
              {/* Mapa de localização */}
              <div className="mt-6">
                <h4 className="text-sm font-bold mb-2">Nossa Localização</h4>
                <div className="h-[120px] rounded overflow-hidden relative glass-effect">
                  <Link href="https://maps.google.com/?q=Av.+VP-8,+Folha+32,+Quadra+7,+Lote+23,+Nova+Marabá,+Marabá-PA" target="_blank" className="text-xs absolute bottom-2 right-2 bg-accent text-primary px-2 py-1 rounded z-10 font-bold">Ver no Google Maps</Link>
                  <Image
                    src="https://i.imgur.com/JaXyNKU.png" 
                    alt="Mapa de localização da Papelaria Vanelli em Marabá"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-6 border-t border-white/10 text-center">
            <p className="text-sm text-white/60">© 2024 Papelaria Vanelli. Todos os direitos reservados.</p>
            <p className="text-xs text-white/50 mt-1">A melhor papelaria de Marabá-PA para suas necessidades escolares e de escritório.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

