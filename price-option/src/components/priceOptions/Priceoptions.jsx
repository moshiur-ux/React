
import PriceOption from '../PriceOption/PriceOption';

const Priceoptions = () => {
    const gymPriceOptions = [
        {
          id: 1,
          name: "Basic Membership",
          price: 29.99,
          features: [
            "Access to gym facilities",
            "Cardio equipment usage",
            "Locker room access",
            "Basic fitness classes",
          ],
        },
        {
          id: 2,
          name: "Standard Membership",
          price: 49.99,
          features: [
            "Access to gym facilities",
            "Cardio equipment usage",
            "Locker room access",
            "Full range of fitness classes",
            "Personal trainer consultation",
          ],
        },
        {
          id: 3,
          name: "Premium Membership",
          price: 79.99,
          features: [
            "Access to gym facilities",
            "Cardio equipment usage",
            "Locker room access",
            "Full range of fitness classes",
            "Unlimited personal trainer sessions",
            "Sauna and spa access",
          ],
        },
        {
          id: 4,
          name: "Student Membership",
          price: 24.99,
          features: [
            "Access to gym facilities",
            "Cardio equipment usage",
            "Locker room access",
            "Basic fitness classes",
            "Valid student ID required",
          ],
        },
        {
          id: 5,
          name: "Family Membership",
          price: 99.99,
          features: [
            "Access to gym facilities for family members",
            "Cardio equipment usage",
            "Locker room access",
            "Full range of fitness classes",
            "Discounted child membership",
          ],
        },
        {
          id: 6,
          name: "Senior Membership",
          price: 39.99,
          features: [
            "Access to gym facilities",
            "Cardio equipment usage",
            "Locker room access",
            "Full range of fitness classes",
            "Priority class scheduling for seniors",
          ],
        },
        {
          id: 7,
          name: "Corporate Membership",
          price: 69.99,
          features: [
            "Access to gym facilities",
            "Cardio equipment usage",
            "Locker room access",
            "Full range of fitness classes",
            "Corporate group fitness events",
            "Employee ID required",
          ],
        },
        {
          id: 8,
          name: "Weekend Warrior",
          price: 19.99,
          features: [
            "Access to gym facilities on weekends only",
            "Cardio equipment usage",
            "Locker room access",
            "Basic fitness classes",
          ],
        },
        {
          id: 9,
          name: "Yoga and Meditation",
          price: 34.99,
          features: [
            "Access to yoga and meditation classes",
            "Cardio equipment usage",
            "Locker room access",
            "Weekly yoga and meditation sessions",
          ],
        },
        {
          id: 10,
          name: "Ultimate Fitness",
          price: 129.99,
          features: [
            "Access to gym facilities",
            "Cardio equipment usage",
            "Locker room access",
            "Full range of fitness classes",
            "Unlimited personal trainer sessions",
            "Sauna, spa, and tanning access",
            "Nutrition consultation",
          ],
        },
      ];
      


    
    return (
        <div>
          <h2 className='text-5xl'>Best prices in the town</h2>
          <div className='grid md:grid-cols-3 gap-4'>
          {
             gymPriceOptions.map(option=> <PriceOption key={option.id} option={option}></PriceOption>)
           }
          </div>
            
        </div>
    );
};

export default Priceoptions;