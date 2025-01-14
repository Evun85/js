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
    "https://s.shopee.com.my/1g2yHfuGTA",
    "https://s.shopee.com.my/2fvVTSW5Ef",
    "https://s.shopee.com.my/3LBCGcmU8u",
    "https://s.shopee.com.my/30YLrxx99s",
    "https://s.shopee.com.my/1g2yHSmaki",
    "https://s.shopee.com.my/4q003Fx01A",
    "https://s.shopee.com.my/4fgZqs3dmz",
    "https://s.shopee.com.my/3LBCGOvzSC",
    "https://s.shopee.com.my/9A8zD5ninA",
    "https://s.shopee.com.my/60BxRE0v5c",
    "https://s.shopee.com.my/8zpZ0hdrd3",
    "https://s.shopee.com.my/60BxR7CcEM",
    "https://s.shopee.com.my/6fReEIoxJg",
    "https://s.shopee.com.my/4L3jRz7JBI",
    "https://s.shopee.com.my/6fReCl1Gef",
    "https://s.shopee.com.my/ukGHoNmD",
    "https://s.shopee.com.my/10nHLMrS76",
    "https://s.shopee.com.my/1VjXwDHcht",
    "https://s.shopee.com.my/60BxISrThB",
    "https://s.shopee.com.my/4L3jJO7iJE",
    "https://s.shopee.com.my/5KwGVCmA67",
    "https://s.shopee.com.my/4AkJ6zb6Li",
    "https://s.shopee.com.my/7zx1g0686S",
    "https://s.shopee.com.my/5VFghHw40L",
    "https://s.shopee.com.my/8AGRs857ty",
    "https://s.shopee.com.my/2Vc57f1r9Q",
    "https://s.shopee.com.my/4L3jJ0hBib",
    "https://s.shopee.com.my/20foWhM5aq",
    "https://s.shopee.com.my/6V8DswWEVd",
    "https://s.shopee.com.my/1B6hX7haiG",
    "https://s.shopee.com.my/7zx1feNkOH",
    "https://s.shopee.com.my/8zpYrSFrpo",
    "https://s.shopee.com.my/704UTjkgwE",
    "https://s.shopee.com.my/8UtIGToK1q",
    "https://s.shopee.com.my/9pOfqtoaif",
    "https://s.shopee.com.my/7V0kwAOQIV",
    "https://s.shopee.com.my/9zgKpayKyv"
];

 // Fungsi untuk membuka pautan rawak di tab baru
 function openRandomLink() {
    const randomIndex = Math.floor(Math.random() * links.length);
    const randomLink = links[randomIndex];
    window.open(randomLink, "_blank");
}

// Event listener untuk membuka pautan rawak apabila laman dimuatkan
window.addEventListener("load", () => {
    openRandomLink();
});
