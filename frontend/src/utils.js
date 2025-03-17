export default function formatImageUrl (imagePath) {
    if (!imagePath) return "";  // Handle missing images
    return `http://127.0.0.1:8000/${imagePath.replace("watch_images/watch_images/", "watch_images/")}`;
};