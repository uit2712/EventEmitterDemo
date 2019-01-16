export default class Hero {
    name: string;
    superpower: string;
    avatar: any; // require(url) or {uri: url}

    constructor(
        name: string,
        superpower: string,
        avatar: any
    ) {
        this.name = name;
        this.superpower = superpower;
        this.avatar = avatar;
    }
}