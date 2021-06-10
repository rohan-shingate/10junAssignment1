const counter = (
    function () {
        var counterValue = 1;
        // change By a particular value => 1,2,3
        function changeBy(val) {
            console.log("changeBy called");
            counterValue = counterValue + val;
        }
        return {
            increment: function () {
                console.log("increment called");
                changeBy(1);
            },
            decrement: function () {
                console.log("decrement called");
                changeBy(-1);
            },
            value: function () {
                return counterValue;
            }
  
        };
    })();

    ///for Maggie

function onClick(event) {
    console.log("onclick called on"+event.target.id);
    const result = document.getElementById("result");

    switch (event.target.id) {
        case "btn1":
            counter.decrement()

            break;
        case "btn2":
            counter.increment()
            break;
        default:
            console.log("default is called");
            break;
    }
    result.innerHTML = counter.value();
    total_amount_maggie.innerHTML=counter.value()*20;
}
/*
///for Pepsi
function onClick(event2) {
    console.log("onclick called on"+event2.target.id);
    const result2 = document.getElementById("result2");

    switch (event2.target.id) {
        case "btn3":
            counter.decrement()

            break;
        case "btn4":
            counter.increment()
            break;
        default:
            console.log("default is called");
            break;
    }
    result2.innerHTML = counter.value();
    total_amount_pepsi.innerHTML=counter.value()*80;
}
*/