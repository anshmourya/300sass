import { useEffect, useState } from 'react';
import "../ui/Timer.css"

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const endDate = new Date(now.getFullYear() + 1, 0, 5); // 5th January of next year
      const diff = endDate.getTime() - now.getTime();

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      {timeLeft ? (
        <div className='absolute right-5 top-3 text-3xl max-md:hidden gradient-text'>
         <p>{timeLeft.days}:{timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}</p>
        </div>
      ) : (
        <p className='absolute right-5 top-3 text-3xl max-md:hidden gradient-text'>Loading...</p>
      )}
    </div>
  );
};

export default Timer;