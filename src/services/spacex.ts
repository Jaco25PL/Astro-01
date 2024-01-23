import { type APISpaceX } from "../types/api"

export const getLatestLaunches = async () => {
    
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
                limit: 12,
            },
        }),
    })   
    
    const {docs: launches} = (await response.json()) as APISpaceX
    return launches
}

// this for a more readable Code, separing the fetching in a ts or js file and
// then importing the function in Launches.astro

// ------

// Now we fetch the id 
// export const getLaunchesId = async ({id}) => {
    
//     const URL = ` https://api.spacexdata.com/v5/launches/${id}`

   
    
//     const {docs: launches} = (await response.json()) as APISpaceX
//     return launches
// }
