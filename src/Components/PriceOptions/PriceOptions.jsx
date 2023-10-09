import PriceOption from "../priceOption/priceOption";

const PriceOptions = () => {

    const PriceOptions = [
        {
          name: 'Basic Membership',
          id: 1,
          price: '$29.99',
          features: [
            'Access to gym facilities',
            'Standard equipment usage',
            'Locker room access',
            'Valid student ID required'
          ]
        },
        {
          name: 'Premium Membership',
          id: 2,
          price: '$59.99',
          features: [
            'Access to gym facilities',
            'Standard equipment usage',
            'Locker room access',
            'Valid student ID required'
          ]
        },
        {
          name: 'Student Membership',
          id: 3,
          price: '$89.99',
          features: [
            'Access to gym facilities',
            'Standard equipment usage',
            'Locker room access',
            'Valid student ID required'
          ]
        },
      ];
      

    return (
        <div>
            <h2 className="mt-40 md:mt-20 text-left text-5xl">Best Prices In The World</h2>
            <div className="grid grid-rows-3 md:grid-cols-3 gap-10 justify-between mt-10">
            {
                PriceOptions.map(option => <PriceOption key = {option.id} option= {option} ></PriceOption> )
            }
            </div>
            
        </div>
    );
};

export default PriceOptions;