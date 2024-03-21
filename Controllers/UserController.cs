using CalculatorApp.Models;
using Microsoft.AspNetCore.Mvc;

namespace CalculatorApp.Controllers
{
    public class UserController : Controller
    {
        public IActionResult Register(RegisterRequest model)
        {
            return View(model);
        }

        public IActionResult Login (LoginRequest login)
        {
           
                return View(login);
            
           
        }
    }
}
