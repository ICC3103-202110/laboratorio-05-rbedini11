function tipValue(percent, billAmount){
    return (percent*0.01)*billAmount
}

function update(billAmount,percent, model){
    const newTip= tipValue(percent,billAmount)
    const newTotal = 1*billAmount + newTip
    return {
        ...model,
        total: '$'+newTotal,
        billAmount: '$'+billAmount,
        percent: percent+'%',
        tip:'$'+newTip
    }
}

module.exports = {
    update
}