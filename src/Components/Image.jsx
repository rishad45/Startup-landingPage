const Image = ({ base64String, contentType }) => {
    return <img src={`data:${contentType};base64,${base64String}`} alt="Not found" />;
};

export default Image;