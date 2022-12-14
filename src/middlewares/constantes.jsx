import {AdminRouter} from '../routes/index'
import {WebRouter} from '../routes/web'

export const APPS = [
    {
        subdomain:"",
        application:WebRouter,
        main:true
    },
    {
        subdomain:"admin",
        application:AdminRouter,
        main:false
    }

]

