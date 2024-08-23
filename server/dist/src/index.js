"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
/* ROUTES IMPORTS*/
const dashboardRoutes_1 = __importDefault(require("./routes/dashboardRoutes"));
const productRoutes_1 = __importDefault(require("./routes/productRoutes"));
/*import userRoutes from "./routes/userRoutes";
import expenseRoutes from "./routes/expenseRoutes"; */
/*CONFIGURATIONS*/
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, helmet_1.default)());
app.use(helmet_1.default.crossOriginResourcePolicy({ policy: "cross-origin" })); //accept cross origin request
app.use((0, morgan_1.default)("common"));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use((0, cors_1.default)());
/*ROUTES*/
app.use("/dashboard", dashboardRoutes_1.default); // http://localhost:8000/dashboard
app.use("/products", productRoutes_1.default); // http://localhost:8000/products
/*app.use("/users", userRoutes); // http://localhost:8000/users
app.use("/expenses", expenseRoutes);*/ // http://localhost:8000/expenses
/*SERVER*/
const port = Number(process.env.PORT) || 3002;
app.listen(port, "0.0.0.0", () => {
    console.log(`Server is running on port ${port}`);
});
// curl http://localhost:8000/dashboard
