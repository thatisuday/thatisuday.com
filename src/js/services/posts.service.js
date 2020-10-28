import axios from 'axios';

// get Medium posts
export const getPosts = async () => {
    const response = await axios.get( '/assets/json/posts.json' );
    return response.data;
};
