using System;
namespace PatronSingleton
{
    public sealed class Singleton
    {
        private static Singleton _instance = null;
        private static readonly object _lock = new object();
        public string message { get; set; }

        private Singleton()
        {
            message = "Hola desde el singleton";
        }

        public static Singleton Instance 
        {
            get
            {
                lock (_lock)
                {
                    if (_instance == null)
                    {
                        _instance = new Singleton();
                    }
                    return _instance;
                }
            }
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            Singleton instance1 = Singleton.Instance;
            Console.WriteLine(instance1.message);

            Singleton instance2 = Singleton.Instance;
            instance2.message = "HE MODIFICADO EL MENSAJE";
            Console.WriteLine(instance1.message);
        }
    }

}