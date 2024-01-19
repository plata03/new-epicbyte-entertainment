import './teamcardstyle.css'

const Teamcard = ({nome, cognome, desc, pfp, skills}) => {

    return (
        <div className='team-card' >
            <div className='team-pfp-container' >
                <img className='team-card-pfp' src={pfp} />
            </div>
            <div className='team-card-content'>
                <label className='team-card-fullname'>{cognome} {nome}</label>
                <label className='team-card-skills'>
                <ul style={{listStyle: 'none'}}>
                {skills.map((skill, index) => (
                    <span key={index}>
                        <li>{skill}</li>
                    </span>
                ))}
                </ul>
                </label>
                <p className='team-card-desc'>{desc}</p>
            </div>
            <div className='team-social-links'>
                <a className='insta' href='#'>
                    <img className='fa-brands fa-insta' src='https://i.ibb.co/BPrx7Lt/instagram-Logo.png' ></img>
                </a>
                <a className='linkedin' href='#'>
                    <img className='fa-brands fa-linkedin' src='https://i.ibb.co/927zwdH/linkedin-Contact.png' ></img>
                </a>
                <a className='gmail' href='#'>
                    <img  className='fa-brands fa-gmail' src='https://i.ibb.co/drhjLMc/gmail.png' ></img>
                </a>
                <a className='discord' href='#'>
                    <img  className='fa-brands fa-discord' src='https://i.ibb.co/ZfFbKq7/discord.png"' ></img>
                </a>
            </div>
        </div>
    )
}

export default Teamcard