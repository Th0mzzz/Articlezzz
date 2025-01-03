import Button from "components/button";
import { Outlet } from "react-router";
import { FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function TemplatePage() {
    
    return (
        <main>
            <Outlet />
            <Button type="scroll-top" ><FaArrowUp /></Button>
        </main>
    )
}