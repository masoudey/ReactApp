import Loadable from "react-loadable";
import { BlogPage } from "./containers/BlogPage";
import SingleWork from "./containers/SingleWork";
import { SinglePost } from "./containers/SinglePost";
import AddPost from "./containers/AddPost";
import {About} from "./containers/AboutPage";
import NotFound from "./containers/NotFound";
import { login } from "./actions/userActions";

const Loading = () => <section id="loader-wrapper">
<div id="loader"></div>
<div class="loader-section section-left"></div>
<div class="loader-section section-right"></div>
</section>

const Home = Loadable({
    loader: () => import("./containers/HomePage"),
    loading: Loading,
    modules: ["./containers/HomePage"],
    webpack: () => [require.resolveWeak("./containers/HomePage")],
    delay: 90000,
  });

const Works = Loadable({
    loader: () => import("./containers/WorksPage"),
    loading: Loading,
    delay: 90000,
});

const Login = Loadable({
    loader: () => import("./containers/Login"),
    loading: Loading,
    delay: 90000,
});

const routes = {
    regular: [
        {
            path: '/',
            component: Home,
            exact: true
        },
        {
            path: '/works',
            component: Works,
            exact: true
        },
        {
            path: '/blog',
            component: BlogPage,
            exact: true
        },
        {
            path: '/blog/:postid',
            component: SinglePost,
        },
        {
            path: '/works/:workid',
            component: SingleWork,
        },
        {
            path: '/about',
            component: About,
        },
        {
            component: NotFound
        }
    ],
    private: [
        {
            path: '/addpost',
            component: AddPost
        }
    ],
    public: [
        {
            path: '/login',
            component: Login
        }
    ]
}

export default routes;

