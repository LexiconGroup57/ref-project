import React from 'react';
import {useDraggable} from "@dnd-kit/core";

const Draggable = (props) => {

    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id: "draggable",
    });
    return (
        <div ref={setNodeRef} {...listeners} {...attributes} style={{transform: `translate3d(${transform?.x}px, ${transform?.y}px, 0)`}}>
            {props.children}
        </div>
    );
};

export default Draggable;