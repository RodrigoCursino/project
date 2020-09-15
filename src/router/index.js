import ConsolidadorHlViewComponent from "@/views/consolidador-hl/consolidadorHL"
import SimuladorViewComponent      from "@/views/simulador/simulador"
import LoginViewComponent          from "@/views/login/login"
import UsersViewComponent          from "@/views/users/users"

export const routes = [
    {
        path: "/",
        redirect: "/ops",
    },
    {
        path: "/login",
        titulo: "login",
        name: "login",
        component: LoginViewComponent
    },
    {
        path: "/ops",
        titulo: "ops",
        name: "ops",
        component: ConsolidadorHlViewComponent
    },
    {
        path: "/teste",
        titulo: "teste",
        name: "teste",
        component: SimuladorViewComponent 
    },
    {
        path: "/users",
        titulo: "cadastro",
        name: "users",
        component: UsersViewComponent 
    }
]
