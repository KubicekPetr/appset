import {
    Switch,
    Route,
} from "react-router-dom";

import CollectionsRouting from './collections/routing';
import ElementsRouting from './elements/routing';

const routes = [
    ...CollectionsRouting,
    ...ElementsRouting,
];

const Modules = () => (
    <div>
        <Switch>
            {routes.map((route, i) => (
                <Route key={i} {...route} />
            ))}
        </Switch>
    </div>
);

export default Modules;