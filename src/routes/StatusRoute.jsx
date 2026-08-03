import ComingSoon from "../pages/system/ComingSoon";
import NotFound from "../pages/errors/NotFound";
import TempUnavailable from "../pages/system/TempUnavailable";

function StatusRoute({ Component, status }) {
    switch (status) {
        case "active":
            return <Component />;

        case "coming-soon":
            return <ComingSoon />;

        case "maintenance":
            return <TempUnavailable />;

        default:
            return <NotFound />;
    }
}

export default StatusRoute;