// List of links
const links = [
    "https://s.shopee.com.my/6AV91EE2C0",
    "https://s.shopee.com.my/6AVC7WkBFB",
    "https://s.shopee.com.my/3AqiO0dqtM",
    "https://s.shopee.com.my/1B5VGQtEqF",
    "https://s.shopee.com.my/1g1lW31NoW",
    "https://s.shopee.com.my/9zgtRKWXG1",
    "https://s.shopee.com.my/60Akfxutiq",
    "https://s.shopee.com.my/8zoMFQxxNQ",
    "https://s.shopee.com.my/Vpo7nUePO",
    "https://s.shopee.com.my/LWNvQF1kJ",
    "https://s.shopee.com.my/4ff4PhpbGT",
    "https://s.shopee.com.my/4L1y5Mt8IX",
    "https://s.shopee.com.my/8fAxFIHJ9R",
    "https://s.shopee.com.my/5pqls1GAQ1",
    "https://s.shopee.com.my/2ftk6AXuYG",
    "https://s.shopee.com.my/6ATO2k1xSx",
    "https://s.shopee.com.my/AUcNCdmnnm",
    "https://s.shopee.com.my/4L1jrIO5WH",
    "https://s.shopee.com.my/30WMGpKHqL",
    "https://s.shopee.com.my/7Uyld54B8O",
    "https://s.shopee.com.my/4py0SAWCBB",
    "https://s.shopee.com.my/7fIBpMCo7n",
    "https://s.shopee.com.my/1qKOsce5pp",
    "https://s.shopee.com.my/2qCw4QewaP",
    "https://s.shopee.com.my/3q5TGFfwNW",
    "https://s.shopee.com.my/1qKOsYxEsk",
    "https://s.shopee.com.my/20dp4qWP6p",
    "https://s.shopee.com.my/3fm33svWlm",
    "https://s.shopee.com.my/1VhYTrmz83",
    "https://s.shopee.com.my/30YFxTKiJl",
    "https://s.shopee.com.my/8fCchruayw",
    "https://s.shopee.com.my/ueNvkLd5",
    "https://s.shopee.com.my/5fZ18KTZyx",
    "https://s.shopee.com.my/4AkDLWnlko",
    "https://s.shopee.com.my/9KSJV0QF2y",
    "https://s.shopee.com.my/704OihPpqs",
    "https://s.shopee.com.my/50JKKzmLku",
    "https://s.shopee.com.my/50JKKz3wMC",
    "https://s.shopee.com.my/gAGvGUfYt",
    "https://s.shopee.com.my/3fnsUkkSGZ",
    "https://s.shopee.com.my/40QitKS3FK",
    "https://s.shopee.com.my/9zgKpayKyv"
];

// Function to navigate to a random link
function goToRandomLink() {
    // Get a random index from the links array
    const randomIndex = Math.floor(Math.random() * links.length);

    // Redirect to the selected link
    window.location.href = links[randomIndex];
}
