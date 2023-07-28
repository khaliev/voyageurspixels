const AbstractManager = require("./AbstractManager");

class ShotManager extends AbstractManager {
  constructor() {
    super({ table: "shots" });
  }

  findAll() {
    return this.database.query(`SELECT * FROM ${this.table}`);
  }

  delete(id) {
    return this.database.query(`delete from ${this.table} where id = ?`, [id]);
  }

  addshots(shot) {
    return this.database.query(
      "INSERT INTO shots (originalTitle, original, thumbnail) VALUES (?, ?, ?)",
      [shot.originalTitle, shot.original, shot.thumbnail]
    );
  }
}

module.exports = ShotManager;
