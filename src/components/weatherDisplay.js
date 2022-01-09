
export default async location => {
   
    const KEY = process.env.APP_KEY;
   console.log(KEY)
    try {
        const result = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${KEY}&units=metric`,
             
        );

        if (result.status === 200) {
            return { success: true, data: await result.json() };
        }

        return { success: false, error: result.statusText };
    } catch (ex) {
        return { success: false, error: ex.message };
    }
};