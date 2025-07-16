const fileManager = require("../utils/fileManager");
const { generateResponse } = require("../utils/helper");

const productController = {
  getAllProducts: async (req, res) => {},

  getProductById: async (req, res) => {
    try {
      const { id } = req.params;
      console.log("id:", id);

      const products = await fileManager.readData("products.json");
      console.log("products:", products);

      const product = products.find((product) => product.id === parseInt(id));
      if (!product) {
        return res
          .status(404)
          .json(generateResponse(false, "product not found", null, 404));
      }
      res.status(200).json(generateResponse(true, "product found", product, 200));
    } catch (error) {
      console.error("Error fetching product:", error);
      res
        .status(500)
        .json(generateResponse(false, "Failed to Fetch product", null, 500));
    }
  },
  createProducts: async (req, res) => {
    try {
      const productData = {
        ...req.body,
        isActive: req.body.isActive !== undefined ? req.body.isActive : true,
      };

      // Check if product already exists
      const products = await fileManager.readData("products.json");
      const existingProduct = products.find((u) => u.name === productData.name);

      if (existingProduct) {
        return res
          .status(400)
          .json(generateResponse(false, "Product already exists", null, 400));
      }

      const newProduct = await fileManager.appendData("products.json", productData);

      res
        .status(201)
        .json(
          generateResponse(true, "Product created successfully", newProduct, 201)
        );
    } catch (error) {
      res
        .status(500)
        .json(generateResponse(false, "Failed to create product", null, 500));
    }
  },
  updateUsers: async (req, res) => {},
  deleteUsers: async (req, res) => {},
  getUserStats: async (req, res) => {},
};
module.exports = productController;