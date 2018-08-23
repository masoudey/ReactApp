import React from "react";
import Loadable from "react-loadable";
import SingleWork from "./containers/SingleWork";
import { SinglePost } from "./containers/SinglePost";
import AddPost from "./containers/AddPost";
import {About} from "./containers/AboutPage";
import NotFound from "./containers/NotFound";
import Register from "./containers/Register";
import { loginSuccess, loadPosts, loadPostById } from "./actions";

const Loading = () => <section id="loader-wrapper">
<div id="loader"></div>
<div class="loader-section section-left"></div>
<div class="loader-section section-right"></div>
</section>

const Home = Loadable({
    loader: () => import("./containers/HomePage"),
    loading: Loading,
    modules: ["./containers/HomePage","react-id-swiper"],
    webpack: () => [require.resolveWeak("./containers/HomePage")],
    delay: 90000,
  });

const Works = Loadable({
    loader: () => import("./containers/WorksPage"),
    loading: Loading,
    render(loaded, props) {
        let WorksPage = loaded.default;
        return <WorksPage {...props} />;
    }
});

const Blog = Loadable({
    loader: () => import("./containers/BlogPage"),
    loading: Loading,
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
            exact: true,
            loadData: () => loadPosts()
        },
        {
            path: '/blog',
            component: Blog,
            exact: true,
            loadData: () => loadPosts()
        },
        {
            path: '/blog/:postid',
            component: SinglePost,
            loadData: (id) => loadPostById(id.postid)
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
        },
        {
            path: '/register',
            component: Register
        }
    ]
}

export default routes;

