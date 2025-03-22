import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const categories = [
  {
    id: 1,
    name: "Material Escolar",
    image: "https://images.unsplash.com/photo-1519687079572-8a38a2d9f6a5?q=80&w=120&h=120&auto=format&fit=crop",
    slug: "material-escolar",
    color: "bg-blue-50 border-blue-200 group-hover:bg-blue-100",
    icon: "bg-blue-500/10",
  },
  {
    id: 2,
    name: "Escritório",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=120&h=120&auto=format&fit=crop",
    slug: "escritorio",
    color: "bg-teal-50 border-teal-200 group-hover:bg-teal-100",
    icon: "bg-teal-500/10",
  },
  {
    id: 3,
    name: "Mochilas",
    image: "https://images.unsplash.com/photo-1577401239170-897942555fb3?q=80&w=120&h=120&auto=format&fit=crop",
    slug: "mochilas",
    color: "bg-purple-50 border-purple-200 group-hover:bg-purple-100",
    icon: "bg-purple-500/10",
  },
  {
    id: 4,
    name: "Cadernos",
    image: "https://images.unsplash.com/photo-1544239265-ee5eedde5469?q=80&w=120&h=120&auto=format&fit=crop",
    slug: "cadernos",
    color: "bg-green-50 border-green-200 group-hover:bg-green-100",
    icon: "bg-green-500/10",
  },
  {
    id: 5,
    name: "Artesanato",
    image: "https://images.unsplash.com/photo-1535016120720-40c646be5580?q=80&w=120&h=120&auto=format&fit=crop",
    slug: "artesanato",
    color: "bg-rose-50 border-rose-200 group-hover:bg-rose-100",
    icon: "bg-rose-500/10",
  },
  {
    id: 6,
    name: "Agendas",
    image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?q=80&w=120&h=120&auto=format&fit=crop",
    slug: "agendas",
    color: "bg-amber-50 border-amber-200 group-hover:bg-amber-100",
    icon: "bg-amber-500/10",
  },
]

export function CategoryGrid() {
  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6">
      {categories.map((category, index) => (
        <Link
          key={category.id}
          href={`/categoria/${category.slug}`}
          className={`group flex flex-col items-center rounded-xl p-4 text-center transition-all duration-300 
                    border border-transparent hover:border-accent/30 shadow-sm hover:shadow-md 
                    hover:-translate-y-1 ${category.color} fade-in`}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="relative mb-4 overflow-hidden rounded-full">
            <div className={`${category.icon} absolute inset-0 -z-10 rounded-full scale-0 opacity-0 transition-all duration-500 group-hover:scale-150 group-hover:opacity-100`}></div>
            <div className="p-2 rounded-full overflow-hidden bg-white shadow-sm">
              <Image
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                width={90}
                height={90}
                className="h-[90px] w-[90px] object-cover transition-transform duration-500 rounded-full group-hover:scale-110"
              />
            </div>
          </div>
          <h3 className="font-medium text-primary mb-1 text-lg transition-colors duration-300 group-hover:text-primary-hover">{category.name}</h3>
          <div className="flex items-center justify-center mt-1 text-xs text-primary/70 opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            <span className="mr-1">Ver produtos</span>
            <ArrowRight className="w-3 h-3" />
          </div>
        </Link>
      ))}
    </div>
  )
}

