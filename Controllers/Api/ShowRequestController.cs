using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using User_Donation.Models;

namespace User_Donation.Controllers.Api
{
    public class ShowrequestController : ApiController
    {
        private MyContext context;

        public ShowrequestController()
        {
            context = new MyContext();

        }
        [HttpGet]
       

            public IEnumerable<Request> GetRequests()
            {
                return context.Requests.ToList();
            }
        
       
        [HttpPost]
        public IEnumerable<Donation> RequestsForUser(User user)
        {
            return context.Donations.Where(x => x.user.Id == user.Id);
        }
    }
}
