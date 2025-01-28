import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: () => import('../views/NotFoundView.vue')
        },
        {
            path: "/",
            alias: "/home",
            name: "Home",
            component: () => import("../views/HomeView.vue")
        },
        {
            path: "/exoInterpolation",
            name: "ExoInterpolation",
            component: () => import("../views/exos/ExotextInterpolation.vue")
        },
        {
            path: "/LessonTextInterpolation",
            name: "LessonTextInterpolation",
            component: () => import("../views/lesson/LessonTextInterpolation.vue")
        },
        {
            path: "/RandomBook",
            name: "RandomBook",
            component: () => import("../views/exos/RandomBook.vue")
        },
        {
            path: "/DataBinding",
            name: "DataBinding",
            component: () => import("../views/tp/DataBinding.vue")
        },
        {
            path: "/LessonAttributeBinding",
            name: "LessonAttributeBinding",
            component: () => import("../views/lesson/LessonAttributeBindingView.vue")
        },
        {
            path: "/ExoDirectiveVon",
            name: "ExoDirectiveVon",
            component: () => import("../views/exos/ExoDirectiveVon.vue")
        },
        {
            path: "/ExoDirectiveVon2",
            name: "ExoDirectiveVon2",
            component: () => import("../views/exos/Exo2DirectiveVon.vue")
        },
        {
            path: "/ExoEventModifier",
            name: "ExoEventModifier",
            component: () => import("../views/exos/ExoEventModifier.vue")
        },
        {
            path: "/LessonTwoWayBinding",
            name: "LessonTwoWayBinding",
            component: () => import("../views/lesson/LessonTwoWayBinding.vue")
        },
        {
            path: "/TwoWayBindingComp",
            name: "TwoWayBindingComp",
            component: () => import("../views/exos/TwoWayBindingComp.vue")
        },

    ]
});
export default router;