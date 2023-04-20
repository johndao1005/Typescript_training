export class Clock {
  constructor(hour: unknown, minute?: unknown) {
    throw new Error("Remove this statement and implement this function");
  }

  public toString(): unknown {
    throw new Error("Remove this statement and implement this function");
  }

  public plus(minutes: unknown): Clock {
    throw new Error("Remove this statement and implement this function");
  }

  public minus(minutes: unknown): Clock {
    throw new Error("Remove this statement and implement this function");
  }

  public equals(other: unknown): unknown {
    throw new Error("Remove this statement and implement this function");
  }
}

const settings = {
  API_Table_pair: [
    {
      API: "TaskSecondaryResources",
      TableName: "cr96b_stagingbbbitasksecondaryresources",
    },
    {
      API: "TaskNotes",
      TableName: "cr96b_stagingbbbitasknotes",
    },
    { API: "table_pair" },
    { API: "table_pair" },
    { API: "table_pair" },
    { API: "table_pair" },
    { API: "table_pair" },
    { API: "table_pair" },
    { API: "table_pair" },
    { API: "table_pair" },
    { API: "table_pair" },
  ],
}; // make API name and staging table name pair
// outputs('API_and_Table_Names_-_Projects')['TableName']
// outputs('Settings')['API_Table_pair'] - get the output from a list
//items('Apply_to_each')?[0]
const test = `
body('Parse_JSON_')?['items']
`

add(outputs('Get_Current_Records_4')?['body/value'][add(outputs('Get_Rows_Count_2'),-1)]['cr96b_itemsid'], 1)
if( greater(length(outputs('Get_Rows_Count_9')),0) , add(outputs('Get_Current_Records_25')?['body/value'][add(outputs('Get_Rows_Count_9'),-1)]['cr96b_itemsid'], 1),29683000)

// cr96b_stagingbbbiprojects
// outputs('API_and_Table_Name')?['TableName'],
// body('Get_API_and_Table_Name')?['API'] ,body('Get_query_count')?['queryCount'], length(outputs('Get_Current_Records')?['body/value'])
// outputs('List_rows_2')?['body/value'][add(variables('Rows_Count'),-1)]
//  outputs('Get_Current_Records')?['body/value'][add(variables('Rows_Count'),-1)]['cr96b_itemsid'] 

const test2 = {"id":"76784185-d6eb-4ef4-9493-aec05b9092dc",
  "brandColor":"#088142",
  "connectionReferences":{"shared_commondataserviceforapps":{"connection":{"id":"/providers/Microsoft.PowerApps/apis/shared_commondataserviceforapps/connections/shared-commondataser-a96d0c4d-4837-47ee-8802-605ead2b7eae"}}},"connectorDisplayName":"Microsoft Dataverse",
  "icon":"https://connectoricons-prod.azureedge.net/releases/v1.0.1628/1.0.1628.3245/commondataserviceforapps/icon.png",
  "isTrigger":false,"operationName":"Add_a_new_row_-_Resources_4",
  "operationDefinition":{"type":"OpenApiConnection",
  "inputs":{"host":{"connectionName":"shared_commondataserviceforapps",
  "operationId":"CreateRecord",
  "apiId":"/providers/Microsoft.PowerApps/apis/shared_commondataserviceforapps"},"parameters":{
  "entityName":"cr96b_stagingbbbitasks",},"authentication":{"type":"Raw",
  "value":"@json(decodeBase64(triggerOutputs().headers['X-MS-APIM-Tokens']))['$ConnectionKey']"}},"runAfter":{},"metadata":{"operationMetadataId":"87b57b02-4e29-434e-a6e8-d4caccdc3387"}}}