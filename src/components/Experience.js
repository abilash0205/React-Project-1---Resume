function Experience(props) {
    console.log(props);
    return (
        <>
            <div className='flex space-between'>
                <div>
                    <h2 className='m-4'>{props.role}</h2>
                    <p className='m-4 bold'>{props.company}</p>
                </div>
                <div>
                    <h2 className='m-4'>{props.type}</h2>
                    <p className='m-4'>{props.duration}</p>
                </div>
            </div>

            {
                props.descriptions.map((description) => (
                    <p>{description}</p>
                ))
            }

            <div className='badge-container'>
                {props.skills.map((skill) => (
                    <span className="badge">{skill}</span>
                ))}
            </div>
        </>
    )
}

export default Experience;