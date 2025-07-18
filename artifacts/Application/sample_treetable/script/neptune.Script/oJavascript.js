function createTreeTable(){
    var treeData =[{
		"NodeID": 1,
		"HierarchyLevel": 0,
		"Description": "1",
		"ParentNodeID": null,
		"DrillState": "expanded"
	},
	{
		"NodeID": 2,
		"HierarchyLevel": 0,
		"Description": "2",
		"ParentNodeID": null,
		"DrillState": "expanded"
	},
	{
		"NodeID": 3,
		"HierarchyLevel": 0,
		"Description": "3",
		"ParentNodeID": null,
		"DrillState": "expanded"
	},
	{
		"NodeID": 4,
		"HierarchyLevel": 1,
		"Description": "1.1",
		"ParentNodeID": 1,
		"DrillState": "leaf"
	},
	{
		"NodeID": 5,
		"HierarchyLevel": 1,
		"Description": "1.2",
		"ParentNodeID": 1,
		"DrillState": "expanded"
	},
	{
		"NodeID": 6,
		"HierarchyLevel": 2,
		"Description": "1.2.1",
		"ParentNodeID": 5,
		"DrillState": "leaf"
	},
	{
		"NodeID": 7,
		"HierarchyLevel": 2,
		"Description": "1.2.2",
		"ParentNodeID": 5,
		"DrillState": "leaf"
	},
	{
		"NodeID": 8,
		"HierarchyLevel": 1,
		"Description": "2.1",
		"ParentNodeID": 2,
		"DrillState": "leaf"
	},
	{
		"NodeID": 9,
		"HierarchyLevel": 1,
		"Description": "2.2",
		"ParentNodeID": 2,
		"DrillState": "leaf"
	},
	{
		"NodeID": 10,
		"HierarchyLevel": 1,
		"Description": "2.3",
		"ParentNodeID": 2,
		"DrillState": "leaf"
	},
	{
		"NodeID": 11,
		"HierarchyLevel": 1,
		"Description": "3.1",
		"ParentNodeID": 3,
		"DrillState": "expanded"
	},
	{
		"NodeID": 12,
		"HierarchyLevel": 2,
		"Description": "3.1.1",
		"ParentNodeID": 11,
		"DrillState": "expanded"
	},
	{
		"NodeID": 13,
		"HierarchyLevel": 3,
		"Description": "3.1.1.1",
		"ParentNodeID": 12,
		"DrillState": "leaf"
	},
	{
		"NodeID": 14,
		"HierarchyLevel": 3,
		"Description": "3.1.1.2",
		"ParentNodeID": 12,
		"DrillState": "leaf"
	},
	{
		"NodeID": 15,
		"HierarchyLevel": 3,
		"Description": "3.1.1.3",
		"ParentNodeID": 12,
		"DrillState": "leaf"
		},
	{
		"NodeID": 16,
		"HierarchyLevel": 3,
		"Description": "3.1.1.4",
		"ParentNodeID": 12,
		"DrillState": "leaf"
    }];
    
	modeloTreeTable.setData({
	  "children": neptune.Utils.convertFlatToNested(treeData, "NodeID", "ParentNodeID")
	});


}


