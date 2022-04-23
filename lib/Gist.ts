import GrayMatterModel from '@/lib/GrayMatterModel';

export default class Gist extends GrayMatterModel
{
    public constructor()
    {
        super();
    }

    private language: StringOrNull = null;

    public getLanguage(): StringOrNull
    {
        return this.language;
    }

    public setLanguage(language: string): Gist
    {
        this.language = language;
        return this;
    }

    public static fromObject(object: any): Gist
    {
        let instance = new Gist();
        for (let key in object)
        {
            if (object.hasOwnProperty(key))
            {
                if (instance.hasOwnProperty(key))
                {
                    instance[key as keyof Gist] = object[key];
                }
            }
        }
        return instance;
    }

    public static fromJSONString(json: any): Gist
    {
        return Gist.fromObject(JSON.parse(json));
    }
};
