import express from 'express'
import path from 'node:path'

import mongoose from 'mongoose'

import { router } from './router'

mongoose
  .connect('mongodb+srv://joao:flamengo@api.ocazays.mongodb.net/waiterApp')
  .then(() => {
    const app = express()

    app.use(
      '/uploads',
      express.static(path.resolve(__dirname, '..', 'uploads')),
    )

    app.use(express.json())
    app.use(router)
    app.listen(3001, () => {
      console.log('Server is starting! 🚀')
    })
  })
  .catch(() => console.log('Error! Não foi possível conectar ao MongoDB! 💀'))

console.log('Conectado ao MongoDB! 😍')
