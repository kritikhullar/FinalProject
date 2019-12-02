using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Data.Entity;
using Donation.Models;

namespace Donation.Controllers.Api
{
    public class RegisterController : ApiController
    {
        private MyContext context;

        public RegisterController()
        {
            context = new MyContext();
        }

        [HttpGet]
        public IEnumerable<User> GetUser()
        {
            return context.users.ToList();
        }

        [HttpPost]
        public string Register(User user)
        {
            int count = context.users.Count();
            User element = context.users.FirstOrDefault(a => a.Employee_Name == user.Employee_Name);
            if(element != null && count != 0)
            {
                return "exist";
            }
            context.users.Add(user);
            context.SaveChanges();
            return "created";
        }
    }
}
