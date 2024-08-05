import React, { useState, useEffect } from "react";
import { useContract, useContractEvents } from "@thirdweb-dev/react";

function EventListTemplate({ contractAddress, eventName }) {
  const { contract } = useContract(contractAddress);
  const { data: events, isLoading } = useContractEvents(contract, "Transfer");

  return (
    <div className="p-6 mx-auto rounded-lg shadow-lg bg-gray-50 dark:bg-gray-800">
      <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
        {eventName} Events
      </h2>
      {isLoading ? (
        <p className="text-gray-700 dark:text-gray-300">Loading...</p>
      ) : events && events.length > 0 ? (
        <ul className="space-y-4">
          {events.map((event, index) => (
            <li
              key={index}
              className="p-4 bg-gray-100 rounded-lg dark:bg-gray-700"
            >
              <p className="text-gray-900 dark:text-gray-100">
                <span className="font-semibold">From:</span> {event.from}
              </p>
              <p className="text-gray-900 dark:text-gray-100">
                <span className="font-semibold">To:</span> {event.to}
              </p>
              <p className="text-gray-900 dark:text-gray-100">
                <span className="font-semibold">Value:</span> {event.value}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-700 dark:text-gray-300">No events found.</p>
      )}
    </div>
  );
}

export default EventListTemplate;
