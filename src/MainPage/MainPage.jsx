import { NavLink } from "react-router-dom"


const MainPage = ()=>{

    return(
        <>
        <div>hi</div>
        <div>
            <NavLink to="kyu8">kyu8</NavLink>
            <NavLink to="kyu7">kyu7</NavLink>
            <NavLink to="kyu6">kyu6</NavLink>
            <NavLink to="kyu5">kyu5</NavLink>
            <NavLink to="kyu4">kyu4</NavLink>
            <NavLink to="kyu3">kyu3</NavLink>
            <NavLink to="kyu2">kyu2</NavLink>
            <NavLink to="kyu1">kyu1</NavLink>
            <NavLink to="kyu0">kyu0</NavLink>

        </div>
        </>
    )
}

export default MainPage