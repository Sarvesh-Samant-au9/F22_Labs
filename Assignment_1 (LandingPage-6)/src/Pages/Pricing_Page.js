import React from "react";
import Pricing from "../Components/PricingPage_Components/Pricing";
import { pricingData, gridData } from "../Components/Data/data";
const Pricing_Page = () => {
  return <Pricing pricingData={pricingData} gridData={gridData} />;
};

export default Pricing_Page;
