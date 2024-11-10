import Link from 'next/link'
import taskList from '../Components/TasksList';

export default async function ExercisePage(){

    const pages = [];

    for (let index = 1; index <= 20; index++) {
        pages.push(
            <div>
                <a href={`/exercise/${index}`} key={index} style={{ marginRight: '10px' }}>
                    Page {index}
                </a>
                <br key={index + 100}></br>
            </div>
        );
    }
    return (
        <>
        <Link href="/">Dashboard</Link>
        {taskList.map((task) => (
            <div key={task.id}>
                <Link href={`/exercise/${task.id}`}><p>{task.name}</p></Link>
            </div>
        ))}
        </>
    )
}