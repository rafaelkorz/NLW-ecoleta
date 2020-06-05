const sqlite3 = require("sqlite3").verbose()

const db = new sqlite3.Database("./src/database/database.db")

module.exports = db
 
// db.serialize(() => {

//   db.run(`
//     CREATE TABLE IF NOT EXISTS places (
//       id  INTEGER PRIMARY KEY AUTOINCREMENT,
//       image TEXT,
//       name TEXT,
//       address TEXT,
//       address2 TEXT,
//       state TEXT,
//       city TEXT,
//       items TEXT
//     );
//   `)

//   const query = `
//       INSERT INTO places (
//         image,
//         name,        
//         address,
//         address2,
//         state,
//         city,
//         items 
//       ) VALUES (?,?,?,?,?,?,?);
//   `

  // const values = [
  //   "https://miro.medium.com/max/2000/1*ciLg4-fezXdbaunhk1E6gQ.jpeg",
  //   "Colectoria",
  //   "Guilherme Genballa, Jardim América",
  //   "Número 260",
  //   "Santa Catarina",
  //   "Rio do sul",
  //   "Resídios Eletrônicos, Lâmpadas"
  // ]

  // const values = [
  //   "https://miro.medium.com/max/1000/1*fGcpmiNoTqePxtAdGoNXuQ.jpeg",
  //   "Papersider",
  //   "Guilherme Genballa, Jardim América",
  //   "Número 260",
  //   "Santa Catarina",
  //   "Rio do sul",
  //   "Papel e papelão"
  // ]  

  // function afterInsertData(err) {
  //   if(err) {
  //     return console.log(err)
  //   }

  //   console.log("Cadastro com sucesso")
  //   console.log(this)
  // }

  //  db.run(query, values, afterInsertData)

  // db.all(`SELECT * FROM places`, function(err, rows) {
  //   if(err) {
  //     return console.log(err)
  //   }

  //   console.log("Aqui estão seus registros")
  //   console.log(rows) 
  // })
// })