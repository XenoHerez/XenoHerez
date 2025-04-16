function joinServer() {
    alert("Prisijungimo funkcija dar neveikia!");
}
function redirect(platform) {
    let urls = {
        discord: "https://discord.com",
        tiktok: "https://tiktok.com"
    };
    window.location.href = urls[platform] || "#";
}
