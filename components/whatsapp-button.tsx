"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  // Mostrar o botão apenas depois de um scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
        setShowTooltip(false)
      }
    }

    // Mostrar tooltip após 3 segundos se o botão estiver visível
    let tooltipTimer: NodeJS.Timeout
    
    if (isVisible) {
      tooltipTimer = setTimeout(() => {
        setShowTooltip(true)
      }, 3000)
      
      // Esconder tooltip após 5 segundos
      setTimeout(() => {
        setShowTooltip(false)
      }, 8000)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Verificar posição inicial

    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(tooltipTimer)
    }
  }, [isVisible])

  // Número de WhatsApp formatado com código do país
  const whatsappNumber = "5594991234567"
  const whatsappMessage = "Olá! Vim do site da Papelaria Vanelli e gostaria de mais informações."
  
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50">
          {showTooltip && (
            <div className="absolute bottom-16 right-0 bg-white text-primary p-3 rounded-lg shadow-lg mb-2 max-w-[200px] text-sm font-medium glass-effect animate-fade-in">
              <div className="absolute -bottom-2 right-4 w-3 h-3 bg-white rotate-45"></div>
              Precisa de ajuda? Fale conosco!
            </div>
          )}
          
          <Link 
            href={whatsappUrl} 
            target="_blank"
            className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-all duration-300 pulse-animation hover:scale-110"
          >
            <MessageCircle className="h-6 w-6" />
            <span className="sr-only">Contato via WhatsApp</span>
          </Link>
        </div>
      )}
    </>
  )
} 