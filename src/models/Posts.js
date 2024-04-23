


export class Posts {
    constructor(data) {
        this.id = data.id

        this.body = data.body
        this.imgUrl = data.imgUrl
        this.likeIds = data.likeIds
        this.likes = data.likes

        this.createdAt = new Date(data.createdAt)
        this.updatedAt = new Date(data.updatedAt)

        this.creator = data.creator
        this.creatorId = data.creatorId
    }
}