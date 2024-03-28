import conf from "../conf/conf";
import { Client, ID,  Databases, Storage, Query} from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;
    constructor(){
        this.client
            .setEndpoint(conf.apiwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.bucket = new Storage(this.client);
        this.databases =  new Databases(this.client);
    }

    async createPost({title, slug, content, featuredTmage, status, userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredTmage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.log("Error at Appwrite CreatePost method ",error)
        }
    }

    async updatePost(slug, {title, content, featuredTmage, status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredTmage,
                    status,
                }
            )
        } catch (error) {
            console.log("Error at UpdatePost Method ", error)
        }
    }

    async deletePost(slug){
        try {
            return await this.databases.deleteDocument(
                conf.appwriteDatabaseId, 
                conf.appwriteCollectionId, 
                slug
            )
            return true;
        } catch (error) {
            console.log("Error at Delete Post Method", error);
            return false;
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Error at Get Posts Method",error);
        }
    }

    async getPosts(queries = [Query.equal("status",
    "active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
            )
        } catch (error) {
            console.log("Error at Get All Posts Method",error);
        }
    }

    //file upload service

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId ,
                ID.unique() ,
                file
            )
        } catch (error) {
            console.log("Error at Update Post File Method",error);
            return false;
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
        } catch (error) {
            console.log("Error at Delete File Method", error);
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}

const service = new Service()

export default service