using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace WebAPI_Proj.Models
{
    public class TableContext: DbContext
    {
        public TableContext():
            base("TableContext")
        { }

        public DbSet<Table> Tables { get; set; }

        public static TableContext Create()
        {
            return new TableContext();
        }
    }
}