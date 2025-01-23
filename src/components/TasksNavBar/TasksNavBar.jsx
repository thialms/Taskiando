const TasksNavBar = () => {
    return (
        <div className="font-poppins text-sm mt-12">
            <ul className="flex justify-around">
                <li className="cursor-pointer">Minhas Tarefas</li>
                <li className="cursor-pointer">Em progresso</li>
                <li className="cursor-pointer">Concluídas</li>
            </ul>
        </div>
    )
}

export default TasksNavBar