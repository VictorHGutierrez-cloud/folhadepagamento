# 📚 Como Usar o Academic Pages - Guia Simples

## 🎯 Conceito Principal (Muito Simples!)

**Pense assim:**
- Você escreve em **Markdown** (arquivos `.md`) - é como escrever um documento Word, mas mais simples
- O **Jekyll** (ferramenta) pega esses arquivos e transforma em um **site HTML** bonito
- Você **NÃO precisa** mexer nos arquivos HTML/CSS - eles já estão prontos!

---

## 📁 O Que Cada Pasta Faz?

### ✅ **O QUE VOCÊ VAI EDITAR** (Conteúdo):

#### `_pages/` - Páginas do Site
- **O que é:** Páginas principais do seu site
- **Exemplo:** `folha-pagamento.md` - Sua aula de folha de pagamento
- **Como editar:** Abra o arquivo `.md` e escreva normalmente (como um documento)

#### `_posts/` - Posts de Blog
- **O que é:** Artigos/posts do blog
- **Como usar:** Crie arquivos `.md` aqui para posts

#### `_publications/` - Publicações
- **O que é:** Lista de publicações acadêmicas
- **Como usar:** Adicione arquivos `.md` com suas publicações

#### `_talks/` - Palestras
- **O que é:** Lista de palestras/apresentações
- **Como usar:** Adicione arquivos `.md` com suas palestras

#### `_teaching/` - Materiais de Ensino
- **O que é:** Materiais de ensino/cursos
- **Como usar:** Adicione arquivos `.md` com seus materiais

#### `_config.yml` - Configurações Gerais
- **O que é:** Configurações do site (título, descrição, etc.)
- **Como editar:** Abra e mude as informações básicas

#### `_data/navigation.yml` - Menu de Navegação
- **O que é:** Define o menu do site
- **Como editar:** Adicione/remova links do menu

---

### ⚙️ **O QUE VOCÊ NÃO PRECISA MEXER** (Funciona Sozinho):

#### `_layouts/` - Templates de Páginas
- **O que é:** Templates HTML que definem como as páginas aparecem
- **Você não precisa mexer:** Já está pronto!

#### `_includes/` - Pedaços Reutilizáveis
- **O que é:** Pedaços de código HTML que aparecem em várias páginas (cabeçalho, rodapé, etc.)
- **Você não precisa mexer:** Já está pronto!

#### `_sass/` e `assets/` - Estilos e Scripts
- **O que é:** CSS (cores, fontes, layout) e JavaScript (funcionalidades)
- **Você não precisa mexer:** Já está pronto!

#### `images/` - Imagens
- **O que é:** Pasta para suas imagens
- **Como usar:** Coloque suas fotos/imagens aqui e referencie nos arquivos `.md`

---

## 🚀 Como Funciona na Prática?

### **Passo 1: Você Escreve em Markdown**

Exemplo: `_pages/folha-pagamento.md`
```markdown
---
title: "Aula: Folha de Pagamento"
---

# Minha Aula

Este é o conteúdo da minha aula.

## Seção 1

Texto da seção...
```

### **Passo 2: Jekyll Transforma em HTML**

Quando você roda `jekyll serve`, ele:
1. Lê o arquivo `.md`
2. Aplica o template (de `_layouts/`)
3. Adiciona cabeçalho, menu, rodapé (de `_includes/`)
4. Aplica os estilos (de `_sass/` e `assets/`)
5. Gera um site HTML completo!

### **Passo 3: Você Vê o Site**

Abre `http://localhost:4000` e vê seu site bonito!

---

## ✏️ Exemplo Prático: Criar uma Nova Página

### **1. Crie um arquivo `.md` em `_pages/`**

Crie: `_pages/minha-aula.md`
```markdown
---
permalink: /minha-aula/
title: "Minha Aula"
---

# Título da Minha Aula

Conteúdo da aula aqui...

## Seção 1

Texto...

## Seção 2

Mais texto...
```

### **2. Adicione ao Menu (opcional)**

Edite: `_data/navigation.yml`
```yaml
main:
  - title: "Minha Aula"
    url: /minha-aula/
  
  - title: "Aula: Folha de Pagamento"
    url: /folha-pagamento/
```

### **3. Veja o Resultado**

Rode `jekyll serve` e acesse `http://localhost:4000/minha-aula/`

**Pronto!** Você criou uma página nova sem mexer em HTML/CSS! 🎉

---

## 📝 Markdown - Sintaxe Básica

Markdown é super simples! Veja os exemplos:

```markdown
# Título Principal (H1)
## Subtítulo (H2)
### Sub-subtítulo (H3)

**Texto em negrito**
*Texto em itálico*

- Item de lista 1
- Item de lista 2
- Item de lista 3

1. Item numerado 1
2. Item numerado 2

[Link para Google](https://google.com)

![Descrição da imagem](caminho/para/imagem.jpg)
```

---

## 🎨 Personalização Básica

### **Mudar Título do Site:**
Edite `_config.yml`:
```yaml
title: "Seu Título Aqui"
```

### **Mudar Informações do Autor:**
Edite `_config.yml`:
```yaml
author:
  name: "Seu Nome"
  bio: "Sua biografia"
  location: "Sua Localização"
```

### **Adicionar/Remover Itens do Menu:**
Edite `_data/navigation.yml`:
```yaml
main:
  - title: "Nome do Link"
    url: /caminho/
```

---

## 🔄 Fluxo de Trabalho Recomendado

1. **Edite arquivos `.md`** em `_pages/`, `_posts/`, etc.
2. **Rode `jekyll serve`** para ver as mudanças
3. **Acesse `http://localhost:4000`** no navegador
4. **Veja as mudanças em tempo real!**
5. **Quando estiver satisfeito, faça commit e push para o GitHub**

---

## 💡 Dicas Importantes

### ✅ **FAÇA:**
- Edite apenas arquivos `.md` (Markdown)
- Edite `_config.yml` para configurações gerais
- Edite `_data/navigation.yml` para o menu
- Coloque imagens em `images/`

### ❌ **NÃO FAÇA:**
- Não mexa em `_layouts/` (a menos que saiba HTML bem)
- Não mexa em `_includes/` (a menos que saiba HTML bem)
- Não mexa em `_sass/` ou `assets/css/` (a menos que saiba CSS bem)

**Por quê?** Esses arquivos já estão prontos e funcionando. Se você quebrar algo, pode ser difícil consertar!

---

## 🎯 Resumo Ultra Simples

1. **Você escreve:** Arquivos `.md` (Markdown) - como um documento Word
2. **Jekyll transforma:** Em um site HTML bonito automaticamente
3. **Você vê:** O site no navegador
4. **Você não mexe:** Em HTML/CSS (já está pronto!)

---

## 📚 Próximos Passos

1. **Teste localmente:**
   - Siga o `GUIA_INSTALACAO_WINDOWS.md`
   - Rode `jekyll serve`
   - Veja seu site funcionando!

2. **Edite sua aula:**
   - Abra `_pages/folha-pagamento.md`
   - Faça suas mudanças
   - Veja atualizar automaticamente!

3. **Crie novas páginas:**
   - Crie novos arquivos `.md` em `_pages/`
   - Adicione ao menu em `_data/navigation.yml`

---

**Lembre-se:** Você só precisa editar arquivos `.md` (Markdown). Todo o resto (HTML, CSS, JavaScript) já está pronto e funcionando! 🎉

