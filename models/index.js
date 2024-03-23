const mongoose = require("mongoose");

mongoose.connect(
  `mongodb+srv://racoon:thangngu1@dev.uov9yto.mongodb.net/lineage`,
  {
    autoIndex: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

mongoose.connection.on("error", (err) => {
  console.log(
    `Connect error to MongoDB: mongodb+srv://racoon:thangngu1@dev.uov9yto.mongodb.net/lineage`,
    {
      ctx: "MongoDB",
      stack: err.stack,
    }
  );
  console.log(err);
  process.exit();
});

mongoose.connection.once("open", () => {
  console.log(
    `Connect success to MongoDB: mongodb+srv://racoon:thangngu1@dev.uov9yto.mongodb.net/lineage`,
    { ctx: "MongoDB" }
  );
});
