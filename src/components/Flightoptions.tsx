import React from "react";
import { Plane } from "lucide-react";

const AirlineMilesCard = ({ item }: any) => {
  return (
    <div className="bg-green-800 text-white rounded-lg p-4 w-64 h-86  shadow-lg">
      <div className="flex flex-col items-center justify-between mb-2">
        <Plane className="w-6 h-6" />
        <span className="text-lg font-bold">{item.partner_program}</span>
      </div>
      <div className="text-sm mb-4 flex flex-col text-center items-center justify-center">
        <div>SYD→JFK</div>
        <div>2024-07-09 - 2024-10-07</div>
      </div>
      <div className="space-y-2">
        <MilesRow
          label="Min Business Miles"
          miles={item.min_business_miles}
          price={item.min_business_tax}
        />
        <MilesRow
          label="Min Economy Miles"
          miles={item.min_economy_miles}
          price={item.min_economy_tax}
        />
        <MilesRow
          label="Min First Miles"
          miles={item.min_first_miles}
          price={item.min_first_tax}
        />
      </div>
    </div>
  );
};

const MilesRow = ({ label, miles, price }: any) => (
  <div className="flex justify-between items-center flex-col">
    <span className="text-sm">{label}</span>
    <div>
      <div className="flex gap-3">
        <div className="font-bold">{miles || "N/A"}</div>
        {price ? <div className="text-xs">+ ${price}</div> : <></>}
      </div>
    </div>
  </div>
);

const AirlineMilesComparison = ({ data }: any) => {
  return (
    <div className="flex gap-2 mt-6  justify-center items-center flex-wrap">
      {data.length === 0 ? (
        "Try another search route"
      ) : (
        <>
          {data.map((item: any, idx: any) => (
            <AirlineMilesCard key={idx} item={item} />
          ))}
        </>
      )}
    </div>
  );
};

export default AirlineMilesComparison;
