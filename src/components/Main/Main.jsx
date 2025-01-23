    const Main = ({ name }) => {
    return (
        <div className="flex flex-col ml-7 my-10 font-poppins">
            <h1 className="font-semibold text-5xl text-task-blue">Olá {name?.name || 'usuário'}!</h1>
            <h4 className="text-xl ml-1 text-task-blue opacity-55">Tenha um ótimo dia.</h4>
        </div>
    )
}

export default Main 