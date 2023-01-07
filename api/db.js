import mysql2 from 'mysql2';

 export const db = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: 'jaba9293709p13',
    database: 'blog'
})

db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

