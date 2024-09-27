using System;

namespace PrincipiosSOLID
{
    public class Program
    {
        static void Main(string[] args)
        {
            User user = new User { Name="Jesus", Email="jesus@gmail.com"};
            UserRepository repo = new UserRepository();
            repo.add(user);

            EmailService emailService = new EmailService();
            emailService.sendEmail(user.Email, "Holi", "Crayoli uwu");
        }
    }

    public class User
    {
        public string Name { get; set; }
        public string Email { get; set; }
    }

    public class UserRepository
    {
        public void add(User user)
        {
            // AQUÍ VA EL CÓDIGO PARA GUARDAR AL USUARIO EN UNA BD
            Console.WriteLine($"Usuario {user.Name} guardado en la base de datos");
        }
    }

    public class EmailService
    {
        public void sendEmail(string email, string subject, string body)
        {
            // CÓDIGO PARA ACCEDER AL SMTP Y MANDAR EL MAIL
            Console.WriteLine($"{email} {subject} {body}");
        }
    }

}