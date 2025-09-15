# 🚀 Vinícius Silva - Portfolio

Landing page profissional desenvolvida com React, TypeScript e Tailwind CSS, apresentando minha experiência como Desenvolvedor Full Stack.

## 🌟 Características

- **Design Moderno**: Interface clean e profissional com gradientes suaves
- **Animações Elegantes**: Transições e animações que melhoram a experiência do usuário  
- **Gráficos Interativos**: Visualização das habilidades técnicas com progress bars animadas
- **Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **SEO Otimizado**: Meta tags e estrutura semântica para melhor indexação
- **Performance**: Carregamento rápido e otimizado

## 🛠️ Tecnologias Utilizadas

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui
- **Ícones**: Lucide React
- **Build**: Vite
- **Deployment**: GitHub Pages ready

## 📱 Seções

1. **Hero**: Apresentação pessoal com foto e informações principais
2. **Sobre**: Descrição profissional e principais competências  
3. **Habilidades**: Gráficos interativos mostrando proficiência em tecnologias
4. **Experiência**: Timeline das experiências profissionais
5. **Projetos**: Showcase dos principais projetos desenvolvidos
6. **Contato**: Informações de contato e formulários

## 🎨 Design System

O projeto utiliza um design system personalizado com:
- Paleta de cores profissional (azuis e verdes)
- Gradientes suaves para elementos destacados
- Tipografia hierárquica e legível
- Componentes reutilizáveis com variantes
- Animações consistentes em toda a aplicação

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone <URL_DO_REPOSITORIO>

# Entre no diretório
cd vinicius-silva-portfolio

# Instale as dependências
npm install

# Execute o projeto
npm run dev
```

O projeto estará disponível em `http://localhost:8080`

## 📦 Build para Produção

```bash
# Gerar build otimizado
npm run build

# Visualizar build localmente
npm run preview
```

## 🌐 Deploy no GitHub Pages

Este projeto está configurado para deploy automático no GitHub Pages:

### Para repositório pessoal (seu-usuario.github.io)
1. Crie um repositório com o nome `seu-usuario.github.io`
2. Altere a base no `vite.config.ts` para `base: mode === "production" ? "/" : "/"`
3. Faça push do código para a branch main
4. Vá em Settings > Pages no repositório
5. Selecione "GitHub Actions" como source
6. O site estará disponível em `https://seu-usuario.github.io`

### Para repositório de projeto (qualquer nome)
1. Crie um repositório com qualquer nome (ex: `vinicius-silva-portfolio`)
2. Mantenha a configuração atual no `vite.config.ts`
3. Faça push do código para a branch main
4. Vá em Settings > Pages no repositório
5. Selecione "GitHub Actions" como source
6. O site estará disponível em `https://seu-usuario.github.io/nome-do-repositorio`

### Como funciona
- O GitHub Actions faz o build automático do projeto React
- Gera os arquivos HTML, CSS e JS estáticos na pasta `dist`
- Publica automaticamente no GitHub Pages
- Atualiza a cada push na branch main

## 📂 Estrutura do Projeto

```
src/
├── components/
│   ├── ui/              # Componentes base do shadcn/ui
│   ├── sections/        # Seções da landing page
│   └── Navigation.tsx   # Componente de navegação
├── pages/
│   └── Index.tsx        # Página principal
├── assets/              # Imagens e recursos
├── lib/                 # Utilitários
└── index.css           # Design system e estilos globais
```

## 🎯 Funcionalidades Principais

- **Navegação Suave**: Scroll suave entre seções com highlighting automático
- **Animações Staggered**: Elementos aparecem de forma sequencial e elegante
- **Gráficos de Habilidades**: Progress bars animadas mostrando proficiência
- **Cards Interativos**: Hover effects e transições nos elementos
- **Timeline Profissional**: Histórico de experiências em formato visual
- **Portfolio de Projetos**: Showcase dos trabalhos realizados
- **Informações de Contato**: Links diretos para email, telefone e redes sociais

## 📱 Responsividade

O layout é totalmente responsivo com breakpoints otimizados:
- Mobile: < 768px
- Tablet: 768px - 1024px  
- Desktop: > 1024px

## 🎨 Personalização

Para personalizar o design:

1. **Cores**: Edite as variáveis CSS em `src/index.css`
2. **Tipografia**: Ajuste as classes do Tailwind
3. **Animações**: Modifique as animações em `tailwind.config.ts`
4. **Conteúdo**: Atualize os dados nas seções correspondentes

## 📄 Licença

Este projeto é de uso pessoal para Vinícius Lima da Silva.

## 📞 Contato

- **Email**: vinicius4@rede.ulbra.br
- **Telefone**: (63) 99291-7517
- **LinkedIn**: [viniciuslimadasilvayuichivls](https://linkedin.com/in/viniciuslimadasilvayuichivls)
- **Localização**: Palmas, Tocantins

---

*Desenvolvido com ❤️ usando React, TypeScript e Tailwind CSS*