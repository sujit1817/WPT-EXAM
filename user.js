const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
    host: "localhost",
    user : "root",
    password: "cdac",
    database: "exam"
};


const record = {
    sender: "sujit",
    receiver: "vijay",
    msg: "MESSAGE SENT!!!1"
}

const addRecord = async (record) => {
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsynch();
    const sql = `insert into message (sender, reciever, msg) (?, ?, ?)`;
    await connection.endAsync();
    console.log("msg record added");

}


const getRecord = async () => {
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
    const sql = `select * from message`;
    const list = await connection.queryAsync(sql, []);
    await connection.endAsync();
    console.log("list of record...");
    console.log(list);
    return list;
}

getRecord()

module.exports = { addRecord, getRecord};
