import { Request, Response } from 'express';
//import { Order } from '../../models/Order';

const getAllOrder = async (_req: Request, res: Response): Promise<void> => {
  try {
    // const orders = await Order.findAll({
    //    include: [{ all: true, required: false  }],
    // });
    const user = process.env.EMAIL_ELECTROEMPORIUM;
   // pass: process.env.PASSWORD_ELECTROEMPORIUM
    res.json(user);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export { getAllOrder };
