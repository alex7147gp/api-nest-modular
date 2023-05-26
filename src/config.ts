import { registerAs } from "@nestjs/config"



export default registerAs("config", () => {
	
	return {
	  dateBase: {
        name: process.env.NAME_MYSQL,
        port: process.env.PORT_MYSQL,
        host: process.env.HOST_MYSQL,
        userName: process.env.USERNAME_MYSQL,
        password: process.env.PASSWORD
	  },
	  apiKey: {

	  }
	}  
})