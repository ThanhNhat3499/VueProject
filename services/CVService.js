import axios from "axios";
import config from "../config/config"

var CVService={
    async createInfor(dataCV) {
        config()
    
        const body = {
            id : dataCV.id,
            type : dataCV.type,
            title : dataCV.title,
            description : dataCV.description
        };
    
        return await axios({
          headers: { "Access-Control-Allow-Origin": "*" },
          method: "POST",
          url: `backendCV/create`,
          data: body
        })
    },
    
    async readInfor() {
        config()
        return await axios({
          headers: { "Access-Control-Allow-Origin": "*" },
          method: "GET",
          url: `backendCV/read`
        })
    },
    
    async updateInfor(dataCV) {
        config()
    
        const body = {
            id : dataCV.id,
            type : dataCV.type,
            title : dataCV.title,
            description : dataCV.description
        };
    
        return await axios({
          headers: { "Access-Control-Allow-Origin": "*" },
          method: "PUT",
          url: `backendCV/update`,
          data: body
        })
    },
    
    async deleteInfor(dataCV) {
        config()
    
        const body = {
            id : dataCV.id,
            type : dataCV.type,
            title : dataCV.title,
            description : dataCV.description
        };
    
        return await axios({
          headers: { "Access-Control-Allow-Origin": "*" },
          method: "delete",
          url: `backendCV/delete`,
          data: body
        })
    }
}

export default CVService