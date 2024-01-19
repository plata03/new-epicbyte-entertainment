import { Link } from 'react-router-dom'
import './projectstyle.css'

const Project = ({id, titolo, logo}) => {

    return (
        <div className='project-card'>
            <Link to={"/projects/"+id}>
                <img className='project-logo' src={logo} />
            </Link>
            <p className='project-title'>{titolo}</p>
        </div>
    )
}

export default Project