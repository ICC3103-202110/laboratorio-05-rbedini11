const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')

function getTitle(){
    return chalk.blue(
        figlet.textSync(
            'Tip Calculator App',
            {
                horizontalLayout: 'full',
                font: 'Nancyj-Underlined'
            }
        )
    )
}

function getTable(model){
    const {billAmount} = model
    const {percent} = model
    const {tip}= model
    const {total}= model
    return [
        {BillAmount: billAmount},
        {Percent: percent},
        {Tip: tip},
        {Total: total}
    ]
}

function inputForm(model){
    const {billAmount} = model
    const {percent}= model
    const message1 = 'Bill Amount?'
    const message2= 'Tip(%)?'
    return inquirer.prompt([
        {
            name: 'billAmount',
            type: 'billAmount',
            message: message1,
            default: billAmount
            },
        { 
        name: 'percent',
        type: 'percent',
        message: message2,
        default: percent
        }
    ])
}



// Get actual console view
function view(model){
    return {
        title: getTitle(),
        table: getTable(model)
    }
}

module.exports = {
    view, 
    inputForm
}
