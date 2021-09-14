import { Fragment } from "react/cjs/react.production.min"
import Header from "../../components/Header"

export const Main = ({children}) => {
    return (
        <Fragment>
            <Header />
            {children}
        </Fragment>

    )
}
