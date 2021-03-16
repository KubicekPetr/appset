import {
    Switch,
    Route,
} from "react-router-dom";

import loadable from '@loadable/component'

import CollectionsRouting, { CollectionsModule } from './collections/routing';
import ElementsRouting, { ElementsModule } from './elements/routing';

import HomeComponent from './home/home.coponent';
import NotFoundComponent from './not-found/not-found.component';

const loadChildren = (module, ...routing) => {
    return routing.map(route => {
        return loadable(() => import(`./${module}/${route.component}`));  
    });
};

const moduleRoutes = [
    ...loadChildren(CollectionsModule, ...CollectionsRouting),
    ...loadChildren(ElementsModule, ...ElementsRouting),
];

const commonRoutes = [
    { exact: true, component: HomeComponent, path: '/' },
    { component: NotFoundComponent }
]

const Modules = () => (
    <div>
        <Switch>
            {console.log(moduleRoutes)}
            {
            moduleRoutes.map((route, i) => (
                <Route key={i} {...route} />
            ))}
            {commonRoutes.map((route, i) => (
                <Route key={i} {...route} />
            ))}
        </Switch>
    </div>
);

export default Modules;