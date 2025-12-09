import { useEffect, useState } from 'react';

// Using CountAPI.xyz - a free API for counting visitors
// Format: https://api.countapi.xyz/hit/{namespace}/{key}
const NAMESPACE = 'swadeep-portfolio';
const KEY = 'visitors';

export const useViewCounter = () => {
    const [visitorCount, setVisitorCount] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const incrementVisitorCount = async () => {
            try {
                // Hit the API to increment and get the current count
                const response = await fetch(
                    `https://api.countapi.xyz/hit/${NAMESPACE}/${KEY}`
                );

                if (response.ok) {
                    const data = await response.json();
                    setVisitorCount(data.value);
                } else {
                    // Fallback: try to get the current count without incrementing
                    const getResponse = await fetch(
                        `https://api.countapi.xyz/get/${NAMESPACE}/${KEY}`
                    );
                    if (getResponse.ok) {
                        const getData = await getResponse.json();
                        setVisitorCount(getData.value);
                    }
                }
            } catch (error) {
                console.error('Failed to fetch visitor count:', error);
                // Set a fallback value or keep at 0
                setVisitorCount(0);
            } finally {
                setIsLoading(false);
            }
        };

        incrementVisitorCount();
    }, []);

    return { count: visitorCount, isLoading };
};
