class Post
{
    public constructor()
    {
    }

    private slug: StringOrNull = null;

    public getSlug(): StringOrNull
    {
        return this.slug;
    }

    public setSlug(slug: StringOrNull): Post
    {
        this.slug = slug;
        return this;
    }

    private title: StringOrNull = null;

    public getTitle(): StringOrNull
    {
        return this.title;
    }

    public setTitle(title: StringOrNull): Post
    {
        this.title = title;
        return this;
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

export default Post;