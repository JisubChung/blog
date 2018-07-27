import Home from 'app/Home';
import Blog from 'app/Blog';
import Gallery from 'app/Gallery';

export const routePaths = [
    {
        name: 'Home',
        component: Home,
        path: '/',
        params: { exact: true }
    },
    {
        name: 'Blog',
        component: Blog,
        path: '/blog',
        params: {}
    },
    {
        name: 'Gallery',
        component: Gallery,
        path: '/gallery',
        params: {}
    }
    // {
    //     name: 'Food',
    //     component: Food,
    //     path: '/food',
    //     params: {}
    // },
    // {
    //     name: 'Other',
    //     component: Other,
    //     path: '/other',
    //     params: {}
    // }
];
