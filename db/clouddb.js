/**
 * Setup the Database URL
 */

//mongodb+srv://admin:<password>@cluster0.4fu0a.mongodb.net/<dbname>?retryWrites=true&w=majority


const DB_USER = "admin"
const DB_PASSWORD = "admin123"
const DB_NAME = "acmetravel"
const CLUSTER_HOST = "cluster0.4fu0a.mongodb.net"


// Setup the DB URI
exports.DB_URI= "mongodb+srv://"+DB_USER+":"+DB_PASSWORD+"@"+CLUSTER_HOST+"/"+DB_NAME+"?retryWrites=true&w=majority"