import { MongoClient, ServerApiVersion } from "mongodb";
const uri = `mongodb+srv://${process.env.mongodb_user}:${process.env.mongodb_password}@cluster0.pqkpgrq.mongodb.net/?retryWrites=true&w=majority`;
// console.log("uri:", uri);
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function connectToDB(req, res) {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    const productCollection = client.db("product_portal").collection("product");
    // console.log("productCollection:", productCollection);
    if (req.method == "GET") {
      const data = await productCollection.find({}).toArray();
      // console.log("data:", data);
      res.send({
        message: "success",
        status: 200,
        data: data,
      });
    }

    if (req.method == "POST") {
      const newData = req.body;
      const result = await productCollection.insertOne(newData);
      res.send({
        message: "product added successfully",
        status: 200,
        data: result,
      });
    }
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
export default connectToDB;
