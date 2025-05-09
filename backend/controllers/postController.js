const Post= require("../models/postModel");

const getPosts = async(req,res)=>{
    try{
        const posts = await Post.find();
        res.json(posts);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
}

const createPost = async(req,res)=>{
    const {title,content} = req.body;
    const post= new Post({title,content});
    try{
        const savedPost = await post.save(); 
        res.status(201).json(savedPost);
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
}

module.exports = {getPosts,createPost};
