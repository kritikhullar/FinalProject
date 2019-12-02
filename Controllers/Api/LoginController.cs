using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Donation.Models;
using System.Data.Entity;

namespace Donation.Controllers.Api
{
    public class LoginController : ApiController
    {
        private MyContext context;

        public LoginController()
        {
            context = new MyContext();

        }

        [HttpPost]

        public string Login(User user)
        {
            User element = context.users.FirstOrDefault(u => u.Employee_Name == user.Employee_Name && u.Password == user.Password);
            if (element == null )
            {
                return "Username or Password is incorrect!";
            }
            return "logged";
        }
    }
}
