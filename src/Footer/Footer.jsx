import './footerstyle.css'

const Footer = () => {

    return (
        <div className='footer'>
            <div className='container-footer'>
                <div className='container-footer-above'>
                    <img src="https://i.ibb.co/H2NSqkV/autism.png" className='logo-footer' />
                    <div className='socials'>
                        <img className="logosocial" src="https://i.ibb.co/5xJpbm3/youtube.png" />
                        <img className="logosocial" src="https://i.ibb.co/BPrx7Lt/instagram-Logo.png" />
                        <img className="logosocial" src="https://i.ibb.co/3BXBHbx/linkedin-Logo.png" />
                    </div>
                </div>
                <hr style={{marginTop: '15px', marginBottom: '15px'}} />
                <div className='container-footer-below'>
                    <p className='footer-p'>© EpicByte Entertainment 2024 - All rights reserved</p>
                    <div className='policies'>
                        <p className='footer-p'>Terms and Services</p>
                        <p className='footer-p'>Privacy Policy</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer