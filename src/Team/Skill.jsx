import './skillstyle.css'

const Skill = ({name, logo}) => {

    return (
        <div className='skill-card'>
            <div className='image-container'>
                <img className='image-skills' src={logo} />
            </div>
            <h2 className='skill-card-name'>{name}</h2>
        </div>
    )
}

export default Skill