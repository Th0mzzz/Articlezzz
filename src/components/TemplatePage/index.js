import Banner from "components/Banner";
import TemplateFooter from "components/Footer";
import { Outlet } from "react-router";

export default function TemplatePage() {
    return (
        <main>
            <Banner />
            <Outlet />
        </main>
    )
}