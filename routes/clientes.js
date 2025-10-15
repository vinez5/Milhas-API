const express = require("express");
const router = express.Router();
const clientesController = require("../controllers/clientesController");

router.get("/", clientesController.getClientes);
router.get("/:id", clientesController.getClienteById);
router.post("/", clientesController.addCliente);
router.put("/:id", clientesController.updateCliente);
router.delete("/:id", clientesController.deleteCliente);
router.post("/:id/adicionar-milhas", clientesController.addMilhas);

module.exports = router;
