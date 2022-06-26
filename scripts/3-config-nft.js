import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x53101Aff57C4E678087dd52c70457B6204C68B4C");

(async () => {
    try {
        await editionDrop.createBatch([
            {
                name: "expensive smile",
                description: "This NFT will give you access to samuDAO!",
                image: readFileSync("scripts/assets/smile.jpg"),
            },
        ]);
        console.log("✅ Successfully created a new NFT in the drop!");
    } catch (error) {
        console.error("failed to create the new NFT", error);
    }
})();
