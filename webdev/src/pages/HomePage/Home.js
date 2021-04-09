import React from "react";
import PageContent from "../../components/PageContent";
import { homeObjOne } from "./Data";

function Home() {
    return (
        <>
            <PageContent {...homeObjOne} />
        </>
    );
}

export default Home;
