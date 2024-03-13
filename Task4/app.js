function findHigherPricePerHour(services) {
    if (services.length === 0) {
        return null;
    }
    let HigherPricePerHour = services[0];
    for (let i = 1; i < services.length; i++) {

        if (services[i].price / services[i].duration > HigherPricePerHour.price / HigherPricePerHour.duration) {
            HigherPricePerHour = services[i];
        }
    }

    return HigherPricePerHour;
}

function findTotalCost(services) {
    let totalCost = 0;

    for (let i = 0; i < services.length; i++) {
        totalCost += services[i].price;
    }

    return totalCost;
}

const findTotalCostOptimised = (services) => services.reduce((accumulator, value) => accumulator + value.price, 0);



let serviceList = [
    {
        "name": "Mobile Application Development",
        "price": 15.00,
        "duration": 3
    },
    {
        "name": "Web-site Development",
        "price": 6.50,
        "duration": 2
    },
    {
        "name": "Desktop Application Development",
        "price": 127.00,
        "duration": 120
    }
]

console.log(findHigherPricePerHour(serviceList));
console.log(findTotalCost(serviceList));
console.log(findTotalCostOptimised(serviceList));