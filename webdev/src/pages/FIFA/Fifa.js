import React from "react";
import PageContent from "../../components/PageContent";
import Input from "../../components/Filter/Input";
import { homeObjOne } from "./Data";

function Fifa() {
    return (
        <>
            <Input />
            <PageContent {...homeObjOne} />
        </>
    );
}

export default Fifa;
