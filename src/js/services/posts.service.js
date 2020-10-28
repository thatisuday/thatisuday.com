import axios from 'axios';

// get Medium posts
export const getPosts = async () => {
    const response = await axios.get( CONFIG.endpoints.posts );
    return response.data;
};
