import {useEffect, useState} from 'react';

const STORAGE_KEY = 'my-shared-api-data';
const URL = "http://localhost:3005/transformers";

// The Component which grabs the data from the API and store it into localstorage
// Also prevents fetch if data already exists
export function useSharedData<T>(defaultValue: T) {
    const [data, setData] = useState<T>(() => {
        const cached = localStorage.getItem(STORAGE_KEY);
        return cached ? JSON.parse(cached) : defaultValue;
    });

    useEffect(() => {
        if (localStorage.getItem(STORAGE_KEY)) return; // Skip if already cached

        fetch(URL)
            .then(res => res.json())
            .then(fetched => {
                setData(fetched);
                localStorage.setItem(STORAGE_KEY, JSON.stringify(fetched));
            });
    }, []);

    // Checks if STORAGE_KEY exists than setData, for multiple tabs
    useEffect(() => {
        const handleStorage = (e: StorageEvent) => {
            if (e.key === STORAGE_KEY && e.newValue) {
                setData(JSON.parse(e.newValue));
            }
        };
        window.addEventListener('storage', handleStorage);
        return () => window.removeEventListener('storage', handleStorage);
    }, []);

    return data;
}