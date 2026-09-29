"use client";

import { useEffect, useState } from "react";

interface TodayHoursProps {
  timezone: string;
  hours: { day: string; hours: string }[];
}

export default function TodayHours({ timezone, hours }: TodayHoursProps) {
  const [today, setToday] = useState<string | null>(null);

  useEffect(() => {
    const updateToday = () => setToday(new Intl.DateTimeFormat("en-US", {
      weekday: "long",
      timeZone: timezone,
    }).format(new Date()));
    const timeout = window.setTimeout(updateToday, 0);
    const interval = window.setInterval(updateToday, 60_000);
    return () => {
      window.clearTimeout(timeout);
      window.clearInterval(interval);
    };
  }, [timezone]);

  return hours.find((item) => item.day.toLowerCase() === today?.toLowerCase())?.hours ?? "See Hours";
}
