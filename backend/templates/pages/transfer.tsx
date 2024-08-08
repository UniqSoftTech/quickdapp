import React from "react";
import { useAddress } from "@thirdweb-dev/react";
import EventListTemplate from "@/components/common/EventListTemplate";

const Transfer: React.FC = () => {
  const address = useAddress();

  return (
    <div className="w-full">
      <EventListTemplate />
    </div>
  );
};

export default Transfer;
