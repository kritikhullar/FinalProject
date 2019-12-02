namespace Donation.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class migrate : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Users", "Date_of_Birth", c => c.DateTime());
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Users", "Date_of_Birth", c => c.String());
        }
    }
}
