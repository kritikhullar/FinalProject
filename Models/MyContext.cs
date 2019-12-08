namespace User_Donation.Models
{
    using System;
    using System.Data.Entity;
    using System.Linq;

    public class MyContext : DbContext
    {
        public MyContext()
            : base("name=MyContext")
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Ngo> Ngos { get; set; }
        public DbSet<Request>Requests { get; set; }
        // Add a DbSet for each entity type that you want to include in your model. For more information 
        // on configuring and using a Code First model, see http://go.microsoft.com/fwlink/?LinkId=390109.

        // public virtual DbSet<MyEntity> MyEntities { get; set; }
        public DbSet<Donation> Donations { get; set; }
    }

    //public class MyEntity
    //{
    //    public int Id { get; set; }
    //    public string Name { get; set; }
    //}
}