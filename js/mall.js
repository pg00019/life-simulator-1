import * as elements from './elements.js'
import * as config from './config.js'

document.addEventListener("DOMContentLoaded", () => {

    const shopping = () => {
        //health
        //config.updateValue(config.health, -3)
        //hunger
        config.updateValue(config.hunger, -3)
        //happiness
        config.updateValue(config.happiness, +3)

        //cash
        config.updateValue(config.cash, -30)

        //time
        config.updateTime(3)
    }

    const watchMovies = () => {
        //health
        // config.updateValue(config.health, -5)
        //hunger
        config.updateValue(config.hunger, -5)
        //happiness
        config.updateValue(config.happiness, +10)

        //cash
        config.updateValue(config.cash, -30)

        //time
        config.updateTime(3)
    }

    const gamingZone = () => {
        //health
        //  config.updateValue(config.health, -5)
        //hunger
        config.updateValue(config.hunger, -5)
        //happiness
        config.updateValue(config.happiness, +10)

        //cash
        config.updateValue(config.cash, -30)
        //time
        config.updateTime(2);
    }

    const foodCourt = () => {
        //health
        config.updateValue(config.health, -8)
        //hunger
        config.updateValue(config.hunger, +10)
        //happiness
        config.updateValue(config.happiness, +10)

        //cash
        config.updateValue(config.cash, -25)
        //time
        config.updateTime(1);
    }

    document.addEventListener('click', () => {
        config.disableElement(elements.mallShopping, 21, 10)
        config.disableElement(elements.mallWatchMovies, 21, 10)
        config.disableElement(elements.mallGamingZone, 21, 10)
        config.disableElement(elements.mallFoodCourt, 21, 10)
    })

    elements.mallShopping.addEventListener("click", shopping)
    elements.mallWatchMovies.addEventListener("click", watchMovies)
    elements.mallGamingZone.addEventListener("click", gamingZone)
    elements.mallFoodCourt.addEventListener("click", foodCourt)
})