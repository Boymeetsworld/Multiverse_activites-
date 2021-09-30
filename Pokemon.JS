class Pokemon {
    constructor(name, number, type, hp) {
        this.hp = hp
        this.name = name
        this.number = number
        this.type = type
    }
};

static nameIsString(name) ;{
    return typeOf name === 'string'
};

static numberIsTypeNumber(number) {
    return typeOf number === 'number'
}

static isValidType(type) {
    const elements = ['fire', 'fairy', 'grass', 'water', 'earth', 'lightning']
}

static isValidHp(hp) {
    (hp >= 50 && hp <= 250) ? true: false
}

assignType(type) {
    this.type = type
}

}

class charmeleon {

    constructor(attack) {
        super(hp, name, number, type, )
        this.attack = attack
    }

    static flamethrower() {
        return Math.floor(Math.random() * 25 - hp)
        setTimeOut(`${charmeleon.name} used flamethrower`, 10)

    }


    static heal() {
        return Math.floor(Math.random() * 10 + hp)
        setTimeOut(`${charmeleon.name} used heal`, 20)
    }

    static run() {
        return console.log(`${charmeleon.name} ran away`)

    }
    const newChar = new charmeleon() {
        58,
        Jonah,
        005,
        'fire',
        flamethrower
    }


}
