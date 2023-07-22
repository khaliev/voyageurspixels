const AbstractManager = require("./AbstractManager");

class ShotManager extends AbstractManager {
  constructor() {
    super({ table: "shots" });
  }

  insert(shot) {
    return this.database.query(
      `insert into ${this.table} (title, url_shot) values (?, ?)`,
      [shot.title]
    );
  }

  findAll() {
    return this.database.query(`select * from  ${this.table}`);
  }
}

module.exports = ShotManager;
