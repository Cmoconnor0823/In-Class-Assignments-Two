var orm = require("./config/orm.js");

// Console log all the party_name's.
orm.select("party_name", "parties");

// Console log all the client_name's.
orm.select("client_name", "clients");