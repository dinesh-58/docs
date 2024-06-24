// import type { SidebarNavStruct } from "@docs-website/types/sidebar-navigation";

const sidebarNav = [
	{ title: "", type: "primary" },
	{ title: "Getting Started", type: "secondary" },
	{ title: "Introduction", filePath: "new-docs/index", type: "inner", level: 0 }, // should be index page for /docs and highlight "introduction" in nav
  { title: "Quick Start Guides", type: "inner", level: 0},
  { title: "React", filePath: "new-docs/quick-start-react", type: "inner", level: 1 },

  { title: "Database" , type: "secondary" },
  { title: "Fundamentals", type: "inner", level: 0 },
  { title: "Connecting", filePath: "new-docs/connect-cluster", type: "inner", level: 1 },
  { title: "Creating a database", filePath: "new-docs/create-database", type: "inner", level: 1 },
  { title: "Writing data", filePath: "new-docs/write-data", type: "inner", level: 1 },
  { title: "Backups", filePath: "new-docs/backup", type: "inner", level: 0 },
  // { title: "Storage", type: "inner", level: 0 },
  // { title: "Partitioning", type: "inner", level: 0 },
  // { title: "Extensions", type: "inner", level: 0 },

  { title: "Platform" , type: "secondary" },
  // { title: "Overview", type: "inner", level: 0 },
  // { title: "Scaling", type: "inner", level: 0 },
  { title: "Edge Functions", filePath: "new-docs/edge-functions", type: "inner", level: 0 },
  { title: "Webhooks", filePath: "new-docs/webhooks", type: "inner", level: 0 },
  { title: "Pub/Sub", filePath: "new-docs/pub-sub", type: "inner", level: 0 },
  { title: "Query Analyzer", filePath: "new-docs/analyzer", type: "inner", level: 0 },
	{ title: "Security and Access Control", filePath: "new-docs/security", type: "inner", level: 0 },
	{ title: "Settings", filePath: "new-docs/settings", type: "inner", level: 0 },

  { title: "Reference" , type: "secondary" },
  { title: "Server-side Commands", type: "inner", filePath: "new-docs/server-side-commands", level: 0 },
  { title: "API Keys", filePath: "new-docs/api-key-commands", type: "inner", level: 1 },
  { title: "Authentication", filePath: "new-docs/auth-commands", type: "inner", level: 1 },
  { title: "Backups", filePath: "new-docs/backup-commands", type: "inner", level: 1 },
  { title: "Cluster", filePath: "new-docs/cluster-commands", type: "inner", level: 1 },
  { title: "Database", filePath: "new-docs/database-commands", type: "inner", level: 1 },
  { title: "General Info", filePath: "new-docs/general-commands", type: "inner", level: 1 },
  { title: "IP", filePath: "new-docs/ip-commands", type: "inner", level: 1 },
  { title: "Logs", filePath: "new-docs/log-commands", type: "inner", level: 1 },
  { title: "Plugins",filePath: "new-docs/plugin-commands", type: "inner", level: 1 },
  { title: "Privileges", filePath: "new-docs/privilege-commands", type: "inner", level: 1 },
  { title: "Pub/Sub", filePath: "new-docs/pub-sub-commands", type: "inner", level: 1 },
  { title: "Query Analyzer", filePath: "new-docs/query-analyzer-commands", type: "inner", level: 1 },
  { title: "Roles", filePath: "new-docs/role-commands", type: "inner", level: 1 },
  { title: "Settings", filePath: "new-docs/settings-commands", type: "inner", level: 1 },
  { title: "User", filePath: "new-docs/user-commands", type: "inner", level: 1 },

  { title: "CLI", filePath: "new-docs/cli-commands", type: "inner", level: 0 },

  { title: "SDKs", type: "inner", level: 0 },
  { title: "C/C++", type: "inner", filePath: "new-docs/sdk-c/getting-started", level: 1 },
	{ title: 'Basic APIs', type: "inner", level: 2 },
	{ filePath: 'new-docs/sdk-c/SQCloudConnect', type: "inner", level: 3 },
	{ filePath: 'new-docs/sdk-c/SQCloudConnectWithString', type: "inner", level: 3 },
	{ filePath: 'new-docs/sdk-c/SQCloudExec', type: "inner", level: 3 },
	{ filePath: 'new-docs/sdk-c/SQCloudExecArray', type: "inner", level: 3 },
	{ filePath: 'new-docs/sdk-c/SQCloudUUID', type: "inner", level: 3 },
	{ filePath: 'new-docs/sdk-c/SQCloudDisconnect', type: "inner", level: 3 },
	{ filePath: 'new-docs/sdk-c/SQCloudConfig', type: "inner", level: 3 },

	{ title: 'Result APIs', type: "inner", level: 2 },
	{ filePath: 'new-docs/sdk-c/SQCloudResultIsOK', type: "inner", level: 3 },
	{ filePath: 'new-docs/sdk-c/SQCloudResultIsError', type: "inner", level: 3 },
	{ filePath: 'new-docs/sdk-c/SQCloudResultType', type: "inner", level: 3 },
	{ filePath: 'new-docs/sdk-c/SQCloudResultLen', type: "inner", level: 3 },
	{ filePath: 'new-docs/sdk-c/SQCloudResultInt32', type: "inner", level: 3 },
	{ filePath: 'new-docs/sdk-c/SQCloudResultInt64', type: "inner", level: 3 },
	{ filePath: 'new-docs/sdk-c/SQCloudResultFloat', type: "inner", level: 3 },
	{ filePath: 'new-docs/sdk-c/SQCloudResultDouble', type: "inner", level: 3 },
	{ filePath: 'new-docs/sdk-c/SQCloudResultFree', type: "inner", level: 3 },
	{ filePath: 'new-docs/sdk-c/SQCloudResultDump', type: "inner", level: 3 },

	{ title: "Rowset APIs", type: "inner", level: 2 },
	{ filePath: 'new-docs/sdk-c/SQCloudRowsetValueType', type: "inner", level: 3 },
	{ filePath: 'new-docs/sdk-c/SQCloudRowsetColumnName', type: "inner", level: 3 },
	{ filePath: 'new-docs/sdk-c/SQCloudRowsetValue', type: "inner", level: 3 },
	{ filePath: 'new-docs/sdk-c/SQCloudRowsetInt32Value', type: "inner", level: 3 },
	{ filePath: 'new-docs/sdk-c/SQCloudRowsetInt64Value', type: "inner", level: 3 },
	{ filePath: 'new-docs/sdk-c/SQCloudRowsetFloatValue', type: "inner", level: 3 },
	{ filePath: 'new-docs/sdk-c/SQCloudRowsetDoubleValue', type: "inner", level: 3 },
	{ filePath: 'new-docs/sdk-c/SQCloudRowsetDump', type: "inner", level: 3 },


	{ title: "Array APIs", type: "inner", level: 2 },
	{ filePath: 'new-docs/sdk-c/SQCloudArrayValueType', type: "inner", level: 3 },
	{ filePath: 'new-docs/sdk-c/SQCloudArrayCount', type: "inner", level: 3 },
	{ filePath: 'new-docs/sdk-c/SQCloudArrayValue', type: "inner", level: 3 },
	{ filePath: 'new-docs/sdk-c/SQCloudArrayInt32Value', type: "inner", level: 3 },
	{ filePath: 'new-docs/sdk-c/SQCloudArrayInt64Value', type: "inner", level: 3 },
	{ filePath: 'new-docs/sdk-c/SQCloudArrayFloatValue', type: "inner", level: 3 },
	{ filePath: 'new-docs/sdk-c/SQCloudArrayDoubleValue', type: "inner", level: 3 },
	{ filePath: 'new-docs/sdk-c/SQCloudArrayDump', type: "inner", level: 3 },

	{ title: "Error APIs", type: "inner", level: 2 },
	{ title: 'SQCloudIsError', filePath: 'new-docs/sdk-c/SQCloudError', type: "inner", level: 3 },
	{ title: 'SQCloudIsSQLiteError', filePath: 'new-docs/sdk-c/SQCloudError', type: "inner", level: 3 },
	{ title: 'SQCloudErrorCode', filePath: 'new-docs/sdk-c/SQCloudError', type: "inner", level: 3 },
	{ title: 'SQCloudExtendedErrorCode', filePath: 'new-docs/sdk-c/SQCloudError', type: "inner", level: 3 },
	{ title: 'SQCloudErrorOffset', filePath: 'new-docs/sdk-c/SQCloudError', type: "inner", level: 3 },
	{ title: 'SQCloudErrorMsg', filePath: 'new-docs/sdk-c/SQCloudError', type: "inner", level: 3 },

	{ title: "VM APIs", type: "inner", level: 2 },
	{ filePath: 'new-docs/sdk-c/SQCloudVMCompile', type: "inner", level: 3 },
	{ filePath: 'new-docs/sdk-c/SQCloudVMStep', type: "inner", level: 3 },
	{ filePath: 'new-docs/sdk-c/SQCloudVMResult', type: "inner", level: 3 },
	{ filePath: 'new-docs/sdk-c/SQCloudVMClose', type: "inner", level: 3 },
	{ filePath: 'new-docs/sdk-c/SQCloudVMErrorMsg', type: "inner", level: 3 },
	{ filePath: 'new-docs/sdk-c/SQCloudVMErrorCode', type: "inner", level: 3 },
	{ filePath: 'new-docs/sdk-c/SQCloudVMIsReadOnly', type: "inner", level: 3 },
	{ filePath: 'new-docs/sdk-c/SQCloudVMIsExplain', type: "inner", level: 3 },
	{ filePath: 'new-docs/sdk-c/SQCloudVMIsFinalized', type: "inner", level: 3 },
	{ filePath: 'new-docs/sdk-c/SQCloudVMBindParameterCount', type: "inner", level: 3 },
	{ filePath: 'new-docs/sdk-c/SQCloudVMBindParameterIndex', type: "inner", level: 3 },
	{ filePath: 'new-docs/sdk-c/SQCloudVMBindParameterName', type: "inner", level: 3 },
	{ filePath: 'new-docs/sdk-c/SQCloudVMColumnCount', type: "inner", level: 3 },
	{ title: 'SQCloudVMBindDouble', filePath: 'new-docs/sdk-c/SQCloudVMBind', type: "inner", level: 3 },
	{ title: 'SQCloudVMBindInt', filePath: 'new-docs/sdk-c/SQCloudVMBind', type: "inner", level: 3 },
	{ title: 'SQCloudVMBindInt64', filePath: 'new-docs/sdk-c/SQCloudVMBind', type: "inner", level: 3 },
	{ title: 'SQCloudVMBindNull', filePath: 'new-docs/sdk-c/SQCloudVMBind', type: "inner", level: 3 },
	{ title: 'SQCloudVMBindText', filePath: 'new-docs/sdk-c/SQCloudVMBind', type: "inner", level: 3 },
	{ title: 'SQCloudVMBindBlob', filePath: 'new-docs/sdk-c/SQCloudVMBind', type: "inner", level: 3 },
	{ title: 'SQCloudVMBindZeroBlob', filePath: 'new-docs/sdk-c/SQCloudVMBind', type: "inner", level: 3 },
	{ title: 'SQCloudVMColumnBlob', filePath: 'new-docs/sdk-c/SQCloudVMColumn', type: "inner", level: 3 },
	{ title: 'SQCloudVMColumnText', filePath: 'new-docs/sdk-c/SQCloudVMColumn', type: "inner", level: 3 },
	{ title: 'SQCloudVMColumnDouble', filePath: 'new-docs/sdk-c/SQCloudVMColumn', type: "inner", level: 3 },
	{ title: 'SQCloudVMColumnInt32', filePath: 'new-docs/sdk-c/SQCloudVMColumn', type: "inner", level: 3 },
	{ title: 'SQCloudVMColumnInt64', filePath: 'new-docs/sdk-c/SQCloudVMColumn', type: "inner", level: 3 },
	{ title: 'SQCloudVMColumnLen', filePath: 'new-docs/sdk-c/SQCloudVMColumn', type: "inner", level: 3 },
	{ title: 'SQCloudVMColumnType', filePath: 'new-docs/sdk-c/SQCloudVMColumn', type: "inner", level: 3 },
	{ filePath: 'new-docs/sdk-c/SQCloudVMLastRowID', type: "inner", level: 3 },
	{ filePath: 'new-docs/sdk-c/SQCloudVMChanges', type: "inner", level: 3 },
	{ filePath: 'new-docs/sdk-c/SQCloudVMTotalChanges', type: "inner", level: 3 },
	{ title: "Blob APIs", type: "inner", level: 2 },
	{ filePath: 'new-docs/sdk-c/SQCloudBlobOpen', type: "inner", level: 3 },
	{ filePath: 'new-docs/sdk-c/SQCloudBlobReOpen', type: "inner", level: 3 },
	{ filePath: 'new-docs/sdk-c/SQCloudBlobClose', type: "inner", level: 3 },
	{ filePath: 'new-docs/sdk-c/SQCloudBlobBytes', type: "inner", level: 3 },
	{ filePath: 'new-docs/sdk-c/SQCloudBlobRead', type: "inner", level: 3 },
	{ filePath: 'new-docs/sdk-c/SQCloudBlobWrite', type: "inner", level: 3 },
	{ title: "Pub/Sub APIs", type: "inner", level: 2 },
	{ filePath: 'new-docs/sdk-c/SQCloudSetPubSubCallback', type: "inner", level: 3 },
	{ filePath: 'new-docs/sdk-c/SQCloudSetPubSubOnly', type: "inner", level: 3 },
	{ title: "Upload/Download APIs", type: "inner", level: 2 },
	{ filePath: 'new-docs/sdk-c/SQCloudUploadDatabase', type: "inner", level: 3 },
	{ filePath: 'new-docs/sdk-c/SQCloudDownloadDatabase', type: "inner", level: 3 },

  { title: "JavaScript", filePath: "new-docs/sdk-js/getting-started", type: "inner", level: 1 },
	{ title: "Modules", filePath: 'new-docs/sdk-js/modules', type: "inner", level: 2 },
	{ title: "Classes", type: "inner", level: 2 },
	{ filePath: 'new-docs/sdk-js/classes/Database', type: "inner", level: 3 },
	{ filePath: 'new-docs/sdk-js/classes/SQLiteCloudConnection', type: "inner", level: 3 },
	{ filePath: 'new-docs/sdk-js/classes/SQLiteCloudError', type: "inner", level: 3 },
	{ filePath: 'new-docs/sdk-js/classes/SQLiteCloudRow', type: "inner", level: 3 },
	{ filePath: 'new-docs/sdk-js/classes/SQLiteCloudRowset', type: "inner", level: 3 },
	{ filePath: 'new-docs/sdk-js/classes/Statement', type: "inner", level: 3 },
	{ title: 'Interfaces', type: "inner", level: 2 },
	{ filePath: 'new-docs/sdk-js/interfaces/SQLCloudRowsetMetadata', type: "inner", level: 3 },
	{ filePath: 'new-docs/sdk-js/interfaces/SQLiteCloudConfig', type: "inner", level: 3 },

	{ title: "Go", filePath: "new-docs/sdk-go/getting-started", type: "inner", level: 1 },
	
	{ title: "PHP", filePath: "new-docs/sdk-php/getting-started", type: "inner", level: 1 },
	{ title: "Methods", filePath: "new-docs/sdk-php/methods", type: "inner", level: 2 },

];

export default sidebarNav
