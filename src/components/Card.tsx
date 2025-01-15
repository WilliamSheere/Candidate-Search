import "./Card.css"
const Card = (props: any) => {
	return (
		<div>
			<div>{props.user?.id}</div>
            <div>{props.user?.login}</div>
            <div><img src= {props.user?.avatar_url} alt="Avatar" /></div>
            
            
		</div>
     
	);
};

export default Card;
