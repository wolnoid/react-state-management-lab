

const FighterComponent = (props) => {
  return (
    <div>
      < img src={props.img} alt={props.name} />
      <h4>
          {props.name}
      </h4>
      <p>
          Price: {props.price}<br></br>
          Strength: {props.strength}<br></br>
          Agility: {props.agility}
      </p>
    </div>
  );
};

export default FighterComponent;