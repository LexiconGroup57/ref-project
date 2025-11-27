import React, {useState} from 'react';
import {DndContext} from "@dnd-kit/core";
import Draggable from "./Draggable.jsx";
import Droppable from "./Droppable.jsx";
//import {referenceAtom} from "../state-management/atoms.js";
// import {useAtom} from "jotai";
import {useReference} from "../state-management/referenceStore.js";
import {useAddReference, useGetAllReferences} from "../state-management/referenceQueries.js";

const Dndkit = () => {
    const [isDropped, setIsDropped] = useState(false);
    // const [reference2, setReference2] = useAtom(referenceAtom);
    const reference = useReference((state) => state.reference);
    // const resetReference = useReference((state) => state.resetReference);
    const addToReference = useReference((state) => state.addToReference);
    const addReference = useAddReference();
    const item = {word: "Truth"};
    const reference3 = useGetAllReferences();

    return (
        <DndContext onDragEnd={(event) => {
            if(event.over.id === "droppable") {
                setIsDropped(true);
        }}}>
            <div className="dndkit">
            <h1>dnd kit</h1>
                <div>{reference.length > 0 && reference.map(ref => <p>{ref.word}</p>)}</div>
                <button onClick={() => addToReference({word: "Truth"})}>Add truth</button>
                <button onClick={() => addReference.mutate(item) }>Add reference to library</button>
                {reference3.data && reference3.data.map(ref => <p>{ref.word}</p>)}
            <Draggable>
                {isDropped ? undefined : <p>This is the dragged part</p>}
            </Draggable>
            <Droppable>
                <p>{isDropped ? "Landed!" : "This will be the goal"}</p>
            </Droppable>
            </div>
        </DndContext>
    );
};

export default Dndkit;