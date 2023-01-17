import { IncomingMessage, ServerResponse } from 'http'
import DB from '@database'

const allAvos = async (request: IncomingMessage, response: ServerResponse) => {
  const db = new DB()
  const allEntries = await db.getAll()
  // getById: va a buscar un elemento en particular y lo va a retornar
    const length = allEntries.length


  response.statusCode = 200
  response.setHeader('Content-type', 'application/json')
  response.end(JSON.stringify({ data: allEntries, length }))
}

export default allAvos
