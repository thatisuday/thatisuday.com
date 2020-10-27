import axios from 'axios';

// get GitHub projects
export const getProjects = async () => {
    const response = await axios.get( 'https://api.jsonbin.io/b/5f982b8130aaa01ce619a5d7' );

    return response.data;
};
