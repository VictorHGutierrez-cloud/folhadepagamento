# 🚀 Guia de Instalação - Ruby e Jekyll no Windows

Este guia vai te ajudar a instalar tudo que você precisa para rodar o site Academic Pages localmente no Windows.

---

## 📋 O que você vai instalar:

1. **Ruby** - Linguagem de programação necessária para o Jekyll
2. **Jekyll** - Ferramenta que transforma os arquivos Markdown em HTML
3. **Bundler** - Gerenciador de dependências do Ruby

---

## 🛠️ Passo a Passo de Instalação

### **PASSO 1: Instalar Ruby**

1. **Baixe o RubyInstaller:**
   - Acesse: https://rubyinstaller.org/downloads/
   - Baixe a versão **Ruby+Devkit 3.2.x (x64)** (a mais recente)
   - Exemplo: `rubyinstaller-devkit-3.2.5-1-x64.exe`

2. **Execute o instalador:**
   - Clique duas vezes no arquivo baixado
   - **IMPORTANTE:** Marque a opção "Add Ruby executables to your PATH"
   - Clique em "Install"
   - Aguarde a instalação terminar

3. **Configure o MSYS2 (aparecerá automaticamente):**
   - Quando a instalação terminar, uma janela preta (MSYS2) vai abrir
   - Digite `3` e pressione Enter (para instalar o MSYS2 e o toolchain base)
   - Aguarde a instalação terminar
   - Feche a janela quando terminar

4. **Verifique se o Ruby foi instalado:**
   - Abra o PowerShell (ou Terminal)
   - Digite: `ruby --version`
   - Você deve ver algo como: `ruby 3.2.5 (2024-04-23 revision...)`
   - Se aparecer um erro, feche e abra o PowerShell novamente

---

### **PASSO 2: Instalar Bundler e Jekyll**

1. **Abra o PowerShell** (ou Terminal)

2. **Navegue até a pasta do projeto:**
   ```powershell
   cd "C:\Users\victo\Escola de Produto - Folha de Pagamento\academicpages"
   ```

3. **Instale o Bundler:**
   ```powershell
   gem install bundler
   ```
   - Aguarde a instalação terminar (pode demorar alguns minutos)

4. **Instale as dependências do projeto:**
   ```powershell
   bundle install
   ```
   - Isso vai instalar todas as dependências necessárias (Jekyll incluído)
   - Pode demorar alguns minutos na primeira vez

---

### **PASSO 3: Rodar o Site Localmente**

1. **Ainda na pasta `academicpages`, execute:**
   ```powershell
   bundle exec jekyll serve -l -H localhost
   ```

2. **Aguarde a mensagem:**
   ```
   Server address: http://localhost:4000/
   ```

3. **Abra seu navegador e acesse:**
   ```
   http://localhost:4000
   ```

4. **Pronto!** 🎉
   - O site está rodando localmente
   - Qualquer mudança que você fizer nos arquivos será atualizada automaticamente
   - Para parar o servidor, pressione `Ctrl + C` no PowerShell

---

## ⚠️ Solução de Problemas Comuns

### **Erro: "ruby não é reconhecido"**
- **Solução:** Feche e abra o PowerShell novamente
- Se ainda não funcionar, reinicie o computador

### **Erro: "bundle não é reconhecido"**
- **Solução:** Execute: `gem install bundler` novamente

### **Erro ao executar `bundle install`**
- **Solução:** Tente executar:
  ```powershell
  bundle config set --local path 'vendor/bundle'
  bundle install
  ```

### **Erro de permissão ao instalar gems**
- **Solução:** Execute o PowerShell como Administrador:
  1. Clique com botão direito no PowerShell
  2. Selecione "Executar como administrador"
  3. Tente novamente

### **Porta 4000 já está em uso**
- **Solução:** Use uma porta diferente:
  ```powershell
  bundle exec jekyll serve -l -H localhost -P 4001
  ```
  E acesse: `http://localhost:4001`

---

## 📝 Comandos Úteis

### **Iniciar o servidor:**
```powershell
bundle exec jekyll serve -l -H localhost
```

### **Parar o servidor:**
- Pressione `Ctrl + C` no PowerShell

### **Limpar cache e reconstruir:**
```powershell
bundle exec jekyll clean
bundle exec jekyll serve -l -H localhost
```

### **Verificar versões instaladas:**
```powershell
ruby --version
gem --version
bundle --version
jekyll --version
```

---

## 🎯 Próximos Passos

Depois de conseguir rodar o site localmente:

1. ✅ Edite o arquivo `_config.yml` para personalizar
2. ✅ Crie suas páginas em `_pages/`
3. ✅ Adicione conteúdo em `_posts/`, `_publications/`, etc.
4. ✅ Veja as mudanças em tempo real no navegador

---

## 💡 Dica Extra

Se você quiser uma alternativa mais simples (sem instalar Ruby), você pode:
- Usar a apresentação HTML que já criamos: `aula_folha_pagamento.html`
- Abrir diretamente no navegador (não precisa de servidor)

---

## 🆘 Precisa de Ajuda?

Se encontrar algum problema que não está neste guia:
1. Verifique se seguiu todos os passos
2. Tente fechar e abrir o PowerShell novamente
3. Verifique se o Ruby foi instalado corretamente: `ruby --version`

---

**Boa sorte! 🚀**

