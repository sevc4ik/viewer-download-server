export const getSqlQuery = (client) => {  
  let sql = "select * from versions";
  return client ? sql + ` WHERE client = '${client}'` : sql + ` WHERE IFNULL(client,'') = ''`
}

