

function ProfilePicture(){
    const imageURL = "https://www.westcountrygalleries.co.uk/media/artwork/ART1040317-colourful%20landscape.jpg";
    const handleClick = (e) => {
        e.target.style.display = "none";
    }
    return (
        <>
            <img onClick={(e)=>handleClick(e)} src={imageURL} alt="Profile" />
        </>
    );
}

export default ProfilePicture;