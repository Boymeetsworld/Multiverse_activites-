const { jsxEmptyExpression, exportAllDeclaration } = require("@babel/types")
const { describe } = require("yargs")

class User {
    constructer(username, password, age, email, favoriteTech) {
        this.username = username
        this.password = password
        this.age = age
        this.email = email
        this.favoriteTech = favoriteTech
    }

}
checkAge() {
if (age >= 18 && age < 75) {
return true
}
else {
    return false}
}

addTech(technology) {
    this.favoriteTech.push(technology)
}

checkEmail() {

}

module.exports = User


module.exports = sum
