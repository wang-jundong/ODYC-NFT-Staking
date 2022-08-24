import AppRoutes from "./components/routes";
import { ReactNotifications } from "react-notifications-component";
import Loading from "./components/pages/loading";
import { useSelector } from "react-redux";
import { selectIsLoading } from "./redux/reducers/tokensReducer";

const App = () => {
    const isLoading = useSelector(selectIsLoading);

    return (
        <div>
            <ReactNotifications />
            <AppRoutes />
            {isLoading && <Loading />}
        </div>
    );
};

export default App;
