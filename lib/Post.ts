import GrayMatterModel from '@/lib/GrayMatterModel';

export default class Post extends GrayMatterModel
{
    public constructor()
    {
        super();
    }

    public static fromObject(object: any): Post
    {
        let instance = new Post();
        for (let key in object)
        {
            if (object.hasOwnProperty(key))
            {
                if (instance.hasOwnProperty(key))
                {
                    instance[key as keyof Post] = object[key];
                }
            }
        }
        return instance;
    }

    public static fromJSONString(json: any): Post
    {
        return Post.fromObject(JSON.parse(json));
    }
}
