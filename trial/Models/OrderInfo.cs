using System;
using Microsoft.Extensions.Hosting;
using System.Net.Sockets;
using System.Xml.Linq;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace trial.Models
{
    public class OrderInfo
    {
        public float? OrderNum { get; set; }
        public string? CustomerID { get; set; }
        public string? CustomerName { get; set; }
        public float? AmountDue { get; set; }
        public string? DueDate { get; set; }

        public string? DeliveryStatus { get; set; }

        public string? OrderStatus { get; set; }

        public string? Pattern { get; set; }
        public int? Quantity { get; set; }
        public float? Total { get; set; }
        public float? Price { get; set; }
        public float? TaxPercent { get; set; }
        public float? Tax { get; set; }

        public float? Advance { get; set; }
        public string? AmountPaidx { get; set; }
        public int? Phone { get; set; }
        public string? Email { get; set; }
        public string? Address { get; set; }
        //public string? Address { get; set; }
    }


    public class OrderInfoContext : DbContext
    {
        public DbSet<OrderInfo> Orders { get; set; }

        public OrderInfoContext(DbContextOptions options) : base(options)
        {

        }
    }

}