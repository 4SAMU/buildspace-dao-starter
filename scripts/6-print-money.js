import sdk from "./1-initialize-sdk.js";

// This is the address of our ERC-20 contract printed out in the step before.
const token = sdk.getToken("0x75BF3351b2a8AAfA5158862551Fc404129d2D50c");

(async () => {
    try {
        // What's the max supply you want to set? 1,000,000 is a nice number!
        const amount = 0.001;
        // Interact with your deployed ERC-20 contract and mint the tokens!
        await token.mintToSelf(amount);
        const totalSupply = await token.totalSupply();

        // Print out how many of our token's are out there now!
        console.log("✅ There is now", totalSupply.displayValue, "$SAMU in circulation");
    } catch (error) {
        console.error("Failed to print money", error);
    }
})();