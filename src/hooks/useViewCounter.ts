import { useEffect, useState } from 'react';

// Using counterapi.dev - a free API for counting visitors

export const useViewCounter = () => {
    const [visitorCount, setVisitorCount] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchVisitorCount = async () => {
            try {
                // Check if we've already counted this session to avoid spamming increments on refresh
                const hasCounted = sessionStorage.getItem('hasCountedVisit');

                if (!hasCounted) {
                    // Increment count
                    const response = await fetch('https://api.counterapi.dev/v1/swadeep-portfolio/visits/up');
                    if (response.ok) {
                        const data = await response.json();
                        setVisitorCount(data.count);
                        sessionStorage.setItem('hasCountedVisit', 'true');
                    }
                } else {
                    // Just get current count
                    const response = await fetch('https://api.counterapi.dev/v1/swadeep-portfolio/visits');
                    if (response.ok) {
                        const data = await response.json();
                        setVisitorCount(data.count);
                    }
                }
            } catch (error) {
                console.error('Error fetching visitor count:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchVisitorCount();
    }, []);

    return { count: visitorCount, isLoading };
};
