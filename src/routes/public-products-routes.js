import express from 'express'
import { productDetailPageController } from '../controllers/products-controller.js'

export const publicProductsRouter = express.Router()

publicProductsRouter.get('/:productId', productDetailPageController)
