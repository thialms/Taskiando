import { useNavigate } from 'react-router-dom';

const LoginPage = ({ onSubmit }) => {
    const navigate = useNavigate();

    const safeSubmit = event => {
        event.preventDefault()
        event.stopPropagation()

        const name = event.target[0].value
        const email = event.target[1].value

        onSubmit({ name, email })
        navigate('/tasks')
    }

    return (
        <form onSubmit={safeSubmit}>
            <h1 className="flex justify-center mt-40 mb-4 font-poppins font-semibold text-3xl text-task-blue ">Acesse o Taskiando</h1>
            <div className="flex flex-col items-center font-poppins">
                <input className="input" type="text" placeholder="Digite seu nome..." required name='loginname'/>
                <input className="input" type="email" placeholder="Digite seu e-mail..." required name='loginemail'/>
                <button type="submit" className="flex justify-center w-80 p-3 mt-4  rounded-3xl bg-gradient-to-r from-task-purple to-task-darkpurple text-white">Entrar</button>
            </div>
        </form>

    )
}

export default LoginPage