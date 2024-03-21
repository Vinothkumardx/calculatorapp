using System.ComponentModel.DataAnnotations;

namespace CalculatorApp.Models
{
    public class Usermodel
    {


        [Key]

        public int Id { get; set; }

        [Required(ErrorMessage = "Please Enter username")]
        [Display(Name = "Please Enter username")]
        public string Username { get; set; }

        [Required(ErrorMessage = "Please Enter Password")]
        [Display(Name = "Please Enter Password")]
        [StringLength(10, MinimumLength = 4, ErrorMessage = "Password must be exactly 4 characters long.")]
        [RegularExpression(@"^[a-zA-Z0-9]*$", ErrorMessage = "Password must contain only letters and numbers.")]

        public string Password { get; set; }

        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
    }

    public class LoginRequest
    {
        public string Username { get; set; }
        public string Password { get; set; }
    }

    public class RegisterRequest
    {
        public string Username { get; set; }
        public string Password { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }

        public Usermodel ToUser()
        {
            return new Usermodel
            {
                Username = Username,
                FirstName = FirstName,
                LastName = LastName,
                Email = Email
            };
        }

    }
}
