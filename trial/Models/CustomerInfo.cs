using System;
using Microsoft.Extensions.Hosting;
using System.Net.Sockets;
using System.Xml.Linq;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace trial.Models
{
    public class CustomerInfo
    {
        public string? CustomerID { get; set; }
        public string? CustomerName { get; set; }
        public int? Phone { get; set; }
        public string? Email { get; set; }
        public string? Address { get; set; }
    }


    public class CustomerInfoContext : DbContext
    {
        public DbSet<CustomerInfo> Customers { get; set; }

        public CustomerInfoContext(DbContextOptions options) : base(options)
        {

        }
    }

}