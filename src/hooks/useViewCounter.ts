import { useEffect, useState } from 'react';

const VIEW_COUNT_KEY = 'portfolio_view_count';

export const useViewCounter = () => {
    const [viewCount, setViewCount] = useState<number>(0);

    useEffect(() => {
        // Get current count from localStorage
        const storedCount = localStorage.getItem(VIEW_COUNT_KEY);
        const currentCount = storedCount ? parseInt(storedCount, 10) : 0;

        // Increment the count
        const newCount = currentCount + 1;

        // Update state and localStorage
        setViewCount(newCount);
        localStorage.setItem(VIEW_COUNT_KEY, newCount.toString());
    }, []);

    return viewCount;
};
