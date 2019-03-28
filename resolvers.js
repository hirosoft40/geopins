const user = {
    _id:'1',
    name:'Hiroko',
    email:'test@test.com',
    picture:'https://cloudinary.com'
}

module.exports = {
    Query:{
        me:() =>user
    }
}