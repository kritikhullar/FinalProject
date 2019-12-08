using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using User_Donation.Models;

namespace User_Donation.Controllers.Api
{
    public class AcceptRequestController : ApiController
    {
        private MyContext context;
        public AcceptRequestController()
        {
            context = new MyContext();
        }

        [HttpGet]
        public IEnumerable<Donation> GetDonation()
        {
            return context.Donations.ToList();
        }

        [HttpPost]
        public string AcceptRequest(Donation donation)
        {
            Donation element = context.Donations.FirstOrDefault(a => a.Request_Id == donation.Request_Id && a.Request_Title == donation.Request_Title);
            if (element == null)
            {
                return "impossible";
            }
            context.Donations.Add(donation);
            context.SaveChanges();
            return "updated";
        }
    }
}
