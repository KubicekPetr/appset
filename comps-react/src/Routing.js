import {
    Switch,
    Route,
} from "react-router-dom";

import CollectionsRouting from './collections/routing';
import ElementsRouting from './elements/routing';

import HomeComponent from './home/home.coponent';
import NotFoundComponent from './not-found/not-found.component';

const moduleRoutes = [
    ...CollectionsRouting,
    ...ElementsRouting,
];

const commonRoutes = [
    { exact: true, component: HomeComponent, path: '/' },
    { component: NotFoundComponent }
]

const Modules = () => (
    <div>
        <Switch>
            {moduleRoutes.map((route, i) => (
                <Route key={i} {...route} />
            ))}
            {commonRoutes.map((route, i) => (
                <Route key={i} {...route} />
            ))}
        </Switch>
    </div>
);

export default Modules;