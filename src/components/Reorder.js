export const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};


export const reorderAnime = (animes, source, destination) => {
    const current = [...animes[source.droppableId]];
    const next = [...animes[desintation.droppableId]];
    const target = current[source.index];

    if (source.droppableId === destination.droppableId) {
        const reorder = reorder(current, source.index, destination.index);
        return { ...animes , [source.droppableId] : reordered }; 
    }

    current.splice(source.index, 1);
    next.splice(destination.index, 0, target);

    return { ...animes, [source.droppableId]: current, [destination.droppableId]: next };
};

