import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '.';

export const ProtectedRoute = ({ children, ...props}) => {
    const inDebugMode = false;
    const inMaintainance = false;

    const { isLoading, user } = useAuth();

    if (isLoading && isLoading !== null) {
        return <div>Loading</div>
    }

    if (inMaintainance) {
        return <div>Maintainence In Progress</div>
    }

    if (!!!user && !inDebugMode) {
        return <Redirect to='/signIn' />
    }

    return <Route {...props}>{children}</Route>
}
