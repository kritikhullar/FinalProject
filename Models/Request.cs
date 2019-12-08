using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace User_Donation.Models
{
    [Table("Requestslist")]

    public class Request
    {
        [Key]
        public int RequestId { get; set; }
        public string Request_Title { get; set; }
        public string Ngo_Name { get; set; }
        public int Number_of_items_Required { get; set; }
        public string category { get; set; }
        public int Ngo_id { get; set; }
        public Ngo ngos { get; set; }


    }
}