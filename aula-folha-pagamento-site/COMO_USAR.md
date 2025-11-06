# 📚 Guia: Como Usar e Publicar o Site da Aula

## ✅ O que foi criado

Você agora tem uma pasta `aula-folha-pagamento-site/` com:
- ✅ Template HTML5 UP (Forty) adaptado
- ✅ Conteúdo da aula já inserido
- ✅ Todos os arquivos necessários (CSS, JavaScript, imagens)
- ✅ Site funcional e responsivo

## 🚀 Passo 1: Ver o Site Funcionando

### Opção A: Abrir direto no navegador
1. Vá até a pasta `aula-folha-pagamento-site`
2. Clique duas vezes no arquivo `index.html`
3. O site abrirá no seu navegador

### Opção B: Usar um servidor local (recomendado)
Se você tiver Python instalado:
```bash
cd aula-folha-pagamento-site
python -m http.server 8000
```
Depois acesse: `http://localhost:8000`

## 📝 Passo 2: Editar o Conteúdo

### O que você pode editar:
- **index.html** - Todo o conteúdo da página
  - Textos das seções
  - Títulos e subtítulos
  - Listas e informações

### O que NÃO deve mexer:
- ❌ Pasta `assets/` (CSS, JavaScript, fontes)
- ❌ Estrutura HTML básica (tags, classes principais)
- ❌ Scripts no final do arquivo

### Dicas para editar:
1. Abra `index.html` em um editor de texto (VS Code, Notepad++, etc.)
2. Procure pelos textos que quer mudar
3. Mantenha as tags HTML intactas (como `<h2>`, `<p>`, etc.)
4. Salve o arquivo e atualize o navegador para ver as mudanças

## 🌐 Passo 3: Publicar no GitHub

### 3.1 Criar um repositório no GitHub

1. Acesse [github.com](https://github.com) e faça login
2. Clique no botão **"+"** no canto superior direito
3. Selecione **"New repository"**
4. Preencha:
   - **Repository name:** `aula-folha-pagamento` (ou outro nome)
   - **Description:** "Site da aula de Folha de Pagamento"
   - Marque **"Public"** (para usar GitHub Pages grátis)
   - **NÃO** marque "Initialize with README"
5. Clique em **"Create repository"**

### 3.2 Fazer upload dos arquivos

#### Opção A: Pelo site do GitHub (mais fácil)
1. No repositório criado, clique em **"uploading an existing file"**
2. Arraste TODA a pasta `aula-folha-pagamento-site` para a área de upload
   - Ou selecione todos os arquivos dentro da pasta
3. Role até o final e clique em **"Commit changes"**

#### Opção B: Usando Git (mais profissional)
Se você tem Git instalado:

```bash
cd aula-folha-pagamento-site
git init
git add .
git commit -m "Primeira versão do site da aula"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/aula-folha-pagamento.git
git push -u origin main
```

### 3.3 Ativar GitHub Pages (para o site ficar online)

1. No seu repositório no GitHub, vá em **Settings**
2. Role até a seção **"Pages"** (no menu lateral esquerdo)
3. Em **"Source"**, selecione **"main"** (ou "master")
4. Clique em **"Save"**
5. Aguarde alguns minutos
6. Seu site estará disponível em:
   `https://SEU-USUARIO.github.io/aula-folha-pagamento/`

## 📁 Estrutura de Arquivos

```
aula-folha-pagamento-site/
├── index.html          ← Página principal (EDITAR AQUI)
├── assets/            ← CSS, JS, fontes (NÃO MEXER)
│   ├── css/
│   ├── js/
│   └── webfonts/
├── images/            ← Imagens (PODE SUBSTITUIR)
├── README.md          ← Documentação
└── COMO_USAR.md       ← Este arquivo
```

## 🎨 Personalizações Futuras

### Trocar imagens:
1. Coloque suas imagens na pasta `images/`
2. No `index.html`, troque os nomes das imagens:
   - De: `images/pic01.jpg`
   - Para: `images/sua-imagem.jpg`

### Adicionar mais conteúdo:
- Você pode adicionar mais seções copiando a estrutura das seções existentes
- Mantenha as classes CSS (`spotlight`, `inner`, `major`, etc.)

## ❓ Problemas Comuns

### Site não carrega os estilos?
- Verifique se a pasta `assets/` está no mesmo nível que `index.html`
- Não mova arquivos de lugar

### Links não funcionam?
- Os links usam âncoras (`#factorial`, `#bernhoeft`, etc.)
- Certifique-se de que os IDs nas seções correspondem aos links

### GitHub Pages não mostra o site?
- Verifique se o arquivo `index.html` está na raiz do repositório
- Aguarde alguns minutos (pode demorar até 10 minutos para atualizar)

## 📞 Próximos Passos

1. ✅ Teste o site localmente
2. ✅ Edite o conteúdo conforme necessário
3. ✅ Faça upload no GitHub
4. ✅ Ative o GitHub Pages
5. ✅ Compartilhe o link com seus alunos!

---

**Dica:** Sempre teste o site localmente antes de fazer upload no GitHub!

