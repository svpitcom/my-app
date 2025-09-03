import mysql from "mysql2/promise";

export const db = await mysql.createPool({
  host: process.env.DB_HOST,       // ใช้ DB_HOST
  port: Number(process.env.DB_PORT) || 3306,
  user: process.env.DB_USER,       // ใช้ DB_USER
  password: process.env.DB_PASSWORD, // ใช้ DB_PASSWORD
  database: process.env.DB_NAME,   // ใช้ DB_NAME
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});
