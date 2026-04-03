const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const eggService = require("../services/eggService");

// GET ALL 
router.get("/", async (req, res) => {
  console.log("➡️ GET /eggs hit");

  try {
    const eggs = await eggService.getAllEggs();
    console.log("✅ Eggs fetched:", eggs.length);

    res.json(eggs);
  } catch (err) {
    console.error("❌ Error in GET /eggs:", err);
    res.sendStatus(500);
  }
});

// GET BY ID
router.get("/:id", async (req, res) => {
  console.log("➡️ GET /eggs/:id hit", req.params.id);

  try {
    const egg = await eggService.getEggById(req.params.id);

    if (!egg) {
      console.log("⚠️ Egg not found");
      return res.sendStatus(404);
    }

    console.log("✅ Egg found");
    res.json(egg);
  } catch (err) {
    console.error("❌ Error in GET /eggs/:id:", err);
    res.sendStatus(500);
  }
});

// POST
router.post("/", auth, async (req, res) => {
  console.log("➡️ POST /eggs hit", req.body);

  try {
    const egg = await eggService.createEgg(req.body);
    console.log("✅ Egg created:", egg.id);

    res.status(201).json(egg);
  } catch (err) {
    console.error("❌ Error in POST /eggs:", err);
    res.sendStatus(500);
  }
});

// PUT 
router.put("/:id", auth, async (req, res) => {
  console.log("➡️ PUT /eggs/:id hit", req.params.id, req.body);

  try {
    const updated = await eggService.updateEgg(req.params.id, req.body);

    if (!updated) {
      console.log("⚠️ Egg not found for update");
      return res.sendStatus(404);
    }

    console.log("✅ Egg updated");
    res.sendStatus(204);
  } catch (err) {
    console.error("❌ Error in PUT /eggs:", err);
    res.sendStatus(500);
  }
});

// DELETE 
router.delete("/:id", auth, async (req, res) => {
  console.log("➡️ DELETE /eggs/:id hit", req.params.id);

  try {
    const deleted = await eggService.deleteEgg(req.params.id);

    if (!deleted) {
      console.log("⚠️ Egg not found for delete");
      return res.sendStatus(404);
    }

    console.log("✅ Egg deleted");
    res.sendStatus(204);
  } catch (err) {
    console.error("❌ Error in DELETE /eggs:", err);
    res.sendStatus(500);
  }
});

module.exports = router;