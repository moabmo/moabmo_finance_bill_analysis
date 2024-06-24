import React from 'react';
import './Wins.css';

const winsData = [
  "Affordable Housing Relief",
  "Insurance Relief on Premium Payments",
  "Regulation of Digital Marketplaces",
  "Education and Health Policies Relief",
  "Employer Contributions to Affordable Housing Fund",
  "Tax Exemption on Employee Share Ownership Plans",
  "NHIF Contributions Tax Relief",
  "Inclusion of Digital Content Monetization in Tax Regime",
  "Tax Exemptions for Inputs in Manufacturing",
  "Potential Lower Fuel Prices",
  "Enhanced Public Finance Management",
  "Support for Training Programs",
  "Streamlining Affordable Housing Act",
  "Improved Tax Collection Procedures",
  "Tax Exemptions for Youth-Led Startups",
  "Support for Small and Medium Enterprises (SMEs)",
  "Encouragement of Public Participation",
  "Efficient Revenue Collection",
  "Consumer Protection in Financial Transactions",
  "Adoption of Digital Tax Systems",
  "Support for Agricultural Sector",
  "Investment in Healthcare Infrastructure",
  "Encouragement of Public-Private Partnerships (PPPs)",
  "Incentives for Renewable Energy Projects",
  "Increased Funding for Social Welfare Programs",
  "Support for Educational Institutions",
  "Boost for Tourism Sector",
  "Support for Local Manufacturers",
  "Promotion of IT Sector Growth",
  "Support for National Housing Initiatives"
];

const Wins = () => {
  return (
    <div className="Wins">
      <h2>Wins for Common Citizens</h2>
      <ul>
        {winsData.map((win, index) => (
          <li key={index}>{win}</li>
        ))}
      </ul>
    </div>
  );
}

export default Wins;
