// PostSchema.ts

import mongoose from 'mongoose';

const Post = new mongoose.Schema({
  name: { type: String, required: true },
  prompt: { type: String, required: true },
  photo: { type: String, required: true },
});

const PostSchema = mongoose.models.Post || mongoose.model('Post', Post); // Adicione essa verificação aqui

export default PostSchema;
