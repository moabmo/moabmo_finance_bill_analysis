import React from 'react';
import './Home.css';

const wins = [
  { title: "Affordable Housing Relief", content: "The bill includes provisions for affordable housing relief, making it easier for lower and middle-income families to own homes. This can help reduce the housing deficit and provide decent living conditions for many citizens." },
  { title: "Insurance Relief on Premium Payments", content: "Relief is provided on premiums paid for life insurance, education policies with long maturity periods, and health policies. This encourages citizens to invest in insurance, ensuring better financial security and health coverage." },
  { title: "Regulation of Digital Marketplaces", content: "Clear definitions and regulations for digital marketplaces. This can promote fair competition and protect consumers from fraudulent online activities." },
  { title: "Education and Health Policies Relief", content: "Education policies with a maturity period of at least ten years and health policies are eligible for tax relief. Supports long-term investment in education and health, essential for personal and national development." },
  { title: "Tax Exemption on Employee Share Ownership Plans", content: "Shares awarded to employees are tax-exempt. Encourages employee ownership, leading to better employee motivation and company loyalty." },
  { title: "NHIF Contributions Tax Relief", content: "Contributions to the National Hospital Insurance Fund (NHIF) are eligible for tax relief. Makes health insurance more affordable and accessible, improving overall public health." },
  { title: "Inclusion of Digital Content Monetization in Tax Regime", content: "Digital content monetization is included in the tax regime. Formalizes and regulates the digital content sector, ensuring fair taxation and potentially increasing revenue for the state." },
  { title: "Tax Exemptions for Inputs in Manufacturing", content: "Inputs and raw materials used in the manufacture of mosquito repellent and tea packaging materials are tax-exempt. Reduces production costs, potentially lowering consumer prices and benefiting public health." },
  { title: "Enhanced Public Finance Management", content: "Implementation of accrual accounting in public finance. Improves transparency and accountability, ensuring better use of public funds." },
  { title: "Support for Training Programs", content: "Collection of training levy under the Industrial Training Act. Supports skill development programs, enhancing workforce capabilities." },
  { title: "Improved Tax Collection Procedures", content: "Amendments to the Tax Procedure Act. Enhances fairness and clarity in tax collection, reducing disputes and improving compliance." },
  { title: "Tax Exemptions for Youth-Led Startups", content: "Tax exemptions for startups led by youth. Encourages entrepreneurship and job creation among the youth, reducing unemployment." },
  { title: "Support for Small and Medium Enterprises (SMEs)", content: "Various tax reliefs aimed at SMEs. Supports growth and sustainability of SMEs, which are crucial for economic development and job creation." },
  { title: "Encouragement of Public Participation", content: "Provisions encouraging public participation in financial decision-making. Ensures that citizen voices are heard in financial policies, promoting transparency and inclusivity." },
  { title: "Efficient Revenue Collection", content: "Improved mechanisms for tax collection. Reduces tax evasion, increasing public funds available for development projects." },
  { title: "Consumer Protection in Financial Transactions", content: "Stronger regulations to protect consumers. Ensures fair treatment and safety in financial dealings, building consumer confidence." },
  { title: "Adoption of Digital Tax Systems", content: "Implementation of digital tax systems. Facilitates easier compliance, reducing administrative burdens for taxpayers." },
  { title: "Support for Agricultural Sector", content: "Tax incentives for farmers. Encourages agricultural production, enhancing food security and rural incomes." },
  { title: "Investment in Healthcare Infrastructure", content: "Tax reliefs for investments in healthcare. Improves access to quality healthcare services, promoting public health." },
  { title: "Encouragement of Public-Private Partnerships (PPPs)", content: "Support for PPPs in infrastructure development. Facilitates development of public amenities, improving living standards." },
  { title: "Incentives for Renewable Energy Projects", content: "Tax incentives for green energy projects. Promotes environmentally friendly practices, contributing to sustainable development." },
  { title: "Increased Funding for Social Welfare Programs", content: "Allocation of funds to social welfare programs. Supports vulnerable populations, reducing poverty and inequality." },
  { title: "Support for Educational Institutions", content: "Tax reliefs for investments in education. Enhances the quality and accessibility of education, promoting long-term economic growth." },
  { title: "Boost for Tourism Sector", content: "Tax incentives to promote tourism. Creates jobs and generates revenue, enhancing economic growth." },
  { title: "Support for Local Manufacturers", content: "Tax reliefs for local manufacturing. Boosts industrial production, creating jobs and reducing dependency on imports." },
  { title: "Promotion of IT Sector Growth", content: "Tax incentives for tech companies. Encourages innovation and growth in the IT sector, contributing to economic diversification." },
  { title: "Support for National Housing Initiatives", content: "Funds and incentives for national housing projects. Reduces homelessness and improves living conditions for low-income families." },
  { title: "Exemption of Agricultural Pest Control Products from VAT", content: "Removal of VAT on agricultural pest control products. Reduces costs for farmers, increasing agricultural productivity and food security." },
  { title: "Exemption of Motorcycle Imports from VAT", content: "Removal of VAT on motorcycles. Lowers transportation costs for individuals and businesses, especially in rural areas." },
  { title: "Support for Creative Industries", content: "Tax reliefs for creative industries, including film, music, and arts. Encourages growth in creative sectors, contributing to cultural development and economic diversification." },
  { title: "Investment in Renewable Energy Projects", content: "Tax incentives for renewable energy investments. Promotes clean energy production, reducing environmental impact and fostering sustainable development." },
  { title: "Support for the Healthcare Sector", content: "Tax reliefs for healthcare facilities and services. Improves access to quality healthcare, promoting public health and well-being." },
];

const Wins = () => {
  return (
    <div className="wins">
      <h2>Wins for Common Citizens</h2>
      {wins.map((win, index) => (
        <div key={index} className="card win-card">
          <h3>{win.title}</h3>
          <p>{win.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Wins;