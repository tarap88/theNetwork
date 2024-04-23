import { AppState } from "../AppState.js";
import { Posts } from "../models/Posts.js";
import { logger } from "../utils/Logger.js";
import { api } from "./AxiosService.js"



class PostService {


    async getPosts() {
        const response = await api.get('api/posts')
        logger.log('grabbed posts', response.data)
        const posts = response.data.posts.map(post => new Posts(post))
        AppState.posts = posts
    }




}






export const postService = new PostService()