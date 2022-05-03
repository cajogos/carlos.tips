class Author
{
    constructor() { }

    private name: StringOrNull = null;

    public getName(): StringOrNull
    {
        return this.name;
    }

    private description: StringOrNull = null;

    public getDescription(): StringOrNull
    {
        return this.description;
    }

    private picture: StringOrNull = null;

    public getPicture(): StringOrNull
    {
        return this.picture;
    }

    private twitter: StringOrNull = null;

    public getTwitter(): StringOrNull
    {
        return this.twitter;
    }

    private github: StringOrNull = null;

    public getGithub(): StringOrNull
    {
        return this.github;
    }

    public static fromObject(object: any): Author
    {
        let instance = new Author();
        for (let key in object)
        {
            if (object.hasOwnProperty(key))
            {
                if (instance.hasOwnProperty(key))
                {
                    instance[key as keyof Author] = object[key];
                }
            }
        }
        return instance;
    }

    public static fromJSONString(json: any): Author
    {
        return Author.fromObject(JSON.parse(json));
    }
}

export default Author;