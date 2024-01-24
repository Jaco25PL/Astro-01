import { type Doc, type APISpaceX } from "../types/api"

export const getLatestLaunches = async () => {

    try{
        const URL = "https://api.spacexdata.com/v5/launches/query"

        const response = await fetch(URL ,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                query: {},
                options: {
                    sort: {
                        date_unix: "asc",
                    },
                    limit: 120,
                },
            }),
        })
        

        if(!response.ok){
            throw new Error(`Failed to fetch data. Status: ${response.status}`)
        }

        const {docs: launches} = (await response.json()) as APISpaceX
        console.log(launches);
        return launches

        
    }catch(error){
        console.error(`Error fetching data:`, error)
        throw error
    }
}

// this for a more readable Code, separing the fetching in a ts or js file and
// then importing the function in Launches.astro

// ------

// Now we fetch the id 
export const getLaunchesId = async ({id}: {id: string}) => {
    
    try{
        const URL = ` https://api.spacexdata.com/v5/launches/${id}`
        const response = await fetch(URL)

        if(!response.ok){
            throw new Error(`Failed to fetch data. Status: ${response.status}`)
        }
        const launch = (await response.json()) as Doc
        return launch
    }catch(error){
        console.error(`Error fetching data:`, error)
        throw error
    }
}
