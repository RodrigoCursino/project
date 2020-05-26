import ConsolidadorHlViewComponent from "@/views/consolidador-hl/consolidadorHL"
import SimuladorViewComponent      from "@/views/simulador/simulador"
import LoginViewComponent          from "@/views/login/login"
import UsersViewComponent          from "@/views/users/users"

export const routes = [
    {
        path: "/",
        redirect: "/consolidador-hl",
    },
    {
        path: "/login",
        titulo: "login",
        name: "login",
        component: LoginViewComponent
    },
    {
        path: "/consolidador-hl",
        titulo: "consolidador-hl",
        name: "consolidador-hl",
        component: ConsolidadorHlViewComponent
    },
    {
        path: "/simulador",
        titulo: "simulador",
        name: "simulador",
        component: SimuladorViewComponent 
    },
    {
        path: "/users",
        titulo: "cadastro",
        name: "users",
        component: UsersViewComponent 
    }
]
