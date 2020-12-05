import app from "./app";
import * as fixtures from "sequelize-fixtures";
import * as model from "./models";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Launched');
});
