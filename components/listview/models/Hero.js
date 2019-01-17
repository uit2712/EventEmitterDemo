export default class Hero {
    id: number;
    name: string;
    superpower: string;
    avatar: any; // require(url) or {uri: url}

    constructor(
        id: number,
        name: string,
        superpower: string,
        avatar: any
    ) {
        this.id = id;
        this.name = name;
        this.superpower = superpower;
        this.avatar = avatar;
    }

    updateInfo(hero: Hero) {
        if (hero) {
            this.name = hero.name;
            this.superpower = hero.superpower;
            this.avatar = hero.avatar;
        }
    }

    clone() {
        return new Hero(this.id, this.name, this.superpower, this.avatar);
    }
}