var currPage = 'begin';

function navigateToDetail() {

    layout = helper.getNextUIState(1);
    butControl.closeDetail = (layout.actionButtonsInfo.midColumn.closeColumn !== null);
    butControl.fullScreenDetail = (layout.actionButtonsInfo.midColumn.fullScreen !== null);
    butControl.exitFullScreenDetail = (layout.actionButtonsInfo.midColumn.exitFullScreen !== null);

    modelAppMenuOptions.setData(butControl);
    modelAppMenuOptions.refresh();
    currPage = 'mid';

    oLayoutMain.setLayout(layout.layout);
}

function closeDetail() {
    layout = helper.getNextUIState(0);
    oLayoutMain.setLayout(layout.layout);

    currPage = 'begin';

}

function fullScreenDetail() {
    oLayoutMain.setLayout(layout.actionButtonsInfo.midColumn.fullScreen);

    layout = helper.getNextUIState(1);
    butControl.closeDetail = (layout.actionButtonsInfo.midColumn.closeColumn !== null);
    butControl.fullScreenDetail = (layout.actionButtonsInfo.midColumn.fullScreen !== null);
    butControl.exitFullScreenDetail = (layout.actionButtonsInfo.midColumn.exitFullScreen !== null);

    modelAppMenuOptions.setData(butControl);
    modelAppMenuOptions.refresh();

}

function exitFullScreenDetail() {
    oLayoutMain.setLayout(layout.actionButtonsInfo.midColumn.exitFullScreen);

    layout = helper.getNextUIState(1);

    butControl.closeDetail = (layout.actionButtonsInfo.midColumn.closeColumn !== null);
    butControl.fullScreenDetail = (layout.actionButtonsInfo.midColumn.fullScreen !== null);
    butControl.exitFullScreenDetail = (layout.actionButtonsInfo.midColumn.exitFullScreen !== null);

    modelAppMenuOptions.setData(butControl);
    modelAppMenuOptions.refresh();

}

function navigateToDetailDetail() {
    layout = helper.getNextUIState(2);

    butControl.closeDetail = (layout.actionButtonsInfo.midColumn.closeColumn !== null);
    butControl.fullScreenDetail = (layout.actionButtonsInfo.midColumn.fullScreen !== null);
    butControl.exitFullScreenDetail = (layout.actionButtonsInfo.midColumn.exitFullScreen !== null);

    butControl.closeDetailDetail = (layout.actionButtonsInfo.endColumn.closeColumn !== null);
    butControl.fullScreenDetailDetail = (layout.actionButtonsInfo.endColumn.fullScreen !== null);
    butControl.exitFullScreenDetailDetail = (layout.actionButtonsInfo.endColumn.exitFullScreen !== null);

    modelAppMenuOptions.setData(butControl);
    modelAppMenuOptions.refresh();

    oLayoutMain.setLayout(layout.layout);

    currPage = 'end';

}

function closeDetailDetail() {
    layout = helper.getNextUIState(1);
    butControl.closeDetail = (layout.actionButtonsInfo.midColumn.closeColumn !== null);
    butControl.fullScreenDetail = (layout.actionButtonsInfo.midColumn.fullScreen !== null);
    butControl.exitFullScreenDetail = (layout.actionButtonsInfo.midColumn.exitFullScreen !== null);

    modelAppMenuOptions.setData(butControl);
    modelAppMenuOptions.refresh();

    oLayoutMain.setLayout(layout.layout);

    currPage = 'mid';

}

function fullScreenDetailDetail() {
    oLayoutMain.setLayout(layout.actionButtonsInfo.endColumn.fullScreen);

    layout = helper.getNextUIState(2);

    butControl.closeDetailDetail = (layout.actionButtonsInfo.endColumn.closeColumn !== null);
    butControl.fullScreenDetailDetail = (layout.actionButtonsInfo.endColumn.fullScreen !== null);
    butControl.exitFullScreenDetailDetail = (layout.actionButtonsInfo.endColumn.exitFullScreen !== null);

    modelAppMenuOptions.setData(butControl);
    modelAppMenuOptions.refresh();

}

function exitFullScreenDetailDetail() {
    oLayoutMain.setLayout(layout.actionButtonsInfo.endColumn.exitFullScreen);

    layout = helper.getNextUIState(2);

    butControl.closeDetailDetail = (layout.actionButtonsInfo.endColumn.closeColumn !== null);
    butControl.fullScreenDetailDetail = (layout.actionButtonsInfo.endColumn.fullScreen !== null);
    butControl.exitFullScreenDetailDetail = (layout.actionButtonsInfo.endColumn.exitFullScreen !== null);

    modelAppMenuOptions.setData(butControl);
    modelAppMenuOptions.refresh();

}
