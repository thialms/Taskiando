import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AddTask = ({ tasks, setTasks }) => {

    const location = useLocation()
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        taskname: "",
        taskdate: "",
        taskstarttime: "",
        taskendtime: "",
        taskdescription: "",
        taskcategory: "",
    })

    const navHome = () => {
        navigate('/tasks')
    }

    useEffect(() => {

        const classes = ["bg-gradient-to-tr", "from-task-purple", "to-task-darkpurple"]

        if (location.pathname === "/add-task") {
            classes.forEach((cls) => document.body.classList.add(cls))
        } else {
            classes.forEach((cls) => document.body.classList.remove(cls))
        }


        return () => {
            classes.forEach((cls) => document.body.classList.remove(cls))
        };
    }, [location]);

    const SaveForm = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const SendForm = (e) => {
        e.preventDefault(); // Evita o comportamento padrão de recarregar a página
        setTasks((prevTasks) => [...prevTasks, formData]); // Adiciona a nova tarefa
        setFormData({ // Reseta os campos do formulário
            taskname: "",
            taskdate: "",
            taskstarttime: "",
            taskendtime: "",
            taskdescription: "",
            taskcategory: "",
        });
    };


    return (
        <section>
            <div className="flex justify-between mx-7 mt-10 font-poppins font-semibold text-white">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                    onClick={navHome}>
                    <path
                        fillRule="evenodd"
                        d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z"
                        clipRule="evenodd" />
                </svg>

                <h1>Criar uma Tarefa</h1>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                </svg>

            </div>

            <form className="mt-10 font-poppins w-full max-w-xl sm:max-w-full" onSubmit={SendForm}>

                <div className="text-white">
                    <div className="flex flex-col items-center">
                        <label
                            className="text-left w-80">
                            Nome
                            <input type="text"
                                className="w-80 py-3 pl-2 text-2xl font-semibold border-b-2 border-gray-200 bg-transparent"
                                required
                                name="taskname"
                                value={formData.taskname}
                                onChange={SaveForm}>

                            </input>
                        </label>

                    </div>

                    <div className="flex flex-col items-center mt-5">
                        <label
                            className="text-left w-80">
                            Data
                            <input
                                type="date"
                                className="w-80 py-3 pl-2 text-2xl font-semibold border-b-2 border-gray-200 bg-transparent"
                                required
                                name="taskdate"
                                value={formData.taskdate}
                                onChange={SaveForm}>
                            </input>
                        </label>

                    </div>
                </div>

                <div className="relative z-10 bg-white rounded-t-3xl mt-10 min-h-screen">

                    <div className="flex justify-center">
                        <div className="grid grid-cols-2 mt-5 ml-12 sm:ml-0">
                            <div>
                                <label
                                    className="block opacity-50">
                                    Hora do Início
                                    <input
                                        type="time"
                                        className="py-4 pl-2 text-xl font-semibold border-b-2 border-gray-200 sm:ml-5"
                                        name="taskstarttime"
                                        value={formData.taskstarttime}
                                        onChange={SaveForm}>
                                    </input>
                                </label>
                            </div>

                            <div>
                                <label className="block opacity-50">
                                    Hora do Término
                                    <input
                                        type="time"
                                        className="py-4 pl-2 text-xl font-semibold border-b-2 border-gray-200 sm:ml-5"
                                        name="taskendtime"
                                        value={formData.taskendtime}
                                        onChange={SaveForm}>
                                    </input>
                                </label>
                            </div>

                        </div>
                    </div>

                    <div className="flex flex-col items-center mt-5">
                        <label className="text-left w-80 opacity-50">
                            Descrição
                            <textarea
                                className="w-80 py-4 pl-2 h-14 text-sm font-semibold border-b-2 border-gray-200"
                                name="taskdescription"
                                value={formData.taskdescription}
                                onChange={SaveForm}>
                            </textarea>
                        </label>
                    </div>

                    <div className="flex flex-col items-center mt-5">
                        <label className="text-left w-80 opacity-50">
                            Categoria
                            <input
                                type="text"
                                className="w-80 py-4 pl-2 text-sm font-semibold border-b-2"
                                required
                                name="taskcategory"
                                value={formData.taskcategory}
                                onChange={SaveForm}>
                            </input>
                        </label>
                    </div>

                    <div className="flex justify-center mt-20">
                        <button
                            type="submit"
                            className="w-80 p-4 mt-4 rounded-full bg-gradient-to-r from-task-purple to-task-darkpurple text-white"
                            onClick={navHome}>Criar Tarefa</button>
                    </div>

                </div>

            </form>

        </section>
    )
}

export default AddTask