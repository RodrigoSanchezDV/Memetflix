
interface typeTrend {
    type : string,
    trend : string,

}
interface typeID{
    id : string
}

export const api_service = {
    movies_series: async ({type, trend}: typeTrend)=>{
        const url = `https://api.themoviedb.org/3/trending/${type}/${trend}?api_key=7be72508776961f3948639fbd796bccd`
        const data = await fetch(url)
        try {
            return data.json()
        } catch (error) {
            console.log(error)
        }
    },
    details_movies: async ({id}: typeID)=>{
        const url = `https://api.themoviedb.org/3/movie/${id}?api_key=632c014ddea9f81c71245a66a3621170&append_to_response=videos`
        const data = await fetch(url)
        try {
            return data.json()
        } catch (error) {
            console.log(error)
        }
    },
    details_series: async ({id}: typeID)=>{
        const url = `https://api.themoviedb.org/3/tv/${id}?api_key=632c014ddea9f81c71245a66a3621170&append_to_response=videos`
        const data = await fetch(url)
        try {
            return data.json()
        } catch (error) {
            console.log(error)
        }
    },
}