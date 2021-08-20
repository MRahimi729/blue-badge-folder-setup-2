const Footer = (props) => {

    return(
        <div>
            <p>EFA © {new Date().getFullYear()}</p>
            <p>EFA © {props.date}</p>
        </div>
    )
};

export default Footer;