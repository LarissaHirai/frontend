# ⚛️ frontend/README.md

```markdown
# Frontend - Aplicação React

Interface desenvolvida em React para consumo da API Django.

---

## 📌 Descrição

Este frontend permite:

- Login com autenticação via token
- Visualização de listas
- Visualização de itens
- Exibição de status (Finalizado / Não Finalizado)
- Logout

A aplicação consome a API desenvolvida no backend Django.

---

## 🚀 Tecnologias Utilizadas

- React
- Fetch API
- CSS

---

## ⚙️ Como Executar o Projeto

### 1️⃣ Clonar o repositório

```bash
git clone <url-do-repositorio>
cd frontend
````

### 2️⃣ Instalar dependências

```bash
npm install
```

### 3️⃣ Executar aplicação

```bash
npm start
```

Aplicação disponível em:

```
http://localhost:3000/
```

---

## 🔗 Integração com Backend

Certifique-se de que o backend esteja rodando em:

```
http://127.0.0.1:8000/
```

O login realiza requisição para:

```
/api-token-auth/
```

---

## 📁 Estrutura do Projeto

```
frontend/
 ├── src/
 ├── public/
 ├── package.json
 └── README.md
```

---

## 🧠 Funcionalidades

* Armazenamento de token no localStorage
* Renderização condicional baseada em autenticação
* Componentização da interface
