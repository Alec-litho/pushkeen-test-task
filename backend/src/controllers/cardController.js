const pool = require('../config.js');

class CardController {

   getCards = async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM cards');
      res.status(200).json(result.rows);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  createCard = async (req, res) => {
    const { title, body } = req.body;
    try {
      const result = await pool.query('INSERT INTO cards (title, body) VALUES ($1, $2) RETURNING *', [title, body]);
      res.status(201).json(result.rows[0]);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  deleteCard = async (req, res) => {
    const { id } = req.params;
    try {
      await pool.query('DELETE FROM cards WHERE id = $1', [id]);
      res.status(204).send();
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
}

module.exports = new CardController()