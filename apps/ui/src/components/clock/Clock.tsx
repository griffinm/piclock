import { useEffect, useState } from "react";
import { format as formatDate } from 'date-fns';
import { Card } from "@/components/ui/card";

const UPDATE_INTERVAL = 100;

export function Clock() {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, UPDATE_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  return (
    <Card>
      <div className="text-white flex flex-col justify-center items-center font-bold p-3">
        <div className="[font-size:200px] [line-height:1]">
          {formatDate(time, 'h:mm')}
          <span className="text-7xl pl-4 text-gray-500">
            {formatDate(time, 'ss')}
          </span>
        </div>
        <div className="text-xl text-gray-500">
          {formatDate(time, 'MMM d, yyyy')}
        </div>
      </div>
    </Card>
  )
}