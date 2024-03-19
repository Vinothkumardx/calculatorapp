
using CalculatorApp.Filter.Validationfilter;
using CalculatorApp.Models;
using Microsoft.AspNetCore.Mvc;

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
        [Validationfilter]
        public async Task<IActionResult> index(Calculatemodel model)
        {

            return View(model);
        }

        [HttpGet]
        public IActionResult Getalldata()/*Getalldata all the data controller */
        {
           
            return View();
        }

       
    }
}
