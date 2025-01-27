import * as elements from './elements.js'
import * as config from './config.js'

document.addEventListener("DOMContentLoaded", () => {

    const pray = () => {
        //health
        config.updateValue(config.health, +10)
        //hunger
        config.updateValue(config.hunger, -5)
        //happiness
        config.updateValue(config.happiness, +15)

        //cash
        config.updateValue(config.cash, -10)

        //time
        config.updateTime(2)
    }

    const serve = () => {
        //health
        // config.updateValue(config.health, -10)
        //hunger
        config.updateValue(config.hunger, -8)
        //happiness
        config.updateValue(config.happiness, +15)

        //cash
        config.updateValue(config.cash, -20)

        //time
        config.updateTime(2)
    }

    const charity = () => {
        //health
        //  config.updateValue(config.health, +10)
        //hunger
        config.updateValue(config.hunger, -8)
        //happiness
        config.updateValue(config.happiness, +20)

        //cash
        config.updateValue(config.cash, -30)

        //time
        config.updateTime(2)
    }

    document.addEventListener('click', () => {
        config.disableElement(elements.worshipPray, 21, 7)
        config.disableElement(elements.worshipServe, 21, 7)
        config.disableElement(elements.worshipCharity, 21, 7)
    })

    elements.worshipPray.addEventListener("click", pray)
    elements.worshipServe.addEventListener("click", serve)
    elements.worshipCharity.addEventListener("click", charity)
})