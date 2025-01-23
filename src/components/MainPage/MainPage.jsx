import Header from "../Header/Header"
import Main from "../Main/Main"
import TaskCards from "../TaskCards/TaskCards"
import TasksNavBar from "../TasksNavBar/TasksNavBar"

const MainPage = ({ name }) => {
    return (
        <>
            <Header />
            <Main name={name}/>
            <TasksNavBar />
            <TaskCards />
        </>
    )
}

export default MainPage