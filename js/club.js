import * as elements from './elements.js'
import * as config from './config.js'

document.addEventListener("DOMContentLoaded", () => {

    const dance = () => {

        //health
        //config.updateValue(config.health, -10)
        //hunger
        config.updateValue(config.hunger, -5)
        //happiness
        config.updateValue(config.happiness, +15)

        //cash
        config.updateValue(config.cash, -20)
        //time
        config.updateTime(2)
    }

    const drinkEat = () => {
        //health
        config.updateValue(config.health, -20)
        //hunger
        config.updateValue(config.hunger, +8)
        //happiness
        config.updateValue(config.happiness, +15)

        //cash
        config.updateValue(config.cash, -25)
        //time
        config.updateTime(1)

    }

    const meetPeople = () => {
        //health
        //config.updateValue(config.health, -10)

        //happiness
        config.updateValue(config.happiness, +15)

        //time
        config.updateTime(2)

        //cash
        //no changes
        // var cashVal = elements.cashValue.innerText
        // update_cash = Number(cashVal)
        // update_cash = update_cash - update_cash * (25 / 100)
        // elements.cashValue.innerHTML = update_cash.toFixed(2)
    }

    document.addEventListener('click', () => {
        config.disableElement(elements.clubDance, 4, 19)
        config.disableElement(elements.clubDrinkEat, 4, 19)
        config.disableElement(elements.clubMeetPeople, 4, 19)
    })

    elements.clubDance.addEventListener("click", dance)
    elements.clubDrinkEat.addEventListener("click", drinkEat)
    elements.clubMeetPeople.addEventListener("click", meetPeople)
})