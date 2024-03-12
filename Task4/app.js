function findHigherPricePerHour(service) {
    if (service.length === 0) {
        return null;
    }

    let HigherPricePerHour = service[0];

    for (let i = 0; i < service.length; i++) {
        if (service[i].price / service[i].duration > HigherPricePerHour.price / HigherPricePerHour.duration) {
            HigherPricePerHour = service[i];
        }
    }

    return HigherPricePerHour;
}

function findTotalCost(service) {
    let totalCost = 0;

    for (let i = 0; i < service.length; i++) {
        totalCost += service[i].price;
    }

    return totalCost;
}


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