import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api"

// Inicializa a API do WooCommerce
export const woocommerceAPI = new WooCommerceRestApi({
  url: process.env.NEXT_PUBLIC_WORDPRESS_URL || "https://sua-loja.com",
  consumerKey: process.env.WOOCOMMERCE_CONSUMER_KEY || "",
  consumerSecret: process.env.WOOCOMMERCE_CONSUMER_SECRET || "",
  version: "wc/v3",
})

// Função para buscar todos os produtos
export async function getProducts() {
  try {
    const response = await woocommerceAPI.get("products", {
      per_page: 100, // Número de produtos por página
    })
    return response.data
  } catch (error) {
    console.error("Erro ao buscar produtos:", error)
    return []
  }
}

// Função para buscar um produto específico
export async function getProduct(id: number) {
  try {
    const response = await woocommerceAPI.get(`products/${id}`)
    return response.data
  } catch (error) {
    console.error(`Erro ao buscar produto ${id}:`, error)
    return null
  }
}

// Função para buscar produtos por categoria
export async function getProductsByCategory(categoryId: number) {
  try {
    const response = await woocommerceAPI.get("products", {
      category: categoryId,
      per_page: 100,
    })
    return response.data
  } catch (error) {
    console.error(`Erro ao buscar produtos da categoria ${categoryId}:`, error)
    return []
  }
}

// Função para buscar todas as categorias
export async function getCategories() {
  try {
    const response = await woocommerceAPI.get("products/categories", {
      per_page: 100,
    })
    return response.data
  } catch (error) {
    console.error("Erro ao buscar categorias:", error)
    return []
  }
}

// Função para criar um novo produto
export async function createProduct(productData: any) {
  try {
    const response = await woocommerceAPI.post("products", productData)
    return response.data
  } catch (error) {
    console.error("Erro ao criar produto:", error)
    throw error
  }
}

// Função para atualizar um produto existente
export async function updateProduct(id: number, productData: any) {
  try {
    const response = await woocommerceAPI.put(`products/${id}`, productData)
    return response.data
  } catch (error) {
    console.error(`Erro ao atualizar produto ${id}:`, error)
    throw error
  }
}

// Função para excluir um produto
export async function deleteProduct(id: number) {
  try {
    const response = await woocommerceAPI.delete(`products/${id}`, {
      force: true, // Exclusão permanente
    })
    return response.data
  } catch (error) {
    console.error(`Erro ao excluir produto ${id}:`, error)
    throw error
  }
}

// Função para formatar os dados do produto do WooCommerce para o formato da aplicação
export function formatWooCommerceProduct(product: any) {
  return {
    id: product.id,
    name: product.name,
    price: Number.parseFloat(product.price),
    image: product.images.length > 0 ? product.images[0].src : "/placeholder.svg?height=300&width=300",
    description: product.short_description,
    discount: product.sale_price ? calculateDiscount(product.regular_price, product.sale_price) : undefined,
    finalPrice: product.sale_price ? Number.parseFloat(product.sale_price) : undefined,
    images: product.images.map((img: any) => img.src),
    stock: product.stock_quantity,
    sku: product.sku,
    categories: product.categories.map((cat: any) => cat.name),
  }
}

// Função auxiliar para calcular o desconto
function calculateDiscount(regularPrice: string, salePrice: string) {
  const regular = Number.parseFloat(regularPrice)
  const sale = Number.parseFloat(salePrice)
  if (regular > 0 && sale > 0) {
    return Math.round(((regular - sale) / regular) * 100)
  }
  return 0
}

