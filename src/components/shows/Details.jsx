const Details = props => {
  const { status, premiered, network } = props;
  return (
    <div>
      <div>
        <p>Status: {status}</p>
        <p>
          Premiered: {premiered} {!!network && `on ${network.name}`}{' '}
        </p>
      </div>
    </div>
  );
};

export default Details;
