import jsonfile from "jsonfile";

const DB_FILE_NAME = "database.json";

/**
 * Fetch the json from the file.
 */
function openDb() {
  return jsonfile.readFile(__dirname + "/" + DB_FILE_NAME);
}

/**
 * Update the file.
 */
function saveDb(db) {
  return jsonfile.writeFile(__dirname + "/" + DB_FILE_NAME, db);
}

// **** Export default **** //

export default {
  openDb,
  saveDb,
};
