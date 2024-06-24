import React from 'react';
import './Losses.css';

const losses = [
  { title: "Taxation on Fringe Benefits and Meals", content: "Fringe benefits and meals exceeding certain limits are taxed. Reduces disposable income for employees who receive these benefits, increasing their financial burden." },
  { title: "Higher Personal Income Taxes", content: "Increased tax rates on individual income, including spouse's employment and self-employment income. Reduces take-home pay for individuals, impacting their overall financial well-being." },
  { title: "Removal of VAT Exemptions on Insurance Premiums", content: "Removal of VAT exemptions on insurance premiums. Increases the cost of insurance, making it less affordable for many citizens." },
  { title: "Removal of VAT Exemptions on Various Goods", content: "Removal of VAT exemptions on agricultural pest control products, motorcycles, etc. Raises prices of these goods, affecting affordability and access for consumers." },
  { title: "Excise Duty on Digital Content", content: "Introduction of excise duty on digital content. Increases costs for consumers of digital services, potentially reducing usage and access." },
  { title: "Taxation on Employee Share Ownership Benefits", content: "Taxation on benefits from employee share ownership plans. Reduces the attractiveness of these plans for employees, impacting their financial benefits." },
  { title: "Data Protection Concerns", content: "Exemption of tax-related data from Data Protection Act provisions. Raises privacy concerns, as tax authorities can access and use personal financial data without stringent safeguards." },
  { title: "Transfer of Fee Collection Mandates", content: "Transfer of fee collection responsibilities from KRA to other bodies. Could lead to inefficiencies and inconsistencies in fee collection processes." },
  { title: "Higher Transport Costs Due to Fuel Taxation", content: "Changes in fuel taxation leading to potential price increases. Raises transportation costs for individuals and businesses, impacting daily commuting and logistics." },
  { title: "Increased Tax Liabilities on SMEs", content: "Increased tax liabilities for small and medium-sized enterprises. Reduces profitability and growth potential for SMEs, which are crucial for job creation and economic growth." },
  { title: "Higher Costs of Digital Services", content: "Implementation of digital taxes on online services. Increases costs for consumers using online platforms and digital services." },
  { title: "Higher Prices for Luxury Goods", content: "Higher excise duty on luxury goods. Makes luxury goods more expensive, reducing affordability for higher-end consumers." },
  { title: "Tax on Mobile Money Transactions", content: "Tax on mobile money transactions. Potentially reduces the usage of mobile payment platforms, which are vital for financial inclusion." },
  { title: "Higher Cost of Living", content: "Broad increases in VAT and excise duties on various goods and services. Leads to a higher overall cost of living, affecting household budgets." },
  { title: "Increased Taxation on Bank Transactions", content: "Higher taxes on bank transactions. Raises the cost of financial services, impacting savings and investment activities." },
  { title: "Reduced Disposable Income from Higher Personal Income Taxes", content: "Increased personal income taxes. Reduces disposable income for individuals, affecting their ability to save and spend." },
  { title: "Taxation on Savings and Investment Plans", content: "Increased taxation on savings and investment plans. Discourages savings and long-term financial planning, impacting financial security." },
  { title: "Higher Tax Liabilities on Pension Funds", content: "Increased taxes on pension funds. Affects retirement savings, potentially reducing the financial stability of retirees." },
  { title: "Tax on E-Commerce Transactions", content: "Implementation of taxes on e-commerce transactions. Increases costs for online shoppers, potentially reducing the attractiveness of e-commerce." },
  { title: "Increased Healthcare Costs Due to VAT on Medical Supplies", content: "Removal of VAT exemptions on medical supplies. Increases the cost of healthcare, making it less affordable for the public." },
  { title: "Higher Utility Bills from Taxation on Utilities", content: "Introduction of taxes on utilities like water and electricity. Raises monthly bills for households, affecting their disposable income." },
  { title: "Increased Educational Costs from Higher Taxes on School Supplies", content: "Increased taxation on educational materials. Raises the cost of education, affecting accessibility for students." },
  { title: "Higher Entertainment Costs from Entertainment Tax", content: "Higher taxes on entertainment services like cinema tickets and event entries. Makes entertainment more expensive, reducing accessibility for lower-income citizens." },
  { title: "Higher Costs for Telecommunication Services", content: "Increased taxes on telecommunication services. Raises phone and internet bills, impacting communication and access to information." },
  { title: "Higher Prices for Alcohol and Tobacco", content: "Higher excise duty on alcohol and tobacco products. Increases prices, affecting affordability for consumers of these products." },
  { title: "Increased Costs for Air Travel", content: "Higher taxes on air travel. Makes flights more expensive, reducing travel opportunities for citizens." },
  { title: "Higher Housing Costs from Increased Rental Income Tax", content: "Increased taxes on rental income. Could lead to higher rent prices, affecting tenants." },
  { title: "Higher Automobile Costs from Vehicle Taxation", content: "Higher taxes on vehicle purchases and registrations. Raises the cost of owning a car, impacting mobility." },
  { title: "Increased Food Prices from Tax on Groceries", content: "Removal of exemptions on basic food items. Raises grocery bills, affecting affordability of essential items." },
  { title: "Higher Education Costs from Increased University Fees", content: "Increased taxation on higher education institutions. Could lead to higher tuition fees, making higher education less accessible." },
  { title: "Increased Land Rates", content: "Higher land rates. Raises the cost of owning and maintaining land, affecting property owners." },
  { title: "Higher Agricultural Input Costs from Taxation", content: "Introduction of taxes on agricultural inputs. Increases costs for farmers, potentially reducing agricultural productivity and food supply." },
  { title: "Higher Cost of Construction Materials", content: "Increased taxes on construction materials. Raises construction costs, impacting housing affordability." },
];

const Losses = () => {
  return (
    <div className="losses">
      <h2 style={{ color: 'red' }}>Losses for Common Citizens</h2>
      {losses.map((loss, index) => (
        <div key={index} className="card loss-card">
          <h3 style={{ color: 'red' }}>{loss.title}</h3>
          <p>{loss.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Losses;
