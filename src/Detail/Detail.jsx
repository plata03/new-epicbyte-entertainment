import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { appDb } from '../firebaseConfig';
import Header from '../Header/Header';
import Footer from "../Footer/Footer";
import './detailstyle.css';

const db = appDb.firestore();

const Detail = () => {
    const { id } = useParams();
    const [projectDetails, setProjectDetails] = useState(null);

    useEffect(() => {
        const fetchProjectDetails = async () => {
            try {
                const doc = await db.collection('Project').doc(id).get();
                if (doc.exists) {
                    setProjectDetails({
                        id: doc.id,
                        ...doc.data(),
                    });
                } else {   
                    console.error('Project not found');
                }
            } catch (error) {
                console.error('Error fetching project details', error);
            }
        };
        fetchProjectDetails();
    }, [id]);



    return (
        <>
            <Header />
            {projectDetails && (
                <div className="details-container">
                    <div className='images-container'>
                        {projectDetails.screenshots.map((ss) => (
                            <img src={ss} />
                        ))
                        
                        }
                    </div>
                    <img className='detail-logo' src={projectDetails.logo} />
                    <h1 className='detail-project-title'>{projectDetails.title}</h1>
                    <div className='details-info-wrap'>
                        <div className='details-info-container'>
                            <p className='detail-placeholder'>Made by:</p>
                            <p style={{fontStyle: 'italic'}}>{projectDetails.by}</p>
                        </div>
                        <div className='details-info-container'>
                            <p className='detail-placeholder'>Current version:</p>
                            <p style={{fontStyle: 'italic'}}>{projectDetails.version}</p>
                        </div>
                        <div className='details-info-container'>
                            <p className='detail-placeholder'>Technologies used:</p>
                            <ul style={{listStyle: 'none'}}>
                            {projectDetails.tech.map((t) => (
                                <li style={{textAlign: 'end', fontStyle: 'italic'}}>{t}</li>
                            ))}
                            </ul>
                        </div>
                    </div>
                    <div className='details-desc-container'>
                        <p className='details-desc'>{projectDetails.desc}</p>
                    </div>
                    <button className='details-view-button'>View</button>
                </div>
            )}
            <Footer />
        </>
    );
};

export default Detail;
