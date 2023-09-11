import styles from "./style.module.css"

export const TeacherCard = ({name, courseModule, age}) => {
    return(
        <li className={styles.teacherCard}>
            <h3>{name} - {courseModule}</h3>
            <p>Idade: {age}</p>
        </li>
    )
}