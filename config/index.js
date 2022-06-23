require("dotenv").config();

const server = process.env.SERVER || "development";

// const buyerId = "buyer";
// const buyerTable = "buyer";
// const buyerTableCols = [];
// const sellerId = "seller";
// const sellerTable = "seller";
// const sellerTableCols = [];


module.exports = {
  'secretkey': '12345-67890-09876-54321',
  server,
  isDevelopment: server === "development",
  // buyerId,
  // buyerTable,
  // buyerTableCols,
  // buyerInfo: {
  //   user_type: buyerId,
  //   second_table: buyerTable,
  //   second_table_cols: buyerTableCols,
  // },
  // sellerId,
  // sellerTable,
  // sellerTableCols,
  // sellerInfo: {
  //   user_type: sellerId,
  //   second_table: sellerTable,
  //   second_table_cols: sellerTableCols,
  // },
 
};
