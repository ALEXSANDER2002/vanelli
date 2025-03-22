# Papelaria Vanelli - Marabá

Este é o código-fonte da loja virtual da Papelaria Vanelli, uma papelaria completa localizada em Marabá-PA. A aplicação foi desenvolvida utilizando tecnologias modernas para proporcionar uma experiência de compra agradável e eficiente para os clientes da região.

## Características Principais

- **Design Moderno e Responsivo**: Interface adaptada para todos os dispositivos
- **Catálogo Completo**: Produtos organizados por categorias, coleções e marcas
- **Carrinhos de Compras**: Sistema intuitivo para adicionar e gerenciar produtos
- **Recursos de Usuário**: Favoritos, perfil e histórico de pedidos
- **Informações de Contato**: Endereço, telefone e canais de comunicação de Marabá-PA
- **Suporte via WhatsApp**: Botão flutuante para contato rápido
- **Animações e Efeitos**: Interface interativa e atraente

## Tecnologias Utilizadas

- **Next.js 14**: Framework React para renderização do lado do servidor
- **TypeScript**: Tipagem estática para desenvolvimento mais seguro
- **Tailwind CSS**: Framework CSS para estilização rápida e consistente
- **Lucide Icons**: Biblioteca de ícones vetoriais
- **Context API**: Gerenciamento de estado para autenticação e carrinho
- **shadcn/ui**: Componentes de UI reutilizáveis

## Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Passos para Execução

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/papelaria-vanelli.git
   cd papelaria-vanelli
   ```

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Execute o servidor de desenvolvimento**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. **Acesse a aplicação**
   
   Abra seu navegador e acesse `http://localhost:3000`

## Build para Produção

Para criar uma versão otimizada para produção:

1. **Gerar build**
   ```bash
   npm run build
   # ou
   yarn build
   ```

2. **Executar versão de produção**
   ```bash
   npm start
   # ou
   yarn start
   ```

## Solução de Problemas Comuns

### Erro "document is not defined"

Se você encontrar um erro como `ReferenceError: document is not defined`, isso geralmente ocorre porque o código está tentando acessar o objeto `document` durante a renderização do lado do servidor. Para corrigir:

1. Verifique se o acesso ao DOM está dentro de um hook `useEffect`:
   ```typescript
   useEffect(() => {
     // Código que acessa o DOM aqui
   }, []);
   ```

2. Ou use verificação de ambiente:
   ```typescript
   if (typeof window !== 'undefined') {
     // Código que acessa o DOM aqui
   }
   ```

### Erro durante o build: "Error occurred prerendering page"

Se você encontrar um erro como:
```
Error occurred prerendering page "/admin". Read more: https://nextjs.org/docs/messages/prerender-error
Export encountered an error on /admin/page: /admin, exiting the build.
```

Isso ocorre porque o Next.js tenta pré-renderizar páginas com código que só deve ser executado no cliente. Para resolver:

1. **Configurar a página como dinâmica**: Adicione um arquivo `config.js` na pasta da página com:
   ```javascript
   export const dynamic = 'force-dynamic'
   export const revalidate = 0
   ```

2. **Ajustar o next.config.js**: Configure o arquivo para desativar a pré-renderização de certas páginas:
   ```javascript
   // next.config.js
   module.exports = {
     // Outras configurações...
     eslint: {
       ignoreDuringBuilds: true,
     },
     typescript: {
       ignoreBuildErrors: true,
     },
   }
   ```

3. **Mover acesso ao DOM para useEffect**: Certifique-se de que todo o código que acessa o DOM esteja dentro de useEffect e com verificação de ambiente.

### Problemas de Estilo

Se os estilos não estiverem sendo aplicados corretamente:

1. Verifique se o Tailwind está corretamente configurado
2. Execute `npm run build` seguido de `npm start` para ver se o problema persiste em produção

## Estrutura do Projeto

- `/app`: Páginas e rotas da aplicação
- `/components`: Componentes reutilizáveis
- `/contexts`: Provedores de contexto para estado global
- `/public`: Arquivos estáticos

## Contato

Para informações sobre a Papelaria Vanelli:
- **Endereço**: Av. VP-8, Folha 32, Quadra 7, Lote 23 - Nova Marabá, Marabá-PA
- **Telefone**: (94) 99123-4567
- **E-mail**: contato@vanelli.com.br
- **Horário de funcionamento**: Segunda a Sábado, das 8h às 19h

## Contribuição

Para contribuir com o projeto, siga estas etapas:

1. Faça um fork do repositório
2. Crie um branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Faça commit das alterações (`git commit -m 'Adiciona nova funcionalidade'`)
4. Envie para o branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## Desenvolvimento Futuro

- Integração com sistemas de pagamento
- Sistema de avaliações de produtos
- Comparação de produtos
- Listagem de preços por escolas

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para mais detalhes. 