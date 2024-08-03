const Partner = ({ partner }) => {
  const { image, name, description } = partner;
  if (partner) {
    return (
      <>
        <img src={image} alt={name} style={{ width: "150px" }} />
        <div className='ms-4'>
          <h5 className='fw-bold'>{name}</h5>
          {description}
        </div>
      </>
    );
  }
  return <></>;
};

export default Partner;
