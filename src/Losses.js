import React from 'react';
import './Losses.css';

const lossesData = [
  "Taxation on Fringe Benefits and Meals",
  "Higher Personal Income Taxes",
  "Removal of VAT Exemptions on Insurance Premiums",
  "Removal of VAT Exemptions on Various Goods",
  "Excise Duty on Digital Content",
  "Taxation on Employee Share Ownership Benefits",
  "Data Protection Concerns",
  "Transfer of Fee Collection Mandates",
  "Higher Transport Costs Due to Fuel Taxation",
  "Increased Tax Liabilities on SMEs",
  "Higher Costs of Digital Services",
  "Higher Prices for Luxury Goods",
  "Tax on Mobile Money Transactions",
  "Higher Cost of Living",
  "Increased Taxation on Bank Transactions",
  "Reduced Disposable Income from Higher Personal Income Taxes",
  "Taxation on Savings and Investment Plans",
  "Higher Tax Liabilities on Pension Funds",
  "Tax on E-Commerce Transactions",
  "Increased Healthcare Costs Due to VAT on Medical Supplies",
  "Higher Utility Bills from Taxation on Utilities",
  "Increased Educational Costs from Higher Taxes on School Supplies",
  "Higher Entertainment Costs from Entertainment Tax",
  "Higher Costs for Telecommunication Services",
  "Higher Prices for Alcohol and Tobacco",
  "Increased Costs for Air Travel",
  "Higher Housing Costs from Increased Rental Income Tax",
  "Higher Automobile Costs from Vehicle Taxation",
  "Increased Food Prices from Tax on Groceries",
  "Higher Education Costs from Increased University Fees"
];

const Losses = () => {
  return (
    <div className="Losses">
      <h2>Losses for Common Citizens</h2>
      <ul>
        {lossesData.map((loss, index) => (
          <li key={index}>{loss}</li>
        ))}
      </ul>
    </div>
  );
}

export default Losses;
