using CalculatorApp.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Net.Http.Json;

namespace CalculatorApp.Controllers
{
    public class CalculatorController : Controller
    {
        
       

        public IActionResult Index()
        {
            return View(new Calculatemodel());
        }

        [HttpPost]
        public async Task<IActionResult> index(Calculatemodel model)
        {
           
            return View(model);
        }
    }
}
