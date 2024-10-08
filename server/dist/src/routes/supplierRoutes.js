"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const supplierController_1 = require("../controllers/supplierController");
const productController_1 = require("../controllers/productController");
const router = (0, express_1.Router)();
router.get("/", supplierController_1.getSuppliers);
router.post("/", supplierController_1.createSupplier);
router.delete("/:supplierId", supplierController_1.deleteSupplier);
router.get("/:supplierId/products", productController_1.getProductsBySupplier);
router.put("/:supplierId", supplierController_1.updateSupplier);
exports.default = router;
