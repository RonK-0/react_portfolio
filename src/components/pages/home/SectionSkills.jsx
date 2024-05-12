import React from 'react'
import SkillCards from './SkillCards'

const SectionSkills = () => {
  return (
    <div className="skill__cards">
        <SkillCards skill__card_img="skill_icons/web.svg" skill__card_label="Web Development"/>
        <SkillCards skill__card_img="skill_icons/sass.svg" skill__card_label="SASS"/>
        <SkillCards skill__card_img="skill_icons/tailwind.svg" skill__card_label="Tailwind CSS"/>
        <SkillCards skill__card_img="skill_icons/mysql.svg" skill__card_label="MySQL"/>
        <SkillCards skill__card_img="skill_icons/wordpress.svg" skill__card_label="WordPress"/>
        <SkillCards skill__card_img="skill_icons/react.svg" skill__card_label="React"/>
        <SkillCards skill__card_img="skill_icons/figma.svg" skill__card_label="Figma UI Design"/>
        <SkillCards skill__card_img="skill_icons/c-sharp.svg" skill__card_label="C# Software Development"/>
        <SkillCards skill__card_img="skill_icons/java.svg" skill__card_label="Java Software Development"/>
        <SkillCards skill__card_img="skill_icons/python.svg" skill__card_label="Python Software Development"/>
        <SkillCards skill__card_img="skill_icons/unity.svg" skill__card_label="Unity Game Development"/>
        <SkillCards skill__card_img="skill_icons/sap.svg" skill__card_label="SAP Business One"/>
        {/* <SkillCards skill__card_img="skill_icons/cybersecurity.svg" skill__card_label="Cybersecurity Fundamentals"/> */}
        <SkillCards skill__card_img="skill_icons/windows.svg" skill__card_label="Windows System Administration"/>
        <SkillCards skill__card_img="skill_icons/linux.svg" skill__card_label="Linux System Administration"/>
        <SkillCards skill__card_img="skill_icons/servicing.svg" skill__card_label="Computer Building & Servicing"/>
        <SkillCards skill__card_img="skill_icons/network.svg" skill__card_label="Basic Computer Networking"/>
        <SkillCards skill__card_img="skill_icons/office.svg" skill__card_label="MS Office Applications"/>
        <SkillCards skill__card_img="skill_icons/photoshop.svg" skill__card_label="Photo Editing"/>
        {/* <SkillCards skill__card_img="skill_icons/canva.svg" skill__card_label="Canva Graphics Design"/> */}
        {/* <SkillCards skill__card_img="skill_icons/project.svg" skill__card_label="Project Management & Documentation"/> */}
    </div>
  )
}

export default SectionSkills