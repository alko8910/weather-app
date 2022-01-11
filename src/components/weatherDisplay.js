
export default async location => {
   
    const KEY = process.env.REACT_APP_API_KEY
   console.log(KEY)
    try {
        const result = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${KEY}&units=metric`,
             
        );
        console.log(result)
        if (result.status === 200) {
            return { success: true, data: await result.json() };
        }

        return { success: false, error: result.statusText };
    } catch (ex) {
        return { success: false, error: ex.message };
    }
};