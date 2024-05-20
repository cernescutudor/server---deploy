import sql from "mssql";
import config from "../database/connection_config.js";

export const usernameTakenDB = async (username) => {
    try {
        await sql.connect(config);
    
        // create Request object
        const request = new sql.Request();
    
        // query to the database and get the records
        const result = await request
        .input("username", sql.NVarChar, username)
        .query("SELECT * FROM Users WHERE Username = @username");
    
        if (result.recordset.length === 0) {
        return false;
        }
        return true;
    } catch (err) {
        console.log(err);
    }
    }

export const emailTakenDB = async (email) => {
    try {
        await sql.connect(config);
    
        // create Request object
        const request = new sql.Request();
    
        // query to the database and get the records
        const result = await request
        .input("email", sql.NVarChar, email)
        .query("SELECT * FROM Users WHERE Email = @email");
    
        if (result.recordset.length === 0) {
        return false;
        }
        return true;
    } catch (err) {
        console.log(err);
    }
    }

export const addUserDB = async (user) => {
    try {
        await sql.connect(config);
    
        // create Request object
        const request = new sql.Request();
    
        // query to the database and get the records
        const result = await request
        .input("username", sql.NVarChar, user.username)
        .input("password", sql.NVarChar, user.password)
        .input("email", sql.NVarChar, user.email)
        .query("INSERT INTO Users (Username, HashedPassword, Email) VALUES (@username, @password, @email)");
    
        return true;
    } catch (err) {
        console.log(err);
    }
    }

export const getPasswordDB = async (username) => {
    try {
        await sql.connect(config);
    
        // create Request object
        const request = new sql.Request();
    
        // query to the database and get the records
        const result = await request
        .input("username", sql.NVarChar, username)
        .query("SELECT HashedPassword FROM Users WHERE Username = @username");
    
        if (result.recordset.length === 0) {
        return false;
        }
        return result.recordset[0].HashedPassword;
    } catch (err) {
        console.log(err);
    }
}

export const getUserByUsernameDB = async (username) => {
    try {
        await sql.connect(config);
    
        // create Request object
        const request = new sql.Request();
    
        // query to the database and get the records
        const result = await request
        .input("username", sql.NVarChar, username)
        .query("SELECT * FROM Users WHERE Username = @username");
    
        if (result.recordset.length === 0) {
        return false;
        }
        return result.recordset[0];
    } catch (err) {
        console.log(err);
    }
}

