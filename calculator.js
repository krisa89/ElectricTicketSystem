class Calculator{
    multiply(a,b){
        return a * b
    }

    add(a, b) {
        return a + b;
    }

    sub(a,b){
        return a - b
    }

    investment(conditions){
        var allMoney = conditions.totalMoney
        for(var i = 0;i < conditions.years; i++){
            allMoney = (allMoney + conditions.monthlyInvestment * 12) * (1 + conditions.interestRate)
        }
        return allMoney
    }
}

module.exports = Calculator