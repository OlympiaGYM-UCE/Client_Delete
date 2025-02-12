const Cliente = require('../models/cliente.model');


exports.delete = async (req, res) => {
    try {
        const deleted = await Cliente.destroy({ where: { id: req.params.id } });
        if (deleted) {
            res.json({ message: 'Cliente eliminado exitosamente' });
        } else {
            res.status(404).json({ error: 'Cliente no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
