using System.ComponentModel.DataAnnotations;

namespace CalculatorApp.Models
{
    public class Calculatemodel
    {
        [Required]
        public double Num1 { get; set; }

        [Required]
        public double Num2 { get; set; }

        [Required]
        public string MathOption { get; set; }
    }
}
