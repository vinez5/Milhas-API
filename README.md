# Milhas-API

Olá! Este é um projeto simples de **API RESTful** para gerenciar clientes que acumulam milhas em um programa de cartão de crédito.  
O objetivo é **aprender e demonstrar habilidades de Node.js e Express**, implementando CRUD e funcionalidades extras.

---

## 🔹 Tecnologias usadas

- **Node.js**: ambiente de execução JavaScript  
- **Express**: framework para criar APIs RESTful  
- **Git**: controle de versão  
- **JavaScript**: linguagem do backend  

---

## 🔹 Estrutura do projeto

milhas-api/
├─ index.js # Arquivo principal do servidor
├─ controllers/
│ └─ clientesController.js # Lógica dos endpoints
├─ routes/
│ └─ clientes.js # Rotas da API
├─ data/
│ └─ clientesData.js # Dados de clientes em memória
├─ package.json
└─ README.md

markdown
Copiar código

- **index.js**: inicializa o servidor e conecta as rotas  
- **controllers/**: funções que processam as requisições  
- **routes/**: define os endpoints da API e conecta aos controllers  
- **data/**: simula um banco de dados com clientes em memória  

---

## 🔹 Endpoints disponíveis

- `GET /clientes` → Lista todos os clientes  
- `GET /clientes/:id` → Retorna um cliente pelo ID  
- `POST /clientes` → Cria um novo cliente  
- `PUT /clientes/:id` → Atualiza um cliente existente  
- `DELETE /clientes/:id` → Deleta um cliente pelo ID  
- `POST /clientes/:id/adicionar-milhas` → Adiciona milhas a um cliente (diferencial)

Exemplo de corpo JSON para criar cliente:

```json
{
  "nome": "Carlos Santos",
  "email": "carlos@email.com",
  "cartao": "Black",
  "saldo_milhas": 5000,
  "destino_desejado": "Tóquio"
}
Exemplo de corpo JSON para adicionar milhas:

json
Copiar código
{
  "quantidade": 2000
}
🔹 Como rodar o projeto localmente
Clone o repositório:

bash
Copiar código
git clone https://github.com/vinez5/Milhas-API.git
cd milhas-api
Instale as dependências:

bash
Copiar código
npm install
Inicie o servidor:

bash
Copiar código
node index.js
O servidor vai rodar na porta 3000

Use Postman, Insomnia ou outro cliente de API para testar os endpoints

🔹 Processo de desenvolvimento
Criei o projeto com npm init e instalei o Express

Estruturei o projeto em controllers, routes e data para organização

Implementei os endpoints CRUD

Adicionei a funcionalidade extra POST /clientes/:id/adicionar-milhas

Testei os endpoints usando Postman e corrigi pequenos bugs

Usei Git para versionar cada etapa do projeto com commits claros, simulando fluxo profissional

🔹 Observações
Os dados dos clientes estão em memória, ou seja, não persistem após reiniciar o servidor

Para um projeto real, seria necessário um banco de dados (ex: MySQL, MongoDB)

Esse projeto é uma demonstração de habilidades em Node.js e Express

🔹 Autor
Vinícius Miguel
Desenvolvedor
