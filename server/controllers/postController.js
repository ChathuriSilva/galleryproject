import { response } from 'express';
import mongoose from 'mongoose';

import postModel from '../model/PostModel.js'

export const getPosts = async (req,res) => {
    try {
        const posts = await postModel.find();
        console.log(posts);
        res.status(200).json(posts)
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}
export const createPost = async(req,res) => {
    const post = req.body;

    const newPost = new postModel(post);
    try {
        await newPost.save();
        res.status(200).json(newPost);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
export const updatePost = async(req,res) => {
    const { id: _id } = req.params;
    const post  = req.body;

    try {
        if(!mongoose.Types.ObjectId.isValid(_id)){
            return res.status(404).send('No post with that id');
        }else{
            const updatePost = await postMessage.findByIdAndUpdate(_id, post , {new:true});
            response.json(updatedPost);
        }
    } catch (error) {
        console.log(error);
    }
    
}