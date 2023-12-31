const express = require("express");
const router = express.Router();
const LinkController = require("../controllers/LinkController");

router
  .route("/api/link")
  .get(LinkController.index)
  .post(LinkController.addLink);
router
  .route("/api/link/:id")
  .get(LinkController.getLinkById)
  .put(LinkController.updateData)
  .delete(LinkController.deleteData);

module.exports = router;
