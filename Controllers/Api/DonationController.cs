using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using User_Donation.Models;

namespace User_Donation.Controllers.Api
{
    public class DonationController : ApiController
    {
        private MyContext context;

        public DonationController()
        {
            context = new MyContext();

        }
       
       
        [HttpGet]
        public object GetDonations()
        {
            var obj = from d in context.Donations.ToList()
                      group d by new { d.Request_Id } into g
                      select new { g.Key.Request_Id, V = g.Sum(x => x.Number_of_items_Donated) };

            return obj;
        }

        

    }
}
