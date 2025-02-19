import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x6ab173281A745c2304545A156434525C5f4399fB");

(async () => {
    try {
        await editionDrop.createBatch([
            {
                name: "nice month to smile",
                description: "This NFT will give you access to juneDAO!",
                image: readFileSync("scripts/assets/smile.jpg"),
            },
        ]);
        console.log("✅ Successfully created a new NFT in the drop!");
    } catch (error) {
        console.error("failed to create the new NFT", error);
    }
})();
