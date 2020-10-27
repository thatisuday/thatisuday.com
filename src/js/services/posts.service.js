import axios from 'axios';

// get Medium posts
export const getPosts = async () => {
    const response = await axios.get( 'https://api.jsonbin.io/b/5f98308030aaa01ce619a7b1' );

    return response.data;
};
