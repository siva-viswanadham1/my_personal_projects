const {axiosInstance}=require('.')

//get all movies
export const getAllMovies=async ()=>{
    try {
        
        const response=await axiosInstance.get('api/movies/getAllMovies')       
        return response.data
    } catch (error) {
        return error;
    }
}

// add movie

export const AddMovie=async (payload)=>{
    try {
        const response=await axiosInstance.post('api/movies/add',payload)
        console.log(response)
        return response.data
    } catch (error) {
        return error
    }
}