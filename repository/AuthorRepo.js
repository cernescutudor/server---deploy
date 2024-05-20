import sql from 'mssql';
import config from '../database/connection_config.js'

export const getAuthorsDB = async () => {
    try {
        await sql.connect(config);


        // create Request object
        const request = new sql.Request();

        // query to the database and get the records
        const result = await request.query('SELECT * FROM AuthorView');


        return result.recordset;

    } catch (err) {
        console.log(err);
    }
}

export const getAuthorByIdDB = async (id) => {
    try {
        await sql.connect(config);

        // create Request object
        const request = new sql.Request();

        // query to the database and get the records
        const result = await request.input('id', sql.Int, id).query('SELECT * FROM AuthorView WHERE AuthorID = @id');

        // return the recordset as JSON
        if(result.recordset.length === 0) {
            return false;
        }
        return result.recordset;

    } catch (err) {
        console.log(err);
    }
}

export const getAuthorByNameDB = async (name) => {
    try {
        await sql.connect(config);

        // create Request object
        const request = new sql.Request();

        // query to the database and get the records
        const result = await request.input('name', sql.NVarChar, name).query('SELECT * FROM Authors WHERE AuthorName = @name');

        return result.recordset;
    } catch (err) {
        console.log(err);
    }
}

export const deleteAuthorByIdDB = async (id) => {
    try {
        await sql.connect(config);

        // create Request object
        const request = new sql.Request();

        // query to the database and get the records
        const result = await request.input('id', sql.Int, id).query('DELETE FROM Authors WHERE AuthorID = @id');
        // return the recordset as JSON
        return result.rowsAffected[0] === 1 ? true : false;

    } catch (err) {
        console.log(err);
    }
}

export const addAuthorDB = async (author_name, Username) => {
    try {
        await sql.connect(config);

        // create Request object
        const request = new sql.Request();

        const result = await request.input('author_name', sql.NVarChar, author_name).input('Username', sql.NVarChar, Username).query('INSERT INTO Authors (AuthorName, Username) VALUES (@author_name, @Username)');

    } catch (err) {
        console.log(err);
    }
}
