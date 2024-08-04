import React, { useState, useEffect } from "react";

function EventListTemplate({ getEvents, eventName }) {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      const newEvents = await getEvents();
      setEvents(newEvents);
      setLoading(false);
    };
    fetchEvents();
  }, [getEvents]);

  return <div>Event List Template</div>;
}

export default EventListTemplate;
