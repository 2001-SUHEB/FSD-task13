import React from 'react';

const plans = [
  {
    title: 'FREE',
    price: 0,
    features: [
      {
        icon: '✓',
        text: 'Single User',
      },
      {
        icon: '✓',
        text: '50GB Storage',
      },
      {
        icon: '✓',
        text: 'Unlimited Public Projects',
      },
      {
        icon: '✓',
        text: 'Community Access',
      },
      {
        icon: 'x',
        text: 'Unlimited Private Projects',
      },
      {
        icon: 'x',
        text: 'Dedicated Phone Support',
      },
      {
        icon: 'x',
        text: 'Free Subdomain',
      },
      {
        icon: 'x',
        text: 'Monthly Status Reports',
      },
    ],
  },
  {
    title: 'PLUS',
    price: 9,
    features: [
      {
        icon: '✓',
        text: '5 Users',
      },
      {
        icon: '✓',
        text: '50GB Storage',
      },
      {
        icon: '✓',
        text: 'Unlimited Public Projects',
      },
      {
        icon: '✓',
        text: 'Community Access',
      },
      {
        icon: '✓',
        text: 'Unlimited Private Projects',
      },
      {
        icon: '✓',
        text: 'Dedicated Phone Support',
      },
      {
        icon: '✓',
        text: 'Free Subdomain',
      },
      {
        icon: 'x',
        text: 'Monthly Status Reports',
      },
    ],
  },
  {
    title: 'PRO',
    price: 49,
    features: [
      {
        icon: '✓',
        text: 'Unlimited Users',
      },
      {
        icon: '✓',
        text: '50GB Storage',
      },
      {
        icon: '✓',
        text: 'Unlimited Public Projects',
      },
      {
        icon: '✓',
        text: 'Community Access',
      },
      {
        icon: '✓',
        text: 'Unlimited Private Projects',
      },
      {
        icon: '✓',
        text: 'Dedicated Phone Support',
      },
      {
        icon: '✓',
        text: 'Free Subdomain',
      },
      {
        icon: '✓',
        text: 'Monthly Status Reports',
      },
    ],
  },
];

const PriceCard = () => {
  return (
    <div className="price-cards">
      {plans.map((plan) => (
        <div className="price-card" key={plan.title}>
          <div className="card-header">
            <h3 className="title">{plan.title}</h3>
            <h2 className="price">
              ${plan.price}/month
            </h2>
          </div>
          <ul className="features">
            {plan.features.map((feature) => (
              <li key={feature.text}>
                <span className="icon">{feature.icon}</span>
                {feature.text}
              </li>
            ))}
          </ul>
          <button className="button">BUTTON</button>
        </div>
      ))}
    </div>
  );
};

export default PriceCard;
