const TaskCard = ({ task }) => {
    if (!task) return <div></div>

    return (
        <div className="flex flex-row ">
            <div className="flex flex-col mt-12 w-64 h-64 text-white bg-gradient-to-tr from-task-purple to-task-darkpurple rounded-2xl font-poppins ml-7 pl-7 py-8 justify-around">
                <h3 className="font-semibold text-xl">{task.taskname}</h3>
                <p className="font-semibold text-2xl">{task.taskcategory}</p>
                <p>{task.taskdate}</p>
                <p className="hidden">{task.taskstarttime}</p>
                <p className="hidden">{task.taskendtime}</p>
                <p className="hidden">{task.taskdescription}</p>
            </div>
        </div>
    );
};

export default TaskCard;