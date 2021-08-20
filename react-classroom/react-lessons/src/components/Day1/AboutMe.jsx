const About = (props) => {
    return(
        <div>
            <h1 style ={{color: "red"}}>Hi! My name is {props.name}.</h1>
            <p>I grew up in {props.hometown}. </p>
            <p> Three places that I've visited and would love to visit again are:</p>
            <ul style={{listStyleType:"none", textAlign: "left"}}>
                <li>{props.place1}</li>
                <li>{props.place2}</li>
                <li>{props.place3}</li>
            </ul>
            <h3>It's nice to meet all of you!</h3>
        </div>
    )
};

export default About;