import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

    const gymData =  {
        "gym_id": "gym123",
        "gym_name": "FitZone Gym",
        "location": "123 Main Street, Anytown, USA",
        "membership_types": [
          {
            "type_id": "basic123",
            "type": "Basic Membership",
            "price_per_month": 30.0,
            "features": [
              "Access to cardio equipment",
              "Access to weightlifting area",
              "Locker room access",
              "Free Wi-Fi",
              "Fitness assessment"
            ]
          },
          {
            "type_id": "premium123",
            "type": "Premium Membership",
            "price_per_month": 50.0,
            "features": [
              "Access to all gym areas",
              "Unlimited group fitness classes",
              "Personal trainer consultation (1 session/month)",
              "Sauna and steam room access",
              "Towel service",
              "Access to swimming pool",
              "Discounted merchandise"
            ]
          },
          {
            "type_id": "vip123",
            "type": "VIP Membership",
            "price_per_month": 80.0,
            "features": [
              "Access to all gym areas",
              "Unlimited group fitness classes",
              "Unlimited personal training sessions",
              "Nutritional consultation",
              "Sauna and steam room access",
              "Towel service",
              "Priority scheduling for classes and equipment",
              "Complimentary smoothie bar",
              "Exclusive access to VIP lounge"
            ]
          }
        ],
        "hours_of_operation": {
          "Monday": "6:00 AM - 10:00 PM",
          "Tuesday": "6:00 AM - 10:00 PM",
          "Wednesday": "6:00 AM - 10:00 PM",
          "Thursday": "6:00 AM - 10:00 PM",
          "Friday": "6:00 AM - 9:00 PM",
          "Saturday": "8:00 AM - 8:00 PM",
          "Sunday": "8:00 AM - 6:00 PM"
        }
      }


    return (
        <div>

            <h2 className="text-5xl text-center mt-5 font-bold underline">{gymData.gym_name}</h2>

            <p className="text-3xl text-center mt-4"> Location : {gymData.location}</p>

            <div className="grid grid-cols-3 gap-6 mt-12">

                {
                    gymData.membership_types.map(option => <PriceOption key={option.type_id} option={option} ></PriceOption>)
                }
            </div>



            
        </div>
    );
};

export default PriceOptions;