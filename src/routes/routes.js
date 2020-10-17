import showBlogs from '../components/showBlogs'
import addBlogs from '../components/addBlog'
import singleBlog from '../components/singleBlog'

export default [
    { path: '/', component: showBlogs},
    { path: '/add', component: addBlogs},
    { path: '/blog/:id', component: singleBlog},
]