import React, { useState } from "react";
import { useAddress } from "@thirdweb-dev/react";
import EventListTemplate from "@/components/common/EventListTemplate";

function Transfer() {
  const address = useAddress();

  return (
    <div className="w-full">
      <EventListTemplate />
    </div>
  );
}

export default Transfer;
