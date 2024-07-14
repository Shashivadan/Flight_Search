"use client";

import React, { useState } from "react";

import AirlineMilesComparison from "./Flightoptions";
import Options from "./Options";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { cabinClassList, destinationList, originList } from "@/lib/utils";

export const FlightSearch = () => {
  const [data, setData] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data: any) => {
    try {
      const response = await axios.post("https://cardgpt.in/apitest", {
        origin: data.Origin,
        destination: data.Destination,
        partnerPrograms: [
          "Air Canada",
          "United Airlines",
          "KLM",
          "Qantas",
          "American Airlines",
          "Etihad Airways",
          "Alaska Airlines",
          "Qatar Airways",
          "LifeMiles",
        ],
        stops: 2,
        departureTimeFrom: "2024-07-09T00:00:00Z",
        departureTimeTo: "2024-10-07T00:00:00Z",
        isOldData: false,
        limit: 302,
        offset: 0,
        cabinSelection: [data.CabinSelection],
        date: "2024-07-09T12:00:17.796Z",
      });
      //   console.log(response.data);
      setData(response.data.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  console.log(data);

  const [origin, setOrigin] = useState(originList);
  const [destination, setDestination] = useState(destinationList);
  const [cabinClass, setCabinClass] = useState(cabinClassList);

  return (
    <div className="bg-green-900 p-6 rounded-lg mx-auto ">
      <h2 className="text-white text-xl mb-4">
        Choose Origin & Destination Airports:
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-4">
          <div>
            <Options
              register={register}
              onChange={(e) => {
                console.log(e.target.value);
              }}
              label="Origin"
              optionsList={origin}
            />
          </div>

          <div>
            <Options
              register={register}
              label="Destination"
              optionsList={destination}
            />
          </div>

          <div>
            <Options
              register={register}
              label="CabinSelection"
              optionsList={cabinClass}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-teal-500 text-white p-2 rounded hover:bg-teal-600 transition"
          >
            Search
          </button>
        </div>
      </form>

      <AirlineMilesComparison data={data} />
      <div className="flex gap-2 mt-6 w-full justify-center items-center flex-wrap"></div>
    </div>
  );
};
