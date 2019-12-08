using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using User_Donation.Models;

namespace User_Donation.Controllers.Api
{
    public class Login_UserController : ApiController
    {
        
            private MyContext context;

            public Login_UserController()
            {
                context = new MyContext();

            }

            [HttpPost]

            public string[] Login(User user)
            {
                User element = context.Users.FirstOrDefault(u => u.Email_id == user.Email_id && u.Password == user.Password);
                if (element == null)
                {
                    string[] list= new string[10];
                    list.Append("Username or Password is incorrect!!");
                    return list;
                }
            string[] item = new string[5];
            item.Append(element.Employee_Name);
            item.Append(element.Employee_Photo);
            return item;
            }
        
    }
}
