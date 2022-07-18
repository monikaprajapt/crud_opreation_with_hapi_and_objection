const Joi = require("joi");
const { Model } = require("objection")                 // We use Model class from objection library
const dob = require("../config/db")    // db is the knex file that has been imported from database_connection
// const joi=require('')
Model.knex(dob);


class UserModel extends Model {
    static get tableName() {
        return "hapi_curd_table"                             // database table name of objection      
    }
    static get JoiSchema() {
        return Joi.object({
            id: Joi.number().integer().greater(0),
            name: Joi.string().min(1).required(),
            email: Joi.string().email().max(40).required(),
            passwoed: Joi.string().min(2)
        })
    }

}

module.exports = UserModel
