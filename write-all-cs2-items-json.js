const axios = require('axios');
const FS = require("fs");

const path = "./data.json";
var itemNames = [];

axios.get("http://csgobackpack.net/api/GetItemsList/v2/", {
    details: false,
    no_details: true,
    no_prices: true
}).then((response) => {
    for (const [key, value] of Object.entries(response.data.items_list)) {
        itemNames.push(value.name)
    }
}).then(() => {
    FS.writeFileSync(path, JSON.stringify(itemNames, null), 'utf-8');
}).catch(e => {
    console.log(e);
});
