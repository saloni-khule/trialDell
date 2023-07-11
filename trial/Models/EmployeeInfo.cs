using System;
using Microsoft.Extensions.Hosting;
using System.Net.Sockets;
using System.Xml.Linq;
using Microsoft.EntityFrameworkCore;

namespace trial.Models
{
    public class EmployeeInfo
    {
        public string? EmployeeID { get; set; }
        public string? Name { get; set; }
        public string? Data { get; set; }
    }


    public class InfoContext : DbContext
    {
        public DbSet<EmployeeInfo> Employees { get; set; }

        public InfoContext(DbContextOptions options) : base(options)
        {

        }
    }

}

//$host = "localhost";
//$port = 3306;
//$socket = "";
//$user = "root";
//$password = "";
//$dbname = "siriusx";

//$con = new mysqli($host, $user, $password, $dbname, $port, $socket)

//    or die('Could not connect to the database server' . mysqli_connect_error());

////$con->close();