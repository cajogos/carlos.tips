export default abstract class Model
{
    public constructor() { }

    protected slug: StringOrNull = null;

    public getSlug(): StringOrNull
    {
        return this.slug;
    }

    public setSlug(slug: StringOrNull): this
    {
        this.slug = slug;
        return this;
    }

    protected title: StringOrNull = null;

    public getTitle(): StringOrNull
    {
        return this.title;
    }

    public setTitle(title: StringOrNull): this
    {
        this.title = title;
        return this;
    }

    protected dateCreated: StringOrNull = null;

    public getDateCreated(): StringOrNull
    {
        return this.dateCreated;
    }

    protected dateUpdated: StringOrNull = null;

    public getDateUpdated(): StringOrNull
    {
        return this.dateUpdated;
    }
};