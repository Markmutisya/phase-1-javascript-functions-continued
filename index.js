// code your solution here
function saturdayFun (planDo = "roller-skate"){
    return `This Saturday, I want to ${planDo}!`};
    saturdayFun()
    saturdayFun("bathe my dog");

    function mondayWork (Mon = "go to the office"){
        return `This Monday, I will ${Mon}.`;
    }
mondayWork()
mondayWork("be early");
function wrapAdjective(testing = "*"){
    return function (mypar = "special"){
        return `You are ${testing}${mypar}${testing}!`;
    }
}
wrapAdjective()('a diligent youth');
wrapAdjective("a dedicated programmer");