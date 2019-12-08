namespace User_Donation.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class mig1 : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Ngolist",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Ngo_Id = c.String(),
                        Ngo_Location = c.String(),
                        Ngo_Name = c.String(),
                        Mobile_number = c.Double(nullable: false),
                        Email_id = c.String(),
                        Username = c.String(),
                        Password = c.String(),
                        Ngo_Certificate_Photo = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Ngolist");
        }
    }
}
