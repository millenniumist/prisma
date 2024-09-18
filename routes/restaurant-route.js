const express = require('express')
const router = express.Router()
const restaurantController = require('../controllers/restaurant-controller')

router.get("/all", restaurantController.all)
router.get("/:restaurantId/menu/all", restaurantController.restaurant)
router.get("/menu/:menuId",restaurantController.menu)

module.exports = router