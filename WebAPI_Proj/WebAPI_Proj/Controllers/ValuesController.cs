using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using WebAPI_Proj.Models;

namespace WebAPI_Proj.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ValuesController : ApiController
    {
        
        // GET api/values
        public IEnumerable<Table> GetTables()
        {
            using (TableContext db = new TableContext())
            {
                IEnumerable<Table> tables = db.Tables.ToList();


                return tables;
            }
        }

        // GET api/values/5
        public Table Get(int id)
        {
            using (TableContext db = new TableContext())
            {
                Table table = db.Tables.Find(id);
                if (table != null)
                    return table;
                else return null;
            }
        }

        // POST api/values
        [HttpPost]
        public void AddTable(Table value)
        {
            using (TableContext db = new TableContext())
            {
                Table table = db.Tables.Find(value.Id);
                if (table == null)
                {
                    db.Tables.Add(value);
                    db.SaveChanges();
                }
            }
        }

        // PUT api/values/5
        [HttpPut]
        public void EditTable(Table value)
        {
            using (TableContext db = new TableContext())
            {
                Table table = db.Tables.Find(value.Id);
                table.Free = value.Free;
                db.Entry(table).State = System.Data.Entity.EntityState.Modified;
                db.SaveChanges();
            }
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
            using (TableContext db = new TableContext())
            {
                Table table = db.Tables.Find(id);
                if (table != null)
                {
                    db.Tables.Remove(table);
                }
            }
        }
    }
}
