
const RenderCloudinaryImage = ({imageUrl, maxWidth}) => {

  return (
    <>
    { 
        maxWidth ?
        (
            <div style = {{width: maxWidth}}>
                <img src={imageUrl}/>
            </div>
        ) : (
            <div>
                <img src={imageUrl}/>
            </div>
        )
    }
    </>
  );
};

export default RenderCloudinaryImage;
