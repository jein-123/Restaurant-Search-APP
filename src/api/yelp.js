import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer phNrd1HBxvQzErImGa2FsV7ouiIPcGxHMrG9zlNPoGh0vpLhb1RhK0sBmQH0fexjTsTcUc8UXDm6vUDr-3BH2uk7jKTkaY1LhslovOK4gAOVulHivCd-XND1t6naY3Yx'
    }

});