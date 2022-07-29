import React, { useState } from 'react'
import { useMediaQuery } from "react-responsive";
import { skillsText } from '../store/constant'
import SkillsJson from '../store/skills.json'

function Skills2() {
    const [isShown, setIsShown] = useState(-1);
    const isMobile = useMediaQuery({ maxWidth: 890 });
    const size = isMobile ? 70 : 100;

    const showSkillText = () => {
        return (
            <>
                {isShown !== -1 ?
                    <p style={{ height: '20px' }} className='center-simple'>{skillsText[isShown]}</p>
                    : isShown === -1 && <p style={{ height: '20px' }}></p>}
            </>
        )
    }
    return (
        <div>
            <div style={{ paddingTop: '50px' }} />
            <h1 style={{ textAlign: 'center' }}>Skills</h1>
            <div className='center-simple'>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20 }}>
                    {SkillsJson.map((skill) => {
                        const styleFlex = skill.id % 2 === 0 ? 'end' : 'start'
                        return (
                            <div style={isMobile ? { flex: '1 0 33%', display: 'flex', justifyContent: styleFlex } : { flex: '1 0 21%', display: 'flex', justifyContent: 'center' }} key={skill.id}>
                                <img src={skill.src} alt={skill.alt} style={{ borderRadius: skill.radius }} width={size} height={size} onMouseEnter={() => setIsShown(skill.id)} onMouseLeave={() => setIsShown(-1)} />
                            </div>
                        )
                    })}
                </div>
            </div>
            {showSkillText()}
        </div>
    )
}

export default Skills2