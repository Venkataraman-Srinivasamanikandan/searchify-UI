import axios from "axios";
import constants from "./constants";
import { v4 as uuidv4 } from 'uuid';

type Headers = {
	"Content-Type": string;
	"Authorization"?: string;
	"accept": string;
	"x-request-id"?: string;
}

const DEFAULT_HEADER_CONFIG: { headers: Headers } = {
	headers: {
		"Content-Type": constants.DEFAULT_CONTENT_TYPE,
		"accept": constants.DEFAULT_CONTENT_TYPE
	}
}

const setUpConfig = (isAuthenticated: boolean) => {
	const config = { ...DEFAULT_HEADER_CONFIG }
	config.headers["x-request-id"] = uuidv4()
	if (isAuthenticated) config.headers.Authorization = btoa(constants.Authenticate)
	return config
}

const get = async (
	url: string,
	isAuthenticated: boolean = true
) => {
	try {
		const config = setUpConfig(isAuthenticated)
		const result = await axios.get(constants.BASE_URL + url, config)
		return result.data
	}
	catch (e: any) {
		if (e.response.status !== 500) {
			throw {
				status: e.response.status
			}
		}
		throw new Error("Something went wrong please try again later")
	}
}

export { get }