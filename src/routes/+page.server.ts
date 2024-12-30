import { MINECRAFT_SERVER_IP } from "$lib/config";
import type { PageServerLoad } from "./$types";
import mc from "minecraftstatuspinger";

// const retryRequest = async <T>(fn: () => Promise<T>, retries = 3, initialDelay = 0): Promise<T | false | undefined> => {
//     for (let attempt = 1; attempt <= retries; attempt++) {
//         try {
//             return await fn();
//         } catch (error) {
//             console.log(error?.message);
//             if ( (error instanceof Error) && error.message.includes('Timed out')) return false;
//             console.log("Returning undefined")
//             if (attempt >= retries) return undefined;

//             // console.warn(`Attempt ${attempt} failed. Retrying in ${delay}ms...`);
//             // await new Promise((resolve) => setTimeout(resolve, delay));
            
//             // const savedDelay = delay;
//             // delay = savedDelay * 2;
//         }
//     }
// };

const getServerInfo = async (): Promise<any> => {
    const data = await fetch(`https://api.mcstatus.io/v2/status/java/${MINECRAFT_SERVER_IP}`).then(res => res.json());
    return data;
};

export const load: PageServerLoad = async () => {
    return {
        serverInfoPromise: getServerInfo()
    };
};