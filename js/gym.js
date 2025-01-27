import * as elements from './elements.js'
import * as config from './config.js'

document.addEventListener("DOMContentLoaded", () => {

  elements.gymTakeAdmission.disabled = false
  elements.gymExerciseOneHour.disabled = true
  elements.gymExerciseTwoHours.disabled = true
  elements.gymExerciseThreeHours.disabled = true
  elements.gymDietPlan.disabled = true
  elements.gymTalkTrainer.disabled = true

  const takeAdmission = () => {
    //health
    //config.updateValue(config.health, -5)
    //hunger
    config.updateValue(config.hunger, -5)
    //happiness
    config.updateValue(config.happiness, +5)

    //cash
    config.updateValue(config.cash, -10)

    //time
    config.updateTime(1);
  }

  const exerciseOneHour = () => {
    //health
    config.updateValue(config.health, +5)
    //hunger
    config.updateValue(config.hunger, -5)
    //happiness
    config.updateValue(config.happiness, +5)

    //time
    config.updateTime(1);

    //cash
    // no changes
    // var update_cash = 0
    // var cashVal = elements.cashValue.innerText
    // update_cash = Number(cashVal)
    // elements.cashValue.innerHTML = update_cash +2
  }

  const exerciseTwoHours = () => {
    //health
    config.updateValue(config.health, +6)
    //hunger
    config.updateValue(config.hunger, -6)
    //happiness
    config.updateValue(config.happiness, +5)

    //time
    config.updateTime(2);

    //cash
    // no changes
    // var update_cash = 0
    // var cashVal = elements.cashValue.innerText
    // update_cash = Number(cashVal)
    // elements.cashValue.innerHTML = update_cash +2
  }

  const exerciseThreeHours = () => {
    //health
    config.updateValue(config.health, +7)
    //hunger
    config.updateValue(config.hunger, -7)
    //happiness
    config.updateValue(config.happiness, +5)

    //time
    config.updateTime(3)

    //cash
    //no changes 
    //var update_cash = 0
    // var cashVal = elements.cashValue.innerText
    // update_cash = Number(cashVal)
    // elements.cashValue.innerHTML = update_cash +2
    //  
  }

  const dietPlan = () => {
    //health
    config.updateValue(config.health, +4)
    //hunger
    config.updateValue(config.hunger, +4)
    //happiness
    config.updateValue(config.happiness, +2)

    //cash
    config.updateValue(config.cash, -5)
    //time
    config.updateTime(1)
  }

  const talkTrainer = () => {

    //health
    //config.updateValue(config.health, +5)
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

  document.addEventListener('click', () => {
    config.disableElement(elements.gymTakeAdmission, 20, 6)
    config.disableElement(elements.gymExerciseOneHour, 20, 6)
    config.disableElement(elements.gymExerciseTwoHours, 20, 6)
    config.disableElement(elements.gymExerciseThreeHours, 20, 6)
    config.disableElement(elements.gymDietPlan, 20, 6)
    config.disableElement(elements.gymTalkTrainer, 20, 6)
  })

  elements.gymTakeAdmission.addEventListener("click", () => {
    takeAdmission()
    elements.gymTakeAdmission.disabled = true
    elements.gymExerciseOneHour.disabled = false
    elements.gymExerciseTwoHours.disabled = false
    elements.gymExerciseThreeHours.disabled = false
    elements.gymDietPlan.disabled = false
    elements.gymTalkTrainer.disabled = false
  })
  elements.gymExerciseOneHour.addEventListener("click", exerciseOneHour)
  elements.gymExerciseTwoHours.addEventListener("click", exerciseTwoHours)
  elements.gymExerciseThreeHours.addEventListener("click", exerciseThreeHours)
  elements.gymDietPlan.addEventListener("click", () => {
    dietPlan()
    elements.gymDietPlan.disabled = true
  })
  elements.gymTalkTrainer.addEventListener("click", talkTrainer)
})