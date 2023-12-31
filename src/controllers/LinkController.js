const Link = require("../models/Links");

module.exports = {
  index: async (req, res) => {
    try {
      const getLinks = await Link.find({});
      if (getLinks.length > 0) {
        res.json({ message: "Get all data successfuly", data: getLinks });
      } else {
        res.json({ message: "No data available" });
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      res.status(500).send("Internal Server Error");
    }
  },

  getLinkById: async (req, res) => {
    const { id } = req.params;
    try {
      const getLink = await Link.findById(id);
      if (!getLink) {
        return res.status(404).json({ message: "Data not found" });
      }

      res.json({ message: "Get data successfuly", data: getLink });
    } catch (error) {
      console.error("Error fetching data by ID:", error);
      res.status(500).send("Internal Server Error");
    }
  },

  addLink: async (req, res) => {
    const dataSchema = new Link({
      title: req.body.title,
      url: req.body.url,
    });
    try {
      const data = await dataSchema.save();
      res.json({ message: "Add new data successfuly", data: data });
    } catch (error) {
      console.error("Error add data:", error);
      res.status(500).send("Internal Server Error");
    }
  },

  updateData: async (req, res) => {
    const { id } = req.params;

    try {
      const updateDataLink = await Link.findByIdAndUpdate(
        id,
        {
          title: req.body.title,
          url: req.body.url,
        },
        { new: true, runValidators: true }
      );

      if (!updateDataLink) {
        return res.status(404).json({ message: "Data not found" });
      }

      res.json({ message: "Data updated successfully", updateDataLink });
    } catch (error) {
      console.error("Error updating data:", error);
      res.status(500).send("Internal Server Error");
    }
  },

  deleteData: async (req, res) => {
    const { id } = req.params;

    try {
      const deletedLink = await Link.findByIdAndDelete(id);

      if (!deletedLink) {
        return res.status(404).json({ message: "Data not found" });
      }

      res.json({ message: "Data deleted successfully", deletedLink });
    } catch (error) {
      console.error("Error deleting data:", error);
      res.status(500).send("Internal Server Error");
    }
  },
};
