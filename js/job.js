import * as elements from './elements.js'
import * as config from './config.js'

document.addEventListener("DOMContentLoaded", () => {

      const workOneHour = () => {
            //health
            // config.updateValue(config.health, -5)

            //hunger
            config.updateValue(config.hunger, -5)


            //happiness
            config.updateValue(config.happiness, +5)

            //cash
            config.updateValue(config.cash, +20)
            //time
            config.updateTime(1);
      }

      const workThreeHours = () => {
            //health
            //config.updateValue(config.health, -5)
            //hunger
            config.updateValue(config.hunger, -6)

            //happiness
            config.updateValue(config.happiness, +10)

            //cash
            config.updateValue(config.cash, +40)
            //time
            config.updateTime(3);
      }


      const workFiveHours = () => {
            //health
            // config.updateValue(config.health, -5)

            //hunger
            config.updateValue(config.hunger, -7)


            //happiness
            config.updateValue(config.happiness, +15)

            //cash
            config.updateValue(config.cash, +60)
            //time
            config.updateTime(5);
      }

      const workNineHours = () => {
            //health
            config.updateValue(config.health, -5)
            //hunger
            config.updateValue(config.hunger, -8)


            //happiness
            config.updateValue(config.happiness, +20)

            //cash
            config.updateValue(config.cash, +40)

            //time
            config.updateTime(9);
      }

      const takeBreak = () => {
            //health
            config.updateValue(config.health, +5)

            //hunger
            config.updateValue(config.hunger, +5)

            //happiness
            config.updateValue(config.happiness, +5)

            //cash
            //no changes
            // var update_cash = 0
            // var cashVal = elements.cashValue.innerText
            // update_cash = Number(cashVal)
            // elements.cashValue.innerHTML = update_cash +2

            //time
            config.updateTime(1);
      }

      const attendMeeting = () => {
            //health
            //config.updateValue(config.health, -5)
            //hunger
            config.updateValue(config.hunger, -5)

            //happiness
            config.updateValue(config.happiness, +5)
            //time
            config.updateTime(1);

            //cash
            //no changes
            // var update_cash = 0
            // var cashVal = elements.cashValue.innerText
            // update_cash = Number(cashVal)
            // elements.cashValue.innerHTML = update_cash +2
      }

      const applyPromotion = () => {
            //health
            // config.updateValue(config.health, -4)
            //hunger
            config.updateValue(config.hunger, -5)

            //happiness
            config.updateValue(config.happiness, -4)

            //time
            config.updateTime(1);

            //cash
            //no changes
            // var update_cash = 0
            // var cashVal = elements.cashValue.innerText
            // update_cash = Number(cashVal)
            // elements.cashValue.innerHTML = update_cash +2
      }

      document.addEventListener('click', () => {
            config.disableElement(elements.jobWorkOneHour, 20, 10)
            config.disableElement(elements.jobWorkThreeHours, 20, 10)
            config.disableElement(elements.jobWorkFiveHours, 20, 10)
            config.disableElement(elements.jobWorkNineHours, 20, 10)
            config.disableElement(elements.jobTakeBreak, 20, 10)
            config.disableElement(elements.jobAttendMeeting, 20, 10)
            config.disableElement(elements.jobApplyPromotion, 20, 10)
      })

      elements.jobWorkOneHour.addEventListener("click", workOneHour)
      elements.jobWorkThreeHours.addEventListener("click", workThreeHours)
      elements.jobWorkFiveHours.addEventListener("click", workFiveHours)
      elements.jobWorkNineHours.addEventListener("click", workNineHours)
      elements.jobTakeBreak.addEventListener("click", takeBreak)
      elements.jobAttendMeeting.addEventListener("click", attendMeeting)
      elements.jobApplyPromotion.addEventListener("click", applyPromotion)
})