import { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const filePath = path.resolve('./pages/api/curriculo.pdf')
    const file = fs.readFileSync(filePath)
    res.setHeader('Content-Type', 'application/pdf')
    res.send(file)
  } else {
    res.status(405).send('Method not allowed')
  }
}