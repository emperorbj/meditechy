    import { useEffect, useState } from 'react';

    const NumberTicker = ({ start, end, duration }) => {
    const [number, setNumber] = useState(start);

    useEffect(() => {
        // Calculate the total number of ticks and the interval between each tick
        const totalTicks = Math.abs(end - start);
        const tickInterval = duration / totalTicks;

        const tick = () => {
        setNumber((prev) => (start < end ? prev + 1 : prev - 1));
        };

        // Set up the interval for the ticker
        const intervalId = setInterval(() => {
        setNumber((prev) => {
            if (prev === end) {
            clearInterval(intervalId);
            return prev;
            }
            return start < end ? prev + 1 : prev - 1;
        });
        }, tickInterval);

        // Clear the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, [start, end, duration]);

    return (
        <div className="number-ticker">
            <p className="text-blue-400 text-3xl font-semibold mt-[5px]">{number}</p>
        </div>
    );
    };

    export default NumberTicker;
