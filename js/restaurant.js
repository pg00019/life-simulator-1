import * as elements from './elements.js'
import * as config from './config.js'

document.addEventListener("DOMContentLoaded", () => {

      const fastFood = () => {
            //health
            config.updateValue(config.health, -10)
            //hunger
            config.updateValue(config.hunger, +10)
            //happiness
            config.updateValue(config.happiness, +15)

            //cash
            config.updateValue(config.cash, -17)

            //time
            config.updateTime(2)
      }

      const seaFood = () => {
            //health
            config.updateValue(config.health, +5)
            //hunger
            config.updateValue(config.hunger, +10)

            //happiness
            config.updateValue(config.happiness, +20)

            //cash
            config.updateValue(config.cash, -22)

            //time
            config.updateTime(1)
      }

      const salad = () => {
            //health
            config.updateValue(config.health, +10)
            //hunger
            config.updateValue(config.hunger, +10)
            //happiness
            config.updateValue(config.happiness, +20)

            //cash
            config.updateValue(config.cash, -12)

            //time
            config.updateTime(1)
      }

      const southIndian = () => {
            //health
            config.updateValue(config.health, +7)
            //hunger
            config.updateValue(config.hunger, +10)
            //happiness
            config.updateValue(config.happiness, +20)

            //cash
            config.updateValue(config.cash, -17)
            //time
            config.updateTime(2)
      }

      const northIndian = () => {
            //health
            config.updateValue(config.health, +10)
            //hunger
            config.updateValue(config.hunger, +10)
            //happiness
            config.updateValue(config.happiness, +20)

            //cash
            config.updateValue(config.cash, -17)
            //time
            config.updateTime(2)
      }

      const italianFood = () => {
            //health
            config.updateValue(config.health, +10)
            //hunger
            config.updateValue(config.hunger, +5)
            //happiness
            config.updateValue(config.happiness, +20)

            //cash
            config.updateValue(config.cash, -12)
            //time
            config.updateTime(2)
      }

      const chineseFood = () => {
            //health
            config.updateValue(config.health, -20)
            //hunger
            config.updateValue(config.hunger, +10)
            //happiness
            config.updateValue(config.happiness, +20)

            //cash
            config.updateValue(config.cash, -17)

            //time
            config.updateTime(2)
      }

      document.addEventListener('click', () => {
            config.disableElement(elements.restaurantEatFastFood, 7, 16)
            config.disableElement(elements.restaurantEatSeaFood, 7, 17)
            config.disableElement(elements.restaurantEatItalianFood, 7, 16)
            config.disableElement(elements.restaurantEatChineseFood, 7, 16)
      })

      elements.restaurantEatFastFood.addEventListener("click", fastFood)
      elements.restaurantEatSeaFood.addEventListener("click", seaFood)
      elements.restaurantEatSalad.addEventListener("click", salad)
      elements.restaurantEatSouthIndian.addEventListener("click", southIndian)
      elements.restaurantEatNorthIndian.addEventListener("click", northIndian)
      elements.restaurantEatItalianFood.addEventListener("click", italianFood)
      elements.restaurantEatChineseFood.addEventListener("click", chineseFood)
})