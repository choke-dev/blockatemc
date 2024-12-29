import { MINECRAFT_SERVER_IP } from "$lib/config";
import type { PageServerLoad } from "./$types";
import mc from "minecraftstatuspinger";

const retryRequest = async <T>(fn: () => Promise<T>, retries = 3, initialDelay = 100): Promise<T | undefined> => {
    let delay = initialDelay;

    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            return await fn();
        } catch (error) {
            if ( (error instanceof Error) && error.message.includes('Timed out')) return;
            if (attempt >= retries) return undefined;

            console.warn(`Attempt ${attempt} failed. Retrying in ${delay}ms...`);
            await new Promise((resolve) => setTimeout(resolve, delay));
            
            const savedDelay = delay;
            delay = savedDelay * 2;
        }
    }
};

const getServerInfo = async (): Promise<any> => {
    const fetchServerInfo = async (): Promise<any> => mc.lookup({ hostname: MINECRAFT_SERVER_IP });
    const data = await retryRequest(fetchServerInfo, 3, 1000);
    return data?.status;
};

export const load: PageServerLoad = async () => {
    return {
        serverInfoPromise: getServerInfo()
    };
};