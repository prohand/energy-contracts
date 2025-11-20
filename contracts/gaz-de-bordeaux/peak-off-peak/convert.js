const fs = require("fs");
const path = require("path");

/**
 * Reads and processes the contract.json file to return pricing data for all subscribed power levels
 * @returns {Object} - Object with subscribed power as keys and arrays of price objects as values
 */
function processBaseOptions() {
  try {
    // Read the contract.json file
    const contractPath = path.join(__dirname, "contract.json");
    const contractContent = fs.readFileSync(contractPath, "utf-8");
    const contractData = JSON.parse(contractContent);

    // Define all subscribed power levels
    const subscribedPowers = [
      "6",
      "9",
      "12",
      "15",
      "18",
      "24",
      "30",
      "36",
    ];

    // Create result object with pricing data for each subscribed power
    const result = {};

    subscribedPowers.forEach((power) => {
      result[power] = contractData.map((priceEntry) => ({
        ...priceEntry,
      }));
    });

    return result;
  } catch (error) {
    console.error("Error processing contract.json:", error.message);
    throw error;
  }
}

module.exports = processBaseOptions;
