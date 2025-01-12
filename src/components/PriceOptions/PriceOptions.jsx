import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Plan",
            "price": 29.99,
            "features": [
                "Access to gym equipment",
                "Locker facility",
                "1 group class per week"
            ]
        },
        {
            "id": 2,
            "name": "Standard Plan",
            "price": 49.99,
            "features": [
                "Access to gym equipment",
                "Locker facility",
                "Unlimited group classes",
                "Access to sauna"
            ]
        },
        {
            "id": 3,
            "name": "Premium Plan",
            "price": 79.99,
            "features": [
                "Access to gym equipment",
                "Locker facility",
                "Unlimited group classes",
                "Access to sauna",
                "Personal trainer sessions (2 per month)"
            ]
        },
        {
            "id": 4,
            "name": "Couples Plan",
            "price": 99.99,
            "features": [
                "Access to gym equipment for two",
                "Locker facility for two",
                "Unlimited group classes",
                "Access to sauna",
                "Couples personal training session (1 per month)"
            ]
        },
        {
            "id": 5,
            "name": "VIP Plan",
            "price": 149.99,
            "features": [
                "24/7 gym access",
                "Priority locker facility",
                "Unlimited group classes",
                "Access to sauna and spa",
                "Unlimited personal trainer sessions",
                "Free nutritional consultation"
            ]
        }
    ];


    return (
        <div>
            <h2 className="text-3xl text-green-500">Best prices in the town</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;