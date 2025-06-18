const draggedData = oEvent
    .getParameter("draggedControl")
    .getBindingContext("TableData")
    .getObject();

const droppedData =
    oEvent
        .getParameter("droppedControl")
        .getBindingContext("TreeData")
        ?.getObject() || modelTreeData.getData();

function findParentById(tree, targetId) {
    function search(node) {
        if (!node.children) {
            return;
        }

        for (const child of node.children) {
            if (child.id === targetId) {
                return node;
            }

            const result = search(child);
            if (result) {
                return result;
            }
        }

        return;
    }
    return search(tree);
}

function insertRelativeToId(tree, targetId, newNode, position = 'After') {
    const parent = findParentById(tree, targetId);
    if (!parent || !parent.children) {
        return false;
    }

    const index = parent.children.findIndex(child => child.id === targetId);
    if (index === -1) return false;

    const insertIndex = position === 'Before' ? index : index + 1;
    parent.children.splice(insertIndex, 0, newNode);

    return true;
}

const dropPosition = oEvent.getParameter('dropPosition');

const copy = { ...structuredClone(draggedData), children: [] };
if (dropPosition === "On") {
    droppedData.children.push(copy);
} else {
    insertRelativeToId(modelTreeData.getData(), droppedData.id, copy, dropPosition);
}

modelTableData.setData(modelTableData.getData().filter(data => data !== draggedData));

modelTableData.refresh();
modelTreeData.refresh();

TreeTable.expandToLevel(99);
debugger;
