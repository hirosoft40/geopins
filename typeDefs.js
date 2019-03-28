const {gql} = require('apollo-server')
module.exports = qql`
type User{
    _id:ID
    name:String
    email:String
    picture:String
}
type Query{
    me:User
}`