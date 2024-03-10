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
        return response.data
    } catch (error) {
        return error
    }
}

// delete movie
export const DeleteMovie=async (payload)=>{
    try {
        console.log(payload)
        const response=await axiosInstance.delete('api/movies/delete',{ data: payload })
        return response.data
    } catch (error) {
        return error
    }
}

//update movie

export const UpdateMovie=async (payload)=>{
    try {
        console.log(payload)
        const response=await axiosInstance.put('api/movies/update',{ data: payload })
        return response.data
    } catch (error) {
        return error
    }
}