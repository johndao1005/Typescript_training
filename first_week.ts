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

// body('Parse_JSON')?['items']

// cr96b_stagingbbbiprojects
// outputs('API_and_Table_Name')?['TableName'],
// body('Get_API_and_Table_Name')?['API'] ,body('Get_query_count')?['queryCount'], length(outputs('Get_Current_Records')?['body/value'])
// outputs('List_rows_2')?['body/value'][add(variables('Rows_Count'),-1)]
//  outputs('Get_Current_Records')?['body/value'][add(variables('Rows_Count'),-1)]['cr96b_itemsid'] 