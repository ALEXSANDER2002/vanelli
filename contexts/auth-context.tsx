"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type User = {
  id: string
  name: string
  email: string
  avatar?: string
}

type AuthContextType = {
  user: User | null
  isLoading: boolean
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<boolean>
  register: (name: string, email: string, password: string) => Promise<boolean>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Verificar se o usuário está logado ao carregar a página
    const storedUser = localStorage.getItem("vanelli-user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    try {
      setIsLoading(true)
      // Simulação de login - em um app real, isso seria uma chamada de API
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Verificar credenciais (simulado)
      if (email === "usuario@exemplo.com" && password === "senha123") {
        const newUser = {
          id: "1",
          name: "Usuário Teste",
          email: email,
          avatar: "/placeholder.svg?height=100&width=100",
        }
        setUser(newUser)
        localStorage.setItem("vanelli-user", JSON.stringify(newUser))
        return true
      }

      // Verificar se é um usuário registrado
      const registeredUsers = JSON.parse(localStorage.getItem("vanelli-registered-users") || "[]")
      const foundUser = registeredUsers.find((u: any) => u.email === email && u.password === password)

      if (foundUser) {
        const loggedUser = {
          id: foundUser.id,
          name: foundUser.name,
          email: foundUser.email,
          avatar: foundUser.avatar || "/placeholder.svg?height=100&width=100",
        }
        setUser(loggedUser)
        localStorage.setItem("vanelli-user", JSON.stringify(loggedUser))
        return true
      }

      return false
    } catch (error) {
      console.error("Erro ao fazer login:", error)
      return false
    } finally {
      setIsLoading(false)
    }
  }

  const register = async (name: string, email: string, password: string) => {
    try {
      setIsLoading(true)
      // Simulação de registro - em um app real, isso seria uma chamada de API
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Verificar se o email já está em uso
      const registeredUsers = JSON.parse(localStorage.getItem("vanelli-registered-users") || "[]")
      if (registeredUsers.some((u: any) => u.email === email)) {
        return false
      }

      // Criar novo usuário
      const newUser = {
        id: `user-${Date.now()}`,
        name,
        email,
        password, // Em um app real, a senha seria hasheada
        avatar: "/placeholder.svg?height=100&width=100",
      }

      // Salvar usuário
      registeredUsers.push(newUser)
      localStorage.setItem("vanelli-registered-users", JSON.stringify(registeredUsers))

      // Fazer login automático
      const loggedUser = {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        avatar: newUser.avatar,
      }
      setUser(loggedUser)
      localStorage.setItem("vanelli-user", JSON.stringify(loggedUser))

      return true
    } catch (error) {
      console.error("Erro ao registrar:", error)
      return false
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("vanelli-user")
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated: !!user,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider")
  }
  return context
}

