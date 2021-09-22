import { Switch, Route } from "react-router-dom"
import Home from "../pages/home"
import Signup from "../pages/Signup"
const Routes = () => {

    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path = "/signup">
                <Signup />
            </Route>
        </Switch>
    )
}
export default Routes 