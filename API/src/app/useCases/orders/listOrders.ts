import { Request, Response } from 'express'
import { Order } from '../../models/Order'

export async function listOrders(req: Request, res: Response) {
  try {
    const orders = await Order.find()
      .sort({ createdAt: 1 })
      .populate('products.product')

    res.json(orders)
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({
        error: err.message,
      })
    } else {
      res.status(500).json({
        error: 'Internal Error',
      })
    }
  }
}
