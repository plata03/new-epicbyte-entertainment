import "./teamstyle.css"
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { useEffect, useState } from "react";
import { appDb } from "../firebaseConfig";
import Teamcard from "./Teamcard";
import Skill from "./Skill";

const db = appDb.firestore();


const Team = () => {

    const [member, setMember] = useState([]);
    const [skill, setSkill] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const snapshot = await db.collection("Team").get();
            const teamData = snapshot.docs.map((doc) => doc.data());
                
            setMember(teamData);
        };
        fetchData();
        
      }, []);

      useEffect(() => {
        const fetchData = async () => {
            const snapshot = await db.collection("Skill").get();
            const skillData = snapshot.docs.map((doc) => doc.data());
                
            setSkill(skillData);
        };
        fetchData();
        
      }, []);

    return (
        <>
            <Header />
            <div className="team-container">
                <h1 className="team-title">MEET THE TEAM</h1>
                <div className="team-cards-container">
                {member
                        .sort( (a, b) => a.surname > b.surname ? 1 : -1)
                        .map((mbr) => (
                        
                            <Teamcard 
                                nome = {mbr.name}
                                cognome = {mbr.surname}
                                desc = {mbr.desc}
                                pfp = {mbr.pfp}
                                skills = {mbr.role}
                            />
                            
                    ))
                    }
                </div>
            </div>
            <div className="skills-div">
                <div className="skills-div-secondary">
                    <h1 className="skills-title">OUR SKILLS</h1>
                    <h2 className="skills-category">Front-End</h2>
                    <div className="skills-container">
                    {
                        skill
                            .filter(filtro => {
                                if (filtro.category === 'front-end') {
                                return filtro;
                                }
                            })
                            .map((sk) => (
                                <Skill
                                    name={sk.name}
                                    logo={sk.logo}
                                />
                            ))
                    }
                    </div>
                    <h2 className="skills-category">Back-End</h2>
                    <div className="skills-container">
                    {
                        skill
                            .filter(filtro => {
                                if (filtro.category === 'back-end') {
                                return filtro;
                                }
                            })
                            .map((sk) => (
                                <Skill
                                    name={sk.name}
                                    logo={sk.logo}
                                />
                            ))
                    }
                    </div>
                    <h2 className="skills-category">Database</h2>
                    <div className="skills-container">
                    {
                        skill
                            .filter(filtro => {
                                if (filtro.category === 'database') {
                                return filtro;
                                }
                            })
                            .map((sk) => (
                                <Skill
                                    name={sk.name}
                                    logo={sk.logo}
                                />
                            ))
                    }
                    </div>
                    <h2 className="skills-category">Software / Service</h2>
                    <div className="skills-container">
                    {
                        skill
                            .filter(filtro => {
                                if (filtro.category === 'software') {
                                return filtro;
                                }
                            })
                            .map((sk) => (
                                <Skill
                                    name={sk.name}
                                    logo={sk.logo}
                                />
                            ))
                    }
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Team;