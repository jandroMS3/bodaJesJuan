"use client";

import { useEffect, useState } from "react";

const countdownUnits = [
  { key: "days", label: "Días" },
  { key: "hours", label: "Horas" },
  { key: "minutes", label: "Minutos" },
  { key: "seconds", label: "Segundos" },
] as const;

type CountdownValues = Record<(typeof countdownUnits)[number]["key"], number>;

function getCountdownValues(targetDateTime: string): CountdownValues {
  const remainingSeconds = Math.max(
    0,
    Math.floor((new Date(targetDateTime).getTime() - Date.now()) / 1000),
  );

  return {
    days: Math.floor(remainingSeconds / 86400),
    hours: Math.floor((remainingSeconds % 86400) / 3600),
    minutes: Math.floor((remainingSeconds % 3600) / 60),
    seconds: remainingSeconds % 60,
  };
}

type CountdownProps = {
  targetDateTime: string;
};

export function Countdown({ targetDateTime }: CountdownProps) {
  const [values, setValues] = useState<CountdownValues | null>(null);

  useEffect(() => {
    const updateCountdown = () => {
      setValues(getCountdownValues(targetDateTime));
    };

    updateCountdown();
    const intervalId = window.setInterval(updateCountdown, 1000);

    return () => window.clearInterval(intervalId);
  }, [targetDateTime]);

  return (
    <div className="countdown" role="timer" aria-label="Cuenta atrás hasta la ceremonia">
      {countdownUnits.map((unit) => {
        const value = values?.[unit.key];
        const formattedValue =
          value === undefined
            ? "--"
            : unit.key === "days"
              ? String(value)
              : String(value).padStart(2, "0");

        return (
          <div className="countdown__unit" key={unit.key}>
            <span className="countdown__value">{formattedValue}</span>
            <span className="countdown__label">{unit.label}</span>
          </div>
        );
      })}
    </div>
  );
}