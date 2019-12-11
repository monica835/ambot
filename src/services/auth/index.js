import ROUTER from "../../router"
export default {
    user: null,
    registeredUser: [],
    setUser(user) {
        this.user = user
    },
    getUser(user) {
        return this.user = user
    },
    register(lastname, firstname, address, age, contactnumber, email, username, password) {
        this.registeredUser.push({
            lastname: lastname,
            firstname: firstname,
            age: age,
            address: address,
            contactnumber: contactnumber,
            username: username,
            email: email,
            password: password
        })
        ROUTER.push('/login')
    },
    login(email, password) {
        for (let i = 0; i < this.registeredUser.length; i++) {
            if (this.registeredUser[i].email === email && this.registeredUser[i].password == password) {
                ROUTER.push('/reserved')
                return this.registeredUser[i]
            }
        }
        return null
    },
    logout() {
        this.user = null
        sessionStorage.clear();
        ROUTER.push('/firstpage')
    },
    update() {
        this.user = null
        ROUTER.push('/editprofile')
    },
    save() {
        this.user = null
        ROUTER.push('/profile')
    }


}