const clientes = require("../data/clientesData");

// GET /clientes
const getClientes = (req, res) => res.json(clientes);

// GET /clientes/:id
const getClienteById = (req, res) => {
  const id = parseInt(req.params.id);
  const cliente = clientes.find(c => c.id === id);
  if (!cliente) return res.status(404).json({ error: "Cliente não encontrado" });
  res.json(cliente);
};

// POST /clientes
const addCliente = (req, res) => {
  const { nome, email, cartao, saldo_milhas, destino_desejado } = req.body;
  const id = clientes.length ? clientes[clientes.length - 1].id + 1 : 1;
  const novoCliente = { id, nome, email, cartao, saldo_milhas, destino_desejado };
  clientes.push(novoCliente);
  res.status(201).json(novoCliente);
};

// PUT /clientes/:id
const updateCliente = (req, res) => {
  const id = parseInt(req.params.id);
  const cliente = clientes.find(c => c.id === id);
  if (!cliente) return res.status(404).json({ error: "Cliente não encontrado" });

  const { nome, email, cartao, saldo_milhas, destino_desejado } = req.body;
  cliente.nome = nome ?? cliente.nome;
  cliente.email = email ?? cliente.email;
  cliente.cartao = cartao ?? cliente.cartao;
  cliente.saldo_milhas = saldo_milhas ?? cliente.saldo_milhas;
  cliente.destino_desejado = destino_desejado ?? cliente.destino_desejado;

  res.json(cliente);
};

// DELETE /clientes/:id
const deleteCliente = (req, res) => {
  const id = parseInt(req.params.id);
  const index = clientes.findIndex(c => c.id === id);
  if (index === -1) return res.status(404).json({ error: "Cliente não encontrado" });
  clientes.splice(index, 1);
  res.status(204).send();
};

// POST /clientes/:id/adicionar-milhas
const addMilhas = (req, res) => {
  const id = parseInt(req.params.id);
  const cliente = clientes.find(c => c.id === id);
  if (!cliente) return res.status(404).json({ error: "Cliente não encontrado" });

  const { quantidade } = req.body;
  if (typeof quantidade !== "number") return res.status(400).json({ error: "Quantidade inválida" });

  cliente.saldo_milhas += quantidade;
  res.json(cliente);
};

module.exports = { getClientes, getClienteById, addCliente, updateCliente, deleteCliente, addMilhas };
