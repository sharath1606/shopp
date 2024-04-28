import express from 'express';
import { Product } from '../models/Product.js';
import { verifyAdmin } from './auth.js';

const router = express.Router(); console.log("calling this fn")

router.post('/product/add',  async (req, res) => { 
    try {
        const { name, imageUrl } = req.body;
        const newProduct = new Product({
            name,
            imageUrl
        });
        await newProduct.save();
        return res.json({ added: true });
    } catch (err) {
        return res.json({ message: "Error adding product" });
    }
});

export { router as productRouter };
