using System.ComponentModel.DataAnnotations;

namespace CalculatorApp.Models
{
    public class Calculatemodel
    {
        [Key]
        public int Id { get; set; }
       

        [Required]
        public double Num1 { get; set; }

        [Required]
        public double Num2 { get; set; }

        [Required]
        public string MathOption { get; set; }
    }
}
