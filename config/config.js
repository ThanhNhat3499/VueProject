import axios from "axios";
import { ApiConstant } from "../constants/APIConstan";

export default function config(){
    axios.defaults.baseURL=ApiConstant.BASE_URL;
}