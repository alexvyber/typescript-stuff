// Challenge
// Long Version
for (let searchItem of searchHistory) {
  // console.log(searchItem.split(" "));
  for (let entry of searchItem.split(" ")) {
    // console.log(entry);

    if (entry === "html" || entry === "css") console.log("Would you like to learn how to create websites for free?");
  }
}

// Short version
searchHistory.map((entry) => {
  if (entry.includes("html") || entry.includes("css"))
    console.log("Would you like to learn how to create websites for free?");
});
