import axios from 'axios';

// get GitHub projects
export const getProjects = async () => {
    const response = await axios.get( '/assets/json/projects.json' );
    return response.data;
};
