import * as elements from './elements.js'
import * as config from './config.js'

document.addEventListener("DOMContentLoaded", () => {

    let admissionFlag1 = false
    let feesFlag1 = false
    let admissionFlag2 = true
    let feesFlag2 = true
    elements.universityPayFees.disabled = true
    elements.universityAttendClasses.disabled = true
    elements.universityGroupStudy.disabled = true
    elements.universityClubMeeting.disabled = true
    elements.universityEatCanteen.disabled = true
    elements.universityPlayGames.disabled = true
    elements.universityStudyLibrary.disabled = true

    const admission = () => {
        //health
        //config.updateValue(config.health, )

        //happiness
        config.updateValue(config.happiness, +2)

        //cash
        config.updateValue(config.cash, -500)

        //time
        config.updateTime(1);
    }

    const payFees = () => {
        //health
        //config.updateValue(config.health, -2)


        //happiness
        //no changes
        // var update_happiness = 0
        // var happinessVal = elements.happinessValue.innerText
        // update_happiness = Number(happinessVal)
        // elements.happinessValue.innerHTML = update_happiness + 2

        //cash
        config.updateValue(config.cash, -500)

        //time
        config.updateTime(1);
    }

    const attendClasses = () => {
        //health
        //config.updateValue(config.health, -4)

        //hunger
        config.updateValue(config.hunger, -2)
        //happiness
        config.updateValue(config.happiness, +4)

        //time
        config.updateTime(1);

        //cash
        //no changes
        // var update_cash = 0
        // var cashVal = elements.cashValue.innerText
        // update_cash = Number(cashVal)
        // elements.cashValue.innerHTML = update_cash + 2
    }

    const groupStudy = () => {
        //health
        // config.updateValue(config.health, -3)
        //hunger
        config.updateValue(config.hunger, -3)

        //happiness
        config.updateValue(config.happiness, +3)

        //time
        config.updateTime(1);

        //cash
        //no changes
        // var update_cash = 0
        // var cashVal = elements.cashValue.innerText
        // update_cash = Number(cashVal)
        // elements.cashValue.innerHTML = update_cash + 2
    }

    const clubMeeting = () => {
        //health
        //config.updateValue(config.health, -3)
        //hunger
        config.updateValue(config.hunger, -3)
        //happiness
        config.updateValue(config.happiness, +3)

        //time
        config.updateTime(1);
        //cash
        //no changes
        // var update_cash = 0
        // var cashVal = elements.cashValue.innerText
        // update_cash = Number(cashVal)
        // elements.cashValue.innerHTML = update_cash + 2
    }

    const eatCanteen = () => {
        //health
        config.updateValue(config.health, -4)

        //hunger
        config.updateValue(config.hunger, +4)

        //happiness
        config.updateValue(config.happiness, +4)

        //cash
        config.updateValue(config.cash, -4)

        //time
        config.updateTime(1);
    }

    const playGames = () => {
        //config.updateValue(config.health, +4)
        //hunger
        config.updateValue(config.hunger, -4)
        //happiness
        config.updateValue(config.happiness, +4)

        //time
        config.updateTime(1);

        //cash
        //no changes
        // var update_cash = 0
        // var cashVal = elements.cashValue.innerText
        // update_cash = Number(cashVal)
        // elements.cashValue.innerHTML = update_cash + 2
    }

    const studyLibrary = () => {
        //health
        // config.updateValue(config.health, +3)
        //hunger
        config.updateValue(config.hunger, -3)

        //happiness
        config.updateValue(config.happiness, +3)

        //time
        config.updateTime(1);

        //cashhValue
        //no changes
        // var update_cash = 0
        // var cashVal = elements.cashValue.innerText
        // update_cash = Number(cashVal)
        // elements.cashValue.innerHTML = update_cash + 2
    }

    document.addEventListener('click', () => {
        if (admissionFlag2)
            config.disableElement(elements.universityAdmission, 18, 9)
        if (admissionFlag1 && feesFlag2)
            config.disableElement(elements.universityPayFees, 18, 9)
        if (feesFlag1) {
            config.disableElement(elements.universityAttendClasses, 18, 9)
            config.disableElement(elements.universityGroupStudy, 18, 9)
            config.disableElement(elements.universityClubMeeting, 18, 9)
            config.disableElement(elements.universityEatCanteen, 18, 9)
            config.disableElement(elements.universityPlayGames, 18, 9)
            config.disableElement(elements.universityStudyLibrary, 18, 9)
        }
    })

    elements.universityAdmission.addEventListener("click", () => {
        admission()
        admissionFlag1 = true
        admissionFlag2 = false
        elements.universityAdmission.disabled = true
        elements.universityPayFees.disabled = false
        elements.universityAttendClasses.disabled = true
        elements.universityGroupStudy.disabled = true
        elements.universityClubMeeting.disabled = true
        elements.universityEatCanteen.disabled = true
        elements.universityPlayGames.disabled = true
        elements.universityStudyLibrary.disabled = true
    })
    elements.universityPayFees.addEventListener("click", () => {
        feesFlag1 = true
        feesFlag2 = false
        payFees()
        elements.universityAdmission.disabled = true
        elements.universityPayFees.disabled = true
        elements.universityAttendClasses.disabled = false
        elements.universityGroupStudy.disabled = false
        elements.universityClubMeeting.disabled = false
        elements.universityEatCanteen.disabled = false
        elements.universityPlayGames.disabled = false
        elements.universityStudyLibrary.disabled = false
    })
    elements.universityAttendClasses.addEventListener("click", attendClasses)
    elements.universityGroupStudy.addEventListener("click", groupStudy)
    elements.universityClubMeeting.addEventListener("click", clubMeeting)
    elements.universityEatCanteen.addEventListener("click", eatCanteen)
    elements.universityPlayGames.addEventListener("click", playGames)
    elements.universityStudyLibrary.addEventListener("click", studyLibrary)
})