import "./projectsstyle.css"
import Header from '../Header/Header'
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import { appDb } from "../firebaseConfig";
import Project from "../Project/Project";

const db = appDb.firestore();

const Projects = () => {

    //const [query, setQuery] = useState('');

    const [proj, setProj] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const snapshot = await db.collection("Project").get();
            const projData = snapshot.docs.map((doc) => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
                
            });
            setProj(projData);
        };
        fetchData();
        
      }, []);


    return (
        <>
            <Header />
            <div className="projects-container">
                <h1 className="archive-title">PROJECTS ARCHIVE</h1>
                <h2 className="category-title">Games</h2>
                <div className="projects-wrapper">

                {proj
                        .filter(filtro => {
                             if (filtro.category === 'game') {
                                return filtro;
                            }
                        })
                        .map((pr) => (
                        
                            <Project 
                                titolo = {pr.title}
                                logo = {pr.logo}
                                id = {pr.id}
                            />
                            
                    ))
                    }
                    

                </div>
                <h2 className="category-title">Websites</h2>
                <div className="projects-wrapper">
                {proj
                        .filter(filtro => {
                             if (filtro.category === 'website') {
                                return filtro;
                            }
                        })
                        .map((pr) => (
                        
                            <Project 
                                titolo = {pr.title}
                                logo = {pr.logo}
                                id = {pr.id}
                            />
                            
                    ))
                    }
                </div>
                <h2 className="category-title">Mobile Apps</h2>
                <div className="projects-wrapper">
                {proj
                        .filter(filtro => {
                             if (filtro.category === 'mobile_app') {
                                return filtro;
                            }
                        })
                        .map((pr) => (
                        
                            <Project 
                                titolo = {pr.title}
                                logo = {pr.logo}
                                id = {pr.id}
                            />
                            
                    ))
                    }
                </div>
                <h2 className="category-title">Desktop Apps</h2>
                <div className="projects-wrapper">
                {proj
                        .filter(filtro => {
                             if (filtro.category === 'software') {
                                return filtro;
                            }
                        })
                        .map((pr) => (
                        
                            <Project 
                                titolo = {pr.title}
                                logo = {pr.logo}
                                id = {pr.id}
                            />
                            
                    ))
                    }
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Projects;