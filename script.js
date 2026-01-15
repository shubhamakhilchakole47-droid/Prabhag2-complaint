document.getElementById("complaintForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let mobile = document.getElementById("mobile").value;
    let type = document.getElementById("type").value;
    let details = document.getElementById("details").value;

    let message =
        "📝 *प्रभाग २ – नवीन तक्रार* %0A%0A" +
        "👤 नाव: " + name + "%0A" +
        "📱 मोबाईल: " + mobile + "%0A" +
        "📌 प्रकार: " + type + "%0A%0A" +
        "✍️ तक्रार: " + details;

    let whatsappNumber = "917517049247"; // Admin WhatsApp
    let url = "https://wa.me/" + whatsappNumber + "?text=" + message;

    window.open(url, "_blank");
});
