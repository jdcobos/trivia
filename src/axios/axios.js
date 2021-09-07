import axios from 'axios'
import { isEmpty } from 'lodash'
const createConfig = ({url, method, params, data, headers }) => {
    const urlApi = createUrl('https://opentdb.com', url, params)

    switch (method) {
      case 'GET':
        return {
            method,
            url: urlApi ,
            headers,
        }
      case 'POST':
        return {
            method,
            url: urlApi,
            data,
            headers,
        }
      default: 
        return {url:urlApi}
    }
}


const createUrl = (baseurl, url, params = {}) =>{
    let urlParams = baseurl + url
    if(!isEmpty(params))
        for (const property in params) {
            urlParams  += `/${params[property]}`;
        }else{
            urlParams = baseurl + url
        }
    return urlParams
}      

const request = async (
    { url, method, params, data, headers }
  ) =>
    await axios(
      createConfig({url, method, params, data, headers }),
    )

 export default request