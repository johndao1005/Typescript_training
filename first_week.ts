export class Clock {
  constructor(hour: unknown, minute?: unknown) {
    throw new Error('Remove this statement and implement this function')
  }

  public toString(): unknown {
    throw new Error('Remove this statement and implement this function')
  }

  public plus(minutes: unknown): Clock {
    throw new Error('Remove this statement and implement this function')
  }

  public minus(minutes: unknown): Clock {
    throw new Error('Remove this statement and implement this function')
  }

  public equals(other: unknown): unknown {
    throw new Error('Remove this statement and implement this function')
  }
}

const settings = {
  "API_Table_pair":[
    {
      "API":"TaskSecondaryResources",
      "TableName":"cr96b_stagingbbbitasksecondaryresources"
    },{
      "API":"TaskNotess",
      "TableName":"cr96b_stagingbbbitasknotes"
    },
    {"API":"table_pair"},
    {"API":"table_pair"},
    {"API":"table_pair"},
    {"API":"table_pair"},
    {"API":"table_pair"},
    {"API":"table_pair"},
    {"API":"table_pair"},
    {"API":"table_pair"},
    {"API":"table_pair"},
  ]
} // make API name and staging table name pair

// outputs('Settings')['API_Table_pair'] - get the output from a list
//items('Apply_to_each')?[0]
// cr96b_stagingbbbiprojects
// body('Parse_JSON')?['TableName']