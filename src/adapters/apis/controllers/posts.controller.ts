import express from 'express';
import debug from 'debug';
import createPostUsercase from '../../../domain/usecases/posts/create.post.usercase';
import listByIdPostUsercase from '../../../domain/usecases/posts/listById.post.usercase';
import listPostUsercase from '../../../domain/usecases/posts/list.post.usercase';
import updatePostUsercase from '../../../domain/usecases/posts/update.post.usercase';
import deletePostUsercase from '../../../domain/usecases/posts/delete.post.usercase';
import listByUserPostUsercase from '../../../domain/usecases/posts/listByUser.post.usercase';

const log: debug.IDebugger = debug('app:posts-controller');

class PostsController {
    async listPosts(req: express.Request, res: express.Response) {
        const posts = await listPostUsercase.execute();
        res.status(200).send(posts);
    }

    async getPostById(req: express.Request, res: express.Response) {
        const post = await listByIdPostUsercase.execute({
            idpost: Number(req.params.listById)
        });
        res.status(200).send(post);
    }

    async create(req: express.Request, res: express.Response) {
        const info = req.body.info;
        const post = {
            content: req.body.content,
            iduser: info.iduser
        }
        const postCreated = await createPostUsercase.execute(post);
        res.status(201).send(post);
    }

    async updatePost(req: express.Request, res: express.Response) {
        const post = req.body
        post.idpost = req.params.listById
        const postAtt = await updatePostUsercase.execute(post);
        res.status(200).send({
            content: post.content,
            idpost: post.idpost
        });
    }

    async deletePost(req: express.Request, res: express.Response) {
        const post = await deletePostUsercase.execute({
            idpost: Number(req.params.listById)
        });
        res.status(204).send();
    }

    async listPostIdUser(req: express.Request, res: express.Response) {
        const posts = await listByUserPostUsercase.execute({
            iduser: Number(req.params.listById)
        });
        res.status(200).send(posts)
    }
}

export default new PostsController();