using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;


namespace CalculatorApp.Filter.Validationfilter
{
    public class Validationfilter : ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext context)
        {
            if (!context.ModelState.IsValid)
            {
                var errors = context.ModelState.Values.SelectMany(v => v.Errors)
                                                  .Select(e => e.ErrorMessage);
                context.Result = new BadRequestObjectResult(errors);
            }
        }
    }
}
