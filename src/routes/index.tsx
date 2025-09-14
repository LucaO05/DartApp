import {createRouter} from "../router";
import {createFileRoute} from "@tanstack/react-router";

export const Route = createFileRoute("/")({
    component: RootPage,
});

function RootPage() {
    return (
        <h1>
            AHHHHHHHHHHHHHHHHH
        </h1>
    )
}