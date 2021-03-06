export class CustomRandom
{
    constructor(seed)
    {
        this._division = 1;
        this._oringSeed = Math.sqrt(seed);
        this._seed = this._oringSeed * Math.pow(this._division, 2);
    }

    set SetDivision (division)
    {
        this._division = division;
        this._seed = this._oringSeed * Math.pow(this._division, 2);
        //console.log( "SetDivision: " + this.division + "   " + this.oringSeed + "   " + this.seed );
    }

    next (min, max, value = 1)
    {
        max = max || 0;
        min = min || 0;

        this._seed = (this._seed * value * 9301 + 49297) % 233280;
        var rnd = this._seed / 233280;

        return min + rnd * (max - min);
    }

    nextIntRange (min, max, value = 1)
    {
        return Math.round(this.next(min, max, value));
    }

    nextDoubleRange (min, max, value = 1)
    {
        return this.next(min, max, value);
    }

    nextDouble (value = 1)
    {
        return this.next(0, 1, value);
    }

    pickInt (collection)
    {
        return collection[this.nextIntRange(0, collection.length - 1)];
    }

    get Seed ()
    {
        return this._seed;
    }

    set Seed (value)
    {
        this._seed = value;
    }
}