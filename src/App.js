import './App.css';
import PracticeAreasPage from "./pages/practice-areas/practice-areas-page";
import AboutPage from "./pages/about/about-page";
import NotFoundPage from "./pages/404/not-found-page";
import {THEMES} from "./utils/themes";
import {Route, Routes, useLocation} from "react-router";
import {ThemeProvider} from "@mui/material";
import HomePage from "./pages/home/home-page";
import ContactPage from "./pages/contact/contact-page";
import TestimoniesPage from "./pages/testimonies/testimonies-page";
import {AnimatePresence} from "framer-motion";

function App() {

    const location = useLocation();

    return (
        <ThemeProvider theme={THEMES.lightTheme}>
            <AnimatePresence mode="wait">
                <Routes location={location}>
                    <Route element={<HomePage/>} exact={true} path="/"/>
                    <Route element={<ContactPage/>} exact={true} path="/contact"/>
                    <Route element={<AboutPage/>} exact={true} path="/about"/>
                    <Route element={<PracticeAreasPage/>} exact={true} path="/practice-areas"/>
                    <Route element={<TestimoniesPage/>} exact={true} path="/testimonials"/>
                    <Route element={<NotFoundPage/>} exact={true} path="*"/>
                </Routes>
            </AnimatePresence>
        </ThemeProvider>
    );
}

export default App;
