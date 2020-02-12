import React from "react";
import "../style/Matrix.css";
import Req from "../elements/Req";
import StatsAndPeople from "../elements/StatsAndPeople";
import PeopleStat from "../elements/PeopleStat";

const categories = [
  { id: "1", name: "HSE", col: "1" },
  { id: "2", name: "Finance", col: "2" },
  { id: "3", name: "Logistics", col: "6" },
  { id: "4", name: "Management", col: "3" }
];
const criteria = [
  { id: "1", name: "Health & Safety (Occupational)" },
  { id: "2", name: "SAP - Basic User" },
  { id: "3", name: "SAP - Key User" },
  { id: "4", name: "Shipment Planning" },
  { id: "5", name: "SAP - Logistic Transactions" },
  { id: "6", name: "SAP Transactions - Logistics Reporting" },
  { id: "7", name: "Specific Customer Logistic Instructions" },
  { id: "8", name: "Transport Quotations" },
  { id: "9", name: "Transport Documents" },
  { id: "10", name: "Packaging requirements for dangerous materials" },
  { id: "11", name: "Packaging by transport type" },
  { id: "12", name: "Shipment Tracking" },
  { id: "13", name: "German Language" },
  { id: "14", name: "French Language" },
  { id: "15", name: "Phone Usage" }
];

const Matrix = () => {
  return (
    <div className="container" style={{ marginTop: "10%" }}>
      <Req categories={categories} criteria={criteria} />
      <StatsAndPeople />
      <PeopleStat />
    </div>
  );
};

export default Matrix;
