// pages/api/database.ts

import { NextApiRequest, NextApiResponse } from 'next'
import { Pool, QueryResult } from 'pg'

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'postgres',
  port: 5432,
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const client = await pool.connect()

    const result: QueryResult = await client.query('SELECT * FROM sua_tabela')

    client.release()

    res.status(200).json(result.rows)
  } catch (error) {
    res.status(500).json({ message: 'Erro ao acessar o banco de dados' })
  }
}
