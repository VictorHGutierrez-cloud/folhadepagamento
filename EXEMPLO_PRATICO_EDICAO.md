# 🎯 Exemplo Prático: Como Editar Sua Aula

## 📝 Vamos Ver Como Editar o Arquivo da Aula

O arquivo da sua aula está em: `academicpages/_pages/folha-pagamento.md`

---

## 🔍 Estrutura do Arquivo Markdown

Todo arquivo Markdown tem duas partes:

### **1. Cabeçalho (Front Matter)** - Entre `---` e `---`
```markdown
---
permalink: /folha-pagamento/
title: "Aula: Folha de Pagamento - Factorial & Bernhoeft"
author_profile: true
---
```

**O que faz:**
- `permalink:` - Define a URL da página (ex: `/folha-pagamento/`)
- `title:` - Título que aparece no navegador
- `author_profile: true` - Mostra o perfil do autor na lateral

### **2. Conteúdo** - Depois do segundo `---`
```markdown
# Aula: Folha de Pagamento
## Factorial & Bernhoeft

**Duração:** 90 minutos  
**Objetivo:** Entender o papel da Factorial...

## 📋 Estrutura da Aula
...
```

**Aqui você escreve o conteúdo normalmente!**

---

## ✏️ Exemplo: Como Adicionar uma Nova Seção

### **Antes:**
```markdown
## 📋 Estrutura da Aula

### **SEÇÃO I: Introdução & Papel da Factorial** (25 minutos)
...
```

### **Depois (adicionando uma seção nova):**
```markdown
## 📋 Estrutura da Aula

### **SEÇÃO I: Introdução & Papel da Factorial** (25 minutos)
...

### **SEÇÃO NOVA: Exemplos Práticos** (10 minutos)

Aqui estão alguns exemplos práticos de como usar a Factorial:

1. **Exemplo 1:** Como registrar horas trabalhadas
2. **Exemplo 2:** Como marcar ausências
3. **Exemplo 3:** Como atualizar benefícios

**Dica importante:** Sempre verifique os dados antes de enviar!
```

---

## 🎨 Exemplos de Formatação

### **Títulos:**
```markdown
# Título Principal (maior)
## Subtítulo (médio)
### Sub-subtítulo (menor)
```

### **Texto:**
```markdown
**Texto em negrito**
*Texto em itálico*
~~Texto riscado~~
```

### **Listas:**
```markdown
- Item 1
- Item 2
- Item 3

1. Primeiro item
2. Segundo item
3. Terceiro item
```

### **Links:**
```markdown
[Texto do link](https://exemplo.com)
```

### **Imagens:**
```markdown
![Descrição da imagem](images/nome-da-imagem.jpg)
```

### **Código:**
```markdown
`código inline`

```
código em bloco
```
```

### **Tabelas:**
```markdown
| Coluna 1 | Coluna 2 | Coluna 3 |
|----------|----------|----------|
| Dado 1   | Dado 2   | Dado 3   |
| Dado 4   | Dado 5   | Dado 6   |
```

---

## 🔄 Passo a Passo: Editar e Ver Mudanças

### **1. Edite o Arquivo**
- Abra: `academicpages/_pages/folha-pagamento.md`
- Faça suas mudanças
- Salve o arquivo

### **2. Veja as Mudanças (se o Jekyll estiver rodando)**
- O Jekyll detecta automaticamente
- Atualiza o site sozinho
- Recarregue a página no navegador (`F5`)

### **3. Se o Jekyll não estiver rodando:**
```powershell
cd academicpages
bundle exec jekyll serve -l -H localhost
```

---

## 📋 Checklist: O Que Você Pode Fazer

### ✅ **Fácil de Fazer:**
- [ ] Editar texto da aula
- [ ] Adicionar novas seções
- [ ] Adicionar listas
- [ ] Adicionar links
- [ ] Adicionar imagens (colocar em `images/`)
- [ ] Mudar título da página
- [ ] Adicionar novas páginas (criar `.md` em `_pages/`)

### ⚠️ **Requer Mais Conhecimento:**
- [ ] Mudar cores do site (precisa saber CSS)
- [ ] Mudar layout (precisa saber HTML)
- [ ] Adicionar funcionalidades JavaScript (precisa saber JS)

---

## 💡 Dica de Ouro

**Você não precisa saber HTML/CSS para usar o Academic Pages!**

- Escreva em Markdown (super simples)
- O Jekyll transforma em HTML automaticamente
- O tema já tem tudo pronto (cores, layout, etc.)

**Foque em:**
1. ✅ Escrever conteúdo bom
2. ✅ Organizar bem as seções
3. ✅ Usar formatação Markdown básica

**Não se preocupe com:**
- ❌ HTML
- ❌ CSS
- ❌ JavaScript
- ❌ Layout responsivo
- ❌ Cores e estilos

**Tudo isso já está pronto!** 🎉

---

## 🎯 Exemplo Real: Adicionar uma Seção de FAQ

### **1. Abra o arquivo:**
`academicpages/_pages/folha-pagamento.md`

### **2. Adicione no final:**
```markdown
---

## ❓ Perguntas Frequentes (FAQ)

### **P: Como atualizar dados na Factorial?**
R: Acesse o módulo correspondente (Time Tracking, Absences ou Benefits) e edite as informações.

### **P: O que acontece se eu inserir dados incorretos?**
R: Os cálculos da Bernhoeft serão afetados, podendo gerar problemas legais e financeiros.

### **P: Posso corrigir erros depois?**
R: Sim, mas é necessário fazer a correção através da Bernhoeft, o que pode levar tempo.
```

### **3. Salve e veja:**
- Se o Jekyll estiver rodando, a página atualiza sozinha
- Recarregue o navegador
- Pronto! Nova seção adicionada! 🎉

---

## 📚 Recursos para Aprender Markdown

Markdown é super simples! Se quiser aprender mais:

1. **Sintaxe básica:** https://www.markdownguide.org/basic-syntax/
2. **Editor online:** https://dillinger.io/ (teste antes de salvar)
3. **Visual Studio Code:** Tem preview de Markdown integrado

---

**Lembre-se:** Você só precisa escrever em Markdown. O Jekyll faz o resto! 🚀

