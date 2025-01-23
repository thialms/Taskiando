import Header from "../Header/Header"
import Main from "../Main/Main"
import TaskCard from "../TaskCard/TaskCard"
import TasksNavBar from "../TasksNavBar/TasksNavBar"

const MainPage = ({ name, tasks }) => {
    return (
        <>
            <Header />
            <Main name={name} />
            <TasksNavBar />
            <div className="flex justify-start overflow-x-auto sm:justify-center">
                {tasks && tasks.length > 0 ? (
                    tasks.map((task, index) => (
                        <TaskCard key={index} task={task} />
                    ))
                ) : (
                    <div className="flex justify-center items-center w-full font-poppins mt-20 text-2xl">
                    <p>Nenhuma tarefa ativa</p>
                    </div>
                )}
            </div>
        </>
    )
}

export default MainPage