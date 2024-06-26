import RegisterPage from "@/pages/RegisterPage";
import LoginPage from "@/pages/LoginPage";
import HomePage from "@/pages/HomePage";
import NewReportPage from "@/pages/NewReport";
import MyReportsPage from "@/pages/MyReports";
import SettingsPage from "@/pages/Settings";
import PartnersPage from "@/pages/landings/partnersPage.vue";
import linearDiagram from "@/pages/DiagramPages/linearDiagram.vue";
import circleDiagram from "@/pages/DiagramPages/circleDiagram.vue";

import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: "/",
        redirect: "/home", // Перенаправлення з кореневого шляху на '/home'
    },
    { path: "/login", component: LoginPage, name: "loginPage" },
    { path: "/signup", component: RegisterPage, name: "registerPage" },
    { path: "/home", component: HomePage, name: "homePage" },
    { path: "/newReport", component: NewReportPage, name: "newReportPage" },
    {
        path: "/newReport/linearDiagram",
        component: linearDiagram,
        name: "linearDiagram",
    },
    {
        path: "/newReport/circleDiagram",
        component: circleDiagram,
        name: "circleDiagram",
    },
    {
        path: "/newReport/gistogram",
        component: linearDiagram,
        name: "gistogram",
    },
    {
        path: "/myReports",
        component: MyReportsPage,
        name: "myReportsPage",
    },
    { path: "/settings", component: SettingsPage, name: "settingsPage" },
    { path: "/partners", component: PartnersPage, name: "partnersPage" },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
export default router;
