using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace Donation.Models
{
    public class MyContext: DbContext
    {
        public MyContext(): base("MyConnection")
        {

        }

        public DbSet<User> users { get; set; }
        public object Users { get; internal set; }
    }
}