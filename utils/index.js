const default_image = 'https://avatars.githubusercontent.com/u/140535973?v=4'
export const checkImageURL = (url) => {
    if (!url) return default_image
    else {
        const pattern = new RegExp('^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$', 'i');
        return pattern.test(url) ? url : default_image;
    }
};

