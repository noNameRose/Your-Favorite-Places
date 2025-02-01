const Avatar = ({image, alt}) => {
    return (
            <img className="rounded-full"
                src={image}
                alt={alt}
            />
    );
};

export default Avatar;