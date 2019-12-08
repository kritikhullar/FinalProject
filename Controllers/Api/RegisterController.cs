using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using User_Donation.Models;

namespace User_Donation.Controllers.Api
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
                return context.Users.ToList();
            }

            [HttpPost]
            public string Register(User user)
            {
                int count = context.Users.Count();
                User element = context.Users.FirstOrDefault(a => a.Employee_Name == user.Employee_Name);
                if (element != null && count != 0)
                {
                    return "exist";
                }
                context.Users.Add(user);
                context.SaveChanges();
                return "created";
            }
    }
}
